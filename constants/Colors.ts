/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { Dimensions, StyleSheet } from "react-native";

const tintColorLight = "#0a7ea4";
const tintColorDark = "#fff";

export const styles = StyleSheet.create({
  profiles: {
    backgroundColor: "white",
    borderStyle: "solid",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(10,10,10, 0.2)",
    padding: 15,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: 100,
  },
  proposeLink: {
    color: "white",
    padding: 10,
    position: "absolute",
    right: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#990033",
    borderRadius: 10,
  },
  back: {
    position: "absolute",
    top: 10,
    left: 10,
    padding: 10,
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  body: {
    color: "#fff",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    minHeight: Dimensions.get("window").height,
  },
  imageText: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  linearGradient: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
  },
  restaurantContainer: {
    display: "flex",
    alignItems: "center",
  },
  restaurantTitle: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  image: {
    width: 200,
    height: 100,
    borderRadius: 10,
    margin: 10,
  },
  h1: {
    color: "#fff",
    textAlign: "center",
    fontSize: 34,
    fontWeight: "bold",
    margin: 50,
    marginTop: 75,
  },
  h2: {
    color: "white",
    margin: 15,
    fontSize: 20,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  picContainer: {
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  picture: {
    width: 100,
    height: 100,
    borderRadius: 10,
    margin: 10,
  },
});

export const Colors = {
  light: {
    text: "#11181C",
    background: "#fff",
    tint: tintColorLight,
    icon: "#687076",
    tabIconDefault: "#687076",
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: "#ECEDEE",
    background: "#151718",
    tint: tintColorDark,
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: tintColorDark,
  },
};
