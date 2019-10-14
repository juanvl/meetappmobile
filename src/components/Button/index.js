import React from 'react';
import { ActivityIndicator } from 'react-native';

import * as S from './styles';

export default function Button(props) {
  return (
    <S.Btn {...props}>
      {props.loading ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <S.BtnText>{props.children}</S.BtnText>
      )}
    </S.Btn>
  );
}
