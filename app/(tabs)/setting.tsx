import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useRoute } from "@react-navigation/native";

const Settings = () => {
  const route = useRoute();
  const { formData } = route.params;

  const [bmi, setBmi] = useState<number | null>(null);

  const calculateIbm = () => {
    const heightInMeters = parseFloat(formData.Height) / 100;
    const weightInKg = parseFloat(formData.Weight);
    if (heightInMeters > 0 && weightInKg > 0) {
      const calculateIbm = (weightInKg / heightInMeters ** 2).toFixed(2);
      setBmi(parseFloat(calculateIbm));
    } else {
      setBmi(null);
    }
  };

  if (!formData) {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>
          No data found. Please fill in the form.
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <Text style={styles.text}>Name: {formData.name}</Text>
      <Text style={styles.text}>Age: {formData.Age}</Text>
      <Text style={styles.text}>Nationality: {formData.Nationality}</Text>
      <Text style={styles.text}>Height: {formData.Height} cm</Text>
      <Text style={styles.text}>Weight: {formData.Weight} kg</Text>
      <Text style={styles.text}>Email: {formData.email}</Text>

      <Text style={styles.text}>
        BMI: {bmi !== null ? bmi : "Press 'Calculate' to view BMI"}
      </Text>

      <Button title="Calculate" onPress={calculateIbm} />
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
  error: {
    fontSize: 18,
    color: "red",
    textAlign: "center",
  },
});
