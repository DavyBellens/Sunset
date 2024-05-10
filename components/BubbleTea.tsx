import { styles } from "@/constants/Colors";
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
          bubbleTea.map((o, index) => (
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
