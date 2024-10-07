import React, { useState, useEffect, useRef } from 'react'
import { View, Text, ScrollView, TouchableOpacity, Image, Keyboard, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { LinearGradient } from 'expo-linear-gradient'
import { Entypo } from '@expo/vector-icons'
import { router } from 'expo-router'
import Modal from 'react-native-modal'

import { color } from '../../config/colors'
import CustomInput from '../../components/CustomInput'
import CustomInputIcon from '../../components/CustomInputIcon'
import CustomButton from '../../components/CustomButton'

const login = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [pin, setPin] = useState(Array(pinLength).fill(''));

  const pinLength = 4;
  const inputs = useRef([]);

  const handlePINChange = (text, index) => {
    const sanitizedText = text.replace(/[^0-9]/g, '');
    const newPin = [...pin];
    newPin[index] = sanitizedText;

    setPin(newPin);

    if (sanitizedText.length === 1 && index < pinLength - 1) {
      inputs.current[index + 1].focus();
    } else if (sanitizedText.length === 0 && index > 0) {
      const prevIndex = index - 1;
      if (inputs.current[prevIndex]) {
        inputs.current[prevIndex].focus();
      }
    }
  };

  useEffect(() => {
    const toggleModal = () => {
      setModalVisible(true);
    };

    setTimeout(() => {
      toggleModal();
    }, 200);
  }, []);

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
                  onPress={() => router.replace('/home/')}
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
                    <TouchableOpacity className="bg-primary p-4 rounded-lg" onPress={() => router.replace('/home/')}>
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
                    <TouchableOpacity className="bg-primary p-4 rounded-lg" onPress={() => router.replace('/home/')}>
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

      <Modal
        style={{ backgroundColor: 'rgba(0,0,0,0.5)', margin: 0 }}
        transparent={true}
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
        onBackdropPress={() => setModalVisible(false)}
        hasBackdrop={true}
        backdropColor="black"
        backdropOpacity={0.5}
      >
        <View className="bg-white p-5 rounded-lg w-11/12 max-w-xs justify-center items-center self-center shadow-md shadow-slate-400">
          <View className="mb-5 px-2">
            <Text className="mb-4 text-center font-InterSemiBold">Enter Your {pinLength} Digit PIN</Text>

            <View className="flex-row justify-around items-center w-full self-center -left-1">
              {Array.from({ length: pinLength }).map((_, index) => (
                <TextInput
                  key={index}
                  ref={(input) => inputs.current[index] = input}
                  className="w-12 h-12 text-center text-lg bg-[#F4F5F9] border border-gray-300 rounded-md font-InterSemiBold"
                  keyboardType="numeric"
                  maxLength={1}
                  onChangeText={(text) => handlePINChange(text, index)}
                  returnKeyType={index === pinLength - 1 ? "done" : "next"}
                />
              ))}
            </View>
          </View>

          <View className="border-t border-gray-300 w-[95%] self-center border-dotted mb-2" />

          <TouchableOpacity className="bg-white p-2 shadow-md shadow-slate-300 rounded-full justify-center items-center mb-2.5" onPress={() => router.replace('/home/')}>
            <Image
              source={require("../../assets/fingerprint-login.png")}
              className="w-14 h-14"
            />
          </TouchableOpacity>
          <Text className="text-center font-InterSemiBold text-gray-700">
            Login with Touch / Face ID
          </Text>

          <View className="flex-row justify-between w-full px-1 mt-6">
            <CustomButton
              text="Cancel"
              onPress={() => setModalVisible(false)}
              width="w-[48%]"
              bgcolor="white"
              textStyles="text-gray-700"
              styles="border border-gray-300 py-3"
            />

            <CustomButton
              text="Done"
              onPress={() => router.replace('/home/')}
              width="w-[48%]"
              styles="py-3"
            />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  )
}

export default login