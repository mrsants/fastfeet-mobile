import React, { useState } from 'react';
import { Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { api } from '~/services';
import { Background, Container, Content, Form, SubmitButton, TextArea } from './styles';


export default function CreateNewProblem() {

  const [loading, setLoading] = useState(false);

  const route = useRoute();
  const navigation = useNavigation();
  const [description, setDescription] = useState();
  const { delivery_id } = route.params;

  async function handleUpdate() {
    setLoading(true);
    try {
      await api.post(`deliverymans/${delivery_id}/problems`, {
        description,
      });

      Alert.alert('Problema cadastrado com sucesso!');

      navigation.navigate('Entregas');
    } catch (err) {
      Alert.alert(err.response.data.error);
    }

    setLoading(false);
    reset();
  }

  return (
    <Container>
      <Background />

      <Content>
        <Form>
          <TextArea
            name="description"
            placeholder="Inclua aqui o problema que ocorreu na entrega."
            multiline
            style={{
              textAlignVertical: 'top',
            }}
            onChangeText={setDescription}
          />
        </Form>

        <SubmitButton
          loading={loading}
          onPress={handleUpdate}
        >
          Enviar
        </SubmitButton>
      </Content>
    </Container>
  );
}
