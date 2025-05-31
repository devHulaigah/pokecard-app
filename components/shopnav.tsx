import '../gesture-handler';
import { Pressable, Text, View } from "react-native";
import { useEffect, useState } from "react";
import HeartOutlineSvg from "../assets/svg/heart-outline";
import HeartColoredSvg from "../assets/svg/heart-colored";
import ShopOutlineSvg from "../assets/svg/shop-outline";
import ShopColoredSvg from "../assets/svg/shop-colored";
import BurgerMenuSvg from "../assets/svg/burger-menu";
import { useIsFocused } from "@react-navigation/native";



export default function Nav() {

  const isFocused = useIsFocused();
  const [isHeartPressed, setIsHeartPressed] = useState(false);
  const [isShopPressed, setIsShopPressed] = useState(false);
  const [isMenuPressed, setIsMenuPressed] = useState(false);

  useEffect(() => {
    if(!isFocused){
      setIsShopPressed(false);
    }
  },[isFocused]);

  return (
    <View className="flex flex-row justify-between items-center bg-slate-100 w-screen h-12">
      <Text className="ml-4 text-2xl font-extrabold font-serif text-red-800">
        Poke
        <Text className="text-blue-800">
          Card <Text className="text-black">Merch</Text>
        </Text>
      </Text>
      <View className="flex flex-row justify-around items-center mr-4 w-48 h-12 bg-red-200">
        
        {/* //! navbar logos */}

        <Pressable onPress={() => setIsHeartPressed(!isHeartPressed)}>
          {
            isHeartPressed ? <HeartColoredSvg width="20" h="12"/> : <HeartOutlineSvg width="20" h="12" /> 
          }
        </Pressable>

        <Pressable onPress={() => setIsShopPressed(!isShopPressed)}>
          {
            isShopPressed && isFocused ? <ShopColoredSvg width="20" height="20"/> : <ShopOutlineSvg width="20" height="20"/>
          }
        </Pressable>

        <Pressable onPress={() => 
          <View className="flex gap-2 ">
            <Text>Hello world</Text>
            <Text>Hello world</Text>
            <Text>Hello world</Text>
          </View>
        }>
          <BurgerMenuSvg width="20" h="12"/>
        </Pressable>
      </View>
    </View>
  );
}
