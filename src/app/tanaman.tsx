import { router } from "expo-router";
import { Pressable, ScrollView, Text, View } from "react-native";

import { useTheme } from "@/context/ThemeContext";
import { getConditionColor, initialPlants } from "@/data/plants";

export default function TanamanScreen() {
  const { styles } = useTheme();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Daftar Tanaman</Text>

        {initialPlants.map((plant) => (
          <Pressable
            key={plant.id}
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
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
}
