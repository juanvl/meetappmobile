import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Btn = styled(RectButton)`
  background-color: ${props => props.bgColor || '#f94d6a'};
  border-radius: 4px;
  align-self: stretch;
  padding: 12px 0;
  align-items: center;
`;

export const BtnText = styled.Text`
  font-size: ${props => props.fontSize || '18px'};
  font-weight: bold;
  color: #fff;
`;
