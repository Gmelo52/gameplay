import {useFonts} from 'expo-font';
import {Inter_400Regular, Inter_500Medium} from '@expo-google-fonts/inter';
import { Rajdhani_500Medium, Rajdhani_700Bold} from '@expo-google-fonts/rajdhani';
import { StatusBar } from "expo-status-bar";
import SignIn from "./src/screens/SignIn";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold,
  })
  if(!fontsLoaded){ //Se as fonts não carregarem, mantem a tela de splash

  }

  return (
    <>
      <SignIn/>
      <StatusBar style="light" />
    </>
  );
}
