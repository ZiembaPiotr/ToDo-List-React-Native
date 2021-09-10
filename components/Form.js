import {Pressable, StyleSheet, Text, TextInput, View} from "react-native";
import React, {useState} from "react";

export default function Form({taskListLength, setTaskListLength, setTaskList, isListVisible, isFormVisible}) {
    const [input, setInput] = useState("")

    const changeInput = (value) => {
        setInput(value)
    }

    const changeDisplayedContent = () => {
        isFormVisible(false)
        isListVisible(true)
        setInput("")
    }

    const confirmInput = () => {
        if(input.length >= 2){
            setTaskList((prevState) => [...prevState, {id: taskListLength + 1, taskTitle: input}])
        } else {
            alert("Task input field can not be empty!")
        }
    }

    const addToList = () => {
        confirmInput()
        setTaskListLength()
        changeDisplayedContent()
    }

    return(
        <View style={styles.container}>
            <Text style={styles.formText}>Add new task!</Text>
            <TextInput onChangeText={changeInput}
                       style={styles.taskInput}/>
            <Pressable style={styles.buttonContainer}
                       onPress={addToList}>
                <Text style={styles.formButton}>Confirm</Text>
            </Pressable>
            <Pressable style={styles.buttonContainer}
                       onPress={changeDisplayedContent}>
                <Text style={styles.formButton}>Back</Text>
            </Pressable>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#C1DBE3",
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "#373737",
        margin: 5,
        padding: 5,
    },
    formText:{
        color: "#373737",
        fontSize: 30,
        marginTop: 3,
        padding: 5,
        paddingBottom: 30,
        fontWeight: "bold"
    },
    taskInput: {
        margin: 8,
        padding: 5,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "#373737",
        fontSize: 20,
        color: "#373737",
        width: 300,
        height: 50,
    },
    formButton: {
        color: "#373737",
        fontSize: 24,
        margin: 3,
        padding: 5,
    }
});
