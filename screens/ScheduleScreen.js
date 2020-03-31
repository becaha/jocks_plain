import React from 'react';
import { TouchableHighlight, View, Text, ScrollView, StyleSheet } from 'react-native';
import Header from "../components/Header";
import {SCREEN_HEIGHT, SCROLL_SCREEN_HEIGHT} from "../assets/styles/NUMBERS";
import { Card } from 'react-native-material-ui';
import {
    BACKGROUND,
    LIGHT_NEUTRAL,
    DARK_NEUTRAL,
    MEDIUM_NEUTRAL,
    MEDIUM_COLOR,
    LIGHT_COLOR, LIGHTER_COLOR, MAIN_COLOR
} from "../assets/styles/COLORS";
import {Ionicons} from "@expo/vector-icons";
import {TouchableWithoutFeedback} from "react-native-web";


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
      jersey: '#fff',
      skirt: '#00033b',
      socks: '#fff'
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
      jersey: '#fff',
      skirt: '#fff',
      socks: '#00033b'
    }
  },
    {
        date: 'Sat, Mar 14',
        opponent: 'Northeastern',
        opponentShort: 'NE',
        score: '',
        time: '6 pm',
        departure: '4 pm from hotel',
        arrival: '5 pm',
        field: 'Kittredge Field',
        address: '2510 Kittredge Loop Dr, Boulder, CO 80305',
        colors: {
            jersey: '#fff',
            skirt: '#fff',
            socks: '#00033b'
        }
    },
    {
        date: 'Sat, Mar 28',
        opponent: 'University of Utah',
        opponentShort: 'U',
        score: '',
        time: '3 pm',
        departure: '1 pm from IPF',
        arrival: '2 pm',
        field: 'WUF',
        address: '1125 N University Ave, Provo, UT 84604',
        colors: {
            jersey: '#fff',
            skirt: '#fff',
            socks: '#00033b'
        }
    },
    {
        date: 'Fri, Apr 3',
        opponent: 'Utah State University',
        opponentShort: 'USU',
        score: '',
        time: '3:30 pm',
        departure: '1:30 pm from IPF',
        arrival: '2:30 pm',
        field: 'WUF',
        address: '1125 N University Ave, Provo, UT 84604',
        colors: {
            jersey: '#fff',
            skirt: '#fff',
            socks: '#00033b'
        }
    },
    {
        date: 'Sat, Apr 4',
        opponent: 'Boise State University',
        opponentShort: 'BSU',
        score: '',
        time: '10 am',
        departure: '9 am from IPF',
        arrival: '11 am',
        field: 'UVU Geneva Fields',
        address: 'Utah Valley University Geneva Fields, W 40 S, Vineyard, UT 84058',
        colors: {
            jersey: '#fff',
            skirt: '#fff',
            socks: '#00033b'
        }
    },
    {
        date: 'Sat, Apr 4',
        opponent: 'UVU',
        opponentShort: 'UVU',
        score: '',
        time: '1 pm',
        departure: '11 am from IPF',
        arrival: '12 pm',
        field: 'UVU Geneva Fields',
        address: 'Utah Valley University Geneva Fields, W 40 S, Vineyard, UT 84058',
        colors: {
            jersey: '#fff',
            skirt: '#fff',
            socks: '#00033b'
        }
    },
    {
        date: 'Fri, Apr 17',
        opponent: 'TBD',
        opponentShort: 'R',
        score: '',
        time: 'TBD',
        departure: 'TBD',
        arrival: 'TBD',
        field: 'Aggie Legacy Fields',
        address: 'USU Legacy Fields, Utah State University, Logan, UT 84321',
        colors: {
            jersey: '#fff',
            skirt: '#fff',
            socks: '#00033b'
        }
    },
    {
        date: 'Sat, Apr 18',
        opponent: 'TBD',
        opponentShort: 'R',
        score: '',
        time: 'TBD',
        departure: 'TBD',
        arrival: 'TBD',
        field: 'Aggie Legacy Fields',
        address: 'USU Legacy Fields, Utah State University, Logan, UT 84321',
        colors: {
            jersey: '#fff',
            skirt: '#fff',
            socks: '#00033b'
        }
    },
    {
        date: 'Wed, May 6',
        opponent: 'TBD',
        opponentShort: 'N',
        score: '',
        time: 'TBD',
        departure: 'TBD',
        arrival: 'TBD',
        field: 'Round Rock Complex',
        address: 'Round Rock, Texas',
        colors: {
            jersey: '#fff',
            skirt: '#fff',
            socks: '#00033b'
        }
    }
];

export class ScheduleScreen extends React.Component {

    constructor(props) {
        super(props);
        this.showBodies = [];
        this.games = games;
        this.state = {toggle: true};
    }

    getColorIcon(color) {
        if (color === '#fff') {
            return (<Ionicons name="ios-square-outline" size={25} color='#000'/>);
        }
        return (<Ionicons name="ios-square" size={25} color={color}/>);
    }

