export type Plant = {
  id: number;
  name: string;
  quantity: number;
  condition: string;
  emoji: string;
};

export const initialPlants: Plant[] = [
  { id: 1, name: "Selada", quantity: 25, condition: "Sehat", emoji: "🥬" },
  { id: 2, name: "Pakcoy", quantity: 18, condition: "Perlu Air", emoji: "🌱" },
  { id: 3, name: "Kangkung", quantity: 30, condition: "Sehat", emoji: "🌿" },
  { id: 4, name: "Cabai", quantity: 27, condition: "Sehat", emoji: "🌶️" },
];

export const getConditionColor = (condition: string) => {
  if (condition === "Sehat") {
    return "#16a34a";
  }

  return "#f59e0b";
};
