import { Button } from "@/components/button"
import { Header } from "@/components/header"
import { Playlists } from "@/components/playlists"
import { padding } from "@/styles/padding"
import { router } from "expo-router"
import { View } from "react-native"

export default function Index() {
  function handleNew(){
    router.navigate("/new")
  }

  return (
    <View style={{ flex: 1, padding:padding.xxLarge, gap: 16 }}>
      <Header />
      <Playlists />
      <View style={{ paddingBottom: padding.xLarge }}>
        <Button onPress={ handleNew }>
          <Button.Title>
            Criar Playlist
          </Button.Title>
        </Button>
      </View>
    </View>
  )
}