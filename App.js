import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "./screens/HomeScreen";
import ReportScreen from "./screens/ReportScreen";
import ScheduleScreen from "./screens/ScheduleScreen";
import StatsScreen from "./screens/StatsScreen";
import { Ionicons } from '@expo/vector-icons';
import Constants from "expo-constants";

const Tab = createBottomTabNavigator();

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
                    <Tab.Navigator
                        screenOptions={({ route }) => ({
                            tabBarIcon: ({ focused, color, size }) => {
                                let iconName;

                                if (route.name === 'Home') {
                                    iconName = focused
                                        ? 'ios-home'
                                        : 'ios-home';
                                } else if (route.name === 'Schedule') {
                                    iconName = focused ? 'ios-calendar' : 'ios-calendar';
                                } else if (route.name === 'Report') {
                                    iconName = focused ? 'ios-checkbox' : 'ios-checkbox';
                                } else if (route.name === 'Stats') {
                                    iconName = focused ? 'ios-stats' : 'ios-stats';
                                }

                                // You can return any component that you like here!
                                return <Ionicons name={iconName} size={size} color={color} />;
                            },
                        })}
                        tabBarOptions={{
                            activeTintColor: '#0001ff', //'#39ff00',
                            inactiveTintColor: 'gray',
                        }}
                    >
                        <Tab.Screen name="Home" component={HomeScreen} />
                        <Tab.Screen name="Schedule" component={ScheduleScreen} />
                        <Tab.Screen name="Report" component={ReportScreen} />
                        <Tab.Screen name="Stats" component={StatsScreen} />
                    </Tab.Navigator>
                </NavigationContainer>
            </View>

      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
  },
});
