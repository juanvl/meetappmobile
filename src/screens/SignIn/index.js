import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { signInRequest } from '~/store/modules/auth/actions';

import Background from '~/components/Background';
import logo from '~/assets/logo.png';
import * as S from '~/styles/Sign';

const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const pwdRef = useRef();
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleLogin() {
    dispatch(signInRequest(email, password));
  }

  return (
    <Background>
      <S.Form>
        <S.Logo source={logo} />

        <S.FormInput
          placeholder="Digite seu e-mail"
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
          onChangeText={setEmail}
          value={email}
          onSubmitEditing={() => pwdRef.current.focus()}
          returnKeyType="next"
        />
        <S.FormInput
          placeholder="Sua senha secreta"
          secureTextEntry
          autoCorrect={false}
          autoCapitalize="none"
          onChangeText={setPassword}
          value={password}
          ref={pwdRef}
          returnKeyType="send"
          onSubmitEditing={handleLogin}
        />

        <S.SubmitButton loading={loading} onPress={handleLogin}>
          Entrar
        </S.SubmitButton>

        <S.SignLink onPress={() => navigation.navigate('SignUp')}>
          <S.SignLinkText>Criar conta grátis</S.SignLinkText>
        </S.SignLink>
      </S.Form>
    </Background>
  );
};

SignIn.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default SignIn;
