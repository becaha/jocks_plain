import React from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';

export default function StatsScreen() {
  return (
    <ScrollView>
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
