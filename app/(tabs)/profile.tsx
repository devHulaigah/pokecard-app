import '../../gesture-handler';
import ExpoSvg from "@/assets/svg/expo";
import FirebaseSvg from "@/assets/svg/firebase";
import GithubSvg from "@/assets/svg/github";
import LinkedinSvg from "@/assets/svg/linkedin";
import NativewindSvg from "@/assets/svg/nativewind";
import ReactSvg from "@/assets/svg/react";
import TwitterSvg from "@/assets/svg/twitterx";

import {
  Image,
  Linking,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";

export default function Profile() {
  const profileImage = require("../../assets/images/pikachu.png");

  return (
    <ScrollView
      className="pt-5 flex-1 bg-slate-200 h-screen"
      showsVerticalScrollIndicator={false}
    >
      <View className="flex justify-center items-center min-h-96">
        <View className="w-48 h-48 flex justify-center items-center gap-4">
          <Image
            className="bg-yellow-300 w-48 h-48 border-4 border-white rounded-2xl"
            source={profileImage}
            resizeMode="contain"
          />
          <Text className="font-extrabold">@devHulaigah</Text>
          <View className="flex flex-row justify-center items-center gap-4">
            {/* SOCIALS WITH LINK */}
            <Pressable
              className="bg-white rounded-3xl p-1"
              onPress={() => {
                Linking.openURL("https://github.com/devHulaigah");
              }}
            >
              <GithubSvg width="30" height="30" />
            </Pressable>

            <Pressable
              className="bg-white rounded-xl p-1"
              onPress={() => {
                Linking.openURL(
                  "https://www.linkedin.com/in/ali-abu-hulaigah-76327232"
                );
              }}
            >
              <LinkedinSvg width="30" height="30" />
            </Pressable>

            <Pressable
              className="bg-white rounded-2xl p-1"
              onPress={() => {
                Linking.openURL("https://x.com/devhulaigah");
              }}
            >
              <TwitterSvg width="30" height="30" />
            </Pressable>
          </View>
        </View>
      </View>

      <View className="flex justify-start items-center gap-6 bg-white rounded-3xl p-2 ml-20 mr-20 mb-5 min-h-96">
        <Text className="text-center mt-2 font-extrabold">Made by:</Text>
        {/* Technology Used section Svgs */}
        <Pressable
          onPress={() => {
            Linking.openURL("https://expo.dev");
          }}
        >
          <ExpoSvg width="60" height="60" />
        </Pressable>
        <Pressable
          onPress={() => {
            Linking.openURL("https://reactnative.dev");
          }}
        >
          <ReactSvg width="80" height="80" />
        </Pressable>
        <Pressable
          onPress={() => {
            Linking.openURL("https://www.nativewind.dev");
          }}
        >
          <NativewindSvg width="80" height="80" />
        </Pressable>

        <Pressable
          onPress={() => {
            Linking.openURL("https://firebase.google.com");
          }}
        >
          <FirebaseSvg width="80" height="80" />
        </Pressable>
      </View>
    </ScrollView>
  );
}
