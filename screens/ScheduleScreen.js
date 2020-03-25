import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const games = [
    {
    date: 'Fri, Mar 13',
    opponent: 'Boston College',
    opponentShort: 'BC',
    score: 'W 15-7',
    time: '4 pm',
    departure: '6 am from IPF',
    arrival: '3 pm',
    field: 'Kittredge Field',
    address: '2510 Kittredge Loop Dr, Boulder, CO 80305',
    colors: {
      jersey: 'White',
      skirt: 'Blue',
      socks: 'White'
    }
  },
  {
    date: 'Sat, Mar 14',
    opponent: 'University of Michigan',
    opponentShort: 'UM',
    score: 'W 12-11',
    time: '12 pm',
    departure: '10 am from hotel',
    arrival: '11 am',
    field: 'Kittredge Field',
    address: '2510 Kittredge Loop Dr, Boulder, CO 80305',
    colors: {
      jersey: 'White',
      skirt: 'White',
      socks: 'Blue'
    }
  }
];

export default function ScheduleScreen() {
  const gameCards = games.map((game, index) => {
    return (
        <View>
            <Text>
                {game.opponent}
            </Text>
        </View>
    )
  });

  return (
    <ScrollView style={styles.container}>
        <View>
            {gameCards}
        </View>
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
