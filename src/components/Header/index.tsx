import { LinearGradient } from "expo-linear-gradient";
import { BorderlessButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { ReactNode } from "react";
import { theme } from "../../global/styles/theme";
import "./styles";
import { Title, ViewHeader } from "./styles";
import { useNavigation } from "@react-navigation/native";



type Props = {
  title: string;
  action?: ReactNode;
};

export default function Header({ title, action }: Props) {

  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack()
  }
  return (
    <LinearGradient
      style={{
        width: "100%",
        height: 104,
        paddingHorizontal: 24,
        paddingTop:24,
        flexDirection: "row",
        justifyContent: "center",
        alignItems:'center',
      }}
      colors={[theme.colors.secondary100, theme.colors.secondary40]}
    >
      <BorderlessButton onPress={()=>handleGoBack()}>
        <Feather name="arrow-left" size={24} color={theme.colors.heading} />
      </BorderlessButton>
      <Title>{title}</Title>
      {action && <ViewHeader>{action}</ViewHeader>}
    </LinearGradient>
  );
}
