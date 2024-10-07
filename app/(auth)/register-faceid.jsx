import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { Entypo } from '@expo/vector-icons';

import CustomButton from '../../components/CustomButton'

const registerFaceid = () => {
  return (
    <SafeAreaView className="h-full flex-1 bg-white">
            <StatusBar backgroundColor="#ffffff" style="dark" />

            <View style={{ flexGrow: 1 }}>
                <View className="flex-row items-start mt-2 px-4">
                    <TouchableOpacity onPress={() => router.back()} className="mt-4">
                        <Entypo name="chevron-left" size={24} color="black" />
                    </TouchableOpacity>
                </View>

                <View className="flex-1 justify-between pt-14 pb-28">

                    <View className="w-full px-7 items-center">
                        <Text className="font-InterBold text-2xl text-center">Let’s verify your identity</Text>
                        <Text className="text-center mt-4 font-InterRegular text-base text-gray-500">Experience the Future of Face Detection with Effortless Precision on Your Mobile Device</Text>
                    </View>

                    <View className="w-full items-center">
                        <Image source={require('../../assets/face1.png')} resizeMode='contain' className="w-[50%]" />
                    </View>

                    <View className="w-full px-7">
                        <CustomButton
                            text='Enable biometric access'
                            width='w-[100%]'
                            styles='mb-4 py-4'
                            onPress={() => router.replace('/login')}
                        />
                    </View>
                </View>
            </View>
        </SafeAreaView>
  )
}

export default registerFaceid

