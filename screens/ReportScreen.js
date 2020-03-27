import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Header from "../components/Header";
import {Ionicons} from "@expo/vector-icons";
import {SCROLL_SCREEN_HEIGHT} from "../assets/styles/NUMBERS";
import {ACCENT_COLOR, BACKGROUND, DARK_NEUTRAL, MEDIUM_NEUTRAL} from "../assets/styles/COLORS";

const reportWeeks = [
    {
        date: 'Mar 23 - Mar 28',
        allChecked: false,
        tasks: [
            {task:'1000 Touches', checked: false},
            {task: '3 Miles', checked: false}]
    },
    {
        date: 'Mar 30 - Apr 4',
        allChecked: false,
        tasks: [
            {task:'750 Touches', checked: false},
            {task: '3 Miles', checked: false}]
    },
    {
        date: 'Apr 6 - Apr 11',
        allChecked: false,
        tasks: [
            {task:'1500 Touches', checked: false},
            {task: '2 Miles', checked: false}]
    },
    {
        date: 'Apr 13 - Apr 18',
        allChecked: false,
        tasks: [
            {task:'500 Touches', checked: false},
            {task: '1 Mile', checked: false}]
    },
    {
        date: 'Apr 20 - Apr 25',
        allChecked: false,
        tasks: [
            {task:'1500 Touches', checked: false},
            {task: '2 Miles', checked: false}]
    },
    {
        date: 'Apr 27 - May 2',
        allChecked: false,
        tasks: [
            {task:'1000 Touches', checked: false},
            {task: '3 Miles', checked: false}]
    },
    {
        date: 'May 4 - May 9',
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
        console.log("toggle", weekIndex);
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
            return (<Ionicons name="ios-square-outline" size={35} color='#000'/>);
        }
        return (<Ionicons name="ios-square" size={35} color={ACCENT_COLOR}/>);
    }

    getBody(week, weekIndex) {
        let tasks = week.tasks.map((task, index) => {
            return (
                <View key={index} style={[styles.row, styles.paddedL4]} onStartShouldSetResponder={(event) => this.toggleCheck(event, week, task)}>
                    {this.getCheckbox(task)}
                    <Text style={[styles.paddedV, styles.paddedL16]}>
                        {task.task}
                    </Text>
                </View>
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
        let weekStyles = [styles.row, styles.rowOuter, styles.rowHeaderHead];
        week.allChecked ? weekStyles.push(styles.allChecked) : null;
        return weekStyles;
    }

    getReportCards() {
        let reportCards = this.reportWeeks.map((week, index) => {
            return (
                <View key={index} style={styles.card}>
                    <View onStartShouldSetResponder={(event) => this.toggleDrop(event, index)}>
                        <View style={this.getWeekStyles(week)}>
                            <Text>
                                {week.date}
                            </Text>
                            <View style={[styles.row, styles.rowOuter]}>
                                <View style={styles.boundingBox}>
                                    <Ionicons name="ios-arrow-down" size={20} color="#000"/>
                                </View>
                            </View>
                        </View>
                    </View>
                    {this.getBody(week, index)}
                </View>
            )
        });
        return reportCards;
    }

  render() {
      return (
          <View>
              <Header title="Report"/>
              <View>
                  <ScrollView style={styles.screen}>
                      {this.getReportCards()}
                  </ScrollView>
              </View>
          </View>
      );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff',
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
    },
    padded8: {
        padding: 8
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
    },
    boundingBox: {
        paddingLeft: 24
    },
    paddedL16: {
        paddingLeft: 16
    },
    paddedL12: {
        paddingLeft: 12
    },
    paddedL8: {
        paddingLeft: 8
    },
    paddedL4: {
        paddingLeft: 4
    },
    heading: {
        paddingBottom: 4,
        fontWeight: 'bold'
    },
    paddedV: {
        padding: 4,
        paddingLeft: 0,
        paddingRight: 0
    },
    allChecked: {
        backgroundColor: DARK_NEUTRAL
    }
});
