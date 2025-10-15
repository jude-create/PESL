import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import { Button, TextInput, useTheme } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from '@expo/vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function aboutBusiness() {
  const router = useRouter();
  const theme = useTheme();

  const [name, setName] = useState<string>('');
  const [cacNumbr, setCacNumber] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [contact, setContact] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  // Validate if form is filled
  const isFormValid: boolean =
    name.trim() !== '' &&
    cacNumbr.trim() !== '' &&
    date.trim() !== '' &&
    address.trim() !== '' &&
    contact.trim() !== '';

  // ✅ Date validation (checks DD/MM/YYYY format)
  const validateDate = (text: string) => {
    const isValid = /^\d{2}\/\d{2}\/\d{4}$/.test(text);
    if (!isValid && text.trim() !== '') {
      setError('Date format must be DD/MM/YYYY');
    } else {
      setError('');
    }
  };

  const handleSignUp = async (): Promise<void> => {
    setError('');

    if (!isFormValid) {
      setError('Please fill in all fields');
      return;
    }

    try {
      setLoading(true);
      await AsyncStorage.setItem("aboutBusinessDone", "true");
        router.push("/(auth)/signUp");
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView className="flex-1 px-5 pb-6 mt-10 justify-between">
      <View>
        {/* Back Arrow */}
        <AntDesign name="left" size={20} color="black" onPress={() => router.back()} />

        {/* Header */}
        <View className="mb-9 space-y-2 mt-9">
          <Text className="text-accent text-xl font-dinBold font-bold pb-3">
            About your business
          </Text>
          <Text className="font-gilroy font-medium text-base text-accentNeutral">
            Enter your business information. Make sure your details match your registration.
          </Text>
        </View>

        {/* Business Name Input */}
        <View className="mb-4">
          <TextInput
            label="Business Name"
            mode="outlined"
            keyboardType="default"
            placeholder="Enter your Business Name"
            activeOutlineColor="#05376A"
            value={name}
            onChangeText={setName}
          />
        </View>

        {/* CAC + Date */}
        <View className="mb-4 flex-row justify-between">
          <TextInput
            label="CAC RC Number"
            mode="outlined"
            keyboardType="number-pad"
            activeOutlineColor="#05376A"
            style={{ width: 170 }}
            value={cacNumbr}
            onChangeText={setCacNumber}
          />

          <TextInput
            label="Incorporation Date "
            mode="outlined"
            keyboardType="default"
            placeholder="DD/MM/YYYY"
            activeOutlineColor="#05376A"
            style={{ width: 170 }}
            value={date}
            onChangeText={setDate}
            onBlur={() => validateDate(date)}
          />
        </View>

        {/* Business Address */}
        <View className="mb-4">
          <TextInput
            label="Business Address"
            mode="outlined"
            autoCapitalize="none"
            activeOutlineColor="#05376A"
            onChangeText={setAddress}
          />
        </View>

        {/* Contact */}
        <View className="mb-4">
          <TextInput
            label="Contact Number"
            mode="outlined"
            keyboardType="phone-pad"
            activeOutlineColor="#05376A"
            value={contact}
            onChangeText={setContact}
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
      </View>

      {/* Continue Button */}
      <Button
        buttonColor="#05376A"
        textColor="#FFFFFF"
        loading={loading}
        labelStyle={{ fontFamily: 'dinBold', fontSize: 16, fontWeight: 'bold' }}
        mode="contained"
        onPress={handleSignUp}
      >
        Continue
      </Button>
    </SafeAreaView>
  );
}
