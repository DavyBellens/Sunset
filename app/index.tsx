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
        <View style={styles.profilesView}>
          {tinder.map((item, index) => (
            <View key={index} style={styles.profiles}>
              <Image source={item.image} style={styles.profileImage} />
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
