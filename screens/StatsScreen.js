import React from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';
import Header from '../components/Header'

export class StatsScreen extends React.Component {
  render() {
        return (
            <ScrollView>
                <Header title="Stats"/>
                <Text>Stats</Text>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
