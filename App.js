import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, View, TouchableWithoutFeedback, Keyboard} from 'react-native';
import Welcome from "./components/Welcome"
import Header from "./components/Header";
import DisplayContent from "./components/DisplayContent"
import Footer from "./components/Footer"

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
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          {!welcomeVisibility && (<Header username={username}/>)}
          {welcomeVisibility && (<Welcome assignUserName={assignUserName}
                                          changeWelcomeVisibility={changeWelcomeVisibility}
                                />)
          }
          {!welcomeVisibility && (<DisplayContent taskListVisibility={taskListVisibility}
                                                  formVisibility={formVisibility}
                                                  isListVisible={isListVisible}
                                                  isFormVisible={isFormVisible}
                                  />)
          }
          {!welcomeVisibility && (<Footer isListVisible={isListVisible}
                                          isFormVisible={isFormVisible}
                                  />)
          }
          <StatusBar style="auto" />
        </View>
      </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C1DBE3",
    alignItems: 'center',
    justifyContent: 'center',
  }});
