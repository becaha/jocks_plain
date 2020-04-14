import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {HomeScreen} from "./screens/HomeScreen";
import {ReportScreen} from "./screens/ReportScreen";
import {ScheduleScreen} from "./screens/ScheduleScreen";
import {StatsScreen} from "./screens/StatsScreen";
import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { TextInput } from 'react-native';
import { Keyboard, KeyboardAvoidingView } from 'react-native';



import {
    ACCENT_COLOR,
    DARK_GRAY, JOCKS_COLOR,
    LIGHT_GRAY,
    LIGHT_NEUTRAL,
    LIGHTER_COLOR, LIGHTER_GRAY,
    MAIN_COLOR,
    MEDIUM_GRAY, MEDIUM_GRAY_1
} from "./assets/styles/COLORS";
import {FONT_BOLD, FONT_MAIN, FONT_SUB, SCREEN_HEIGHT, SCREEN_WIDTH} from "./assets/styles/NUMBERS";
import {TouchableWithoutFeedback} from "react-native-web";

const Tab = createBottomTabNavigator();

let customFonts = {
    'Comme-Bold': require('./assets/fonts/Comme-Bold.ttf'),
    'Comme-SemiBold': require('./assets/fonts/Comme-SemiBold.ttf'),
    'Mazzard': require('./assets/fonts/MazzardSoftM-Light.otf'),
    'Inter-SemiBoldItalic':
        'https://rsms.me/inter/font-files/Inter-SemiBoldItalic.otf?v=3.12',
};

export default function App() {
    return (<Main/>);
}

export class Main extends React.Component{

    constructor(props) {
        super(props);
        this.state = {fontsLoaded: false, signIn: false, signedIn: false, teamName: '', password: ''};
    }

    async _loadFontsAsync() {
        await Font.loadAsync(customFonts);
        this.setState({ fontsLoaded: true });
    }

    componentDidMount() {
        this._loadFontsAsync();
    }

    setSignIn() {
        this.setState({signIn: true});
    }

    setSignedIn() {
        this.setState({signedIn: true});
    }

    setTeamName(teamName) {
        this.setState({teamName: teamName});
    }

    setPassword(password) {
        this.setState({password: password});
    }

    getSignIn() {
            return (
                <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={87} enabled>
                    <View style={[styles.titleView]}>
                        <Text style={[styles.title, {color: ACCENT_COLOR}]}>Jocks</Text>
                    </View>
                   <View style={styles.signInView}>
                       <View>
                            <Text style={styles.inputHeading}>
                                Team Name
                            </Text>
                            <TextInput
                                style={styles.inputText}
                                onChangeText={text => this.setTeamName(text)}
                                value={this.state.teamName}
                            />
                        </View>
                        <View>
                            <Text style={styles.inputHeading}>
                                Password
                            </Text>
                            <TextInput
                                secureTextEntry={true}
                                style={styles.inputText}
                                onChangeText={text => this.setPassword(text)}
                                value={this.state.password}
                            />
                        </View>
                        <View style={styles.buttonContainer}>
                            <TouchableWithoutFeedback onPress={(event) => this.setSignedIn()}>
                                <View style={styles.button}>
                                    <Text style={styles.buttonText}>
                                        Sign in
                                    </Text>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            );
    }

