import { Stack } from "expo-router";

import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/context/ThemeContext";

export default function RootLayout() {
  return (
    <ThemeProvider>
      <Stack>
        <Stack.Screen name="index" options={{ header: () => <Navbar /> }} />
        <Stack.Screen name="tanaman" options={{ header: () => <Navbar /> }} />
        <Stack.Screen
          name="pengaturan"
          options={{ header: () => <Navbar /> }}
        />
        <Stack.Screen name="tentang" options={{ header: () => <Navbar /> }} />
        <Stack.Screen
          name="detail"
          options={{
            title: "Detail Tanaman",
            headerStyle: { backgroundColor: "#166534" },
            headerTintColor: "#ffffff",
          }}
        />
      </Stack>
    </ThemeProvider>
  );
}
