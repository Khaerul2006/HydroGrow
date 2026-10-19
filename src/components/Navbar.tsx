import { Href, router, usePathname } from "expo-router";
import { useRef, useState } from "react";
import { Animated, Modal, Pressable, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useTheme } from "@/context/ThemeContext";

const MENU_WIDTH = 260;

const menuItems = [
  { label: "🏠  Beranda", path: "/" },
  { label: "🌱  Tanaman", path: "/tanaman" },
  { label: "⚙️  Pengaturan", path: "/pengaturan" },
  { label: "ℹ️  Tentang", path: "/tentang" },
];

export default function Navbar() {
  const { styles } = useTheme();
  const insets = useSafeAreaInsets();
  const pathname = usePathname();

  // useState: menu terbuka atau tertutup
  const [open, setOpen] = useState(false);
  // Animated.Value: posisi horizontal panel (mulai di luar layar kiri)
  const slide = useRef(new Animated.Value(-MENU_WIDTH)).current;

  const openMenu = () => {
    setOpen(true);
    Animated.timing(slide, {
      toValue: 0,
      duration: 250,
      useNativeDriver: true,
    }).start();
  };

  const closeMenu = (afterClose?: () => void) => {
    Animated.timing(slide, {
      toValue: -MENU_WIDTH,
      duration: 200,
      useNativeDriver: true,
    }).start(() => {
      setOpen(false);
      afterClose?.();
    });
  };

  const goTo = (path: string) => {
    if (path === pathname) {
      closeMenu();
      return;
    }
    // router.replace(): pindah halaman tanpa menumpuk riwayat
    closeMenu(() => router.replace(path as Href));
  };

  return (
    <>
      {/* NAVBAR */}
      <View style={[styles.navbar, { paddingTop: insets.top + 10 }]}>
        <Pressable style={styles.hamburger} onPress={openMenu} hitSlop={8}>
          <View style={styles.hamburgerLine} />
          <View style={styles.hamburgerLine} />
          <View style={styles.hamburgerLine} />
        </Pressable>

        <Text style={styles.navLogo}>🌱</Text>
        <Text style={styles.navTitle}>HydroGrow</Text>
      </View>

      {/* SIDE MENU */}
      <Modal
        transparent
        visible={open}
        animationType="none"
        statusBarTranslucent
        onRequestClose={() => closeMenu()}
      >
        <View style={styles.menuOverlay}>
          <Animated.View
            style={[
              styles.menuPanel,
              {
                paddingTop: insets.top + 20,
                transform: [{ translateX: slide }],
              },
            ]}
          >
            <Text style={styles.menuTitle}>Menu</Text>

            {menuItems.map((item) => (
              <Pressable
                key={item.path}
                style={[
                  styles.menuItem,
                  pathname === item.path && styles.menuItemActive,
                ]}
                onPress={() => goTo(item.path)}
              >
                <Text
                  style={[
                    styles.menuText,
                    pathname === item.path && styles.menuTextActive,
                  ]}
                >
                  {item.label}
                </Text>
              </Pressable>
            ))}
          </Animated.View>

          {/* Area gelap: tekan untuk menutup menu */}
          <Pressable style={styles.menuBackdrop} onPress={() => closeMenu()} />
        </View>
      </Modal>
    </>
  );
}
