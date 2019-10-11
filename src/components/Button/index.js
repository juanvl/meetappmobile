import React from 'react';

import * as S from './styles';

export default function Button(props) {
  return (
    <S.Btn {...props}>
      <S.BtnText>{props.children}</S.BtnText>
    </S.Btn>
  );
}
