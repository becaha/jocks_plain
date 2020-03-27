import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Header from '../components/Header';

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
                <View style={[styles.row, styles.rowOuter]}>
                    <View style={styles.colEven}>
                        <Text style={[styles.heading]}>
                            Player
                        </Text>
                        <Text style={styles.paddedL4}>
                            {this.player.name}
                        </Text>
                    </View>
                </View>
                <View style={[styles.row, styles.rowOuter]}>
                    <View style={styles.colEven}>
                        <Text style={[styles.heading]}>
                            Age
                        </Text>
                        <Text style={styles.paddedL4}>
                            {this.player.age}
                        </Text>
                    </View>
                    <View style={styles.colEven}>
                        <Text style={[styles.heading]}>
                            Position
                        </Text>
                        <Text style={styles.paddedL4}>
                            {this.player.position}
                        </Text>
                    </View>
                </View>
                <View style={[styles.row, styles.rowOuter]}>
                    <View style={styles.colEven}>
                        <Text style={[styles.heading]}>
                            Year
                        </Text>
                        <Text style={styles.paddedL4}>
                            {this.player.year}
                        </Text>
                    </View>
                    <View style={styles.colEven}>
                        <Text style={[styles.heading]}>
                            Hometown
                        </Text>
                        <Text style={styles.paddedL4}>
                            {this.player.hometown}
                        </Text>
                    </View>
                </View>
                <View>
                    {this.getGrid()}
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
    }
});
