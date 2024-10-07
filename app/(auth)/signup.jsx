import React, { useState } from 'react'
import { View, Text, TouchableOpacity, ScrollView, Keyboard } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { LinearGradient } from 'expo-linear-gradient'
import { router, useLocalSearchParams } from 'expo-router'
import { Entypo, AntDesign } from '@expo/vector-icons'

import { color } from '../../config/colors'
import CustomInput from '../../components/CustomInput'
import CustomInputIcon from '../../components/CustomInputIcon'
import CustomButton from '../../components/CustomButton'

const signup = () => {
  const { route } = useLocalSearchParams();

  const [main, setMain] = useState(true);

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

                    <View className="mb-6">
                      <Text className="text-sm mb-2 font-InterMedium">Password*</Text>
                      <CustomInputIcon placeholder="Enter a password" isPassword onSubmitEditing={Keyboard.dismiss} />
                    </View>

                    <View className="mb-5 pl-1 pr-4">
                      <View className="flex-row items-start mb-2">
                        <AntDesign name="checkcircle" size={12} color="gray" style={{ marginRight: 8, top: 4 }} />
                        <Text className="text-sm font-InterSemiBold text-gray-700">Length: <Text className="font-InterRegular text-gray-500">Ensure your password is at least 8 characters long</Text></Text>
                      </View>
                      <View className="flex-row items-start mb-2">
                        <AntDesign name="checkcircle" size={12} color="gray" style={{ marginRight: 8, top: 4 }} />
                        <Text className="text-sm font-InterSemiBold text-gray-700">Numbers: <Text className="font-InterRegular text-gray-500"> Include at least one number (0-9)</Text></Text>
                      </View>
                      <View className="flex-row items-start mb-2">
                        <AntDesign name="checkcircle" size={12} color="gray" style={{ marginRight: 8, top: 4 }} />
                        <Text className="text-sm font-InterSemiBold text-gray-700">Case Sensitivity: <Text className="font-InterRegular text-gray-500">Use both uppercase and lowercase letters</Text></Text>
                      </View>
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
                    onPress={() => router.push('/choose-security')}
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

                    <View className="mb-9">
                      <Text className="text-sm mb-2 font-InterMedium">Account Number*</Text>
                      <CustomInput placeholder="Enter 14 digits Acc No." onSubmitEditing={Keyboard.dismiss} />
                    </View>
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