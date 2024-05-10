/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { Dimensions, StyleSheet } from "react-native";

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
  profilesView: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "white",
    maxHeight: 300,
    width: "90%",
  },
  profileImage: {
    left: 10,
    position: "absolute",
    width: 75,
    height: 75,
    borderRadius: 50,
    margin: 10,
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
  proposeButton: {
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "white",
    padding: 15,
  },
  proposeButtonText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  venueView: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: Dimensions.get("window").height,
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
  backText: { fontSize: 20, color: "white" },
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
  restaurantTitle: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    shadowColor: "black",
    textShadowColor: "rgba(0, 0, 0, 1)",
    textShadowOffset: { width: 2, height: 1 },
    textShadowRadius: 10,
  },
  image: {
    width: 200,
    height: 100,
    margin: 10,
    borderRadius: 10,
    overflow: "hidden",
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
  venueImage: {
    width: 200,
    height: 200,
    borderRadius: 10,
    margin: 10,
  },
});