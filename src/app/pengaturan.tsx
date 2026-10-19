import { Switch, Text, View } from "react-native";

import { useTheme } from "@/context/ThemeContext";

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
      </View>
    </View>
  );
}
