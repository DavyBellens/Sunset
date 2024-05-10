import { findByTitleAndType } from "@/components/images";
import { styles } from "@/constants/Colors";
import { LinearGradient } from "expo-linear-gradient";
import { Link, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Alert, Image, Pressable, Text, View } from "react-native";

export default function Venue() {
  const { name, type } = useLocalSearchParams();
  const [pressed, setPressed] = useState(false);
  const AlertMessage = () => {
    setPressed(!pressed);
    Alert.alert("Are you sure?", "Do you want to propose this venue?", [
      {
        text: "No",
        onPress: () => setPressed(false),
      },
      {
        text: "Yes",
        onPress: () => Alert.alert("Success", "Your proposal has been sent."),
        style: "default",
      },
    ]);
  };
  return (
    <View>
      <LinearGradient
        colors={["#63003b", "#ff3d3d"]}
        locations={[0, 1]}
        style={styles.linearGradient}
      />
      <View style={styles.venueView}>
        <View style={styles.back}>
          <Link href={".."} style={styles.backText}>
            Back
          </Link>
        </View>
        <Text style={{ ...styles.h1, marginTop: 0 }}>{name}</Text>
        <Image
          source={
            name &&
            type &&
            findByTitleAndType(name as string, type as string)?.image
          }
          style={styles.venueImage}
        />
        <Pressable
          style={{
            ...styles.proposeButton,
            backgroundColor: pressed ? "white" : "rgb(230, 130, 130)",
          }}
          onPress={() => AlertMessage()}
        >
          <Text
            style={{
              ...styles.proposeButtonText,
              color: pressed ? "rgb(230, 130, 130)" : "white",
            }}
          >
            Propose
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
