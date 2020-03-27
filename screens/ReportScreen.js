import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Header from "../components/Header";
import {Ionicons} from "@expo/vector-icons";
import {SCROLL_SCREEN_HEIGHT} from "../assets/styles/NUMBERS";
import {BACKGROUND, DARK_NEUTRAL, MEDIUM_NEUTRAL} from "../assets/styles/COLORS";

const reportWeeks = [{
    date: 'Mar 23 - Mar 28',
    tasks: ['1000 touches', '3 miles']
}];

export class ReportScreen extends React.Component {
    constructor(props) {
        super(props);
        this.reportWeeks = reportWeeks;
        this.showReports = [];
        this.state = {toggle: false};
    }

    toggleDrop(event, weekIndex) {
        console.log("toggle", weekIndex);
        if (this.showReports.includes(weekIndex)) {
            // take out
            this.showReports = this.showReports.filter(i => i !== weekIndex);
        } else {
            this.showReports.push(weekIndex);
        }
        this.setState({toggle: true});
    }

    getBody(week, weekIndex) {
        let tasks = week.tasks.map((task, index) => {
            return (
                <View key={index} style={[styles.row, styles.paddedL4]}>
                    <Text style={styles.paddedL}>
                        {task}
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

    getReportCards() {
        let reportCards = this.reportWeeks.map((week, index) => {
            return (
                <View key={index} style={styles.card}>
                    <View onStartShouldSetResponder={(event) => this.toggleDrop(event, index)}>
                        <View style={[styles.row, styles.rowOuter, styles.rowHeaderHead]}>
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
    },
    boundingBox: {
        paddingLeft: 24
    },
    paddedL: {
        paddingLeft: 8
    },
    paddedL4: {
        paddingLeft: 4
    },
    heading: {
        paddingBottom: 4,
        fontWeight: 'bold'
    },
});
