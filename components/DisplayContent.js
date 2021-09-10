import React, {useState} from "react";
import {StyleSheet, View} from "react-native";
import TaskList from "./TaskList";
import Form from "./Form";

export default function DisplayContent({taskListVisibility, formVisibility, isListVisible, isFormVisible})  {
    const [taskList, setTaskList] = useState([])
    const [taskListLength, setLength] = useState(0)

    const setTaskListLength = () => {
        setLength((prev) => prev + 1)
    }

    return(
        <View style={styles.container}>
            {taskListVisibility && <TaskList taskList={taskList}
                                             setTaskList={setTaskList}
                                    />
            }
            {formVisibility && <Form taskListLength={taskListLength}
                                     setTaskListLength={setTaskListLength}
                                     setTaskList={setTaskList}
                                     isListVisible={isListVisible}
                                     isFormVisible={isFormVisible}
                                />
            }
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