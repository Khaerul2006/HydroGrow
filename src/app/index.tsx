// Khaerul Rafi 352
import { ScrollView, Text, View } from "react-native";

import { styles } from "@/styles/hydroGrowStyles";

// TYPE
type Plant = {
  id: number;
  name: string;
  quantity: number;
  condition: string;
  emoji: string;
};

// ARRAY OF OBJECTS
const plants: Plant[] = [
  {
    id: 1,
    name: "Selada",
    quantity: 25,
    condition: "Sehat",
    emoji: "🥬",
  },
  {
    id: 2,
    name: "Pakcoy",
    quantity: 18,
    condition: "Perlu Air",
    emoji: "🌱",
  },
  {
    id: 3,
    name: "Kangkung",
    quantity: 30,
    condition: "Sehat",
    emoji: "🌿",
  },

  {
    id: 4,
    name: 'cabai',
    quantity: 27,
    condition: 'Sehat',
    emoji: '🌶️',
  },
];

// CUSTOM FUNCTION
const getConditionColor = (condition: string) => {
  if (condition === "Sehat") {
    return "#16a34a";
  }

  return "#f59e0b";
};

// CUSTOM FUNCTION UNTUK CARD TANAMAN
const PlantCard = (plant: Plant) => {
  return (
    <View style={styles.plantCard}>
      <Text style={styles.plantEmoji}>{plant.emoji}</Text>

      <View style={styles.plantInfo}>
        <Text style={styles.plantName}>{plant.name}</Text>

        <Text style={styles.plantQuantity}>{plant.quantity} tanaman</Text>

        <Text
          style={[
            styles.condition,
            {
              color: getConditionColor(plant.condition),
            },
          ]}
        >
          ● {plant.condition}
        </Text>
      </View>
    </View>
  );
};

// Abdallah Hayyun 355
export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        {/* HEADER */}
        <View style={styles.header}>
          <Text style={styles.logo}>🌱</Text>

          <View>
            <Text style={styles.title}>HydroGrow</Text>

            <Text style={styles.subtitle}>Greenhouse Hidroponik</Text>
          </View>
        </View>

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
          {/* TOTAL TANAMAN */}
          <View style={styles.statCard}>
            <Text style={styles.statEmoji}>🌱</Text>

            <Text style={styles.statValue}>73</Text>

            <Text style={styles.statLabel}>Total Tanaman</Text>
          </View>

          {/* SUHU */}
          <View style={styles.statCard}>
            <Text style={styles.statEmoji}>🌡️</Text>

            <Text style={styles.statValue}>27°C</Text>

            <Text style={styles.statLabel}>Suhu</Text>
          </View>

          {/* KELEMBAPAN */}
          <View style={styles.statCard}>
            <Text style={styles.statEmoji}>💧</Text>

            <Text style={styles.statValue}>82%</Text>

            <Text style={styles.statLabel}>Kelembapan</Text>
          </View>

          {/* PERHATIAN */}
          <View style={styles.statCard}>
            <Text style={styles.statEmoji}>⚠️</Text>

            <Text style={styles.statValue}>1</Text>

            <Text style={styles.statLabel}>Perhatian</Text>
          </View>
        </View>

        {/* DAFTAR TANAMAN */}
        <Text style={styles.sectionTitle}>Tanaman Hidroponik</Text>

        {/* LOOP / MAP */}
        {plants.map((plant) => (
          <View key={plant.id}>{PlantCard(plant)}</View>
        ))}

        {/* FOOTER */}
        <Text
          style={[
            styles.footer,
            {
              fontSize: 13,
            },
          ]}
        >
          HydroGrow © 2026
        </Text>
      </View>
    </ScrollView>
  );
}
