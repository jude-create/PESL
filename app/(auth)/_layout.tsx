
import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="authScreen" options={{ title: "auth"}}  />
      <Stack.Screen name="signIn" options={{ title: "Log in"}} />
      <Stack.Screen name="signUp"options={{ title: "Register"}} />
      <Stack.Screen name="createAccount" options={{ title: "Create account"}}/>
      <Stack.Screen name="aboutBusiness" options={{ title: "About business"}}/>
    </Stack>
  );
}
