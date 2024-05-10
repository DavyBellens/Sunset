import { styles } from "@/constants/Colors";
import { Link } from "expo-router";
import { Image, Text, View } from "react-native";
import { coffee } from "./images";


export default function CoffeeShop() {
  return (
    <View>
      <Text style={styles.h1}>Coffee Shop</Text>
      <View style={styles.container}>
        {coffee &&
          coffee.length > 0 &&
          [...coffee, ...coffee].map((image, index) => (
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