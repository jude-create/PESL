import { Image, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Button } from "react-native-paper";
import { useRouter, useLocalSearchParams } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function SignUp() {
  const router = useRouter();
  const params = useLocalSearchParams();

  const [isAccountDone, setIsAccountDone] = useState(false);
  const [isBusinessDone, setIsBusinessDone] = useState(false);

  useEffect(() => {
  const loadProgress = async () => {
    const account = await AsyncStorage.getItem("createAccountDone");
    const business = await AsyncStorage.getItem("aboutBusinessDone");
    setIsAccountDone(account === "true");
    setIsBusinessDone(business === "true");
  };
  loadProgress();
}, []);
  const SectionCard = ({
    title,
    description,
    icon,
    isDone,
    onPress,
  }: {
    title: string;
    description: string;
    icon: any;
    isDone: boolean;
    onPress: () => void;
  }) => (
    <TouchableOpacity
      onPress={onPress}
      className={`flex flex-row justify-between items-center rounded-2xl overflow-hidden mb-4  ${
        isDone ? " border border-[#009B6F]" : ""
      }`}
    >
      {/* Left section */}
      <View className="flex-row items-center flex-1 px-4 py-3">
        <Image
          source={icon}
          className={`w-20 h-20 mr-3 ${isDone ? "opacity-80" : ""}`}
          resizeMode="contain"
        />
        <View className="flex-1">
          <Text className="text-[#05376A] text-xl font-dinBold mb-1">{title}</Text>
          <Text className="text-[#64819D] text-sm font-gilroy">{description}</Text>
        </View>
      </View>

      {/* Right section */}
      {isDone && (
        <View className="bg-[#009B6F] h-36 w-[80px] justify-center items-center">
          <MaterialCommunityIcons name="check-circle-outline" size={22} color="white" />
          <Text className="text-white font-bold text-xs mt-1">Done</Text>
        </View>
      ) 
    }
    </TouchableOpacity>
  );

  const isAllDone = isAccountDone && isBusinessDone;

  return (
    <SafeAreaView className="flex-1 justify-between px-4 pb-6 bg-white">
      <View className="mt-12">
        {/* Header */}
        <View className="mb-10 space-y-1">
          <Text className="text-[#05376A] text-xl font-dinBold font-bold">
            Let’s get you started
          </Text>
          <Text className="font-gilroy font-medium text-base text-[#64819D]">
            Each of these sections should only take a few minutes to complete.
          </Text>
        </View>

        {/* Section Cards */}
        <SectionCard
          title="Create your account"
          description="Set up your email and password to enable you log back in"
          icon={require("@/assets/images/create.png")}
          isDone={isAccountDone}
          onPress={() => router.push("/(auth)/createAccount")}
        />

        <SectionCard
          title="Tell us about your business"
          description="Register your business to buy products from us"
          icon={require("@/assets/images/about-business.png")}
          isDone={isBusinessDone}
          onPress={() => router.push("/(auth)/aboutBusiness")}
        />
      </View>

      {/* Continue buttons — show only one */}
      <View>
        {isAllDone ? (
         <Button
        buttonColor={isAccountDone && isBusinessDone ? "#05376A" : "#A7C5D0"}
        textColor="#FFFFFF"
        labelStyle={{
          fontFamily: "dinBold",
          fontSize: 16,
          fontWeight: "bold",
        }}
        mode="contained"
        disabled={!isAccountDone || !isBusinessDone}
        onPress={() => router.push("/(tabs)")}
      >
        Continue
          </Button>
        ) : (
           <Button
            buttonColor="#05376A"
            textColor="#FFFFFF"
            labelStyle={{
              fontFamily: "dinBold",
              fontSize: 16,
              fontWeight: "bold",
            }}
            mode="contained"
            onPress={() => router.push("/(auth)/createAccount")}
          >
            Continue
          </Button>
        )}
      </View>

      <StatusBar style="dark" />
    </SafeAreaView>
  );
}
