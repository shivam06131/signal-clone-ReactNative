import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Message = ({ message }) => {
  const myId = "u1";
  const isMe = message.user.id === myId;

  return (
    <View
      style={[
        styles.container,
        isMe ? styles.rightContainer : styles.leftContainer,
      ]}
    >
      <Text style={{ color: isMe ? "black" : "white", paddingRight: "auto" }}>
        {message.content}
      </Text>
    </View>
  );
};

export default Message;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
    maxWidth: "70%",
    borderRadius: 10,
  },
  leftContainer: {
    backgroundColor: "#3777f0",
    marginLeft: 10,
    marginRight: "auto",
  },
  rightContainer: {
    backgroundColor: "lightgrey",
    marginLeft: "auto",
    marginRight: 10,
  },
});
