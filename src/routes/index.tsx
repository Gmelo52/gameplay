import React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import AuthRoutes from "./auth.routes";
import Background from "../components/Background";
import { theme } from "../global/styles/theme";

export default function Routes() {
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: theme.colors.secondary100
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
