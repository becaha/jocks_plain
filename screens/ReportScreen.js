import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Header from "../components/Header";
import {Ionicons} from "@expo/vector-icons";
import {SCROLL_SCREEN_HEIGHT} from "../assets/styles/NUMBERS";
import {styles} from "./ScheduleScreen";

import {
    ACCENT_COLOR, ACCENT_LIGHT,
    BACKGROUND, BLACK_GRAY, DARK_GRAY,
    DARK_NEUTRAL, LIGHT_COLOR, LIGHT_GRAY,
    LIGHTER_COLOR, LIGHTER_GRAY,
    MEDIUM_COLOR, MEDIUM_GRAY, MEDIUM_GRAY_1,
    MEDIUM_NEUTRAL
} from "../assets/styles/COLORS";
import {TouchableWithoutFeedback} from "react-native-web";

const reportWeeks = [
    {
        date: 'Mar 23 -   Mar 28',
        allChecked: false,
        tasks: [
            {task:'1000 Touches', checked: false},
            {task: '3 Miles', checked: false}]
    },
    {
        date: 'Mar 30 -   Apr 4',
        allChecked: false,
        tasks: [
            {task:'750 Touches', checked: false},
            {task: '3 Miles', checked: false}]
    },
    {
        date: 'Apr 6 -   Apr 11',
        allChecked: false,
        tasks: [
            {task:'1500 Touches', checked: false},
            {task: '2 Miles', checked: false}]
    },
    {
        date: 'Apr 13 -   Apr 18',
        allChecked: false,
        tasks: [
            {task:'500 Touches', checked: false},
            {task: '1 Mile', checked: false}]
    },
    {
        date: 'Apr 20 -   Apr 25',
        allChecked: false,
        tasks: [
            {task:'1500 Touches', checked: false},
            {task: '2 Miles', checked: false}]
    },
    {
        date: 'Apr 27 -   May 2',
        allChecked: false,
        tasks: [
            {task:'1000 Touches', checked: false},
            {task: '3 Miles', checked: false}]
    },
    {
        date: 'May 4 -   May 9',
        allChecked: false,
        tasks: [
            {task:'500 Touches', checked: false},
            {task: '1 Mile', checked: false}]
    },
];

export class ReportScreen extends React.Component {
    constructor(props) {
        super(props);
        this.reportWeeks = reportWeeks;
        this.showReports = [];
        this.state = {refresh: false};
    }

    toggleDrop(event, weekIndex) {
        if (this.showReports.includes(weekIndex)) {
            // take out
            this.showReports = this.showReports.filter(i => i !== weekIndex);
        } else {
            this.showReports.push(weekIndex);
        }
        this.setState({refresh: true});
    }

    toggleCheck(event, week, task) {
        task.checked ? task.checked = false : task.checked = true;
        let uncheckedTasks = week.tasks.filter((task)=> task.checked === false);
        uncheckedTasks.length === 0 ? week.allChecked = true : week.allChecked = false;
        this.setState({refresh: true});
    }

    getCheckbox(task) {
        if (!task.checked) {
            return (
                <View style={{height: 35, width: 35}}>
                    <Ionicons name="ios-square-outline" size={35} color={ACCENT_COLOR}/>
                </View>
            );
        }
        return (
            <View style={{height: 35, width: 35}}>
                <Ionicons name="ios-square" size={35} color={ACCENT_COLOR} style={{position: 'absolute'}}/>
                <Ionicons name="ios-checkmark" size={43} color='#fff' style={{position: 'absolute', top: -4, left: 2}}/>
            </View>
        );
    }

    getBody(week, weekIndex) {
        let tasks = week.tasks.map((task, index) => {
            return (
                <TouchableWithoutFeedback key={index} style={[styles.row, styles.paddedL4]}
                                          onPress={(event) => this.toggleCheck(event, week, task)}>
                    <View style={styles.row}>
                        {this.getCheckbox(task)}
                        <Text style={[styles.text, styles.paddedV, {paddingTop: 10}]}>
                            {task.task}
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
            );
        });

        if (this.showReports.includes(weekIndex)) {
            return (
                <View style={styles.cardBody}>
                    <View style={styles.rowCol}>
                        {tasks}
                    </View>
                </View>
            );
        }
        return null;
    }

    getWeekStyles(week) {
        let weekStyles = [styles.row, styles.rowOuter, styles.rowHeaderHead, styles.rowHeaderBody, report_styles.reportCard];
        week.allChecked ? weekStyles.push(report_styles.allChecked) : null;
        return weekStyles;
    }

    getToggleIcon(weekIndex) {
        if (this.showReports.includes(weekIndex)) {
            return (
                <View style={styles.boundingBox}>
                    <Ionicons name="ios-arrow-up" size={20} color={ACCENT_COLOR}/>
                </View>
            );
        }
        return (
            <View style={styles.boundingBox}>
                <Ionicons name="ios-arrow-down" size={20} color={ACCENT_COLOR}/>
            </View>
        );
    }

    getReportCards() {
        let reportCards = this.reportWeeks.map((week, index) => {
            return (
                <View key={index} style={styles.card}>
                    <TouchableWithoutFeedback onPress={(event) => this.toggleDrop(event, index)}>
                        <View style={this.getWeekStyles(week)}>
                            <Text style={[styles.text, styles.headerText]}>
                                {week.date}
                            </Text>
                            <View style={[styles.row, styles.rowOuter]}>
                                {this.getToggleIcon(index)}
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                    {this.getBody(week, index)}
                </View>
            )
        });
        return reportCards;
    }

  render() {
      return (
          <View style={styles.screen}>
              <Header title="Report"/>
              <View>
                  <ScrollView style={styles.scrollScreen}>
                      <View style={styles.cardContainer}>
                        {this.getReportCards()}
                      </View>
                  </ScrollView>
              </View>
          </View>
      );
  }
}

const report_styles = StyleSheet.create({
    reportCard: {
        backgroundColor: LIGHTER_GRAY,
        borderBottomColor: MEDIUM_GRAY,
        borderBottomWidth: 1
    },
    allChecked: {
        backgroundColor: MEDIUM_GRAY_1
    }
});
