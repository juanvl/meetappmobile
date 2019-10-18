import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const DateNavigation = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 30px 0 10px;
`;

export const DateText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  margin: 0 15px;
`;

export const DatePicker = styled.View`
  background-color: #fff;
  margin: 20px;
`;

export const Loading = styled.View`
  margin: auto;
`;

export const Meetups = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 20 },
})``;

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
