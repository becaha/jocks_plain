import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Header from '../components/Header';
import {
    ACCENT_COLOR,
    BACKGROUND,
    DARK_NEUTRAL,
    LIGHT_COLOR,
    LIGHTER_COLOR, MEDIUM_GRAY,
    MEDIUM_NEUTRAL
} from "../assets/styles/COLORS";
import {FONT_BOLD, FONT_MAIN, FONT_SUB, SCREEN_HEIGHT, SCROLL_SCREEN_HEIGHT} from "../assets/styles/NUMBERS";
import {styles} from "./ScheduleScreen";
import Tooltip from 'react-native-walkthrough-tooltip';
import TouchableHighlight from "react-native-web/src/exports/TouchableHighlight";
import {TouchableWithoutFeedback} from "react-native-web";



const statTypes = [
    {short: 'Opp', long: 'Opponent', longVisible: false},
    {short: 'S', long: 'Shots', longVisible: false},
    {short: 'G', long: 'Goals', longVisible: false},
    {short: 'TO', long: 'Turn Overs', longVisible: false},
    {short: 'TA', long: 'Take Aways', longVisible: false},
    {short: 'GB', long: 'Ground Balls', longVisible: false},
    {short: 'F', long: 'Fouls', longVisible: false},
    {short: 'FP', long: 'Free Positions', longVisible: false}];

const stats = [
    {opponent: 'BC', longVisible: false, opponentLong: 'Boston College', stats: [0,3,4,2,1,0,0]},
    {opponent: 'UM', longVisible: false, opponentLong: 'University of Michigan', stats: [2,3,6,1,1,0,3]},
    {opponent: 'NE', longVisible: false, opponentLong: 'North Eastern University', stats: [0,3,4,2,1,0,0]},
    {opponent: 'UU', longVisible: false, opponentLong: 'University of Utah', stats: ['-','-','-','-','-','-','-']},
    {opponent: 'USU', longVisible: false, opponentLong: 'Utah State University', stats: ['-','-','-','-','-','-','-']},
    {opponent: 'BSU', longVisible: false, opponentLong: 'Boise State University', stats: ['-','-','-','-','-','-','-']},
    {opponent: 'UVU', longVisible: false, opponentLong: 'Utah Valley University', stats: ['-','-','-','-','-','-','-']},
    {opponent: 'R', longVisible: false, opponentLong: '', stats: ['-','-','-','-','-','-','-']},
    {opponent: 'R', longVisible: false, opponentLong: '', stats: ['-','-','-','-','-','-','-']},
    {opponent: 'N', longVisible: false, opponentLong: '', stats: ['-','-','-','-','-','-','-']},
    {opponent: 'N', longVisible: false, opponentLong: '', stats: ['-','-','-','-','-','-','-']},
    ];

const player = {
    name: 'Kenzie Dahl',
    year: 'Junior',
    position: 'Midfield',
    age: 22,
    hometown: 'Boise, ID'
};

export class StatsScreen extends React.Component {
    constructor(props) {
        super(props);
        this.stats = stats;
        this.statTypes = statTypes;
        this.player = player;
        this.state = {toolTipVisible: false};
    }

    getHeaderRow(row) {
        return row.map((cell, index) => {
            let styles = [stats_styles.cell];
            if (index === 0) {
                styles.push(stats_styles.cellOpp);
            }
            return (
                <View key={index} style={styles}>
                    <Tooltip
                        animated={true}
                        //(Optional) When true, tooltip will animate in/out when showing/hiding
                        arrowSize={{ width: 0, height: 0 }}
                        //(Optional) Dimensions of arrow bubble pointing to the highlighted element
                        backgroundColor="rgba(0,0,0)"
                        //(Optional) Color of the fullscreen background beneath the tooltip.
                        isVisible={cell.longVisible}
                        //(Must) When true, tooltip is displayed
                        content={<Text>{cell.long}</Text>}
                        //(Must) This is the view displayed in the tooltip
                        placement="top"
                        //(Must) top, bottom, left, right, auto.
                        onClose={() => this.toggleTooltip(cell)}
                        // //(Optional) Callback fired when the user taps the tooltip
                    >
                        <TouchableWithoutFeedback
                            onPress={() => this.toggleTooltip(cell)}
                        >
                            <View style={stats_styles.clickable}>
                                <Text style={[stats_styles.cellText, stats_styles.cellTitle]}>
                                    {cell.short}
                                </Text>
                            </View>
                        </TouchableWithoutFeedback>
                    </Tooltip>
                </View>
            );
        });
    }

    toggleTooltip(row) {
        row.longVisible = !row.longVisible;
        this.setState({ toolTipVisible: true });
    }

