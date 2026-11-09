import { ActivityIndicator, Pressable, Text, View } from "react-native";

import { useTheme } from "@/context/ThemeContext";
import { useWeather } from "@/hooks/useWeather";
import { getCareAdvice } from "@/services/weatherService";

export default function WeatherCard() {
  const { styles } = useTheme();
  const { weather, loading, error, fromCache, refresh } = useWeather();

  return (
    <View style={styles.weatherCard}>
      <View style={styles.weatherHeader}>
        <Text style={styles.weatherTitle}>🌤️ Cuaca Sekitar</Text>

        <Pressable
          style={styles.refreshButton}
          onPress={refresh}
          disabled={loading}
        >
          <Text style={styles.refreshButtonText}>
            {loading ? "Memuat..." : "Refresh"}
          </Text>
        </Pressable>
      </View>

      {loading && !weather && <ActivityIndicator style={{ marginVertical: 12 }} />}

      {error && <Text style={styles.weatherError}>⚠️ {error}</Text>}

      {weather && (
        <>
          <View style={styles.weatherRow}>
            <View style={styles.weatherItem}>
              <Text style={styles.weatherValue}>{weather.temperature}°C</Text>
              <Text style={styles.weatherLabel}>Suhu</Text>
            </View>
            <View style={styles.weatherItem}>
              <Text style={styles.weatherValue}>{weather.humidity}%</Text>
              <Text style={styles.weatherLabel}>Kelembapan</Text>
            </View>
            <View style={styles.weatherItem}>
              <Text style={styles.weatherValue}>{weather.windSpeed}</Text>
              <Text style={styles.weatherLabel}>Angin (km/j)</Text>
            </View>
          </View>

          <Text style={styles.adviceText}>💡 {getCareAdvice(weather)}</Text>

          <Text style={styles.weatherMeta}>
            {fromCache ? "Data tersimpan (offline) · " : ""}
            Diperbarui: {weather.updatedAt.replace("T", " ")}
          </Text>
        </>
      )}
    </View>
  );
}