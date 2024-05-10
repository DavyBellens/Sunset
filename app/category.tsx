import BubbleTea from "@/components/BubbleTea";
import CoffeeShop from "@/components/CoffeeShop";
import Drinks from "@/components/Drinks";
import IceCream from "@/components/IceCream";
import QuickBite from "@/components/QuickBite";
import Restaurants from "@/components/Restaurants";
import { LinearGradient } from "expo-linear-gradient";
import { Link, useLocalSearchParams } from "expo-router";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { styles } from "@/constants/Colors";
export default function Category() {
  const name = String(useLocalSearchParams().name);

  return (
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
      {name == "Ice Cream" ? (
        <View>
          <IceCream />
        </View>
      ) : name == "Restaurant" ? (
        <View>
          <Restaurants />
        </View>
      ) : name == "Quick bite" ? (
        <View>
          <QuickBite />
        </View>
      ) : name == "Drinks" ? (
        <Drinks />
      ) : name == "Bubble Tea" ? (
        <View>
          <BubbleTea />
        </View>
      ) : name == "Coffee" ? (
        <View>
          <CoffeeShop />
        </View>
      ) : (
        <Text>Category not found</Text>
      )}
    </View>
  );
}
