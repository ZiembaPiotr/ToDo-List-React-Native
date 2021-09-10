import {Pressable, StyleSheet, Text, View} from "react-native";
import React from "react";

export default function Footer ({isListVisible, isFormVisible}) {
    const changeDisplayerContent = () => {
        isListVisible(false)
        isFormVisible(true)
    }

    return(
        <View style={styles.footer}>
            <View style={styles.emphasis} />
            <Pressable style={styles.buttonContainer}
                       onPress={() => {changeDisplayerContent()}}>
                <Text style={styles.footerText}> Add new task!</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "#373737",
        margin: 5,
        padding: 5,
    },
    emphasis: {
        width: 320,
        marginTop: 0,
        height: 1,
        backgroundColor: "#373737",
    },
    footer: {
        alignItems: "center",
        justifyContent: "center",
        bottom: 0,
        paddingBottom: 20,
    },
    footerText: {
        color: "#373737",
        fontSize: 24,
        marginTop: 3,
        padding: 5,
    }
});