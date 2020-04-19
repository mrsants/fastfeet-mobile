import React, { useRef, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';
import { api } from '~/services';
import { Background, ButtonStyled, Camera, CameraWrapper, Container, Content, TakePictureButton } from './styles';

export default function OrderConfirmation() {
  const auth = useSelector(state => state.auth);
  const navigation = useNavigation();
  const route = useRoute();
  const { delivery_id} = route.params;
  let cameraRef = useRef(null);
  const [pictureUri, setPictureUri] = useState('');

  async function handleSubmit() {

    const dataFile = new FormData();
    dataFile.append('photos', {
      type: 'image/jpg',
      uri: pictureUri,
      name: 'assignature.jpg',
    });

    const pictureResponse = await api.post('photos', dataFile);
    await api.put(
      `order-delivery/${delivery_id}/deliverymans/${auth.id}/confirmation`,
      {
        signature_id: parseInt(pictureResponse.data.id),
      }
    );
    navigation.navigate('Entregas');
  }

  async function handletakePicture() {
    if (cameraRef) {
      const options = { quality: 0.5, base64: true };
      const data = await cameraRef.current.takePictureAsync(options);
      await setPictureUri(data.uri);
    }
  }

  return (
    <Container>
      <Background />
      <Content>
        {pictureUri ? (
          <CameraWrapper>
            <Image source={{ uri: pictureUri }} style={{ height: '100%' }} />
          </CameraWrapper>
        ) : (
          <CameraWrapper>
            <Camera ref={cameraRef} type="back" captureAudio={false} />
            <TakePictureButton onPress={handletakePicture}>
              <Icon name="photo-camera" color="#fff" size={30} />
            </TakePictureButton>
          </CameraWrapper>
        )}
        <ButtonStyled onPress={handleSubmit} loading={false}>
          Enviar
        </ButtonStyled>
      </Content>
    </Container>
  );
}
