import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { Dimensions } from "react-native";
import { LineChart, PieChart } from "react-native-chart-kit";
import HistoryCard from "./historyCard";
import data from "../assets/data.json";
const Charts = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headText}>Charts and History</Text>
      <View style={styles.charts}>
        <LineChart
          data={{
            labels: [
              "January",
              "Febuary",
              "March",
              "April",
              "may",
              "June",
              "july",
            ],
            datasets: [
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                ],
              },
            ],
          }}
          width={Dimensions.get("window").width - 26} // from react-native
          height={270}
          marginHorizontal="auto"
          // yAxisLabel="$"
          // yAxisSuffix="k"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "white",
            backgroundGradientFrom: "#ff9100",
            backgroundGradientTo: "#ff9100",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "green",
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      </View>
      <ScrollView style={styles.ScrollView}>
        {data.map((item) => {
          return (
            <HistoryCard
              bmiValue={item.bmiValue}
              date={item.date}
              comment={item.comment}
              advice={item.advice}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Charts;

const styles = StyleSheet.create({
  charts: {
    height: "30%",
    width: "95%",
    marginHorizontal: "auto",
    borderRadius: 10,
  },
  container: {
    height: "100%",
  },
  headText: {
    paddingTop: 50,
    marginHorizontal: "auto",
    padding: 30,
    fontSize: 18,
    fontWeight: "bold",
  },
  ScrollView: {
    marginTop: 20,
  },
});
