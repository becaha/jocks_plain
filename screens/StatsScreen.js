import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Header from '../components/Header';
import {BACKGROUND, DARK_NEUTRAL, MEDIUM_NEUTRAL} from "../assets/styles/COLORS";
import {SCROLL_SCREEN_HEIGHT} from "../assets/styles/NUMBERS";

const statTypes = ['', 'S', 'G', 'TO', 'TA', 'GB', 'F', 'FP'];
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
            return (
                <View key={index} style={[styles.cell]}>
                    <Text style={[styles.cellText, styles.cellTitle]}>
                        {cell}
                    </Text>
                </View>
            );
        });
    }

    getRowCells(row) {
        let stats = row.stats.map((cell, index) => {
           return (
               <View key={index} style={styles.cell}>
                   <Text style={styles.cellText}>
                       {cell}
                   </Text>
               </View>
           );
        });
        return (
            <View style={styles.row}>
                <View style={[styles.cell]}>
                    <Text style={[styles.cellText, styles.cellTitle, styles.rowTitle]}>
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
            <View style={styles.grid}>
                <View style={styles.row}>
                    {this.getHeaderRow(this.statTypes)}
                </View>
                {statRows}
            </View>
        );
    }

  render() {
        return (
            <View>
                <Header title="Stats"/>
                <View style={[styles.row, styles.rowOuter, styles.playerHeader]}>
                    <View style={styles.colEven}>
                        <Text style={[styles.playerUnderHeading, styles.heading]}>
                            Player
                        </Text>
                        <Text style={styles.playerUnderHeading}>
                            {this.player.name}
                        </Text>
                    </View>
                </View>
                <View style={[styles.row, styles.rowOuter]}>
                    <View style={styles.colEven}>
                        <Text style={[styles.heading, styles.playerText]}>
                            Age
                        </Text>
                        <Text style={[styles.playerText]}>
                            {this.player.age}
                        </Text>
                    </View>
                    <View style={styles.colEven}>
                        <Text style={[styles.heading, styles.playerText]}>
                            Position
                        </Text>
                        <Text style={[styles.playerText]}>
                            {this.player.position}
                        </Text>
                    </View>
                </View>
                <View style={[styles.row, styles.rowOuter]}>
                    <View style={styles.colEven}>
                        <Text style={[styles.heading, styles.playerText]}>
                            Year
                        </Text>
                        <Text style={[styles.playerText]}>
                            {this.player.year}
                        </Text>
                    </View>
                    <View style={styles.colEven}>
                        <Text style={[styles.heading, styles.playerText]}>
                            Hometown
                        </Text>
                        <Text style={[styles.playerText]}>
                            {this.player.hometown}
                        </Text>
                    </View>
                </View>
                <View>
                    <ScrollView style={styles.screen}>
                        {this.getGrid()}
                    </ScrollView>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
    screen: {
        maxHeight: 380,
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
    cellTitle: {
      fontWeight: 'bold',
    },
    rowTitle: {
      width: 50,
        textAlign: 'left'
    },
    cellText: {
      textAlign: 'center',
    },
    card: {
        backgroundColor: '#000',
        // marginLeft: 4
    },
    rowOuter: {
        padding: 4,
        backgroundColor: DARK_NEUTRAL
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
        // paddingBottom: 4,
        fontWeight: 'bold',
    },
    playerUnderHeading: {
        fontSize: 18,
        textAlign: 'left',
    },
    playerText: {
       fontSize: 16,
        paddingLeft: 24
    },
    playerHeader: {
      justifyContent: 'flex-start',
        paddingLeft: 16
    }

});
