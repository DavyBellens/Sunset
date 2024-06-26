import { styles } from "@/constants/styles";
import { Link } from "expo-router";
import { Image, Text, View } from "react-native";
import { drink } from "./images";

export default function Drinks() {
  return (
    <View>
      <Text style={styles.h1}>Drinks</Text>
      <View style={styles.container}>
        {drink &&
          drink.length > 0 &&
          // Use the spread operator to double the number of drink images to fill the screen more
          [...drink, ...drink].map((o, index) => (
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
