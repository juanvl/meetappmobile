import { Alert } from 'react-native';
import { all, put, call, takeLatest } from 'redux-saga/effects';
import api from '~/services/api';

import { signInSuccess, signUpSuccess, signFailure } from './actions';

export function* signInRequest({ payload }) {
  try {
    const { email, password } = payload;

    const res = yield call(api.post, 'sessions', { email, password });
    const { user, token } = res.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(user, token));
  } catch (error) {
    Alert.alert('Erro', 'Falha na autenticação :( Verifique seus dados!');
    yield put(signFailure());
  }
}

export function* signUpRequest({ payload }) {
  try {
    const { name, email, password } = payload;

    const res = yield call(api.post, 'users', {
      name,
      email,
      password,
    });

    Alert.alert('Sucesso', 'Sua conta foi criada :)');

    yield put(signUpSuccess(res.data));
  } catch (error) {
    Alert.alert(
      'Erro',
      'Algo deu errado :( Verifique os dados e tente novamente'
    );
    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signInRequest),
  takeLatest('@auth/SIGN_UP_REQUEST', signUpRequest),
  takeLatest('persist/REHYDRATE', setToken),
]);
