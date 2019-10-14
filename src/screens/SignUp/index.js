import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { signUpRequest } from '~/store/modules/auth/actions';

import Background from '~/components/Background';
import logo from '~/assets/logo.png';
import * as S from '~/styles/Sign';

const SignUp = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailRef = useRef();
  const pwdRef = useRef();
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSignUp() {
    dispatch(signUpRequest(name, email, password));
  }

  return (
    <Background>
      <S.Form>
        <S.Logo source={logo} />

        <S.FormInput
          placeholder="Nome completo"
          autoCorrect={false}
          onChangeText={setName}
          value={name}
          onSubmitEditing={() => emailRef.current.focus()}
          returnKeyType="next"
        />
        <S.FormInput
          placeholder="Digite seu e-mail"
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
          onChangeText={setEmail}
          value={email}
          ref={emailRef}
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
          onSubmitEditing={handleSignUp}
        />

        <S.SubmitButton loading={loading} onPress={handleSignUp}>
          Criar conta
        </S.SubmitButton>

        <S.SignLink onPress={() => navigation.navigate('SignIn')}>
          <S.SignLinkText>Já tenho conta</S.SignLinkText>
        </S.SignLink>
      </S.Form>
    </Background>
  );
};

SignUp.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default SignUp;
