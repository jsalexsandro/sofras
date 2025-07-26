import { Text, View } from "react-native";
import { styles } from "./styles";
import { Playlist } from "../playlist";
import { useState } from "react";


export function Playlists() {
  const [allPlaylists, setAllPlaylists] = useState([{
    title: "Rock anos 80",
    subtitle: "As melhores músicas de rock dos anos 80"
  }, {
    title: "Pop Hits",
    subtitle: "Os maiores sucessos do pop atual"
  }, {
    title: "Clássicos do Jazz",
    subtitle: "Uma viagem pelos clássicos do jazz"
  }, {
    title: "Músicas para Relaxar",
    subtitle: "Trilhas sonoras para momentos de tranquilidade"
  }
  ]);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>
          Suas playlists:
        </Text>
      </View>
      <View>
        {allPlaylists.map((playlist, index) => (
          <Playlist
            key={index}
            title={playlist.title}
            subtitle={playlist.subtitle}
          />
        ))}
      </View>
    </View>
  );
} 