import { View, Text, StyleSheet, TextInput, Button, Alert } from "react-native";
import { Picker } from "@react-native-picker/picker";
import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { GlassView } from "@metafic-co/react-native-glassmorphism";
import { GlassViewProps } from "@metafic-co/react-native-glassmorphism/src/GlassView";
import { useNavigation } from "@react-navigation/native";
type FormData = {
  name: string;
  email: string;
  Age: string;
  Nationality: string;
  Height: string;
  Weight: string;
  BMI?: number;
};
const Register = () => {
  const navigation = useNavigation();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    Age: "",
    Nationality: "",
    Height: "",
    Weight: "",
  });

  const calculateBMI = () => {
    const heightInMeters = parseFloat(formData.Height); 
    const weightInKg = parseFloat(formData.Weight);
    if (heightInMeters > 0 && weightInKg > 0) {
      return weightInKg / heightInMeters ** 2;
    }
    return null; 
  };
  useEffect(() => {
    loadSaveData();
  }, []);
  const loadSaveData = async () => {
    const bmi = calculateBMI();
    if (!bmi) {
      Alert.alert(
        "Error",
        "Please enter valid height and weight to calculate BMI."
      );
      return;
    }

    const updatedFormData = { ...formData, BMI: parseFloat(bmi) };
    try {
      const userInfos = await AsyncStorage.getItem("formData");
      if (userInfos) {
        setFormData(JSON.parse(userInfos));
      }
    } catch (error) {
      Alert.alert("failed to");
    }
  };
  const savedInfos = async () => {
    try {
      await AsyncStorage.setItem("formData", JSON.stringify(formData));
      Alert.alert("success", "data mchat", [
        {
          text: "Keep going",
          onPress: () => navigation.navigate("setting", { formData }),
        },
      ]);
    } catch (error) {
      Alert.alert("Error", "ma mchat");
    }
  };
  // const glassViewProps: GlassViewProps = {
  //   blurRadius: 20,
  //   backgroundColor: "rgba(255, 255, 255, 0.2)",
  //   style: styles.body,
  // };
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.title}>BODY TRACK</Text>
        <TextInput
          style={styles.input}
          placeholder="FullName"
          value={formData.name}
          onChangeText={(text) => setFormData({ ...formData, name: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Age"
          value={formData.Age}
          onChangeText={(text) => setFormData({ ...formData, Age: text })}
          keyboardType="phone-pad"
        />
        <TextInput
          style={styles.input}
          placeholder="Nationality"
          value={formData.Nationality}
          onChangeText={(text) =>
            setFormData({ ...formData, Nationality: text })
          }
        />
        <TextInput
          style={styles.input}
          placeholder="Height"
          value={formData.Height}
          onChangeText={(text) => setFormData({ ...formData, Height: text })}
          keyboardType="phone-pad"
        />
        <TextInput
          style={styles.input}
          placeholder="Weight"
          value={formData.Weight}
          onChangeText={(text) => setFormData({ ...formData, Weight: text })}
          keyboardType="phone-pad"
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={formData.email}
          onChangeText={(text) => setFormData({ ...formData, email: text })}
        />
        {/* <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder="Password"
        /> */}
        <Button
          title="Submit"
          style={styles.button}
          onPress={savedInfos}
        ></Button>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  body: {
    width: "90%",
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.3)",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#e0e0e0",
    marginVertical: 10,
  },
  picker: {
    marginVertical: 10,
  },
  button: {
    color: "#0000ff",
    borderRadius: 15,
    margin: 20,
  },
});
