import { styles } from "@/constants/styles";
import { Link } from "expo-router";
import { Image, Text, View } from "react-native";
import { bubbleTea } from "./images";

export default function BubbleTea() {
  return (
    <View>
      <Text style={styles.h1}>Bubble Tea</Text>
      <View style={styles.container}>
        {bubbleTea &&
          bubbleTea.length > 0 &&
          // Use the spread operator to double the number of bubble tea images to fill the screen more
          [...bubbleTea, ...bubbleTea].map((o, index) => (
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