    toggleDrop(event, gameIndex) {
        console.log("toggle");
        if (this.showBodies.includes(gameIndex)) {
            // take out
            this.showBodies = this.showBodies.filter(i => i !== gameIndex);
        } else {
            this.showBodies.push(gameIndex);
        }
        this.setState({toggle: true});
        console.log("end toggle")
    }

    getBody(game, gameIndex) {
        if (this.showBodies.includes(gameIndex)) {
            return (<View style={styles.cardBody}>
                <View style={[styles.row, styles.rowOuter]}>
                    <View style={styles.colEven}>
                        <Text style={[styles.heading]}>
                            Departure
                        </Text>
                        <Text style={styles.paddedL4}>
                            {game.departure}
                        </Text>
                    </View>
                    <View style={styles.colEven}>
                        <Text style={[styles.heading]}>
                            Arrival
                        </Text>
                        <Text style={styles.paddedL4}>
                            {game.arrival}
                        </Text>
                    </View>
                </View>
                <View style={[styles.rowCol, styles.rowOuter]}>
                    <Text style={[styles.heading]}>
                        Location
                    </Text>
                    <Text style={styles.paddedL4}>
                        {game.address}
                    </Text>
                </View>
                <View style={styles.rowCol}>
                    <Text style={[styles.heading]}>
                        Colors
                    </Text>
                    <View style={[styles.row, styles.paddedL4]}>
                        {this.getColorIcon(game.colors.jersey)}
                        <Text style={styles.paddedL8}>
                            Jersey
                        </Text>
                    </View>
                    <View style={[styles.row, styles.paddedL4]}>
                        {this.getColorIcon(game.colors.skirt)}
                        <Text style={styles.paddedL8}>
                            Skirt
                        </Text>
                    </View>
                    <View style={[styles.row, styles.paddedL4]}>
                        {this.getColorIcon(game.colors.socks)}
                        <Text style={styles.paddedL8}>
                            Socks
                        </Text>
                    </View>
                </View>
            </View>);
        }
        return null;
    }

    getGameCards() {
        let gameCards = this.games.map((game, index) => {
            return (
                <View key={index} style={styles.card}>
                    <TouchableWithoutFeedback onPress={(event) => this.toggleDrop(event, index)}>
                        <View>
                            <View style={[styles.row, styles.rowOuter, styles.rowHeaderHead]}>
                                <Text>
                                    {game.date}
                                </Text>
                                <View style={[styles.row, styles.rowOuter]}>
                                    <Text>
                                        {game.score}
                                    </Text>
                                    <View style={styles.boundingBox}>
                                        <Ionicons name="ios-arrow-down" size={20} color="#000"/>
                                    </View>
                                </View>
                            </View>
                            <View style={[styles.row, styles.rowOuter, styles.rowHeaderBody]}>
                                <Text style={styles.col0}>{game.time}    |</Text>
                                <Text>    {game.opponent}    |    </Text>
                                <Text style={styles.col2}>{game.field}    </Text>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                    {this.getBody(game, index)}
                </View>
            )
        });
        return gameCards;
    }

    handleScroll(event) {
        console.log("scroll", event);
    }

  render() {
        return (
          <View style={styles.screen}>
              <Header title="Game Schedule"/>
              <View>
                  <ScrollView style={styles.scrollScreen}>
                      <View style={styles.cardContainer}>
                        {this.getGameCards()}
                      </View>
                  </ScrollView>
              </View>
          </View>
      );
  }
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
    screen: {
        backgroundColor: LIGHTER_COLOR,
        height: SCREEN_HEIGHT
    },
    scrollScreen: {
      maxHeight: SCROLL_SCREEN_HEIGHT,
    },
    cardContainer: {
        borderBottomWidth: 4,
        borderBottomColor: MAIN_COLOR
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rowOuter: {
        padding: 8,
    },
    rowHeaderHead: {
        backgroundColor: LIGHT_COLOR,
        padding: 0,
        paddingLeft: 12,
        paddingRight: 12,
        justifyContent: 'space-between',
        borderTopWidth: 4,
        borderTopColor: MAIN_COLOR
    },
    rowHeaderBody: {
        backgroundColor: MEDIUM_COLOR,
        padding: 14,
        paddingLeft: 8,
        paddingRight: 8
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
        // width: 70,
        // flex: 2,
        // flexShrink: 2
    },
    // col1: {
    //     // width: 180,
    //     flex: 5,
    //     flexShrink: 1
    // },
    col2: {
        paddingRight: 8,
        flex: 3,
        flexShrink: 2,
        // alignSelf: 'center',
        // textAlign: 'center'
    },
    cardBody: {
        backgroundColor: LIGHTER_COLOR,
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
    paddedV: {
        padding: 4,
        paddingLeft: 0,
        paddingRight: 0
    },
    heading: {
        paddingBottom: 4,
        fontWeight: 'bold'
    }
});
