import React from 'react';
import { Text } from 'react-native';
import { Container, Avatar, Label } from './styles';

export default function Dashboard() {
  return (
    <Container>
      <Avatar>
        <Text>GA</Text>
      </Avatar>
      <Label>Bem vindo de volta,</Label>
    </Container>
  );
}
