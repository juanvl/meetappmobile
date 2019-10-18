import React, { useState, useEffect, useMemo, useCallback } from 'react';
import {
  Alert,
  TouchableOpacity,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import PropTypes from 'prop-types';
import { format, subDays, addDays } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DateTimePicker from '@react-native-community/datetimepicker';

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
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const loadMore = useCallback(() => {
    (async () => {
      const newPage = refreshing ? 1 : page + 1;

      const res = await api.get('meetups', { params: { date, page: newPage } });

      setMeetups([...meetups, ...res.data]);
      setLoading(false);
      setRefreshing(false);
      setPage(newPage);
    })();
  }, [date, meetups, page, refreshing]);

  function resetData() {
    setLoading(true);
    setMeetups([]);
    setPage(0);
  }

  useEffect(() => {
    resetData();
    loadMore();
  }, [date]); //eslint-disable-line

  useEffect(() => {
    if (refreshing) {
      resetData();
      loadMore();
    }
  }, [refreshing]); //eslint-disable-line

  function refreshList() {
    resetData();
    setRefreshing(true);
  }

  function handlePrevDay() {
    resetData();
    setDate(subDays(date, 1));
  }

  function handleNextDay() {
    resetData();
    setDate(addDays(date, 1));
  }

  function handleDateChange(_, d) {
    resetData();
    setDate(d);
  }

  async function handleSubscribe(meetupId) {
    try {
      await api.post('subscriptions', { meetupId });

      navigation.navigate('Subscriptions');
    } catch (error) {
      Alert.alert('Ops...', error.response.data.error);
    }
  }

  const listContent = meetups.length ? (
    <S.Meetups
      data={meetups}
      keyExtractor={item => String(item.id)}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={refreshList}
          tintColor="#fff"
        />
      }
      onEndReachedThreshold={0.01}
      onEndReached={loadMore}
      renderItem={({ item }) => (
        <Meetup data={item} onActionButtonPressed={handleSubscribe} />
      )}
    />
  ) : (
    <S.Empty>
      <S.SadFace>:(</S.SadFace>
      <S.EmptyMsg>Não há nenhum meetup nesta data</S.EmptyMsg>
    </S.Empty>
  );

  return (
    <Background>
      <S.Container>
        <S.DateNavigation>
          <TouchableOpacity onPress={handlePrevDay}>
            <Icon name="chevron-left" size={30} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setShowDatePicker(!showDatePicker)}>
            <S.DateText>{dateFormatted}</S.DateText>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleNextDay}>
            <Icon name="chevron-right" size={30} color="#fff" />
          </TouchableOpacity>
        </S.DateNavigation>

        {showDatePicker && (
          <S.DatePicker>
            <DateTimePicker value={date} onChange={handleDateChange} />
          </S.DatePicker>
        )}

        {loading ? (
          <S.Loading>
            <ActivityIndicator size="large" color="#fff" />
          </S.Loading>
        ) : (
          listContent
        )}
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
