import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import {StyleSheet, Text, View} from "react-native";
import Constants from "expo-constants";
import {LIGHT_COLOR, MAIN_COLOR} from "../assets/styles/COLORS";

export default function Header(props) {
    return (
        <View>
            <View style={styles.statusBar}>
            </View>
            <View style={styles.header}>
                <Text style={styles.title}>
                    {props.title}
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    statusBar: {
        backgroundColor: LIGHT_COLOR,
        height: Constants.statusBarHeight,
    },
    header: {
        backgroundColor: LIGHT_COLOR,
        height: 56,
        justifyContent: 'center'
    },
    title: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20
    }
});
