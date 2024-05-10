import { findByTitleAndType } from "@/components/images";
import { LinearGradient } from "expo-linear-gradient";
import { Link, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import {
  Alert,
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { styles } from "@/constants/Colors";

export default function Venue() {
  const { name, type } = useLocalSearchParams();
  const [pressed, setPressed] = useState(false);
  const [venue, setVenue] = useState<
    { image: any; title: string; type: string } | undefined
  >(undefined);
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
  useEffect(() => {
    if (name && type) {
      const venue = findByTitleAndType(name as string, type as string);
      if (venue) setVenue(venue);
    }
  }, []);
  return (
    <View>
      <LinearGradient
        colors={["#63003b", "#ff3d3d"]}
        locations={[0, 1]}
        style={styles.linearGradient}
      />
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: Dimensions.get("window").height,
        }}
      >
        <View style={styles.back}>
          <Link href={".."} style={{ fontSize: 20, color: "white" }}>
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
          style={{
            width: 200,
            height: 200,
            borderRadius: 10,
            margin: 10,
          }}
        />
        <Pressable
          style={{
            borderRadius: 25,
            backgroundColor: pressed ? "white" : "transparent",
            borderWidth: 2,
            borderColor: "white",
            padding: 15,
          }}
          onPress={() => AlertMessage()}
        >
          <Text
            style={{
              color: pressed ? "rgb(230, 130, 130)" : "white",
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            Propose
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
