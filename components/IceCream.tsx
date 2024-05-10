import { styles } from "@/constants/Colors";
import { Link } from "expo-router";
import { Image, Text, View } from "react-native";
import { iceCream } from "./images";

export default function IceCream() {
  return (
    <View>
      <Text style={styles.h1}>Ice Cream</Text>
      <View style={styles.container}>
        {iceCream &&
          iceCream.length > 0 &&
          // Use the spread operator to double the number of bubble tea images to fill the screen more
          [...iceCream, ...iceCream].map((o, index) => (
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
