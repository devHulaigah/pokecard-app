import {
  FlatList,
  Image,
  ImageSourcePropType,
  Pressable,
  Text,
  View,
} from "react-native";

export default function Shoplist() {
  const MegaGengarRed = require("../assets/images/MegaGengarRed.png");
  const DittoPokemon = require("../assets/images/DittoPokemon.png");
  const MegaCharizard = require("../assets/images/MegaCharizard.png");
  const MegaBlastoise = require("../assets/images/MegaBlastoise.png");

  const shirts: ImageSourcePropType[] = [
    MegaGengarRed,
    DittoPokemon,
    MegaCharizard,
    MegaBlastoise,
  ];

  const shirtNames: string[] = [
    "Mega Gengar Red T-Shirt - Adult",
    "Ditto Pokémon Lazy Summer Yellow Relaxed Fit Crew Neck T-Shirt - Adult",
    "Mega Charizard X & Mega Charizard Y Black Zip-Up Hoodie - Adult",
    "Mega Blastoise Blue T-Shirt - Adult",
  ];


  return (
    <FlatList
      keyExtractor={(item: string) => item}
      data={shirts}
      renderItem={({ item, index }) => {
        return (
          <View className="mt-5 flex justify-center items-center ">
            <View className="flex justify-center items-center w-96 border-2 rounded-2xl">
              <View className="flex flex-row justify-center item-center w-screen mt-8">
                <View>
                  <View className="flex flex-col gap-4 justify-center item-center m-2">
                    {/* sample shoplist */}
                    <View key={item}>
                      <Image
                        source={shirts[index]}
                        className="h-80"
                        resizeMode="contain"
                      />
                    </View>
                    <View className="flex justify-center items-center gap-2 ">
                      <Text className="w-96 text-center font-extrabold font-serif ">
                        {shirtNames[index]}
                      </Text>
                      <Text className="font-extrabold font-serif text-2xl">
                        $24.99
                      </Text>
                      <Pressable className=" p-4 w-72 h-13 rounded-2xl bg-blue-300" onPress={() => {
                        
                      }}>
                        <Text className="text-center font-serif font-bold">
                          Purchase
                        </Text>
                      </Pressable>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        );
      }}
    />
  );
}
