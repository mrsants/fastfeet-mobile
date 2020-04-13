import { Alert } from 'react-native';
import { isNullOrUndefined } from 'util';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import { signSuccess, signFailure } from './actions';
import { api } from '../../../services';

export function* signIn({ payload }) {
  try {
    const { id } = payload;

    const response = yield call(api.get, `deliverymans/${id}`);

    if (isNullOrUndefined(response.data)) {
      Alert.alert(
        'Falha na autenticação',
        'Houve um erro ao entrar no sistema, verifique seus dados'
      );
      yield put(signFailure());
      return;
    }
    yield put(signSuccess(response.data));
  } catch (err) {
    Alert.alert(
      'Falha na autenticação',
      'Houve um erro ao entrar no sistema, verifique seus dados'
    );
    yield put(signFailure());
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
