import {StyleSheet, Text, View} from "react-native";
import React from "react";

export default function Header({username}) {
    return(
        <View style={styles.header}>
            <Text style={styles.headerText}>Here's your task {username}!</Text>
            <View style={styles.emphasis} />
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        bottom: 0,
        paddingTop: 20,
        justifyContent: "center"
    },
    headerText: {
        color: "#373737",
        fontSize: 24,
        marginBottom: 3,
        paddingTop: 25,
    },
    emphasis: {
        width: 320,
        marginTop: 0,
        height: 1,
        backgroundColor: "#373737",
    }
});