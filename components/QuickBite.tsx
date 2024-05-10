import { styles } from "@/constants/Colors";
import { Link } from "expo-router";
import { Image, Text, View } from "react-native";
import { fastfood } from "./images";

export default function QuickBite() {
  return (
    <View>
      <Text style={styles.h1}>Quick Bite</Text>
      <View style={styles.container}>
        {fastfood &&
          fastfood.length > 0 &&
          fastfood.map((image, index) => (
            <View key={index} style={styles.picContainer}>
              <Link
                href={{
                  pathname: "/venue",
                  params: {
                    name: image.title,
                    type: image.type,
                  },
                }}
              >
                <View>
                  <Image
                    key={index}
                    source={image.image}
                    alt={image.title}
                    style={styles.picture}
                  />
                </View>
              </Link>
            </View>
          ))}
      </View>
    </View>
  );
}
