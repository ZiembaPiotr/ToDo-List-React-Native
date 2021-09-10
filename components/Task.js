import {useCycle} from "framer-motion";
import {Pressable, StyleSheet, Text, View} from "react-native";
import React from "react";

export default function Task({taskId, taskTitle, removeTask}) {
    const [taskStyle, setTaskStyle] = useCycle(styles.taskView, styles.taskViewExpand)

    const changeTaskStyle = () => {
        setTaskStyle()
    }

    return(
        <Pressable
            onPress={changeTaskStyle}
            onLongPress={() => {removeTask(taskId)}}>
            <View style={taskStyle}>
                <Text style={styles.taskText}>{taskTitle}</Text>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    taskView: {
        justifyContent: "center",
        alignItems: "center",
        margin: 7,
        padding: 10,
        width: 300,
        height: 50,
        borderWidth: 1,
        borderColor: "#373737",
        borderRadius: 10,
        backgroundColor: "#AE8CA3"
    },
    taskViewExpand: {
        margin: 7,
        padding: 10,
        width: 300,
        height: 150,
        borderWidth: 1,
        borderColor: "#373737",
        borderRadius: 10,
        backgroundColor: "#AE8CA3"
    },
    taskText: {
        fontSize: 18,
    }
});