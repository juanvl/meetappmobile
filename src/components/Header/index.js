import React from 'react';

import logo from '~/assets/logo.png';
import * as S from './styles';

export default function Header() {
  return (
    <>
      <S.Notch />
      <S.Container>
        <S.Logo source={logo} />
      </S.Container>
    </>
  );
}
