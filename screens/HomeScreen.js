import React from 'react';
import {ScrollView, Image, StyleSheet, Text, View} from 'react-native';
import PropTypes from 'prop-types';
import {
    ACCENT_COLOR,
    BACKGROUND,
    MAIN_COLOR_BACKGROUND,
    LIGHT_NEUTRAL,
    MAIN_COLOR,
    MEDIUM_NEUTRAL, LIGHT_COLOR, DARK_NEUTRAL, MEDIUM_GRAY, OPPOSITE_MAIN, MAIN_BACKGROUND
} from "../assets/styles/COLORS";
import {HEADER_HEIGHT, HEADING_HEIGHT, SCREEN_HEIGHT, SCROLL_SCREEN_HEIGHT} from "../assets/styles/NUMBERS";
import Logo from "../assets/y_logo_filled.png";
import Constants from "expo-constants";
import { Button } from 'react-native-material-ui';


const announcements = ['Practice Cancelled March 30', 'Regionals at USU April 17-18', 'Team Banquet March 30'];
const currentWeek = {
        date: 'Mar 23 - Mar 28',
        allChecked: false,
        tasks: [
            {task:'1000 Touches', checked: false},
            {task: '3 Miles', checked: false}]
    };
const teamSchool = 'BYU';
const teamName = 'Women\'s Lacrosse';

export class HomeScreen extends React.Component {
        constructor(props) {
            super(props);
            this.announcements = announcements;
            this.currentWeek = currentWeek;
            this.teamSchool = teamSchool;
            this.teamName = teamName;
        }

        getAnnouncements() {
            return this.announcements.map((ann, index) => {
                return (
                    <Text key={index} style={[styles.homeUnderHeading, styles.paddedV8, styles.paddedL16]}>
                        {ann}
                    </Text>
                );
            });
        }

    getWeekTasks() {
        return this.currentWeek.tasks.map((task, index) => {
            return (
                <Text key={index} style={[styles.homeUnderHeading, styles.paddedV8, styles.paddedL16]}>
                    {task.task}
                </Text>
            );
        });
    }

    onReport() {

    }

      render() {
          return (
                <View>
                    <View>
                        <View style={styles.statusBar}>
                        </View>
                        {/*<View style={styles.header}>*/}
                        {/*</View>*/}
                    </View>
                    <ScrollView style={styles.screen}>
                        <View style={styles.headingMain}>
                            {/*<Image source={Logo} style={{width: 140, height: 90}}/>*/}
                            <Text style={[styles.title, {fontSize: 45}]}>{this.teamSchool}</Text>
                            <Text style={[styles.title, {fontSize: 35}]}>{this.teamName}</Text>
                        </View>
                        <View style={styles.cardContainer}>
                            <View style={styles.cardBody}>
                                <View style={[styles.rowCol, styles.rowOuter]}>
                                    <Text style={[styles.heading, styles.homeHeading, styles.paddedV4]}>
                                        Announcements
                                    </Text>
                                    {this.getAnnouncements()}
                                </View>
                            </View>
                            <View style={[styles.cardBody, styles.cardBodySecond]}>
                                <View style={[styles.rowCol]}>
                                    <View style={[styles.row, styles.rowEnd]}>
                                        <Text style={[styles.heading, styles.homeHeading, styles.paddedV4]}>
                                            This Week's Tasks
                                        </Text>
                                        {/*<Touchable style={styles.lightButton} onPress={() => this.onReport()}>*/}
                                        {/*    <Text style={styles.lightButtonText}>Report</Text>*/}
                                        {/*</Touchable>*/}
                                    </View>
                                    {this.getWeekTasks()}
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            );
        }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: MAIN_COLOR,
      height: SCROLL_SCREEN_HEIGHT
  },
    screen: {
        height: SCREEN_HEIGHT - Constants.statusBarHeight,
        maxHeight: SCREEN_HEIGHT - Constants.statusBarHeight,
        backgroundColor: BACKGROUND
    },
    statusBar: {
        backgroundColor: '#fff',
        height: Constants.statusBarHeight,
    },
    header: {
        backgroundColor: '#fff',
        height: HEADER_HEIGHT,
        justifyContent: 'center'
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rowEnd: {
        // padding: 0,
        // paddingLeft: 12,
        // paddingRight: 12,
        justifyContent: 'space-between'
    },
    rowOuter: {
        padding: 8,
        borderBottomColor: ACCENT_COLOR,
        borderBottomWidth: 1
    },
    rowCol: {
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 8,
    },
    colEven: {
        width: 180
    },
    col0: {
        paddingLeft: 8,
        width: 70,
    },
    col1: {
        width: 180
    },
    col2: {
        paddingRight: 8
    },
    cardContainer: {
      height: SCREEN_HEIGHT - Constants.statusBarHeight - HEADING_HEIGHT,
        backgroundColor: MAIN_BACKGROUND
    },
    cardBody: {
        padding: 16,
        paddingBottom: 4,
        // backgroundColor: MAIN_COLOR
    },
    cardBodySecond: {
        paddingTop: 4,
    },
    boundingBox: {
        paddingLeft: 24
    },
    paddedL16: {
        paddingLeft: 16
    },
    paddedL8: {
        paddingLeft: 8
    },
    paddedL4: {
        paddingLeft: 4
    },
    paddedV8: {
        padding: 8
    },
    paddedV4: {
        padding: 4
    },
    heading: {
        paddingBottom: 4,
        fontWeight: 'bold',
    },
    homeHeading: {
        fontSize: 25,
        color: ACCENT_COLOR,
    },
    homeUnderHeading: {
        fontSize: 20,
        color: OPPOSITE_MAIN
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        color: MAIN_COLOR,
        padding: 16,
        paddingBottom: 8,
        paddingTop: 4
    },
    headingMain: {
        paddingTop: 32,
        paddingBottom: 16,
        alignItems: 'center',
        backgroundColor: '#fff',
        height: HEADING_HEIGHT,
        flex: 1,
        borderBottomColor: ACCENT_COLOR,
        borderBottomWidth: 1
    },
    lightButton: {
        backgroundColor: '#fff'
    },
    lightButtonText: {
        color: MAIN_COLOR,
        textAlign: 'center',
        fontWeight: 'bold',
        padding: 8,
        paddingLeft: 12,
        paddingRight: 12
    }
});
