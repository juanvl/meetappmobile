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
