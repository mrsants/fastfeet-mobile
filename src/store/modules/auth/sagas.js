import { Alert } from 'react-native';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { format, parseISO } from 'date-fns';
import { signFailure, signInSuccess } from './actions';
import { api } from '~/services';

export function* signIn({ payload }) {
  try {
    const { id } = payload;


    const response = yield call(api.get, `deliverymans/${Number(id)}`);

    yield put(
      signInSuccess(id, {
        name: response.data.name,
        email: response.data.email,
        created_at: format(parseISO(response.data.created_at), 'dd/MM/yyyy'),
        avatar: response.data.avatar,
      })
    );
  } catch (err) {
    Alert.alert(
      'Falha na autenticação',
      'Houve um erro ao entrar no sistema, verifique seus dados'
    );
    yield put(signFailure());
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
