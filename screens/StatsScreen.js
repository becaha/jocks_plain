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


const statTypes = ['Opp', 'S', 'G', 'TO', 'TA', 'GB', 'F', 'FP'];
const stats = [
    {opponent: 'BC', stats: [0,3,4,2,1,0,0]},
    {opponent: 'UM', stats: [2,3,6,1,1,0,3]},
    {opponent: 'NE', stats: [0,3,4,2,1,0,0]},
    {opponent: 'UU', stats: [0,0,0,0,0,0,0]},
    {opponent: 'USU', stats: [0,0,0,0,0,0,0]},
    {opponent: 'BSU', stats: [0,0,0,0,0,0,0]},
    {opponent: 'UVU', stats: [0,0,0,0,0,0,0]},
    {opponent: 'R', stats: [0,0,0,0,0,0,0]},
    {opponent: 'R', stats: [0,0,0,0,0,0,0]},
    {opponent: 'N', stats: [0,0,0,0,0,0,0]},
    {opponent: 'N', stats: [0,0,0,0,0,0,0]},
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
    }

    getHeaderRow(row) {
        return row.map((cell, index) => {
            let styles = [stats_styles.cell];
            if (index === 0) {
                styles.push(stats_styles.cellOpp);
            }
            return (
                <View key={index} style={styles}>
                    <Text style={[stats_styles.cellText, stats_styles.cellTitle]}>
                        {cell}
                    </Text>
                </View>
            );
        });
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
                    <Text style={[stats_styles.cellText, stats_styles.cellTitle, stats_styles.rowTitle]}>
                        {row.opponent}
                    </Text>
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
        alignItems: 'center'
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
    }
});
