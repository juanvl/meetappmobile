import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Meetups = styled.FlatList`
  padding: 20px;
`;

export const Empty = styled.View`
  padding: 0 30px;
  margin: auto;
  align-items: center;
  justify-content: center;
`;

export const SadFace = styled.Text`
  font-size: 100px;
  color: #bbb;
`;

export const EmptyMsg = styled.Text`
  text-align: center;
  font-size: 18px;
  color: #bbb;
  margin-top: 30px;
`;
