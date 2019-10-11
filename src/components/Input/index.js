import React, { forwardRef } from 'react';

import * as S from './styles';

function Input(props, ref) {
  return <S.TInput {...props} ref={ref} />;
}

export default forwardRef(Input);
