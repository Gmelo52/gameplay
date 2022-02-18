import { TextInputProps } from "react-native";
import { TextContainer } from "./styles";

export default function TextArea({ ...rest }: TextInputProps) {
  return <TextContainer 
  {...rest}
  />;
}
