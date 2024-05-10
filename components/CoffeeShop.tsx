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
          // Use the spread operator to double the number of coffee images to fill the screen more
          [...coffee, ...coffee].map((o, index) => (
            <View key={index} style={styles.picContainer}>
              <Link
                href={{
                  pathname: "/venue",
                  params: {
                    name: o.title,
                    type: o.type,
                  },
                }}
              >
                <View>
                  <Image
                    key={index}
                    source={o.image}
                    alt={o.title}
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
