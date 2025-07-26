import { Text, View } from "react-native";
import { WaveSineIcon } from "phosphor-react-native"
import { colors } from "@/styles/colors";
import { styles } from "./styles";

type HeaderProps = {
  type?: "IconAndTitle" | "all"
}

export function Header({ type = "all" }: HeaderProps) {

  function HeaderInformation() {
    return (
      <>
        <Text style={styles.headerline}>
          Sofras, controle suas cifras
        </Text>
        <Text style={styles.description}>
          Tenha o controle total de suas cifras, crie, edite, importe e visualize suas cifras!
        </Text>
      </>
    )
  }


  return (
    <View style={[styles.container, type=="IconAndTitle" ? { flexDirection:"row", gap:16, alignItems:"center" }: null]}>
      <WaveSineIcon size={44} weight="bold" color={colors.violet[600]} />
      { type == "IconAndTitle" && <Text style={ styles.headerline } >Sofras</Text> }
      { type == "all" && <HeaderInformation /> }
    </View>
  );
}
