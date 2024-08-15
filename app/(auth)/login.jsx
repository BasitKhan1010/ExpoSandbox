import React from 'react'
import { View, Text, ScrollView, TouchableOpacity, Image, Keyboard } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { LinearGradient } from 'expo-linear-gradient'
import { Entypo } from '@expo/vector-icons'
import { router } from 'expo-router'

import { color } from '../../config/colors'
import CustomInput from '../../components/CustomInput'
import CustomInputIcon from '../../components/CustomInputIcon'
import CustomButton from '../../components/CustomButton'

const login = () => {
  return (
    <SafeAreaView className="h-full flex-1" style={{ backgroundColor: color.primary }}>
     <StatusBar backgroundColor={color.primary} style="light" />
     
      <LinearGradient
        colors={[color.primary, color.secondary]}
        style={{ flex: 1 }}
      >

        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

          <View className="flex-row items-center p-4 mt-2">
            <TouchableOpacity onPress={() => router.replace('/')}>
              <Entypo name="chevron-left" size={24} color="white" />
            </TouchableOpacity>
            <Text className="text-white font-semibold text-lg ml-4 font-InterSemiBold">
              Login
            </Text>
          </View>

          <View className="flex-1 bg-white mt-2 rounded-t-[30px] px-7 pt-7 shadow-2xl">
            <View className="flex-1 justify-between">

              <View>
                <View className="mb-8 w-[80%]">
                  <Text className="text-2xl font-bold leading-8 font-InterBold">
                    Get started with DigiBank!
                  </Text>
                </View>

                <View>
                  <View>
                    <Text className="text-sm mb-2 font-InterMedium">User Name*</Text>
                    <CustomInput
                      placeholder="Enter your username"
                      onSubmitEditing={Keyboard.dismiss}
                    />
                    <View className="items-end mt-2">
                      <TouchableOpacity onPress={() => router.push('/forgot-username')}>
                        <Text
                          className="text-xs underline font-InterSemiBold"
                          style={{ color: color.primary }}
                        >
                          Forgot Username?
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>

                  <View className="mt-1 mb-4">
                    <Text className="text-sm mb-2 font-InterMedium">
                      Password*
                    </Text>
                    <CustomInputIcon
                      placeholder="Enter your password"
                      isPassword
                      onSubmitEditing={Keyboard.dismiss}
                    />
                    <View className="items-end mt-2">
                      <TouchableOpacity onPress={() => router.push('/forgot-password')}>
                        <Text
                          className="text-xs underline font-InterSemiBold"
                          style={{ color: color.primary }}
                        >
                          Forgot Password?
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>

              <View>
                <CustomButton
                  text="Login"
                  width="w-[100%]"
                  styles="mb-4 py-4"
                />

                <View className="flex-row justify-center">
                  <Text className="text-sm font-InterRegular">
                    Don't have an account?{" "}
                  </Text>
                  <TouchableOpacity onPress={() => router.push('/signup')}>
                    <Text
                      className="text-sm font-InterSemiBold"
                      style={{ color: color.primary }}
                    >
                      Sign up
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View className="flex justify-center items-center mb-8">
                <View className="flex flex-row space-x-5">

                  <View className="flex flex-col items-center">
                    <TouchableOpacity className="bg-primary p-4 rounded-lg">
                      <Image
                        source={require("../../assets/finger-icon.png")}
                        className="h-10 w-10"
                      />
                    </TouchableOpacity>
                    <Text className="mt-3 text-center font-sm">
                      Login with Touch ID
                    </Text>
                  </View>

                  <View className="flex flex-col items-center">
                    <TouchableOpacity className="bg-primary p-4 rounded-lg">
                      <Image
                        source={require("../../assets/face-icon.png")}
                        className="h-10 w-10"
                      />
                    </TouchableOpacity>
                    <Text className="mt-3 text-center font-sm">
                      Login with Face ID
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  )
}

export default login