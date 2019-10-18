import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import PropTypes from 'prop-types';
import { withNavigationFocus } from 'react-navigation';

import api from '~/services/api';
import Meetup from '~/components/Meetup';
import Background from '~/components/Background';
import * as S from './styles';

const Subscriptions = ({ isFocused }) => {
  const [subs, setSubs] = useState([]);

  useEffect(() => {
    if (isFocused) {
      (async () => {
        const res = await api.get('subscriptions');
        setSubs(res.data);
      })();
    }
  }, [isFocused]);

  async function handleUnsubscribe(meetupId) {
    try {
      const subIndex = subs.findIndex(s => s.Meetup.id === meetupId);
      const subId = subs[subIndex].id;

      await api.delete(`subscriptions/${subId}`);

      const newSubs = [...subs];
      newSubs.splice(subIndex, 1);
      setSubs(newSubs);
    } catch (error) {
      Alert.alert('Ops...', error.response.data.error);
    }
  }

  return (
    <Background>
      <S.Container>
        {subs.length ? (
          <S.Meetups
            data={subs}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => (
              <Meetup
                data={item.Meetup}
                subscribed
                onActionButtonPressed={handleUnsubscribe}
              />
            )}
          />
        ) : (
          <S.Empty>
            <S.SadFace>:(</S.SadFace>
            <S.EmptyMsg>Você não está inscrito em nenhum Meetup...</S.EmptyMsg>
          </S.Empty>
        )}
      </S.Container>
    </Background>
  );
};

export default withNavigationFocus(Subscriptions);

Subscriptions.propTypes = {
  isFocused: PropTypes.bool.isRequired,
};
