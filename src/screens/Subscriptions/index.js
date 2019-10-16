import React, { useState, useEffect } from 'react';

import api from '~/services/api';
import Meetup from '~/components/Meetup';
import Background from '~/components/Background';
import * as S from './styles';

const Subscriptions = ({ navigation }) => {
  const [subs, setSubs] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await api.get('subscriptions');
      setSubs(res.data);
    })();
  }, []);

  async function handleUnsubscribe(meetupId) {
    try {
      await api.delete(`meetups/${meetupId}/subscriptions`);

      navigation.navigate('Subscriptions');
    } catch (error) {
      Alert.alert('Ops...', error.response.data.error);
    }
  }

  return (
    <Background>
      <S.Container>
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
      </S.Container>
    </Background>
  );
};

export default Subscriptions;
