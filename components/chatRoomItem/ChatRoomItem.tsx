import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import styles from "./styles";

const ChatRoomItem = ({ chatRoom }) => {
  const message = chatRoom.lastMessage;
  const user = chatRoom.users[1];
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: user.imageUri,
        }}
        style={styles.image}
      />
      {chatRoom.newMessages ? (
        <View style={styles.badgeContainer}>
          <Text style={styles.badgeText}>{chatRoom.newMessages}</Text>
        </View>
      ) : null}
      <View style={styles.rightContainer}>
        <View style={styles.row}>
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.text}>{message.createdAt}</Text>
        </View>
        <Text style={styles.text} numberOfLines={1}>
          {message.content}
        </Text>
      </View>
    </View>
  );
};

export default ChatRoomItem;
