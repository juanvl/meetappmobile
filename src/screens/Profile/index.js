import React from 'react';
import { useDispatch } from 'react-redux';

import * as S from './styles';
import { signOut } from '~/store/modules/auth/actions';

const Profile = () => {
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <S.Container>
      <S.LogoutButton onPress={handleLogout}>Sair</S.LogoutButton>
    </S.Container>
  );
};

export default Profile;
