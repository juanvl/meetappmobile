import styled from 'styled-components/native';
import { Platform } from 'react-native';
import Input from '~/components/Input';
import Button from '~/components/Button';

export const Form = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
`;

export const Logo = styled.Image`
  margin-bottom: 50px;
`;

export const FormInput = styled(Input)`
  margin-bottom: 10px;
`;

export const SubmitButton = styled(Button)`
  margin: 5px 0 20px;
`;

export const SignLink = styled.TouchableOpacity``;

export const SignLinkText = styled.Text`
  color: rgba(255, 255, 255, 0.6);
  font-weight: bold;
  font-size: 16px;
`;
