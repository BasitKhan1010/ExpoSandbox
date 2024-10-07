import React from 'react'
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native'
import { Feather, Entypo } from '@expo/vector-icons';

const Card = () => {
    return (
        <View className="shadow-md w-[85%] h-[200px]">
            <ImageBackground source={require('../assets/main-credit-card.png')} className="w-full h-full" resizeMode="contain">
                <View className="px-4 pt-6 pb-9 h-full justify-between">
                    <View className="flex-row items-center justify-between">
                        <View>
                            <Text className="font-InterMedium">Total Balance</Text>
                            <View className="flex-row items-center mt-1">
                                <Text className="text-xl font-InterBold text-white mr-2.5">$100,000,000</Text>
                                <TouchableOpacity>
                                    <Feather name="eye" size={19} color="white" />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <TouchableOpacity>
                            <Entypo name="dots-three-vertical" size={18} color="white" />
                        </TouchableOpacity>
                    </View>

                    <View className="font-InterRegular">
                        <View className="flex-row items-center">
                            <Text className="font-InterBold mr-2.5 text-gray-700">A/C No: 42201-abcde-001</Text>
                            <TouchableOpacity>
                                <Feather name="copy" size={18} color="lightgray" />
                            </TouchableOpacity>
                        </View>
                        <Text className="font-InterBold text-white mt-1">Current</Text>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

export default Card