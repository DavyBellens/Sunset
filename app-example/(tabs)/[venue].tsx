import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function Venue() {
  // Get the venue name from the URL
  const { venue } = useLocalSearchParams();
  return (
    <View>
      <Text>{venue}</Text>
    </View>
  );
}
