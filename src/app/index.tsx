import { Button } from "@/components/button"
import { Header } from "@/components/header"
import { Playlists } from "@/components/playlists"
import { padding } from "@/styles/padding"
import { Play } from "phosphor-react-native"
import { Text, View } from "react-native"

export default function Index() {
  return (
    <View style={{ flex: 1, padding:padding.xxLarge, gap: 16 }}>
      <Header />
      <Playlists />
      <Button>
        <Button.Title>
          Criar Playlist
        </Button.Title>
      </Button>
    </View>
  )
}