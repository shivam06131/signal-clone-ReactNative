import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import {
  AntDesign,
  Fontisto,
  Feather,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useState } from "react";

const InputMessage = () => {
  const [message, setMessage] = useState("");
  const sendMessage = () => {
    //handle message send
    console.warn("sending message");
    setMessage("");
  };
  const onPlusClicked = () => {
    console.warn("plus button clicked");
  };
  const handlePress = () => {
    if (message) {
      sendMessage();
    } else { 
      onPlusClicked();
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Fontisto name="smiley" size={24} color="gray" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Signal Message..."
          value={message}
          onChangeText={(msg) => setMessage(msg)}
        />
        <Feather name="camera" size={24} color="gray" style={styles.icon} />
        <MaterialCommunityIcons
          name="microphone"
          size={24}
          color="gray"
          style={styles.icon}
        />
      </View>
      <Pressable onPress={handlePress} style={styles.right}>
        {!message ? (
          <AntDesign name="plus" size={20} color="white" style={styles.icon} />
        ) : (
          <Ionicons name="send" size={20} color="black" />
        )}
      </Pressable>
    </View>
  );
};

export default InputMessage;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 5,
    marginVertical: 5,
    alignItems: "center",
  },
  inputContainer: {
    flexDirection: "row",
    flex: 1,
    padding: 10,
    backgroundColor: "#f5f5f5",
    marginHorizontal: 10,
    borderRadius: 15,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#edebeb",
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
  },
  icon: {
    marginHorizontal: 5,
  },
  right: {
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3872E9",
  },
});
