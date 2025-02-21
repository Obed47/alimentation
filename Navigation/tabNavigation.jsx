import { View, Text } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RegisterMeal from "../screens/registerMeal";
import Homepage from "../screens/homepage";
import { NavigationContainer } from "@react-navigation/native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Charts from "../screens/charts";
export default function TabNavigation() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      tabBarActiveTintColor="blue"
      screenOptions={{
        tabBarStyle: { position: "absolute" },
        keyboardHidesTabBar: true,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Homepage}
        options={{
          headerShown: false,
          tabBarIcon: () => <AntDesign name="home" size={24} color="black" />,
        }}
      />
      <Tab.Screen
        name="Register Meal"
        component={RegisterMeal}
        options={{
          headerShown: false,

          tabBarIcon: () => (
            <MaterialCommunityIcons name="food-apple" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Statistics"
        component={Charts}
        options={{
          headerShown: false,

          tabBarIcon: () => (
            <AntDesign name="linechart" size={24} color="black" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
