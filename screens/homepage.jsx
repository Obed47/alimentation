import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { React, useState, useEffect } from "react";
import animation from "../assets/animation1.json";
import LottieView from "lottie-react-native";
const Homepage = () => {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);

  return (
    <View style={styles.container}>
      <View>
        <LottieView source={animation} autoPlay loop style={styles.lottie} />
      </View>
      <View>
        <Text style={styles.title}>Welcome</Text>
        <Text style={styles.subTitle}>Enter information</Text>
      </View>
      <View style={styles.inputFields}>
        <TextInput
          placeholder="Enter weight :"
          style={styles.textInput}
          onChangeText={(e) => setWeight(e)}
          keyboardType="numeric"
        />
        <TextInput
          placeholder="Enter height :"
          style={styles.textInput}
          onChangeText={(e) => setHeight(e)}
          keyboardType="numeric"
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Calculate BMI</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Homepage;

const styles = StyleSheet.create({
  container: {
    marginVertical: "auto",
  },
  header: {
    padding: 20,
  },
  lottie: {
    width: 300,
    height: 300,
    margin: "auto",
    marginTop: 40,
  },
  title: {
    margin: "auto",
    fontSize: 30,
    fontWeight: "bold",
  },
  subTitle: {
    margin: "auto",
    fontSize: 20,
  },
  textInput: {
    borderWidth: 1,
    width: "80%",
    margin: "auto",
    marginTop: 15,
    height: 70,
    borderRadius: 10,
    borderColor: "gray",
  },
  button: {
    backgroundColor: "blue",
    width: "40%",
    margin: "auto",
    marginTop: 20,
    height: 60,
    borderRadius: 10,
    elevation: 10,
  },
  buttonText: {
    marginVertical: "auto",
    marginHorizontal: "auto",
    color: "white",
  },
});
