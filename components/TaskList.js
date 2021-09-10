import {FlatList, StyleSheet, View} from "react-native";
import React from "react";
import Task from "./Task";

export default function TaskList({taskList, setTaskList})  {
    const removeTask = (id) => {
        setTaskList((previousState) => {
            return previousState.filter((task) => task.id !== id)
        })
    }

    return (
        <View style={styles.container}>
            <FlatList keyExtractor={item => item.id.toString()}
                      data={taskList}
                      renderItem={({ item }) => (
                          <Task taskTitle={item.taskTitle}
                                taskId={item.id}
                                removeTask={removeTask}
                          />
                      )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#C1DBE3",
        alignItems: 'center',
        justifyContent: 'center',
    }
});