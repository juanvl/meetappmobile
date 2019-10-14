import { Alert } from 'react-native';
import { all, takeLatest, call, put } from 'redux-saga/effects';
import { updateProfileSuccess } from './actions';
import api from '~/services/api';

export function* updateProfileRequest({ payload }) {
  try {
    const { name, email, ...rest } = payload.data;
    const profile = { name, email, ...(rest.currentPassword ? rest : {}) };

    const res = yield call(api.put, 'users', profile);

    yield put(updateProfileSuccess(res.data));

    Alert.alert('Sucesso', 'Perfil atualizado!');
  } catch (error) {
    Alert.alert('Erro', 'Verifique seus dados');
  }
}

export default all([
  takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfileRequest),
]);
