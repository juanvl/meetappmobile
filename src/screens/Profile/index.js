import React, { useState, useRef } from 'react';
import { Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';

import { updateProfileRequest } from '~/store/modules/user/actions';
import { signOut } from '~/store/modules/auth/actions';
import Background from '~/components/Background';
import * as S from './styles';

const schema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string()
    .email()
    .required(),
  currentPassword: Yup.string(),
  password: Yup.string(),
  confirmPassword: Yup.string(),
});

const Profile = () => {
  const profile = useSelector(state => state.user.profile);

  const [name, setName] = useState(profile.name);
  const [email, setEmail] = useState(profile.email);
  const [currentPassword, setCurrentPassword] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const emailRef = useRef();
  const currentPwdRef = useRef();
  const pwdRef = useRef();
  const confirmPwdRef = useRef();

  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(signOut());
  }

  async function handleSubmit() {
    const data = {
      name,
      email,
      currentPassword,
      password,
      confirmPassword,
    };

    if (!(await schema.isValid(data))) {
      Alert.alert(
        'Ops... Algo deu errado :(',
        'Verifique os dados e tente novamente'
      );
      return;
    }

    dispatch(updateProfileRequest(data));

    setCurrentPassword('');
    setPassword('');
    setConfirmPassword('');
  }

  return (
    <Background>
      <S.Container>
        <S.Form>
          <S.FormInput
            placeholder="Seu nome completo"
            autoCorrect={false}
            onChangeText={setName}
            value={name}
            onSubmitEditing={() => emailRef.current.focus()}
            returnKeyType="next"
          />
          <S.FormInput
            placeholder="Seu e-mail"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={setEmail}
            value={email}
            onSubmitEditing={() => currentPwdRef.current.focus()}
            returnKeyType="next"
          />

          <S.Separator />

          <S.FormInput
            placeholder="Sua senha atual"
            secureTextEntry
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={setCurrentPassword}
            value={currentPassword}
            ref={currentPwdRef}
            returnKeyType="next"
            onSubmitEditing={() => pwdRef.current.focus()}
          />

          <S.FormInput
            placeholder="Sua nova senha"
            secureTextEntry
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={setPassword}
            value={password}
            ref={pwdRef}
            returnKeyType="next"
            onSubmitEditing={() => confirmPwdRef.current.focus()}
          />

          <S.FormInput
            placeholder="Confirme sua nova senha"
            secureTextEntry
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={setConfirmPassword}
            value={confirmPassword}
            ref={confirmPwdRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
          />

          <S.SubmitButton onPress={handleSubmit}>Salvar</S.SubmitButton>
          <S.LogoutButton onPress={handleLogout}>
            Sair do Meetapp
          </S.LogoutButton>
        </S.Form>
      </S.Container>
    </Background>
  );
};

export default Profile;