    getRowCells(row) {
        let stats = row.stats.map((cell, index) => {
            let styles = [stats_styles.cell];
            if (index === 0) {
                styles.push(stats_styles.cellOpp);
            }
           return (
               <View key={index} style={styles}>
                   <Text style={stats_styles.cellText}>
                       {cell}
                   </Text>
               </View>
           );
        });
        return (
            <View style={stats_styles.row}>
                <View style={[stats_styles.cell]}>
                    <Tooltip
                        animated={true}
                        //(Optional) When true, tooltip will animate in/out when showing/hiding
                        arrowSize={{ width: 0, height: 0 }}
                        //(Optional) Dimensions of arrow bubble pointing to the highlighted element
                        backgroundColor="rgba(0,0,0)"
                        //(Optional) Color of the fullscreen background beneath the tooltip.
                        isVisible={row.longVisible}
                        //(Must) When true, tooltip is displayed
                        content={<Text>{row.opponentLong}</Text>}
                        //(Must) This is the view displayed in the tooltip
                        placement="top"
                        //(Must) top, bottom, left, right, auto.
                        onClose={() => this.toggleTooltip(row)}
                        // //(Optional) Callback fired when the user taps the tooltip
                    >
                        <TouchableWithoutFeedback
                            onPress={() => this.toggleTooltip(row)}
                        >
                            <View style={stats_styles.clickable}>
                                <Text style={[stats_styles.cellText, stats_styles.cellTitle, stats_styles.rowTitle, {backgroundColor: '#fff'}]}>
                                    {row.opponent}
                                </Text>
                            </View>
                        </TouchableWithoutFeedback>
                    </Tooltip>

                </View>
                {stats}
            </View>
        );
    }

    getGrid() {
        let statRows = this.stats.map((row, index) => {
            return (
                <View key={index}>
                    {this.getRowCells(row)}
                </View>
            );
        });
        return (
            <View style={stats_styles.grid}>
                <View style={stats_styles.row}>
                    {this.getHeaderRow(this.statTypes)}
                </View>
                {statRows}
            </View>
        );
    }

  render() {
        return (
            <View style={[styles.screen, stats_styles.screen]}>
                <Header title="Stats"/>
                <View style={[stats_styles.row, stats_styles.rowOuter, stats_styles.playerHeader]}>
                    <View>
                        <Text style={[stats_styles.playerUnderHeading, stats_styles.heading]}>
                            {this.player.name}
                        </Text>
                        <View style={styles.line}></View>
                    </View>
                </View>
                <View style={[stats_styles.row, stats_styles.rowOuter, stats_styles.playerInfo]}>
                    <View style={stats_styles.colEven}>
                        <Text style={[stats_styles.playerText, stats_styles.heading]}>
                            Position
                        </Text>
                        <Text style={[stats_styles.playerText]}>
                            {this.player.position}
                        </Text>
                    </View>
                    <View style={stats_styles.colEven}>
                        <Text style={[stats_styles.playerText, stats_styles.heading]}>
                            Age
                        </Text>
                        <Text style={[stats_styles.playerText]}>
                            {this.player.age}
                        </Text>
                    </View>
                </View>
                <View style={[stats_styles.row, stats_styles.rowOuter, stats_styles.playerInfo]}>
                    <View style={stats_styles.colEven}>
                        <Text style={[stats_styles.playerText, stats_styles.heading]}>
                            Hometown
                        </Text>
                        <Text style={[stats_styles.playerText]}>
                            {this.player.hometown}
                        </Text>
                    </View>
                    <View style={stats_styles.colEven}>
                        <Text style={[stats_styles.playerText, stats_styles.heading]}>
                            Year
                        </Text>
                        <Text style={[stats_styles.playerText]}>
                            {this.player.year}
                        </Text>
                    </View>
                </View>
                <View style={stats_styles.scrollContainer}>
                    <ScrollView style={stats_styles.scrollScreen}>
                        {this.getGrid()}
                    </ScrollView>
                </View>
            </View>
        );
    }
}

const stats_styles = StyleSheet.create({
    screen: {
      backgroundColor: MEDIUM_GRAY
    },
    scrollContainer: {
        borderTopColor: MEDIUM_GRAY,
        borderTopWidth: 1
    },
    scrollScreen: {
        maxHeight: 380,
        backgroundColor: MEDIUM_GRAY,
    },
    grid: {
      margin: 16,
        backgroundColor: '#fff'
    },
    row: {
        flexDirection: 'row',
        paddingLeft: 8,
        paddingRight: 8,
        justifyContent: 'center',
        alignItems: 'center',
        height: 45
    },
    cell: {
        width: 40,
        padding: 8,
    },
    cellOpp: {
        width: 45
    },
    cellTitle: {
      fontWeight: 'bold',
        // fontFamily: FONT_BOLD
    },
    rowTitle: {
      width: 50,
        textAlign: 'left',
        // fontFamily: FONT_SUB
    },
    cellText: {
      textAlign: 'center',
        // fontFamily: FONT_SUB
    },
    rowOuter: {
        padding: 4,
        paddingLeft: 0,
        paddingRight: 0
        // backgroundColor: LIGHT_COLOR
    },
    colEven: {
        // width: 180
        flex: 1
    },
    heading: {
        fontWeight: 'bold',
        fontFamily: FONT_BOLD,
        paddingBottom: 4
    },
    playerUnderHeading: {
        fontSize: 20,
        // textAlign: 'center',
        paddingLeft: 16,
        fontFamily: FONT_MAIN
    },
    playerText: {
       fontSize: 16,
        fontFamily: FONT_SUB
        // paddingLeft: 24,
        // textAlign: 'center'
    },
    playerHeader: {
      justifyContent: 'flex-start',
        backgroundColor: '#fff',
        paddingTop: 8,
    },
    playerInfo: {
        paddingLeft: 32,
        paddingBottom: 8,
        backgroundColor: '#fff'
    },
    clickable: {
        // width: 44,
        // height: 44
    }
});
