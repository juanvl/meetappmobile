import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Icon from 'react-native-vector-icons/MaterialIcons';

import * as S from './styles';

export default function Meetup({ data, onActionButtonPressed, subscribed }) {
  const dateFormatted = useMemo(() => {
    return format(parseISO(data.date), "dd 'de' MMMM', às 'HH'h'", {
      locale: pt,
    });
  }, [data.date]);

  return (
    <S.Container>
      <S.Banner source={{ uri: data.file.url }} />

      <S.Content>
        <S.Title>{data.title}</S.Title>

        <S.Info>
          <Icon name="event" size={14} color="#999" />
          <S.InfoText>{dateFormatted}</S.InfoText>
        </S.Info>
        <S.Info>
          <Icon name="place" size={14} color="#999" />
          <S.InfoText>{data.location}</S.InfoText>
        </S.Info>
        <S.Info>
          <Icon name="person" size={14} color="#999" />
          <S.InfoText>{data.User.name}</S.InfoText>
        </S.Info>

        <S.SubscribeButton
          onPress={() => onActionButtonPressed(data.id)}
          bgColor={subscribed && '#D44059'}
        >
          {subscribed ? 'Cancelar' : 'Realizar'} inscrição
        </S.SubscribeButton>
      </S.Content>
    </S.Container>
  );
}

Meetup.propTypes = {
  data: PropTypes.object.isRequired,
  onActionButtonPressed: PropTypes.func.isRequired,
  subscribed: PropTypes.bool,
};

Meetup.defaultProps = {
  subscribed: false,
};
