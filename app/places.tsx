import MenuItem from "@/components/MenuItem";
import {
  fastfoodMain,
  restaurantMain,
  drinkMain,
  coffeeMain,
  bubbleTeaMain,
  iceCreamMain,
} from "@/components/images";
import { LinearGradient } from "expo-linear-gradient";
import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import { styles } from "@/constants/Colors";
import { Link } from "expo-router";

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
          <Link href={".."} style={{ fontSize: 20, color: "white" }}>
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
