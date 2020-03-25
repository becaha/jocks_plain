import React from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';
import Header from '../components/Header'

export default function StatsScreen() {
  return (
    <ScrollView>
      <Header title="Stats"/>
      <Text>Stats</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
