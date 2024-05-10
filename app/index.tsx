import { Image, ScrollView, Text, View } from "react-native";
import { styles } from "@/constants/Colors";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import { tinder } from "@/components/images";

export default function YourMatches() {
  return (
    <ScrollView>
      <View style={styles.body}>
        <LinearGradient
          colors={["#63003b", "#ff3d3d"]}
          locations={[0, 1]}
          style={styles.linearGradient}
        />
        <Text style={styles.h1}>Your Matches</Text>
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
            borderRadius: 10,
            backgroundColor: "white",
            maxHeight: 300,
            width: "90%",
          }}
        >
          {tinder.map((item, index) => (
            <View key={index} style={styles.profiles}>
              <Image
                source={item.image}
                style={{
                  left: 10,
                  position: "absolute",
                  width: 75,
                  height: 75,
                  borderRadius: 50,
                  margin: 10,
                }}
              />
              <Link href={"/places"} style={styles.proposeLink}>
                Propose a Location
              </Link>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
