import { Text, View } from "react-native";
import { styles } from "./styles";
import { Playlist }from "../playlist";

export function Playlists() {
  return (
    <View style={ styles.container }>
      <View>
        <Text style={ styles.text }>
          Suas playlists:
        </Text>
      </View>
      <View>
        <Playlist title="Rock anos 80"  subtitle="As melhores músicas de rock dos anos 80"/>
      </View>
    </View>
  );
} 