import React from "react";
import { Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native";

const Header = () => {
  return (
    <SafeAreaView style={styles.header}>
      <Text style={styles.headerTitle}>Movies App</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 100,
    paddingTop: 15,
    backgroundColor: "#2c3e50",
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    color: "white",
    fontSize: 18,
  },
});

export default Header;
