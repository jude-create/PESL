import React, { useState } from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Button, TextInput, useTheme } from "react-native-paper";
import { useRouter } from "expo-router";

const SignIn = () => {
  const router = useRouter();
  const theme = useTheme();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<string>("");

  const handleSignIn = async (): Promise<void> => {
    setPasswordError("");

    if (!email.trim() || !password.trim()) {
      setPasswordError("Please enter your email and password");
      return;
    }

    try {
      setLoading(true);
      await new Promise<void>((resolve) => setTimeout(resolve, 1000)); // simulate delay
      router.push("/(tabs)"); // ✅ go to tabs directly
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView className="flex-1 px-5 pb-6 mt-10">
      {/* Back Arrow */}
      <AntDesign name="left" size={20} color="black" onPress={() => router.back()} />

      {/* Header */}
      <View className="mb-9 space-y-2 mt-9">
        <Text className="text-accent text-xl font-dinBold font-bold pb-3">Sign in</Text>
        <Text className="font-gilroy font-medium text-base text-accentNeutral">
          Enter your email address and password to sign in
        </Text>
      </View>

      {/* Email Input */}
      <View className="mb-4">
        <TextInput
          label="Email"
          mode="outlined"
          autoCapitalize="none"
          placeholder="Enter your Email Address"
          autoFocus
          keyboardType="email-address"
          activeOutlineColor="#05376A"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      {/* Password Input */}
      <View className="mb-4">
        <TextInput
          label="Password"
          mode="outlined"
          autoCapitalize="none"
          secureTextEntry={!showPassword}
          activeOutlineColor="#05376A"
          value={password}
          onChangeText={(text) => {
            setPassword(text);
            setPasswordError("");
          }}
          right={
            <TextInput.Icon
              icon={showPassword ? "eye-off" : "eye"}
              onPress={() => setShowPassword(!showPassword)}
              color="#05376A"
            />
          }
        />
        {passwordError ? (
          <Text
            style={{ color: theme.colors.error }}
            className="text-xs mt-1 font-gilroy"
          >
            {passwordError}
          </Text>
        ) : null}
      </View>

      {/* Navigation link */}
      <Text className="px-1 mb-5 text-sm text-accentLight font-gilroy font-medium">
        Don’t have an account?{" "}
        <Text
          className="text-accent underline font-gilroyBold"
          onPress={() => router.push("/(auth)/signUp")}
        >
          Create an account
        </Text>
      </Text>

      {/* Sign In Button */}
      <Button
        buttonColor="#05376A"
        textColor="#FFFFFF"
        loading={loading}
        labelStyle={{ fontFamily: "dinBold", fontSize: 16, fontWeight: "bold" }}
        mode="contained"
        onPress={handleSignIn}
      >
        Sign In
      </Button>
    </SafeAreaView>
  );
};

export default SignIn;
