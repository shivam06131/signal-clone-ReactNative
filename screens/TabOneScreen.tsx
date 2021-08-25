import * as React from "react";
import { Image, Text, View, StyleSheet, FlatList } from "react-native";
import ChatRoomItem from "../components/chatRoomItem";
import chatRoomData from "../assets/dummy-data/ChatRooms";

export default function TabOneScreen({ navigation }) {
  return (
    <View style={styles.page}>
      <FlatList
        data={chatRoomData}
        renderItem={({ item }) => <ChatRoomItem chatRoom={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: "white",
    flex: 1,
  },
});
