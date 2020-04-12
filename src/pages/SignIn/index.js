/* eslint-disable no-use-before-define */
import React, { useState } from 'react';
import { Image, StatusBar, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import logo from '../../assets/logo.png';
import Input from '../../components/Input';
import { signInRequest } from '../../store/modules/auth/actions';
import { Container, IForm, SubmitButton } from './styles';

export default function SignIn() {
  const dispatch = useDispatch();

  const [idRegister, setIdRegister] = useState('');

  function handleSubmit() {
    dispatch(signInRequest(idRegister));
  }

  return (
    <Container>
      <StatusBar backgroundColor={styles.backgroundColor} />
      <Image source={logo} />
      <IForm>
        <Input
          name="id"
          keyboardType="number-pad"
          placeholder="Informe seu ID no cadastro"
          autoCorrect={false}
          returnKeyType="send"
          autoCapitalize="none"
          onSubmitEditing={handleSubmit}
          value={idRegister}
          onChangeText={setIdRegister}
        />
        <SubmitButton onPress={handleSubmit}>Entrar no sistema</SubmitButton>
      </IForm>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#7d40e7',
  },
});
