import styled from 'styled-components/native';
import Button from '~/components/Button';

export const Container = styled.View`
  background-color: #fff;
  border-radius: 4px;
  margin-bottom: 20px;
`;

export const Banner = styled.Image`
  width: 100%;
  height: 150px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

export const Content = styled.View`
  padding: 20px;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 18px;
  color: #333;
  margin-bottom: 10px;
`;

export const Info = styled.View`
  flex-direction: row;
  margin-bottom: 10px;
`;

export const InfoText = styled.Text`
  margin-left: 10px;
  font-size: 13px;
  color: #999;
`;

export const SubscribeButton = styled(Button)`
  margin-top: 5px;
`;
