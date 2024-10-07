import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { Entypo } from '@expo/vector-icons';

import { color } from '../../config/colors';
import CustomButton from '../../components/CustomButton'
import PINCodeModal from '../../components/PINCodeModal';

const chooseSecurity = () => {
    const [source, setSource] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(false);

    const pinLength = 4;
    const [pin, setPin] = useState(Array(pinLength).fill(''));

    const toggleModal = (source) => {
        setSource(source);
        setIsModalVisible(!isModalVisible);
    };

    return (
        <SafeAreaView className="h-full flex-1">
            <StatusBar backgroundColor={color.primary} style="light" />

            <LinearGradient
                colors={[color.primary, color.secondary]}
                style={{ flex: 1 }}
            >
                <View style={{ flexGrow: 1 }}>

                    <View className="h-[62%]">

                        <View className="flex-row items-start mt-2 px-4">
                            <TouchableOpacity onPress={() => router.back()} className="mt-4">
                                <Entypo name="chevron-left" size={24} color="white" />
                            </TouchableOpacity>
                        </View>

                        <View className="flex-1 justify-center items-center px-4 -top-8">
                            <Image source={require('../../assets/security.png')} resizeMode='contain' className="w-[50%] h-[50%]" />

                            <Text className="text-center text-white font-InterBold text-2xl">Enhance Your Security</Text>
                            <Text className="text-center text-white font-InterRegular text-base mt-3">Secure your data with Finger ID or Face ID. Enable these features for added protection.</Text>
                        </View>
                    </View>

                    <View className="flex-1 bg-white mt-2 rounded-t-[30px] px-7 pt-7 pb-4 shadow-2xl justify-between">

                        <View>
                            <TouchableOpacity className="flex-row items-center justify-between bg-white border-gray-200 py-5 px-5 mb-4 rounded-xl shadow-2xl shadow-slate-300" onPress={() => toggleModal('fingerprint')}>
                                <View className="flex-row items-center">
                                    <Image source={require('../../assets/fingerprint.png')} resizeMode='contain' />
                                    <Text className="font-InterMedium ml-4">Add Fingerprint</Text>
                                </View>

                                <Entypo name="chevron-right" size={21} color={color.primary} />
                            </TouchableOpacity>

                            <TouchableOpacity className="flex-row items-center justify-between bg-white border-gray-200 py-5 px-5 mb-2 rounded-xl shadow-2xl shadow-slate-300" onPress={() => toggleModal('face')}>
                                <View className="flex-row items-center">
                                    <Image source={require('../../assets/faceid.png')} resizeMode='contain' />
                                    <Text className="font-InterMedium ml-4">Add Face ID</Text>
                                </View>

                                <Entypo name="chevron-right" size={21} color={color.primary} />
                            </TouchableOpacity>
                        </View>

                        <CustomButton
                            text='Skip'
                            width='w-[100%]'
                            styles='mb-4 py-4'
                            onPress={() => router.replace('/login')}
                        />

                    </View>
                </View>
            </LinearGradient>

            <PINCodeModal isModalVisible={isModalVisible} toggleModal={toggleModal} pinLength={pinLength} pin={pin} setPin={setPin} source={source} />
        </SafeAreaView>
    )
}

export default chooseSecurity