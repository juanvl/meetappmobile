import React, { useState, useRef } from 'react';

import logo from '~/assets/logo.png';
import Background from '~/components/Background';

import * as S from './styles';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const pwdRef = useRef();

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
        />

        <S.SubmitButton>Entrar</S.SubmitButton>

        <S.SignLink>
          <S.SignLinkText>Criar conta grátis</S.SignLinkText>
        </S.SignLink>
      </S.Form>
    </Background>
  );
};

export default SignIn;
