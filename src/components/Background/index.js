import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import Header from '~/components/Header';
import * as S from './styles';

export default function Background({ children }) {
  const signed = useSelector(state => state.auth.signed);

  return (
    <S.Container>
      {signed && <Header />}
      {children}
    </S.Container>
  );
}

Background.propTypes = {
  children: PropTypes.element.isRequired,
};
