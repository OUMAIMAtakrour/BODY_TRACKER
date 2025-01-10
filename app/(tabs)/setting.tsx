import { ThemedView } from "@/components/ThemedView";
import { Stack } from "expo-router";
import { View } from "lucide-react";
import React from "react";
import { StyleSheet, Text } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function Settings() {
  return (
    <>
      <Stack.Screen  options={{ title: "settings!" }} />
      <ThemedView style={styles.body}>
        <Text style={styles.text}>helloooooooooooooooooooo</Text>
      </ThemedView>
    </>
  );
}
const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#ffffff",
  },
  item: {
    margin: 10,

    backgroundColor: "#4ae1fa",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#000000",
    fontSize: 45,
    fontStyle: "italic",
    margin: 10,
  },
});
