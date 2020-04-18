import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { StatusBar, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';

import { Background, Card, Container, Content, Label, Menu, Option, OptionTitle, Status, Title, TitleContainer, Value } from './styles';


export default function OrderDetails() {
  const auth = useSelector(state => state.auth);
  const navigation = useNavigation();
  const route = useRoute();
  const { delivery } = route.params;

  async function handleNewProblem() {
    async function loadNewProblem() {
      try {
        await api.put(`/deliveryman/${auth.id}/delivery/${delivery.id}`, {
          start_date: new Date(),
        });

        navigation.navigate('Entregas');
      } catch (err) {
        Alert.alert('Horário de retirda inválida.');
      }
    }

    Alert.alert(
      'Confirmação de retirada',
      'Confirma que deseja realizar a retirada desta encomenda?',
      [
        {
          text: 'Cancelar',
          style: 'destructive',
        },
        {
          text: 'Confirmar',
          onPress: loadNewProblem,
        },
      ],
      {
        cancelable: false,
      }
    );
  }

  return (
    <Container>
      <StatusBar backgroundColor="#7D40E7" barStyle="light-content" />
      <Background />
      <Content>
        <Card>
          <TitleContainer>
            <Icon name="local-shipping" color="#7D40E7" size={20} />
            <Title>Informações da entrega</Title>
          </TitleContainer>
          <Label>DESTINATÁRIO</Label>
          <Value>{delivery.recipients.name}</Value>
          <Label>ENDEREÇO DE ENTREGA</Label>
          <Value>
            {delivery.recipients.street}, {delivery.recipients.number},{' '}
            {delivery.recipients.city} - {delivery.recipients.state},{' '}
            {delivery.recipients.zip_code}
          </Value>
          <Label>PRODUTO</Label>
          <Value>{delivery.product}</Value>
        </Card>

        <Card>
          <TitleContainer>
            <Icon name="event" color="#7D40E7" size={20} />
            <Title>Situação da entrega</Title>
          </TitleContainer>
          <Label>STATUS</Label>
          <Status>{delivery.status}</Status>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <View>
              <Label>DATA DE RETIRADA</Label>
              <Value>{delivery.start_date_formated}</Value>
            </View>
            <View>
              <Label>DATA DE ENTREGA</Label>
              <Value>{delivery.end_date_formated}</Value>
            </View>
          </View>
        </Card>

        <Menu>
          <Option
            onPress={() =>
              navigation.navigate('Problem', { delivery_id: delivery.id })
            }
          >
            <Icon name="highlight-off" color="#E74040" size={20} />
            <OptionTitle>Informar Problema</OptionTitle>
          </Option>

          <Option
            onPress={() =>
              navigation.navigate('ShowProblem', { delivery_id: delivery.id })
            }
          >
            <Icon name="info-outline" color="#E7BA40" size={20} />
            <OptionTitle>Visualizar Problemas</OptionTitle>
          </Option>
          
          {delivery.status === 'PENDENTE' ? (
            <Option onPress={handleNewProblem}>
              <Icon name="local-shipping" color="#7D40E7" size={20} />
              <OptionTitle>Realizar Retirada</OptionTitle>
            </Option>
          ) : (
              <Option
                onPress={() =>
                  navigation.navigate('OrderConfirmation', {
                    delivery_id: delivery.id,
                  })
                }
              >
                <Icon name="check-circle" color="#7D40E7" size={20} />
                <OptionTitle>Confirmar Entrega</OptionTitle>
              </Option>
            )}
        </Menu>
      </Content>
    </Container>
  );
}
