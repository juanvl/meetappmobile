import styled from 'styled-components/native';
import Button from '~/components/Button';
import Input from '~/components/Input';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Form = styled.View`
  padding: 20px;
`;

export const FormInput = styled(Input)`
  margin-bottom: 10px;
`;

export const Separator = styled.View`
  background-color: rgba(255, 255, 255, 0.1);
  height: 1px;
  margin: 20px 0;
`;

export const SubmitButton = styled(Button)`
  margin: 5px 0 15px;
`;

export const LogoutButton = styled(Button).attrs({
  bgColor: '#D44059',
  fontSize: '16px',
})``;
