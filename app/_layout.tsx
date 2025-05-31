import '../gesture-handler';
import "../global.css";
import { Tabs } from "expo-router";
import CardOutlineSvg from "@/assets/svg/card-outline";
import CardColoredSvg from "@/assets/svg/card-colored";
import CartOutlineSvg from "@/assets/svg/cart-outline";
import CartColoredSvg from "@/assets/svg/cart-colored";
import ProfileOutlineSvg from "@/assets/svg/profile-outline";
import ProfileColoredSvg from "@/assets/svg/profile-colored";

export default function RootLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="(tabs)/index" 
      options={{ 
        title: "Cards", 
        headerShown: false,
        tabBarIcon: ({focused}) => focused ? <CardColoredSvg width="20" height="20"/> : <CardOutlineSvg width="20" height="20"/> }}/>
      <Tabs.Screen name="(tabs)/shop" options={{
        title:"Shop", 
        headerShown:false,
        tabBarIcon: ({focused}) => focused ? <CartColoredSvg width="20" height="20"/> : <CartOutlineSvg width="20" height="20"/>
        }}/>
      <Tabs.Screen name="(tabs)/profile" options={{ 
        title: "Profile", 
        headerShown: false,
        tabBarIcon: ({focused}) => focused ? <ProfileColoredSvg width="20" height="20"/> : <ProfileOutlineSvg width="20" height="20"/> }} />
      
    </Tabs>
  );
}
