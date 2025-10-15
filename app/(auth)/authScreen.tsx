import { View, Text, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "react-native-paper";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function AuthScreen() {
   const router = useRouter(); 
  return (
    <SafeAreaView className="bg-primary flex-1 justify-between px-4 pb-6">
      {/* Top section */}
      <View className="items-center mt-10">
        <Image
          source={require("@/assets/images/logo.png")}
          className="w-36 h-36 mb-52"
          resizeMode="contain"
        />
        <Text className="text-center text-white  font-dinBold font-bold text-3xl w-[270px] ">
          Your premium customer experience starts here
        </Text>
      </View>

      {/* Bottom section */}
      <View>
       <Text className=" text-white/80 mb-4 text-sm font-gilroy font-medium">
          By continuing to use the app, you agree to Prudent Energy and Services’{" "}
      <Text
       className="text-orange-600 font-gilroyBold font-semibold"
       onPress={() => console.log("Terms pressed")}
        >
      Terms
    </Text> {" "}
    and {" "}
  <Text
    className="text-orange-600 font-gilroyBold font-semibold "
    onPress={() => console.log("Privacy Policy pressed")}
  >
    Privacy Policy.
  </Text>
</Text>



        <View>
          <Button
          
          buttonColor="#FFFFFF"
          textColor="#003366"
          labelStyle={{ fontFamily: "dinBold", fontSize: 16, fontWeight: 'bold' }}
          className="mb-4" mode="contained" onPress={() => router.push ("/(auth)/signIn")}>
            Log In
          </Button>

          <Button
            onPress={() => router.push("/(auth)/signUp")}
            mode="outlined"
            textColor="white"
            labelStyle={{ fontFamily: "dinBold", fontSize: 16, fontWeight: 'bold' }}
            style={{ borderColor: "white" }}
          >
            Create an account
          </Button>
        </View>
      </View>
      <StatusBar style="light" />
    </SafeAreaView>
  );
}
