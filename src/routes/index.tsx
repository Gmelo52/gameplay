import React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import AuthRoutes from "./auth.routes";
import Background from "../components/Background";

export default function Routes() {
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'transparent'
    },
  };

  return (
    <Background>
      <NavigationContainer theme={MyTheme}>
        <AuthRoutes />
      </NavigationContainer>
    </Background>
  );
}
