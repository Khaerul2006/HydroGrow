import { Text, View } from "react-native";

import { useTheme } from "@/context/ThemeContext";

export default function InfoPage({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  const { styles } = useTheme();

  return (
    <View style={styles.detailContainer}>
      <Text style={styles.detailName}>{title}</Text>
      <Text style={styles.detailText}>{text}</Text>
    </View>
  );
}
