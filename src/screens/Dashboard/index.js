import React, { useState, useEffect, useMemo } from 'react';
import { Alert, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { format, subDays, addDays } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';
import Meetup from '~/components/Meetup';
import Background from '~/components/Background';
import * as S from './styles';

const Dashboard = ({ navigation }) => {
  const [date, setDate] = useState(new Date());
  const dateFormatted = useMemo(() => {
    return format(date, "dd 'de' MMMM", { locale: pt });
  }, [date]);

  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await api.get('meetups', { params: { date } });
      setMeetups(res.data);
    })();
  }, [date]);

  async function handleSubscribe(meetupId) {
    try {
      await api.post('subscriptions', { meetupId });

      navigation.navigate('Subscriptions');
    } catch (error) {
      Alert.alert('Ops...', error.response.data.error);
    }
  }

  function handlePrevDay() {
    setDate(subDays(date, 1));
  }

  function handleNextDay() {
    setDate(addDays(date, 1));
  }

  return (
    <Background>
      <S.Container>
        <S.DateNavigation>
          <TouchableOpacity onPress={handlePrevDay}>
            <Icon name="chevron-left" size={30} color="#fff" />
          </TouchableOpacity>
          <S.DateText>{dateFormatted}</S.DateText>
          <TouchableOpacity onPress={handleNextDay}>
            <Icon name="chevron-right" size={30} color="#fff" />
          </TouchableOpacity>
        </S.DateNavigation>

        <S.Meetups
          data={meetups}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <Meetup data={item} onActionButtonPressed={handleSubscribe} />
          )}
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
