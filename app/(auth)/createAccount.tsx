import React, { useState } from "react";
import { View, Text } from "react-native";
import { useRouter } from "expo-router";
import { Button, TextInput, useTheme } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "@expo/vector-icons/AntDesign";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function CreateAccount() {
  const router = useRouter();
  const theme = useTheme();

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  // ✅ Dynamically compute if passwords match
  const passwordsMatch: boolean =
    password.length > 0 && confirmPassword.length > 0
      ? password === confirmPassword
      : true;

  // ✅ Disable button until form is valid
  const isFormValid: boolean =
    name.trim() !== "" &&
    email.trim() !== "" &&
    password.trim() !== "" &&
    confirmPassword.trim() !== "" &&
    passwordsMatch;

  const handleSignUp = async (): Promise<void> => {
    setError("");

    if (!isFormValid) {
      if (!passwordsMatch) setError("Passwords do not match");
      else setError("Please fill in all fields");
      return;
    }

    try {
      setLoading(true);
      // simulate API request delay
      await AsyncStorage.setItem("createAccountDone", "true");
      router.push("/(auth)/signUp");
    //   await new Promise<void>((resolve) => setTimeout(resolve, 1000));
    //   router.replace("/(auth)/signUp?createAccount=done");
    } catch (err) {
      console.error(err);
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
        <Text className="text-accent text-xl font-dinBold font-bold pb-3">
          Create your account
        </Text>
        <Text className="font-gilroy font-medium text-base text-accentNeutral">
          Enter your email address and choose your password. Passwords must be at
          least 6 characters long
        </Text>
      </View>

      {/* Name Input */}
      <View className="mb-4">
        <TextInput
          label="Contact Name"
          mode="outlined"
          autoCapitalize="none"
          placeholder="Enter your Full Name"
          activeOutlineColor="#05376A"
          value={name}
          onChangeText={setName}
        />
      </View>

      {/* Email Input */}
      <View className="mb-4">
        <TextInput
          label="Email"
          mode="outlined"
          autoCapitalize="none"
          placeholder="Enter your Email Address"
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
          onChangeText={setPassword}
          right={
            <TextInput.Icon
              icon={showPassword ? "eye-off" : "eye"}
              onPress={() => setShowPassword(!showPassword)}
              color="#05376A"
            />
          }
        />
      </View>

      {/* Confirm Password Input */}
      <View className="mb-4">
        <TextInput
          label="Confirm Password"
          mode="outlined"
          autoCapitalize="none"
          secureTextEntry={!showPassword}
          activeOutlineColor="#05376A"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          right={
            <TextInput.Icon
              icon={showPassword ? "eye-off" : "eye"}
              onPress={() => setShowPassword(!showPassword)}
              color="#05376A"
            />
          }
        />

        {/* Inline Errors */}
       
        {error ? (
          <Text
            style={{ color: theme.colors.error }}
            className="text-xs mt-1 font-gilroy"
          >
            {error}
          </Text>
        ) : null}
      </View>

      {/* Navigation link */}
      <Text className="px-1 mb-5 text-sm text-accentLight font-gilroy font-medium">
        By clicking “Create account” you agree to our{" "}
        <Text className="text-accent underline font-gilroyBold">Terms of Use</Text>{" "}
        and that you have read our{" "}
        <Text className="text-accent underline font-gilroyBold">
          Privacy policy
        </Text>
      </Text>

      {/* Create Account Button */}
      <Button
        buttonColor="#05376A"
        textColor="#FFFFFF"
        loading={loading}
        disabled={!isFormValid }
        labelStyle={{ fontFamily: "dinBold", fontSize: 16, fontWeight: "bold" }}
        mode="contained"
        onPress={handleSignUp}
      >
        Create Account
      </Button>
    </SafeAreaView>
  );
}
