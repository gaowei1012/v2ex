/* eslint-disable no-shadow */
'use strict';
import {connect} from 'react-redux';
import React, {Component} from 'react';
import {Image} from 'react-native';
import {
  createAppContainer,
  BottomTabBar,
  createBottomTabNavigator,
} from 'react-navigation';

import V2exPage from '../page/V2exPage';
import GitHubPage from '../page/GitHubPage';
import AboutPage from '../page/AboutPage';
import NewPage from '../page/NewPage';
import NodePage from '../page/NodePage';

const TABS = {
  V2exPage: {
    screen: V2exPage,
    navigationOptions: {
      tabBarLabel: '最热',
      tabBarIcon: ({tintColor, focused}) => {
        return (
          <TabBarItem
            tintColor={tintColor}
            focused={focused}
            normalImage={require('../images/tab/hot.png')}
            selectedImage={require('../images/tab/sel_hot.png')}
          />
        );
      },
    },
  },
  NewPage: {
    screen: NewPage,
    navigationOptions: {
      tabBarLabel: '最新',
      tabBarIcon: ({tintColor, focused}) => {
        return (
          <TabBarItem
            tintColor={tintColor}
            focused={focused}
            normalImage={require('../images/tab/new.png')}
            selectedImage={require('../images/tab/sel_new.png')}
          />
        );
      },
    },
  },
  NodePage: {
    screen: NodePage,
    navigationOptions: {
      tabBarLabel: '节点',
      tabBarIcon: ({tintColor, focused}) => {
        return (
          <TabBarItem
            tintColor={tintColor}
            focused={focused}
            normalImage={require('../images/tab/node.png')}
            selectedImage={require('../images/tab/sel_node.png')}
          />
        );
      },
    },
  },
  GitHubPage: {
    screen: GitHubPage,
    navigationOptions: {
      tabBarLabel: 'github',
      tabBarIcon: ({tintColor, focused}) => {
        return (
          <TabBarItem
            tintColor={tintColor}
            focused={focused}
            normalImage={require('../images/tab/github.png')}
            selectedImage={require('../images/tab/sel_github.png')}
          />
        );
      },
    },
  },
  AboutPage: {
    screen: AboutPage,
    navigationOptions: {
      tabBarLabel: '关于',
      tabBarIcon: ({tintColor, focused}) => {
        return (
          <TabBarItem
            tintColor={tintColor}
            focused={focused}
            normalImage={require('../images/tab/about.png')}
            selectedImage={require('../images/tab/sel_about.png')}
          />
        );
      },
    },
  },
};

class DynamicTabNavigator extends Component {
  constructor(props) {
    super(props);
    console.disableYellowBox = true;
  }

  _tabNavgator() {
    /// 如果有当前Tabs
    if (this.Tabs) {
      return this.Tabs;
    }
    const {V2exPage, NewPage, NodePage, AboutPage} = TABS;
    const tabs = {V2exPage, NewPage, NodePage, AboutPage};
    V2exPage.navigationOptions.tabBarLabel = '最热';
    return (this.Tabs = createBottomTabNavigator(tabs, {
      tabBarComponent: props => {
        return <TabBarComponent {...props} theme={this.props.theme} />;
      },
    }));
  }

  render() {
    // 保存navigation为了后面调用
    //console.log(this.props.navigation);
    const Tab = createAppContainer(this._tabNavgator());
    return <Tab />;
  }
}

class TabBarComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <BottomTabBar {...this.props} activeTintColor={this.props.theme} />;
  }
}

class TabBarItem extends React.Component {
  render() {
    return (
      <Image
        // eslint-disable-next-line react-native/no-inline-styles
        style={{tintColor: this.props.tintColor, width: 25, height: 25}}
        source={
          this.props.focused ? this.props.selectedImage : this.props.normalImage
        }
      />
    );
  }
}

const mapStateToProps = state => ({
  theme: state.theme.theme,
});

export default connect(mapStateToProps)(DynamicTabNavigator);
