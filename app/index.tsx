import QuickBite from "@/components/QuickBite";
import Restaurants from "@/components/Restaurants";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.h1}>Pick a place</Text>
        <Text style={styles.h2}>Restaurant</Text>
        <Restaurants />
        <Text style={styles.h2}>Quick bite</Text>
        <QuickBite />

        <Text>Edit app/index.tsx to edit this screen.</Text>
        <Text>Edit app/index.tsx to edit this screen.</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  h1: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    margin: 50,
    marginTop: 100,
  },
  h2: {
    margin: 15,
    fontSize: 20,
    fontWeight: "bold",
  },
});
