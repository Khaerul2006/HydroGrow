import { useTheme } from "@/context/ThemeContext";
import { router } from "expo-router";
import { Pressable, Switch, Text, View } from "react-native";

export default function PengaturanScreen() {
  const { styles, isDark, toggleTheme } = useTheme();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Tampilan</Text>

        <View style={styles.settingRow}>
          <Text style={styles.settingLabel}>🌙 Mode Gelap</Text>

          <Switch
            value={isDark}
            onValueChange={toggleTheme}
            trackColor={{ false: "#cbd5e1", true: "#16a34a" }}
            thumbColor="#ffffff"
          />
        </View>
        <Pressable
          style={styles.backButton}
          onPress={() => router.replace("/")}
        >
          <Text style={styles.backButtonText}>Kembali</Text>
        </Pressable>
      </View>
    </View>
  );
}
