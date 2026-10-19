import AsyncStorage from "@react-native-async-storage/async-storage";
import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useMemo,
    useState,
} from "react";

import {
    createStyles,
    darkColors,
    lightColors,
} from "@/styles/hydroGrowStyles";

const STORAGE_KEY = "hydrogrow-theme";

type ThemeContextType = {
  isDark: boolean;
  toggleTheme: () => void;
  styles: ReturnType<typeof createStyles>;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [isDark, setIsDark] = useState(false);

  // useEffect: baca pilihan tema yang tersimpan saat aplikasi dibuka
  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY).then((value) => {
      if (value === "dark") {
        setIsDark(true);
      }
    });
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    AsyncStorage.setItem(STORAGE_KEY, next ? "dark" : "light");
  };

  // Style dibuat ulang hanya saat tema berubah
  const styles = useMemo(
    () => createStyles(isDark ? darkColors : lightColors),
    [isDark],
  );

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme, styles }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme harus dipakai di dalam ThemeProvider");
  }
  return ctx;
}
