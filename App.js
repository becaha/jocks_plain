import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "./screens/HomeScreen";
import ReportScreen from "./screens/ReportScreen";
import ScheduleScreen from "./screens/ScheduleScreen";
import StatsScreen from "./screens/StatsScreen";

import { BottomNavigation } from 'react-native-material-ui';
import {Icon} from "react-native-material-ui";

const Stack = createStackNavigator();

export default function App() {
    return (<Main/>);
}

export class Main extends React.Component{
    constructor(props){
        super(props);
        this.state = {active: 'home'};
    }

  render() {
        return (
            <View style={styles.container}>
                <NavigationContainer>
                    <Stack.Navigator>
                        <Stack.Screen name="Home" component={HomeScreen} />
                    </Stack.Navigator>
                </NavigationContainer>
              <BottomNavigation active={this.state.active} hidden={false} style={styles.bottomNav} >
                  <BottomNavigation.Action
                      key="home"
                      icon="home"
                      label="Home"
                      onPress={() => this.setState({ active: 'home' })}
                  />
                  <BottomNavigation.Action
                      key="today"
                      icon="today"
                      label="Schedule"
                      onPress={() => this.setState({ active: 'today' })}
                  />
                  <BottomNavigation.Action
                      key="assignment-turned-in"
                      icon="assignment-turned-in"
                      label="Report"
                      onPress={() => this.setState({ active: 'assignment-turned-in' })}
                  />
                  <BottomNavigation.Action
                      key="equalizer"
                      icon="equalizer"
                      label="Stats"
                      onPress={() => this.setState({ active: 'equalizer' })}
                  />
              </BottomNavigation>
            </View>

      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
    bottomNav: {
      bottom: 0,
    },
});
