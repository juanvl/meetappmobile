import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import * as S from './styles';

export default function Meetup({ data }) {
  function handleSubscribe() {}

  return (
    <S.Container>
      <S.Banner source={{ uri: data.file.url }} />

      <S.Content>
        <S.Title>{data.title}</S.Title>

        <S.Info>
          <Icon name="event" size={14} color="#999" />
          <S.InfoText>{data.date}</S.InfoText>
        </S.Info>
        <S.Info>
          <Icon name="place" size={14} color="#999" />
          <S.InfoText>{data.location}</S.InfoText>
        </S.Info>
        <S.Info>
          <Icon name="person" size={14} color="#999" />
          <S.InfoText>{data.User.name}</S.InfoText>
        </S.Info>

        <S.SubscribeButton onPress={handleSubscribe}>
          Realizar inscrição
        </S.SubscribeButton>
      </S.Content>
    </S.Container>
  );
}
