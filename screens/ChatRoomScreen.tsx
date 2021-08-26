import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Message from "../components/Message";
import chat from "../assets/dummy-data/Chats";
import { FlatList } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import InputMessage from "../components/InputMessage";
import { useRoute, useNavigation } from "@react-navigation/core";

const ChatRoomScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  console.warn(route.params?.id);
  navigation.setOptions({ title: "Shivam" });
  return (
    <View style={styles.page}>
      <FlatList
        data={chat.messages}
        renderItem={({ item }) => <Message message={item} />}
        inverted
      />
      <InputMessage />
    </View>
  );
};

export default ChatRoomScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
});