    render() {
        if (this.state.fontsLoaded) {
            if (this.state.signedIn) {
                return (
                    <View style={styles.container}>
                        <NavigationContainer style={styles.screen}>
                            <Tab.Navigator
                                screenOptions={({route}) => ({
                                    tabBarIcon: ({focused, color, size}) => {
                                        let iconName;

                                        if (route.name === 'Home') {
                                            iconName = focused ? 'ios-home' : 'ios-home';
                                        } else if (route.name === 'Schedule') {
                                            iconName = focused ? 'ios-calendar' : 'ios-calendar';
                                        } else if (route.name === 'Report') {
                                            iconName = focused ? 'ios-checkbox' : 'ios-checkbox';
                                        } else if (route.name === 'Stats') {
                                            iconName = focused ? 'ios-stats' : 'ios-stats';
                                        }

                                        // You can return any component that you like here!
                                        return <Ionicons name={iconName} size={size} color={color}/>;
                                    },
                                })}
                                tabBarOptions={{
                                    activeTintColor: ACCENT_COLOR, //'#39ff00',
                                    inactiveTintColor: 'gray',
                                    style: {
                                        backgroundColor: LIGHT_GRAY,
                                        borderTopColor: MEDIUM_GRAY,
                                        borderTopWidth: 1
                                    }
                                }}
                            >
                                <Tab.Screen name="Home" component={HomeScreen}/>
                                <Tab.Screen name="Schedule" component={ScheduleScreen}/>
                                <Tab.Screen name="Report" component={ReportScreen}/>
                                <Tab.Screen name="Stats" component={StatsScreen}/>
                            </Tab.Navigator>
                        </NavigationContainer>
                    </View>
                );
            }
            else if (this.state.signIn) {
                return (
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={styles.container}>
                        <View style={[styles.screen, {backgroundColor: LIGHTER_GRAY}]}>
                            {this.getSignIn()}
                        </View>
                    </TouchableWithoutFeedback>
                );
            }
            else {
                return (
                    <View style={styles.container}>
                        <View style={[styles.screen, {backgroundColor: JOCKS_COLOR}]}>
                            <View style={styles.titleContainer}>
                                <View style={styles.titleView}>
                                    <Text style={[styles.title, {color: '#fff'}]}>Jocks</Text>
                                </View>
                                <View style={styles.subHeadingView}>
                                    <Text style={[styles.subHeading]}>
                                        For communication off the field.
                                    </Text>
                                </View>
                            </View>
                                <View style={[styles.buttonContainer, {position: 'relative',
                                    top: 150}]}>
                                    <TouchableWithoutFeedback onPress={(event) => this.setSignIn()}>
                                        <View>
                                            <View style={[styles.button, {alignSelf: 'center', backgroundColor: LIGHT_GRAY, borderColor: MEDIUM_GRAY, borderWidth: 1,
                                                            width: SCREEN_WIDTH - 100}]}>
                                                <Text style={[styles.buttonText, {color: '#000'}]}>
                                                    Sign in
                                                </Text>
                                            </View>
                                        </View>
                                    </TouchableWithoutFeedback>
                                </View>
                        </View>
                    </View>
                );
            }
        }
        else {
            return <AppLoading />;
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    screen: {
        backgroundColor: '#fff',
        height: SCREEN_HEIGHT,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        // alignItems: 'center'
    },
    titleContainer: {
        position: 'relative',
        bottom: 65
    },
    titleView: {
        alignSelf: 'center',
        // margin: 20
    },
    title: {
        fontSize: 70,
        fontFamily: FONT_MAIN,
        color: MEDIUM_GRAY
    },
    subHeadingView: {
        alignSelf: 'center',
        // width: SCREEN_WIDTH,
        // margin: 20,
        // backgroundColor: LIGHT_GRAY,
        padding: 16,
    },
    subHeading: {
        fontSize: 18,
        fontFamily: FONT_BOLD,
        fontWeight: 'bold',
        textAlign: 'center',
        // color: DARK_GRAY
    },
    buttonText: {
        fontFamily: FONT_BOLD,
        fontSize: 20,
        color: '#fff',
        textAlign: 'center'
    },
    button: {
        backgroundColor: JOCKS_COLOR,
        // borderColor: DARK_GRAY,
        // borderWidth: 1,
        padding: 16,
        paddingTop: 8,
        paddingBottom: 10,
        marginTop: 8,

    },
    buttonContainer: {
        // alignSelf: 'flex-end',
        // display: 'flex',
        // flexDirection: 'column',
        // justifyContent: 'center',
        // marginTop: 16
    },
    inputText: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingBottom: 8,
        backgroundColor: '#fff',
        marginBottom: 4
    },
    inputHeading: {
        textAlign: 'left',
        fontFamily: FONT_SUB,
        paddingTop: 8,
        paddingBottom: 8,
        fontSize: 16,
        // marginBottom: 4
    },
    signInView: {
        margin: 20,
        marginLeft: 30,
        marginRight: 30,
        backgroundColor: LIGHT_GRAY,
        padding: 16,
        borderWidth: 2,
        borderColor: MEDIUM_GRAY
    }

});
