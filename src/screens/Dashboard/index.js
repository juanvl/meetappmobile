import React, { useState, useEffect } from 'react';

import api from '~/services/api';
import Meetup from '~/components/Meetup';
import Background from '~/components/Background';
import * as S from './styles';

const Dashboard = () => {
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await api.get('meetups');
      setMeetups(res.data);
    })();
  }, []);

  return (
    <Background>
      <S.Container>
        <S.Meetups
          data={meetups}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => <Meetup data={item} />}
        />
      </S.Container>
    </Background>
  );
};
export default Dashboard;
