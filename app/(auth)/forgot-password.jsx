import React from 'react'
import { View, Text, ScrollView, TouchableOpacity, Keyboard } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from 'expo-router'
import { Entypo } from '@expo/vector-icons'

import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'

const forgotPassword = () => {
  return (
    <SafeAreaView className="h-full flex-1 bg-white">
      <StatusBar backgroundColor="#ffffff" style="dark" />
      
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

        <View className="flex-row items-center p-4 mt-2">
          <TouchableOpacity onPress={() => router.back()}>
            <Entypo name="chevron-left" size={24} color="black" />
          </TouchableOpacity>
          <Text className="text-black font-semibold text-lg ml-4 font-InterSemiBold">Forgot password</Text>
        </View>

        <View className="flex-1 mt-4 px-4">
          <View className="bg-white rounded-xl w-full shadow-xl shadow-slate-500 px-5 pt-6 pb-4">

            <View className="mb-5">
              <Text className="text-sm mb-2 font-InterMedium">CNIC Number*</Text>
              <CustomInput placeholder="Enter your CNIC" onSubmitEditing={Keyboard.dismiss} />
            </View>

            <View className="mb-6">
              <Text className="text-sm mb-2 font-InterMedium">Account Number*</Text>
              <CustomInput placeholder="Enter 14 digits Acc No." onSubmitEditing={Keyboard.dismiss} />
            </View>

            <View className="mt-3 mb-1">
              <CustomButton
                text='Next'
                width='w-[100%]'
                styles='mb-4 py-4'
                onPress={() => router.push({ pathname: "otp-screen", params: { route: "password" } })}
              />
            </View>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

export default forgotPassword