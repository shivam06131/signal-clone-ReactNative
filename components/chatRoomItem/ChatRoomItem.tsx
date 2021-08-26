import React from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/core";
import styles from "./styles";

const ChatRoomItem = ({ chatRoom }) => {
  const navigation = useNavigation();
  const message = chatRoom.lastMessage;
  const user = chatRoom.users[1];
  // console.log("user", user);

  const handleItemPress = () => {
    console.log("pressed on", user.name);
    navigation.navigate("ChatRoom", { id: chatRoom.id });
  };
  return (
    <Pressable style={styles.container} onPress={handleItemPress}>
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
    </Pressable>
  );
};

export default ChatRoomItem;
