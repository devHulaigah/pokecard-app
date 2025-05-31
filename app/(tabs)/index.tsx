import '../../gesture-handler';
import { Text, View } from "react-native";
import Card from "../../components/pokeCard"

// const jaicomeImage = require("");

export default function Index() {
  return (
    <View className="pt-20 flex-1 bg-slate-200 h-screen">
      <View className="flex gap-2 justify-center items-center">
        <Text className="font-extrabold text-xl">POKEMON CARDS</Text>
        <Card />
      </View>
    </View>
  );
}
