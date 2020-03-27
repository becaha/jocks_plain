import React from 'react';
import {Image, StyleSheet, Text, View,} from 'react-native';
import Header from "../components/Header";
import {ACCENT_COLOR, BACKGROUND, DARK_NEUTRAL, MEDIUM_NEUTRAL} from "../assets/styles/COLORS";
import {SCROLL_SCREEN_HEIGHT} from "../assets/styles/NUMBERS";
import Logo from "../assets/y_logo_filled.png";

const announcements = ['Practice Cancelled March 30', 'Regionals at USU April 17-18', 'Team Banquet March 30'];
const currentWeek = {
        date: 'Mar 23 - Mar 28',
        allChecked: false,
        tasks: [
            {task:'1000 Touches', checked: false},
            {task: '3 Miles', checked: false}]
    };
const teamName = 'Women\'s Lacrosse';

export class HomeScreen extends React.Component {
        constructor(props) {
            super(props);
            this.announcements = announcements;
            this.currentWeek = currentWeek;
            this.teamName = teamName;
        }

        getAnnouncements() {
            return this.announcements.map((ann, index) => {
                return (
                    <Text key={index} style={[styles.homeUnderHeading, styles.paddedV8, styles.paddedL8]}>
                        {ann}
                    </Text>
                );
            });
        }

    getWeekTasks() {
        return this.currentWeek.tasks.map((task, index) => {
            return (
                <Text key={index} style={[styles.homeUnderHeading, styles.paddedV8, styles.paddedL8]}>
                    {task.task}
                </Text>
            );
        });
    }

      render() {
          return (
                <View>
                    <Header title="Home"/>
                    <View style={styles.container}>
                        <View style={styles.headingMain}>
                            <Text style={styles.title}>{this.teamName}</Text>
                        </View>
                        <View style={styles.headingMain}>
                            <Image source={Logo} style={{width: 140, height: 90}}/>
                        </View>
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
                                <Text style={[styles.heading, styles.homeHeading, styles.paddedV4]}>
                                    This Week's Tasks
                                </Text>
                                {this.getWeekTasks()}
                            </View>
                        </View>
                    </View>
                </View>
            );
        }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: BACKGROUND,
  },
    screen: {
        maxHeight: SCROLL_SCREEN_HEIGHT,
    },
    card: {
        backgroundColor: '#000',
        // marginLeft: 4
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rowOuter: {
        padding: 8,
    },
    rowHeaderHead: {
        backgroundColor: MEDIUM_NEUTRAL,
        padding: 0,
        paddingLeft: 12,
        paddingRight: 12,
        justifyContent: 'space-between'
    },
    rowHeaderBody: {
        backgroundColor: DARK_NEUTRAL,
        padding: 14,
        paddingLeft: 8,
        paddingRight: 8,
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
    cardBody: {
        backgroundColor: BACKGROUND,
        padding: 16,
        paddingBottom: 4
    },
    cardBodySecond: {
        paddingTop: 4,
    },
    boundingBox: {
        paddingLeft: 24
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
        fontWeight: 'bold'
    },
    homeHeading: {
        fontSize: 25
    },
    homeUnderHeading: {
        fontSize: 20
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: ACCENT_COLOR,
    },
    headingMain: {
        padding: 24,
        backgroundColor: BACKGROUND,
        alignItems: 'center'
    }
});
