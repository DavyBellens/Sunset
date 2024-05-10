import MenuItem from "@/components/MenuItem";
import {
  bubbleTeaMain,
  coffeeMain,
  drinkMain,
  fastfoodMain,
  iceCreamMain,
  restaurantMain,
} from "@/components/images";
import { styles } from "@/constants/styles";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import { ScrollView, Text, View } from "react-native";

export default function Index() {
  return (
    <ScrollView>
      <View style={styles.body}>
        <LinearGradient
          colors={["#63003b", "#ff3d3d"]}
          locations={[0, 1]}
          style={styles.linearGradient}
        />
        <View style={styles.back}>
          <Link href={".."} style={styles.backText}>
            Back
          </Link>
        </View>
        <Text style={styles.h1}>Pick a place</Text>
        <MenuItem title={"Restaurant"} image={restaurantMain.image} />
        <MenuItem title={"Quick bite"} image={fastfoodMain.image} />
        <MenuItem title={"Drinks"} image={drinkMain.image} />
        <MenuItem title={"Bubble Tea"} image={bubbleTeaMain.image} />
        <MenuItem title={"Coffee"} image={coffeeMain.image} />
        <MenuItem title={"Ice Cream"} image={iceCreamMain.image} />
      </View>
    </ScrollView>
  );
}
