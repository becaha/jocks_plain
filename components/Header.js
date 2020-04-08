import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import {StyleSheet, Text, View} from "react-native";
import Constants from "expo-constants";
import {
    LIGHT_NEUTRAL,
    ACCENT_COLOR,
    LIGHT_COLOR,
    MAIN_COLOR,
    LIGHT_GRAY,
    MEDIUM_GRAY,
    DARK_GRAY, BLACK_GRAY
} from "../assets/styles/COLORS";
import {HEADER_HEIGHT, FONT_SUB, FONT_MAIN} from "../assets/styles/NUMBERS";

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
        backgroundColor: LIGHT_GRAY,
        height: Constants.statusBarHeight,
    },
    header: {
        backgroundColor: LIGHT_GRAY,
        height: HEADER_HEIGHT,
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: MEDIUM_GRAY
    },
    title: {
        color: ACCENT_COLOR,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 22,
        fontFamily: FONT_MAIN
    }
});
