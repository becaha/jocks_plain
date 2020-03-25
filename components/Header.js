import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import {StyleSheet, Text, View} from "react-native";
import Constants from "expo-constants";

export default function Header(props) {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>
                {props.title}
            </Text>
        </View>
    );
}


const styles = StyleSheet.create({
    header: {
        backgroundColor: '#0001ff',
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
