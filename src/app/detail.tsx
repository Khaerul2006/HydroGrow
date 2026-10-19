import { router, useLocalSearchParams } from "expo-router";
import { Pressable, Text, View } from "react-native";

import { useTheme } from "@/context/ThemeContext";

export default function DetailScreen() {
  const { styles } = useTheme();

  // useLocalSearchParams() -> ambil data yang dikirim lewat router.push()
  const { name, quantity, condition, emoji } = useLocalSearchParams<{
    name: string;
    quantity: string;
    condition: string;
    emoji: string;
  }>();

  return (
    <View style={styles.detailContainer}>
      <Text style={styles.detailEmoji}>{emoji}</Text>
      <Text style={styles.detailName}>{name}</Text>
      <Text style={styles.detailText}>Jumlah: {quantity} tanaman</Text>
      <Text style={styles.detailText}>Kondisi: {condition}</Text>

      {/* router.back() -> kembali ke halaman sebelumnya */}
      <Pressable style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backButtonText}>Kembali</Text>
      </Pressable>
    </View>
  );
}
