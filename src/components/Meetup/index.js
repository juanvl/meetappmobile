import React from 'react';

import * as S from './styles';

export default function Meetup({ data }) {
  return (
    <S.Container>
      <S.Banner source={{ uri: data.file.url }} />
      <S.Title>{data.title}</S.Title>
      <S.Date>{data.date}</S.Date>
      <S.Location>{data.location}</S.Location>
      <S.Owner>{data.User.name}</S.Owner>
      <S.SubscribeButton>Realizar inscrição</S.SubscribeButton>
    </S.Container>
  );
}
