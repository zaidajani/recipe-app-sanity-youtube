import React from "react";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import { HomeScreen } from "./../screens/home.screen";
import { DetailScreen } from "./../screens/recipeDetail.screen";

const Stack = createStackNavigator();

export const HomeNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        ...TransitionPresets.ModalSlideFromBottomIOS
      }}
    >
      <Stack.Screen name="main" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="detail" component={DetailScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}