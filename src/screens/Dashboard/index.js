import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Alert } from 'react-native';
import PropTypes from 'prop-types';

import api from '~/services/api';
import Meetup from '~/components/Meetup';
import Background from '~/components/Background';
import * as S from './styles';

const Dashboard = ({ navigation }) => {
  const [meetups, setMeetups] = useState([]);
  const myUser = useSelector(state => state.user.profile);

  useEffect(() => {
    (async () => {
      const res = await api.get('meetups');
      setMeetups(res.data);
    })();
  }, []);

  async function handleSubscribe(meetupId) {
    try {
      await api.post(`meetups/${meetupId}/subscriptions`);

      navigation.navigate('Subscriptions');
    } catch (error) {
      Alert.alert('Ops...', error.response.data.error);
    }
  }

  return (
    <Background>
      <S.Container>
        <S.Meetups
          data={meetups}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => {
            if (item.user_id !== myUser.id && !item.past) {
              return (
                <Meetup data={item} onActionButtonPressed={handleSubscribe} />
              );
            }
          }}
        />
      </S.Container>
    </Background>
  );
};

export default Dashboard;

Dashboard.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
