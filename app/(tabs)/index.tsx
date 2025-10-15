import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView
     className=" items-center px-4 bg-primary" >
    <View className="bg-primary h-60  w-full">
       <Text className="pt-24" >Edit app/index.tsx to edit this screens.</Text>
    </View>
      
    </SafeAreaView>
  );
}