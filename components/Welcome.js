import {Pressable, StyleSheet, Text, TextInput, View} from "react-native";
import React from "react";

export default function Welcome({assignUserName, changeWelcomeVisibility}) {
    return (
        <View style={styles.container}>
            <Text style={styles.welcomeText}>ToDo List</Text>
            <TextInput
                style={styles.userNameInput}
                placeholder="Username"
                onChangeText={assignUserName}
            />
            <Pressable style={styles.buttonContainer}>
                <Text style={styles.startButtonText} onPress={changeWelcomeVisibility}> START </Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#C1DBE3",
        alignItems: 'center',
        justifyContent: 'center',
    },
    welcomeText: {
        fontSize: 50,
        color: "#373737"
    },
    userNameInput: {
        margin: 8,
        padding: 5,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "#373737",
        fontSize: 34,
        color: "#373737",
        width: 230,
    },
    buttonContainer: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "#373737",
        margin: 5,
        padding: 5,
    },
    startButtonText: {
        color: "#373737",
        fontSize: 32
    }
});