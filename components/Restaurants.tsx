import { styles } from "@/constants/Colors";
import { Link } from "expo-router";
import { Image, Text, View } from "react-native";
import { restaurant } from "./images";

export default function Restaurants() {
  return (
    <View>
      <Text style={styles.h1}>Restaurants</Text>
      <View style={styles.container}>
        {restaurant &&
          restaurant.length > 0 &&
          [...restaurant, ...restaurant].map((o, index) => (
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
