import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View, Pressable, Image, ScrollView, FlatList} from 'react-native';

export default function App() {
  const [username, setUserName] = useState("")
  const [welcomeVisibility, setWelcomeVisibility] = useState(true)

  const [taskListVisibility, isListVisible] = useState(true)
  const [formVisibility, isFormVisible] = useState(false)

  const assignUserName = (value) => {
    setUserName(value)
  }

  const changeWelcomeVisibility = () => {
    if(username !== ""){
      setWelcomeVisibility(false)
    } else {
      alert("Insert username first!")
    }
  }

  return (
      <View style={styles.container}>
        {!welcomeVisibility && (<Header username={username}/>)}
        {welcomeVisibility && (<Welcome assignUserName={assignUserName} changeWelcomeVisibility={changeWelcomeVisibility} />)}
        {!welcomeVisibility && (<Displayer taskListVisibility={taskListVisibility} formVisibility={formVisibility} isListVisible={isListVisible} isFormVisible={isFormVisible}/>)}
        {!welcomeVisibility && (<Footer isListVisible={isListVisible} isFormVisible={isFormVisible}/>)}
        <StatusBar style="auto" />
      </View>
  );
}

const Welcome = ({assignUserName, changeWelcomeVisibility}) => {
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

const Header = ({username}) => {
  return(
      <View style={styles.header}>
        <Text style={styles.headerText}>Here's your task {username}!</Text>
        <View style={styles.emphasis} />
      </View>
  );
}

const Displayer = ({taskListVisibility, formVisibility, isListVisible, isFormVisible}) => {
  const [taskList, setTaskList] = useState([{id: 1, taskTitle: "XD"}])

  return(
      <View style={styles.container}>
        {taskListVisibility && <TaskList taskList={taskList}/>}
        {formVisibility && <Form taskList={taskList} setTaskList={setTaskList} isListVisible={isListVisible} isFormVisible={isFormVisible}/>}
      </View>
  );
}

const TaskList = ({taskList}) => {
  return (
      <View style={styles.container}>
        <FlatList
            keyExtractor={item => item.id.toString()}
            data={taskList}
            renderItem={({ item }) => (
                <Task taskId={item.id} taskTitle={item.taskTitle}/>
            )} />
      </View>
  );
}

const Task = ({taskId, taskTitle}) => {
  return(
      <View style={styles.taskView}>
        <Text style={styles.taskText}>{taskId}</Text>
        <Text style={styles.taskText}>{taskTitle}</Text>
      </View>
  );
}

const Footer = ({isListVisible, isFormVisible}) => {
  const changeDisplayerContent = () => {
    isListVisible(false)
    isFormVisible(true)
  }

  return(
    <View style={styles.footer}>
      <View style={styles.emphasis} />
      <Pressable
          style={styles.buttonContainer}
          onPress={() => {changeDisplayerContent()}}>
        <Text style={styles.footerText}> Add new task!</Text>
      </Pressable>
    </View>
  );
}

const Form = ({taskList, setTaskList, isListVisible, isFormVisible}) => {
  const [input, setInput] = useState("")

  const changeInput = (value) => {
    setInput(value)
  }

  const changeDisplayerContent = () => {
    isFormVisible(false)
    isListVisible(true)
    setInput("")
  }

  const confirmInput = () => {
    const newItemKey = taskList.length + 1
    setTaskList({id: newItemKey, taskTitle: input})
  }

  const addToList = () => {
    confirmInput()
    changeDisplayerContent()
    console.log(taskList)
  }

  return(
      <View style={styles.container}>
        <TextInput
            onChangeText={changeInput}
            style={styles.taskInput}/>
        <Pressable
            style={styles.buttonContainer}
            onPress={addToList}>
          <Text style={styles.formConfirmButton}>Confirm</Text>
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
  },
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
  },
  taskContainer: {
    backgroundColor: "#C1DBE3",
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10
  },
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
  formConfirmButton: {
    color: "#373737",
    fontSize: 24,
    margin: 3,
    padding: 5,
  }
});
