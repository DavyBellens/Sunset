import { styles } from "@/constants/styles";
import { Link } from "expo-router";
import { ImageBackground, Text, View } from "react-native";

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
