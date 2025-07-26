import { MusicNoteIcon } from "phosphor-react-native";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

type PaylistProps = {
  title: string;
  subtitle: string;
}

export function Playlist({ title, subtitle }: PaylistProps) {
  return (
    <TouchableOpacity activeOpacity={0.5} style={ styles.container }>
      <MusicNoteIcon size={ 32 } weight="fill" color="#ff0000" />
      <View style={ styles.section }>
        <Text style={ styles.title }>
          { title }
        </Text>
        <Text style={ styles.subtitle }>
          { subtitle}
        </Text>
      </View>
    </TouchableOpacity>
  )
}