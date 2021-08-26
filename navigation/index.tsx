/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName, Pressable, Text, View, Image } from "react-native";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import ModalScreen from "../screens/ModalScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import TabOneScreen from "../screens/HomeScreen";
import TabTwoScreen from "../screens/TabTwoScreen";
import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from "../types";
import LinkingConfiguration from "./LinkingConfiguration";
import ChatRoomScreen from "../screens/ChatRoomScreen";
import HomeScreen from "../screens/HomeScreen";
import { Feather, Ionicons, Entypo } from "@expo/vector-icons";
import { useHeaderHeight } from "@react-navigation/elements";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  // const headerHeight = useHeaderHeight();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: true,
          headerTitle: HomeHeader,
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="ChatRoom"
        component={ChatRoomScreen}
        options={{
          headerShown: true,
          headerTitle: ChatroomHeader,
          headerStyle: { backgroundColor: "#3777f0" },
          // title: "shivam",
        }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
    </Stack.Navigator>
  );
}

const HomeHeader = (props) => {
  return (
    <View
      style={{
        flexDirection: "row",
        // backgroundColor: "yellow",
        width: "100%",
        marginLeft: "-3%",
        alignItems: "center",
        marginVertical: 0,
      }}
    >
      <Image
        source={{
          uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg",
        }}
        style={{ height: 25, width: 25, borderRadius: 12 }}
      />
      <Text style={{ flex: 1, textAlign: "center", fontWeight: "bold" }}>
        Signal
      </Text>
      <View style={{ flexDirection: "row" }}>
        <Feather
          name="camera"
          size={24}
          color="black"
          style={{ marginHorizontal: 5 }}
        />
        <Feather
          name="edit-2"
          size={24}
          color="black"
          style={{ marginHorizontal: 5 }}
        />
      </View>
    </View>
  );
};

const ChatroomHeader = (props) => {
  console.log("props", props);
  return (
    <View
      style={{
        flexDirection: "row",
        width: "100%",
        marginLeft: "-10%",
        alignItems: "center",
      }}
    >
      <Image
        source={{
          uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg",
        }}
        style={{ height: 25, width: 25, borderRadius: 12 }}
      />
      <Text
        style={{
          flex: 1,
          textAlign: "left",
          fontWeight: "bold",
          paddingLeft: 20,
          fontSize: 18,
          color: "white",
        }}
      >
        {props.children}
      </Text>
      <View style={{ flexDirection: "row" }}>
        <FontAwesome
          name="video-camera"
          size={24}
          color="black"
          style={{ marginHorizontal: 5, color: "white", marginRight: 10 }}
        />

        <Ionicons
          name="ios-call"
          size={24}
          color="black"
          style={{ marginHorizontal: 5, color: "white", marginRight: 10 }}
        />
        <Entypo
          name="dots-three-vertical"
          size={24}
          color="black"
          style={{ marginHorizontal: 5, color: "white" }}
        />
      </View>
    </View>
  );
};
