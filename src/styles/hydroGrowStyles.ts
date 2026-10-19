import { StyleSheet } from "react-native";

// WARNA TEMA
export const lightColors = {
  background: "#f0fdf4",
  card: "#ffffff",
  primary: "#166534",
  heading: "#166534",
  sectionHeading: "#14532d",
  textPrimary: "#1e293b",
  textMuted: "#64748b",
  border: "#bbf7d0",
  activeBg: "#dcfce7",
  alertBg: "#fef3c7",
  alertText: "#d97706",
  welcomeText: "#dcfce7",
};

export const darkColors: Colors = {
  background: "#0f172a",
  card: "#1e293b",
  primary: "#14532d",
  heading: "#4ade80",
  sectionHeading: "#bbf7d0",
  textPrimary: "#f1f5f9",
  textMuted: "#94a3b8",
  border: "#334155",
  activeBg: "#14532d",
  alertBg: "#422006",
  alertText: "#fbbf24",
  welcomeText: "#dcfce7",
};

export type Colors = typeof lightColors;

// STYLE DIBUAT DARI WARNA TEMA
export const createStyles = (c: Colors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: c.background,
    },

    content: {
      padding: 20,
      paddingTop: 20,
    },

    header: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 20,
    },

    logo: {
      fontSize: 42,
      marginRight: 12,
    },

    title: {
      fontSize: 30,
      fontWeight: "bold",
      color: c.heading,
    },

    subtitle: {
      fontSize: 15,
      color: c.textMuted,
      marginTop: 2,
    },

    welcomeCard: {
      backgroundColor: c.primary,
      padding: 20,
      borderRadius: 18,
      marginBottom: 24,
    },

    welcomeTitle: {
      fontSize: 22,
      fontWeight: "bold",
      color: "white",
      marginBottom: 8,
    },

    welcomeText: {
      fontSize: 14,
      color: c.welcomeText,
      lineHeight: 21,
    },

    sectionTitle: {
      fontSize: 21,
      fontWeight: "bold",
      color: c.sectionHeading,
      marginBottom: 12,
    },

    dashboard: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-between",
      marginBottom: 24,
    },

    statCard: {
      width: "48%",
      backgroundColor: c.card,
      borderRadius: 16,
      padding: 16,
      marginBottom: 12,
      alignItems: "center",
      shadowColor: "#000",
      shadowOpacity: 0.08,
      shadowRadius: 6,
      shadowOffset: { width: 0, height: 3 },
      elevation: 3,
    },

    statEmoji: {
      fontSize: 28,
      marginBottom: 6,
    },

    statValue: {
      fontSize: 24,
      fontWeight: "bold",
      color: c.heading,
    },

    statLabel: {
      fontSize: 13,
      color: c.textMuted,
      marginTop: 4,
      textAlign: "center",
    },

    plantCard: {
      backgroundColor: c.card,
      borderRadius: 16,
      padding: 16,
      marginBottom: 12,
      flexDirection: "row",
      alignItems: "center",
      shadowColor: "#000",
      shadowOpacity: 0.08,
      shadowRadius: 6,
      shadowOffset: { width: 0, height: 3 },
      elevation: 3,
    },

    plantEmoji: {
      fontSize: 38,
      marginRight: 15,
    },

    plantInfo: {
      flex: 1,
    },

    plantName: {
      fontSize: 18,
      fontWeight: "bold",
      color: c.textPrimary,
      marginBottom: 4,
    },

    plantQuantity: {
      fontSize: 14,
      color: c.textMuted,
      marginBottom: 4,
    },

    condition: {
      fontSize: 14,
      fontWeight: "bold",
    },

    footer: {
      textAlign: "center",
      color: "#94a3b8",
      marginTop: 20,
      marginBottom: 30,
    },

    waterButton: {
      backgroundColor: "#16a34a",
      paddingVertical: 8,
      paddingHorizontal: 14,
      borderRadius: 10,
    },

    waterButtonText: {
      color: "white",
      fontWeight: "bold",
      fontSize: 13,
    },

    detailContainer: {
      flex: 1,
      backgroundColor: c.background,
      padding: 20,
      alignItems: "center",
      justifyContent: "center",
    },

    detailEmoji: {
      fontSize: 90,
      marginBottom: 16,
    },

    detailName: {
      fontSize: 28,
      fontWeight: "bold",
      color: c.heading,
      marginBottom: 8,
    },

    detailText: {
      fontSize: 16,
      color: c.textMuted,
      marginBottom: 6,
    },

    backButton: {
      marginTop: 28,
      backgroundColor: c.primary,
      paddingVertical: 12,
      paddingHorizontal: 28,
      borderRadius: 12,
    },

    backButtonText: {
      color: "white",
      fontWeight: "bold",
      fontSize: 15,
    },

    statCardAlert: {
      backgroundColor: c.alertBg,
    },

    statValueAlert: {
      color: c.alertText,
    },

    filterRow: {
      flexDirection: "row",
      marginBottom: 14,
    },

    filterButton: {
      paddingVertical: 8,
      paddingHorizontal: 16,
      borderRadius: 20,
      backgroundColor: c.card,
      marginRight: 8,
      borderWidth: 1,
      borderColor: c.border,
    },

    filterButtonActive: {
      backgroundColor: c.primary,
      borderColor: c.primary,
    },

    filterText: {
      fontSize: 13,
      color: c.heading,
      fontWeight: "bold",
    },

    filterTextActive: {
      color: "white",
    },

    emptyText: {
      textAlign: "center",
      color: "#94a3b8",
      marginVertical: 20,
    },

    navbar: {
      backgroundColor: c.primary,
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: 16,
      paddingBottom: 12,
    },

    hamburger: {
      padding: 6,
      marginRight: 12,
    },

    hamburgerLine: {
      width: 24,
      height: 3,
      borderRadius: 2,
      backgroundColor: "white",
      marginVertical: 2.5,
    },

    navLogo: {
      fontSize: 26,
      marginRight: 8,
    },

    navTitle: {
      fontSize: 20,
      fontWeight: "bold",
      color: "white",
    },

    menuOverlay: {
      flex: 1,
      flexDirection: "row",
    },

    menuPanel: {
      width: 260,
      backgroundColor: c.card,
      paddingHorizontal: 16,
    },

    menuBackdrop: {
      flex: 1,
      backgroundColor: "rgba(0,0,0,0.4)",
    },

    menuTitle: {
      fontSize: 22,
      fontWeight: "bold",
      color: c.heading,
      marginBottom: 16,
    },

    menuItem: {
      paddingVertical: 14,
      paddingHorizontal: 12,
      borderRadius: 12,
      marginBottom: 4,
    },

    menuItemActive: {
      backgroundColor: c.activeBg,
    },

    menuText: {
      fontSize: 16,
      color: c.textPrimary,
    },

    menuTextActive: {
      color: c.heading,
      fontWeight: "bold",
    },

    settingRow: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: c.card,
      borderRadius: 16,
      padding: 16,
    },

    settingLabel: {
      fontSize: 16,
      color: c.textPrimary,
      fontWeight: "bold",
    },
  });
