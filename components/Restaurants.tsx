import { Image, ScrollView, StyleSheet, View } from "react-native";
import { r1, r2 } from "./images.js";

export default function Restaurants() {
  const images = [r1, r2, r1, r1, r1, r1, r1, r1, r1, r1, r1, r1, r1];
  return (
    <View>
      <ScrollView horizontal>
        <View style={styles.container}>
          {images.map((image, index) => (
            <Image
              key={index}
              source={image}
              style={styles.picture}
              width={10}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  picture: {
    width: 100,
    height: 100,
    borderRadius: 10,
    margin: 10,
  },
});
