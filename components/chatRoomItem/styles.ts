import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "row",
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginRight: 7,
  },
  badgeContainer: {
    backgroundColor: "#3872E9",
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    left: 43,
    top: 8,
    borderWidth: 1,
    borderColor: "white",
  },
  badgeText: {
    color: "white",
    fontSize: 12,
  },
  rightContainer: {
    flex: 1,
    justifyContent: "center",
  },
  name: {
    fontWeight: "bold",
    fontSize: 18,
  },
  text: {
    color: "gray",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default styles;