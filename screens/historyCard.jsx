import { StyleSheet, Text, View } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import Entypo from "@expo/vector-icons/Entypo";
import React from "react";

const HistoryCard = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.headData}>
        <Text
          style={[
            props.bmiValue > 25 && styles.redStyle,
            props.bmiValue < 18.5 && styles.blueStyle,
            props.bmiValue >= 18.5 && props.bmiValue <= 25 && styles.greenStyle,
          ]}
        >
          {props.bmiValue > 25 ? (
            <Entypo name="warning" size={20} color="red" />
          ) : props.bmiValue > 18.5 && props.bmiValue <= 25 ? (
            <Entypo name="thumbs-up" size={20} color="green" />
          ) : props.bmiValue < 18.5 ? (
            <Entypo name="thumbs-down" size={20} color="blue" />
          ) : null}
          BMI:{props.bmiValue}
        </Text>
        <Text>
          <Feather name="calendar" size={20} color="grey" />
          {props.date}
        </Text>
        <Text style={styles.comment}>{props.comment}</Text>
      </View>
    </View>
  );
};

export default HistoryCard;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "#8080806a",
    width: "90%",
    marginHorizontal: "auto",
    height: 100,
    borderRadius: 10,
    marginVertical: 10,
  },
  headData: {
    flexDirection: "row",
    gap: 40,
    alignItems: "center",
    marginVertical: "auto",
    paddingLeft: 30,
  },
  advice: {
    textAlign: "center",
    justifyContent: "center",
    paddingTop: 15,
  },
  redStyle: {
    color: "red",
    fontWeight: "bold",
  },
  greenStyle: {
    color: "green",
    fontWeight: "bold",
  },
  blueStyle: {
    color: "blue",
    fontWeight: "bold",
  },
  comment: {
    fontWeight: "bold",
  },
});
