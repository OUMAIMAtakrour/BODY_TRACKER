import { ThemedText } from "@/components/ThemedText";
import { setItem } from "expo-secure-store";
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  RefreshControl,
} from "react-native";

const App = () => {
  const [Items, setItems] = useState([
    { key: 1, item: "Item 1" },
    { key: 2, item: "Item 2" },
    { key: 3, item: "Item 3" },
    { key: 4, item: "Item 4" },
    { key: 5, item: "Item 5" },
    { key: 6, item: "Item 6" },
    { key: 7, item: "Item 7" },
    { key: 8, item: "Item 8" },
    { key: 44, item: "Item 9" },
    { key: 68, item: "Item 27" },
    { key: 0, item: "Item 78" },
  ]);
  const [refreshing, setRefresh] = useState(false);
  const onRefresh = () => {
    setRefresh(true);
    setItems([...Items, { key: 89, item: "refreshed" }]);
    setRefresh(false);
  };
  return (
    <ScrollView
      style={styles.body}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
        ></RefreshControl>
      }
    >
      <ThemedText>hhhhh</ThemedText>
      {Items.map((object) => {
        return (
          <View style={styles.item} key={object.key}>
            <Text style={styles.text}>{object.item}</Text>
          </View>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: "column",
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

export default App;
