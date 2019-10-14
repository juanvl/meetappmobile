import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

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
        App: createBottomTabNavigator({ Dashboard, Subscriptions, Profile }),
      },
      {
        initialRouteName: isSigned ? 'App' : 'Sign',
      }
    )
  );

export default Routes;
