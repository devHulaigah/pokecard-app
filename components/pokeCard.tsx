import '../gesture-handler';
import { FlatList, Image, ImageSourcePropType, Text, View } from "react-native";

export default function Card() {
  const Cherubi = require("../assets/images/Cherubi.png");
  const Drilbur = require("../assets/images/Drilbur.png");
  const Entei = require("../assets/images/Entei.png");
  const Eternatus = require("../assets/images/Eternatus.png");
  const MewTwo = require("../assets/images/MewTwo.png");
  const pokeName: string[] = [
    "Cherubi",
    "Drilbur",
    "Entei",
    "Eternatus",
    "MewTwo",
  ];
  const pokeImages: ImageSourcePropType[] = [
    Cherubi,
    Drilbur,
    Entei,
    Eternatus,
    MewTwo,
  ];
  const pokeType: string[] = ["Grass", "Ground", "Fire", "Dragon", "Psychic"];
  const firstWeakness: string[] = ["Fire", "Water", "Water", "ice", "Bug"];
  const secondWeakness: string[] = [
    "Ice",
    "Grass",
    "Ground",
    "Ground",
    "Ghost",
  ];
  const typeColor: string[] = ["green", "brown", "red", "purple", "pink"];
  const fWeaknessColor: string[] = [
    "red",
    "blue",
    "blue",
    "lightblue",
    "lightgreen",
  ];
  const sWeaknessColor: string[] = [
    "lightblue",
    "green",
    "brown",
    "brown",
    "purple",
  ];
  const descriptions: string[] = [
    "It nimbly dashes about to avoid getting pecked by bird Pokémon that would love to make off with its small, nutrient-rich storage ball.",
    "It can dig through the ground at a speed of 30 mph. It could give a car running above ground a good race.",
    "Entei embodies the passion of magma. This Pokémon is thought to have been born in the eruption of a volcano. It sends up massive bursts of fire that utterly consume all that they touch.",
    "The core on its chest absorbs energy emanating from the lands of the Galar region. This energy is what allows Eternatus to stay active.",
    "Its DNA is almost the same as Mew’s. However, its size and disposition are vastly different.",
  ];
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      className="min-w-96"
      data={pokeName}
      keyExtractor={(item) => item}
      renderItem={({ item, index }) => (
        <View className="flex flex-col gap-6 p-4">
          <View className="bg-white border-2 rounded-2xl min-w-80 shadow-md p-4 flex flex-col items-center">
            <Text className="pt-2 font-extrabold text-lg">{item}</Text>
            <Image
              className="w-48 h-48 rounded-xl mt-2 border-2 border-gray-200"
              source={pokeImages[index]}
              resizeMode="contain"
            />
            <View className="border-t-2 border-gray-200 w-full mt-2">
              <Text className="font-bold text-center p-2 text-base">
                {descriptions[index]}
              </Text>
            </View>
            <View className="flex flex-row bg-white rounded-b-2xl justify-start w-full gap-2 mt-2">
              <Text className="p-2 font-bold">Type:</Text>
              <View>
                <Text
                  style={{
                    color: typeColor[index],
                    borderColor: typeColor[index],
                  }}
                  className="border-2 p-2 rounded-xl font-bold"
                >
                  {pokeType[index]}
                </Text>
              </View>
            </View>
            <View className="flex flex-row bg-white rounded-b-2xl justify-start p-2 w-full gap-2 mt-2">
              <Text className="p-2 font-bold ">Weakness:</Text>
              <Text
                style={{
                  // takes index number
                  color: fWeaknessColor[index],
                  borderColor: fWeaknessColor[index],
                }}
                className="border-2 p-2 rounded-xl font-bold"
              >
                {firstWeakness[index]}
              </Text>
              <Text
                style={{
                  color: sWeaknessColor[index],
                  borderColor: sWeaknessColor[index],
                }}
                className="border-2 p-2 rounded-xl font-bold"
              >
                {secondWeakness[index]}
              </Text>
            </View>
          </View>
        </View>
      )}
      horizontal={false}
    />
  );
}
