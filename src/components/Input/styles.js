import styled from 'styled-components/native';

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: 'rgba(255, 255, 255, 0.5)',
})`
  background: rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  height: 50px;
  align-self: stretch;
  font-size: 18px;
  color: #fff;
  padding: 15px 20px;
`;
