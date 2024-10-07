import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons';

import { color } from '../config/colors'

const Header = () => {
    return (
        <View className="bg-white flex-row shadow-2xl shadow-slate-400 border-b-gray-200 justify-between items-center border-b-[1px] w-full px-5 py-3">
            <View className="flex-row items-center justify-between">
                <TouchableOpacity>
                    <Feather name="menu" size={25} color="black" />
                </TouchableOpacity>

                <View className="flex-row items-center ml-2">
                    <View className="w-12 h-12 rounded-full border-primary border-[1px] p-2 justify-center items-center">
                        <Image source={require('../assets/icons/user-icon.png')} resizeMode='contain' className="w-10 h-10" />
                    </View>

                    <View className="ml-3 w-[65%]">
                        <Text className="font-InterRegular text-sm text-gray-500">Welcome</Text>
                        <Text className="font-InterBold text-base">Username</Text>
                    </View>

                </View>
            </View>

            <TouchableOpacity>
                <Feather name="bell" size={24} color="black" />
            </TouchableOpacity>
        </View>
    )
}

export default Header