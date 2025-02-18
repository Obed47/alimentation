import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Homepage from "../screens/homepage";
import { createStackNavigator } from "@react-navigation/stack";
export default function Navigation() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Homepage} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
