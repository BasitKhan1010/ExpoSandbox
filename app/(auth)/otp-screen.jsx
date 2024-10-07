import React, { useRef, useState } from 'react'
import { View, Text, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { Entypo } from '@expo/vector-icons'
import { router, useLocalSearchParams } from 'expo-router'

import { color } from '../../config/colors'
import CustomButton from '../../components/CustomButton'

const otpScreen = () => {
    const { route } = useLocalSearchParams();

    const otpLength = 4;
    const inputs = useRef([]);

    const [otp, setOtp] = useState(Array(otpLength).fill(''));

    const handleChange = (text, index) => {
        const sanitizedText = text.replace(/[^0-9]/g, '');
        const newOtp = [...otp];
        newOtp[index] = sanitizedText;

        setOtp(newOtp);

        if (sanitizedText.length === 1 && index < otpLength - 1) {
            inputs.current[index + 1].focus();
        } else if (sanitizedText.length === 0 && index > 0) {
            const prevIndex = index - 1;
            if (inputs.current[prevIndex]) {
                inputs.current[prevIndex].focus();
            }
        }
    };

    return (
        <SafeAreaView className="h-full flex-1 bg-white">
            <StatusBar backgroundColor="#ffffff" style="dark" />

            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

                <View className="flex-row items-center p-4 mt-2">
                    <TouchableOpacity onPress={() => router.back()}>
                        <Entypo name="chevron-left" size={24} color="black" />
                    </TouchableOpacity>
                    <Text className="text-black font-semibold text-lg ml-4 font-InterSemiBold">OTP</Text>
                </View>

                <View className="flex-1 mt-4 px-4 justify-center -top-14">
                    <View className="bg-white rounded-xl w-full shadow-xl shadow-slate-500 px-5 pt-5 pb-4">

                        <View className="mb-5">
                            <Text className="text-sm mb-5 font-InterMedium">Enter Your OTP*</Text>

                            <View className="flex-row justify-around items-center">
                                {Array.from({ length: otpLength }).map((_, index) => (
                                    <TextInput
                                        key={index}
                                        ref={(input) => inputs.current[index] = input}
                                        className="w-12 h-12 text-center text-lg bg-[#F4F5F9] border border-gray-300 rounded-md font-InterSemiBold"
                                        keyboardType="numeric"
                                        maxLength={1}
                                        onChangeText={(text) => handleChange(text, index)}
                                        returnKeyType={index === otpLength - 1 ? "done" : "next"}
                                    />
                                ))}
                            </View>
                        </View>

                        <View className="px-2 mb-7">
                            <Text className="text-sm font-InterMedium" style={{ color: color.primary }}>We have sent a code to <Text className="text-slate-500">******@mail.com</Text> Enter code here to verify your identity</Text>
                        </View>

                        <CustomButton
                            text='Verify'
                            width='w-[100%]'
                            styles='mb-4 py-4'
                            onPress={() => {
                                route === 'password' && router.replace('/new-password');
                                route === 'username' && router.replace('/login');
                                route === 'signup' && router.replace({ pathname: "signup", params: { route: "OTP" } })
                            }}
                        />

                        <View className="mt-1 mb-2 flex-row justify-center items-center">
                            <Text className="font-InterMedium text-gray-400">Didn't receive a code? </Text>
                            <TouchableOpacity>
                                <Text className="font-InterSemiBold" style={{ color: color.primary }}>
                                    RESEND
                                </Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default otpScreen