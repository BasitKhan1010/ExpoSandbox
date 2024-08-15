import React, { useState } from 'react'
import { View, Text, TouchableOpacity, ScrollView, Switch, Keyboard } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { LinearGradient } from 'expo-linear-gradient'
import { router, useLocalSearchParams } from 'expo-router'
import { Entypo } from '@expo/vector-icons'

import { color } from '../../config/colors'
import CustomInput from '../../components/CustomInput'
import CustomInputIcon from '../../components/CustomInputIcon'
import CustomButton from '../../components/CustomButton'

const signup = () => {
  const { route } = useLocalSearchParams();

  const [main, setMain] = useState(true);
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <SafeAreaView className="h-full flex-1">
      <StatusBar backgroundColor={color.primary} style="light" />

      <LinearGradient
        colors={[color.primary, color.secondary]}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View className="flex-row items-center p-4 mt-2">
            <TouchableOpacity onPress={() => {
              setMain(true);
              main && route !== 'OTP' && router.replace('/');
              route === 'OTP' && router.back();
            }}>
              <Entypo name="chevron-left" size={24} color="white" />
            </TouchableOpacity>
            <Text className="text-white text-lg font-semibold ml-4 font-InterSemiBold">Register yourself</Text>
          </View>

          <View className="flex-1 bg-white mt-2 rounded-t-[30px] px-7 pt-7 shadow-2xl">

          {route === 'OTP' ? (
              <View className="flex-1 justify-between">
                <View>
                  <View className="mb-8 w-[80%]">
                    <Text className="text-2xl font-bold font-InterBold">Get started with your account!</Text>
                  </View>

                  <View>
                    <View className="mb-5">
                      <Text className="text-sm mb-2 font-InterMedium">User Name*</Text>
                      <CustomInput placeholder="Enter a username" onSubmitEditing={Keyboard.dismiss} />
                    </View>

                    <View className="mb-5">
                      <Text className="text-sm mb-2 font-InterMedium">Password*</Text>
                      <CustomInputIcon placeholder="Enter a password" isPassword onSubmitEditing={Keyboard.dismiss} />
                    </View>

                    <View className="mb-9">
                      <Text className="text-sm mb-2 font-InterMedium">Confirm Password*</Text>
                      <CustomInputIcon placeholder="Confirm your password" isPassword onSubmitEditing={Keyboard.dismiss} />
                    </View>
                  </View>
                </View>

                <View className="mb-8">
                  <CustomButton
                    text='Sign up'
                    width='w-[100%]'
                    styles='mb-4 py-4'
                    onPress={() => router.push('/login')}
                  />

                  <View className="flex-row justify-center">
                    <Text className="text-sm font-InterRegular">Already have an account? </Text>
                    <TouchableOpacity onPress={() => router.push('/login')}>
                      <Text className="text-sm font-InterSemiBold" style={{ color: color.primary }}>Login</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            ) : main ? (
              <View className="flex-1 justify-between">
                <View>
                  <View className="mb-8 w-[80%]">
                    <Text className="text-2xl font-bold font-InterBold">Get started with your account!</Text>
                  </View>

                  <View>
                    <View className="mb-5">
                      <Text className="text-sm mb-2 font-InterMedium">CNIC Number*</Text>
                      <CustomInput placeholder="Enter your CNIC" onSubmitEditing={Keyboard.dismiss} />
                    </View>

                    <View className="mb-5">
                      <Text className="text-sm mb-2 font-InterMedium">Mobile Number*</Text>
                      <CustomInput placeholder="Enter your mobile number" onSubmitEditing={Keyboard.dismiss} keyboardType='numeric' />
                    </View>

                    <View className="mb-6">
                      <Text className="text-sm mb-2 font-InterMedium">Account Number*</Text>
                      <CustomInput placeholder="Enter 14 digits Acc No." onSubmitEditing={Keyboard.dismiss} />
                    </View>
                  </View>

                  <View className="mb-7 d-flex flex-row items-center px-1">
                    <Text className="text-sm font-InterMedium -top-1">
                      Set Fingerprint{" "}
                    </Text>
                    <Switch
                      className="ml-auto"
                      trackColor={{ false: "#c9c9c9", true: "#1DBBD8" }}
                      thumbColor={isEnabled ? "#1DBBD8" : "#f4f3f4"}
                      onValueChange={toggleSwitch}
                      value={isEnabled}
                    />
                  </View>
                </View>

                <View className="mb-8">
                  <CustomButton
                    text='Next'
                    width='w-[100%]'
                    styles='mb-4 py-4'
                    onPress={() => setMain(false)}
                  />

                  <View className="flex-row justify-center">
                    <Text className="text-sm font-InterRegular">Already have an account? </Text>
                    <TouchableOpacity onPress={() => router.push('/login')}>
                      <Text className="text-sm font-InterSemiBold" style={{ color: color.primary }}>Login</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            ) : (
              <View className="flex-1 justify-between">
                <View>
                  <View className="mb-8 w-[80%]">
                    <Text className="text-2xl font-bold font-InterBold">Get started with your account!</Text>
                  </View>

                  <View>
                    <View className="mb-5">
                      <Text className="text-sm mb-2 font-InterMedium">First Name*</Text>
                      <CustomInput placeholder="Returned first name" disable />
                    </View>

                    <View className="mb-5">
                      <Text className="text-sm mb-2 font-InterMedium">Last Name*</Text>
                      <CustomInput placeholder="Returned last name" disable />
                    </View>

                    <View className="mb-9">
                      <Text className="text-sm mb-2 font-InterMedium">Email Address*</Text>
                      <CustomInput placeholder="Returned email address" disable />
                    </View>
                  </View>
                </View>

                <View className="mb-8">
                  <CustomButton
                    text='Next'
                    width='w-[100%]'
                    styles='mb-4 py-4'
                    onPress={() => router.push({ pathname: "otp-screen", params: { route: "signup" } })}
                  />

                  <View className="flex-row justify-center">
                    <Text className="text-sm font-InterRegular">Already have an account? </Text>
                    <TouchableOpacity onPress={() => router.push('/login')}>
                      <Text className="text-sm font-InterSemiBold" style={{ color: color.primary }}>Login</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )}
          </View>

        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  )
}

export default signup