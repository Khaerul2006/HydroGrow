// Khaerul Rafi 352
import { getConditionColor, initialPlants, Plant } from "@/data/plants";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";

import { useTheme } from "@/context/ThemeContext";

// CUSTOM COMPONENT UNTUK CARD TANAMAN
const PlantCard = ({
  plant,
  onWater,
}: {
  plant: Plant;
  onWater: (id: number) => void;
}) => {
  const { styles } = useTheme();

  return (
    // router.push() -> pindah ke halaman detail
    <Pressable
      style={styles.plantCard}
      onPress={() =>
        router.push({
          pathname: "/detail",
          params: {
            name: plant.name,
            quantity: String(plant.quantity),
            condition: plant.condition,
            emoji: plant.emoji,
          },
        })
      }
    >
      <Text style={styles.plantEmoji}>{plant.emoji}</Text>

      <View style={styles.plantInfo}>
        <Text style={styles.plantName}>{plant.name}</Text>

        <Text style={styles.plantQuantity}>{plant.quantity} tanaman</Text>

        <Text
          style={[
            styles.condition,
            { color: getConditionColor(plant.condition) },
          ]}
        >
          ● {plant.condition}
        </Text>
      </View>

      {plant.condition !== "Sehat" && (
        <Pressable style={styles.waterButton} onPress={() => onWater(plant.id)}>
          <Text style={styles.waterButtonText}>Siram</Text>
        </Pressable>
      )}
    </Pressable>
  );
};

// Abdallah Hayyun 355
export default function HomeScreen() {
  const { styles } = useTheme();

  // useState
  const [plants, setPlants] = useState<Plant[]>(initialPlants);
  const [temperature, setTemperature] = useState(27);
  const [humidity, setHumidity] = useState(82);
  const [filter, setFilter] = useState("Semua");

  // useEffect: simulasi pembaruan sensor tiap 5 detik
  useEffect(() => {
    const timer = setInterval(() => {
      setTemperature(26 + Math.round(Math.random() * 3));
      setHumidity(80 + Math.round(Math.random() * 5));
    }, 5000);

    // cleanup saat komponen dilepas
    return () => clearInterval(timer);
  }, []);

  // Nilai dashboard dihitung dari state
  const totalPlants = plants.reduce((sum, p) => sum + p.quantity, 0);
  const attentionCount = plants.filter((p) => p.condition !== "Sehat").length;

  const filteredPlants = plants.filter(
    (p) => filter === "Semua" || p.condition === filter,
  );

  const waterPlant = (id: number) => {
    setPlants((prev) =>
      prev.map((p) => (p.id === id ? { ...p, condition: "Sehat" } : p)),
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        {/* WELCOME */}
        <View style={styles.welcomeCard}>
          <Text style={styles.welcomeTitle}>Selamat Datang 👋</Text>
          <Text style={styles.welcomeText}>
            Pantau kondisi tanaman hidroponik kamu dengan mudah.
          </Text>
        </View>

        {/* DASHBOARD */}
        <Text style={styles.sectionTitle}>Dashboard</Text>

        <View style={styles.dashboard}>
          <View style={styles.statCard}>
            <Text style={styles.statEmoji}>🌱</Text>
            <Text style={styles.statValue}>{totalPlants}</Text>
            <Text style={styles.statLabel}>Total Tanaman</Text>
          </View>

          <View style={styles.statCard}>
            <Text style={styles.statEmoji}>🌡️</Text>
            <Text style={styles.statValue}>{temperature}°C</Text>
            <Text style={styles.statLabel}>Suhu</Text>
          </View>

          <View style={styles.statCard}>
            <Text style={styles.statEmoji}>💧</Text>
            <Text style={styles.statValue}>{humidity}%</Text>
            <Text style={styles.statLabel}>Kelembapan</Text>
          </View>

          <View
            style={[
              styles.statCard,
              attentionCount > 0 && styles.statCardAlert,
            ]}
          >
            <Text style={styles.statEmoji}>⚠️</Text>
            <Text
              style={[
                styles.statValue,
                attentionCount > 0 && styles.statValueAlert,
              ]}
            >
              {attentionCount}
            </Text>
            <Text style={styles.statLabel}>Perhatian</Text>
          </View>
        </View>

        {/* DAFTAR TANAMAN */}
        <Text style={styles.sectionTitle}>Tanaman Hidroponik</Text>

        {/* FILTER */}
        <View style={styles.filterRow}>
          {["Semua", "Sehat", "Perlu Air"].map((item) => (
            <Pressable
              key={item}
              style={[
                styles.filterButton,
                filter === item && styles.filterButtonActive,
              ]}
              onPress={() => setFilter(item)}
            >
              <Text
                style={[
                  styles.filterText,
                  filter === item && styles.filterTextActive,
                ]}
              >
                {item}
              </Text>
            </Pressable>
          ))}
        </View>

        {filteredPlants.length === 0 && (
          <Text style={styles.emptyText}>Tidak ada tanaman.</Text>
        )}

        {filteredPlants.map((plant) => (
          <PlantCard key={plant.id} plant={plant} onWater={waterPlant} />
        ))}

        {/* FOOTER */}
        <Text style={[styles.footer, { fontSize: 13 }]}>HydroGrow © 2026</Text>
      </View>
    </ScrollView>
  );
}
