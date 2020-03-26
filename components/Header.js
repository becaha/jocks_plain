import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import {StyleSheet, Text, View} from "react-native";
import Constants from "expo-constants";
import {LIGHT_NEUTRAL, ACCENT_COLOR} from "../assets/styles/COLORS";
import {HEADER_HEIGHT} from "../assets/styles/NUMBERS";

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
        backgroundColor: LIGHT_NEUTRAL,
        height: Constants.statusBarHeight,
    },
    header: {
        backgroundColor: LIGHT_NEUTRAL,
        height: HEADER_HEIGHT,
        justifyContent: 'center'
    },
    title: {
        color: ACCENT_COLOR,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20
    }
});
