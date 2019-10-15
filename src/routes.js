import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Icon from 'react-native-vector-icons/MaterialIcons';

import SignIn from '~/screens/SignIn';
import SignUp from '~/screens/SignUp';
import Dashboard from '~/screens/Dashboard';
import Subscriptions from '~/screens/Subscriptions';
import Profile from '~/screens/Profile';

const Routes = (isSigned = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({ SignIn, SignUp }),
        App: createBottomTabNavigator(
          {
            Dashboard: {
              screen: Dashboard,
              navigationOptions: {
                tabBarLabel: 'Meetups',
                tabBarIcon: (
                  <Icon
                    name="format-list-bulleted"
                    size={20}
                    color="rgba(255,255,255, 0.6)"
                  />
                ),
              },
            },
            Subscriptions: {
              screen: Subscriptions,
              navigationOptions: {
                tabBarLabel: 'Inscrições',
                tabBarIcon: (
                  <Icon
                    name="local-offer"
                    size={20}
                    color="rgba(255,255,255, 0.6)"
                  />
                ),
              },
            },
            Profile: {
              screen: Profile,
              navigationOptions: {
                tabBarLabel: 'Meu perfil',
                tabBarIcon: (
                  <Icon
                    name="person"
                    size={20}
                    color="rgba(255,255,255, 0.6)"
                  />
                ),
              },
            },
          },
          {
            resetOnBlur: true,
            tabBarOptions: {
              keyboardHidesTabBar: true,
              activeTintColor: '#fff',
              inactiveTintColor: 'rgba(255,255,255, 0.6)',
              style: {
                borderTopWidth: 0,
                backgroundColor: '#2B1A2F',
              },
            },
          }
        ),
      },
      {
        initialRouteName: isSigned ? 'App' : 'Sign',
      }
    )
  );

export default Routes;
