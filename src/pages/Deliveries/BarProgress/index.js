import React from 'react';
import { View } from 'react-native';

import {
  Container,
  Ball,
  Line,
  ProgressContainer,
  Descriptions,
  Description,
} from './styles';

export default function BarProgress({ status }) {
  return (
    <Container>
      <ProgressContainer>
        <Ball
          marked={
            status === 'PENDENTE' ||
            status === 'RETIRADA' ||
            status === 'ENTREGUE'
          }
        />
        <Line />
        <Ball marked={status === 'ENTREGUE' || status === 'RETIRADA'} />
        <Line />
        <Ball marked={status === 'ENTREGUE'} />
      </ProgressContainer>
      <Descriptions>
        <View>
          <Description>Aguardando</Description>
          <Description>Retirada</Description>
        </View>
        <Description>Retirada</Description>
        <Description>Entregue</Description>
      </Descriptions>
    </Container>
  );
}
