import { Link } from "expo-router";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

export default function MenuItem({
  title,
  image,
}: {
  title: string;
  image: any;
}) {
  return (
    <View>
      <Link
        href={{
          pathname: "/category",
          params: {
            name: title,
          },
        }}
      >
        <View>
          <ImageBackground source={image} blurRadius={2} style={styles.image}>
            <View style={styles.imageText}>
              <Text style={styles.restaurantTitle}>{title}</Text>
            </View>
          </ImageBackground>
        </View>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
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
});
