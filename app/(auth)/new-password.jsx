import React from 'react'
import { View, Text, TouchableOpacity, ScrollView, Keyboard } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { router } from 'expo-router'
import { Entypo } from '@expo/vector-icons'

import CustomInputIcon from '../../components/CustomInputIcon'
import CustomButton from '../../components/CustomButton'

const newPassword = () => {
    return (
        <SafeAreaView className="h-full flex-1 bg-white">
            <StatusBar backgroundColor="#ffffff" style="dark" />
            
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

                <View className="flex-row items-center p-4 mt-2">
                    <TouchableOpacity onPress={() => router.back()}>
                        <Entypo name="chevron-left" size={24} color="black" />
                    </TouchableOpacity>
                    <Text className="text-black font-semibold text-lg ml-4 font-InterSemiBold">Change password</Text>
                </View>

                <View className="flex-1 mt-4 px-4">
                    <View className="bg-white rounded-xl w-full shadow-xl shadow-slate-500 px-5 pt-6 pb-4">

                        <View className="mb-5">
                            <Text className="text-sm mb-2 font-InterMedium">New Password*</Text>
                            <CustomInputIcon placeholder="Enter new password" isPassword onSubmitEditing={Keyboard.dismiss} />
                        </View>

                        <View className="mb-7">
                            <Text className="text-sm mb-2 font-InterMedium">Confirm Password*</Text>
                            <CustomInputIcon placeholder="Confirm your password" isPassword onSubmitEditing={Keyboard.dismiss} />
                        </View>

                        <CustomButton
                            text='Change Password'
                            width='w-[100%]'
                            styles='mb-4 py-4'
                            onPress={() => router.push('/login')}
                        />
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default newPassword