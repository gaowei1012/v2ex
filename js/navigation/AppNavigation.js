/*
 * @Author: your name
 * @Date: 2019-12-21 18:24:33
 * @LastEditTime : 2019-12-25 17:11:44
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /v2ex/js/navigation/AppNavigation.js
 */
'use strict';
import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator,
} from 'react-navigation';
import {connect} from 'react-redux';
import {
  createReactNavigationReduxMiddleware,
  reduxifyNavigator,
} from 'react-navigation-redux-helpers';

import NewPage from '../page/NewPage';
import HomePage from '../page/HomePage';
import AboutPage from '../page/AboutPage';
import GitHubPage from '../page/GitHubPage';
import WelcomePage from '../page/WelcomePage';
import ViewPagePlus from '../page/ViewPgae';
import NodePage from '../page/NodePage';

export const rootCom = 'Init';

const InitNavigator = createStackNavigator({
  WelcomePage: {
    screen: WelcomePage,
    navigationOptions: {
      header: null,
    },
  },
});

const MainNavigator = createStackNavigator({
  HomePage: {
    screen: HomePage,
    navigationOptions: {
      header: null,
    },
  },
  GitHubPage: {
    screen: GitHubPage,
    navigationOptions: {
      header: null,
    },
  },
  AboutPage: {
    screen: AboutPage,
    navigationOptions: {
      header: null,
    },
  },
  NewPage: {
    screen: NewPage,
    navigationOptions: {
      header: null,
    },
  },
  ViewPagePlus: {
    screen: ViewPagePlus,
    navigationOptions: {
      header: null,
    },
  },
  NodePage: {
    screen: NodePage,
    navigationOptions: {
      header: null,
    },
  },
});

export const RootNavigation = createAppContainer(
  createSwitchNavigator(
    {
      Init: InitNavigator,
      Main: MainNavigator,
    },
    {
      navigationOptions: {
        header: null,
      },
    },
  ),
);

export const middleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav,
);

const AppWithNavigationState = reduxifyNavigator(RootNavigation, 'root');

const mapStateToProps = state => ({
  state: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);
