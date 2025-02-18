import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import animation2 from "../assets/animation2.json";
import LottieView from "lottie-react-native";
const RegisterMeal = () => {
  const [food, setFood] = useState("");
  const [calory, setCalory] = useState(0);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <LottieView source={animation2} style={styles.lottie} loop autoPlay />
        </View>
        <View>
          <Text style={styles.title}>Register Meal</Text>
          <Text style={styles.subTitle}>What did you eat?</Text>
        </View>
        <View>
          <TextInput
            placeholder="Food Name : "
            style={styles.textInput}
            onChangeText={(e) => setFood(e)}
          />
          <TextInput
            onChangeText={(e) => setCalory(e)}
            placeholder="Calories : "
            style={styles.textInput}
            keyboardType="numeric"
          />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default RegisterMeal;

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginHorizontal: "auto",
    marginVertical: "auto",
    width: "90%",
  },
  lottie: {
    width: 300,
    height: 300,
    marginHorizontal: "auto",
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
    marginHorizontal: "auto",
    marginVertical: "auto",
    color: "white",
  },
});
