import React from 'react'
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { color } from '../../../config/colors'
import Header from '../../../components/Header'
import Card from '../../../components/Card'

const home = () => {
  return (
    <SafeAreaView className="h-full flex-1" style={{ backgroundColor: '#F9FAFC' }}>
      <Header />

      <ScrollView contentContainerStyle={{ flexGrow: 1, paddingTop: 5 }}>

        <View className="mt-3 w-full justify-center items-center">
          <Card />
        </View>

        <View className="w-full px-7 mt-4">
          <Text className="font-InterBold text-base">Activity</Text>

          <View className="mt-5">
            <View className="flex-row justify-center">
              <TouchableOpacity className="w-[90px] h-[90px] p-2 mx-2.5 bg-white active:bg-primary border-gray-200 shadow-lg shadow-slate-400 rounded-lg justify-center items-center">
                <Image source={require('../../../assets/transfer.png')} resizeMode='contain' className="w-8 h-8" />
                <Text className="font-InterSemiBold mt-2 text-[13px]">Transfer</Text>
              </TouchableOpacity>

              <TouchableOpacity className="w-[90px] h-[90px] p-2 mx-2.5 bg-white active:bg-primary border-gray-200 shadow-lg shadow-slate-400 rounded-lg justify-center items-center">
                <Image source={require('../../../assets/payment.png')} resizeMode='contain' className="w-7 h-7" />
                <Text className="font-InterSemiBold mt-2 text-xs">Payment</Text>
              </TouchableOpacity>

              <TouchableOpacity className="w-[90px] h-[90px] p-2 mx-2.5 bg-white active:bg-primary border-gray-200 shadow-lg shadow-slate-400 rounded-lg justify-center items-center">
                <Image source={require('../../../assets/payees.png')} resizeMode='contain' className="w-8 h-8" />
                <Text className="font-InterSemiBold mt-2 text-[13px]">My Payees</Text>
              </TouchableOpacity>
            </View>

            <View className="flex-row justify-center mt-5">
              <TouchableOpacity className="w-[90px] h-[90px] p-2 mx-2.5 bg-white active:bg-primary border-gray-200 shadow-lg shadow-slate-400 rounded-lg justify-center items-center">
                <Image source={require('../../../assets/cards.png')} resizeMode='contain' className="w-7 h-7" />
                <Text className="font-InterSemiBold mt-2 text-[13px]">Cards</Text>
              </TouchableOpacity>

              <TouchableOpacity className="w-[90px] h-[90px] p-2 mx-2.5 bg-white active:bg-primary border-gray-200 shadow-lg shadow-slate-400 rounded-lg justify-center items-center">
                <Image source={require('../../../assets/topup.png')} resizeMode='contain' className="w-8 h-8" />
                <Text className="font-InterSemiBold mt-2 text-[13px]">Top up</Text>
              </TouchableOpacity>

              <TouchableOpacity className="w-[90px] h-[90px] p-2 mx-2.5 bg-white active:bg-primary border-gray-200 shadow-lg shadow-slate-400 rounded-lg justify-center items-center">
                <Image source={require('../../../assets/accounts.png')} resizeMode='contain' className="w-8 h-8" />
                <Text className="font-InterSemiBold mt-2 text-[13px]">Accounts</Text>
              </TouchableOpacity>
            </View>

            <View className="flex-row justify-center mt-5">
              <TouchableOpacity className="w-[90px] h-[90px] p-2 mx-2.5 bg-white active:bg-primary border-gray-200 shadow-lg shadow-slate-400 rounded-lg justify-center items-center">
                <Image source={require('../../../assets/qr.png')} resizeMode='contain' className="w-7 h-7" />
                <Text className="font-InterSemiBold mt-2 text-[13px] text-center">QR Payments</Text>
              </TouchableOpacity>

              <TouchableOpacity className="w-[90px] h-[90px] p-2 mx-2.5 bg-white active:bg-primary border-gray-200 shadow-lg shadow-slate-400 rounded-lg justify-center items-center">
                <Image source={require('../../../assets/utility.png')} resizeMode='contain' className="w-8 h-8" />
                <Text className="font-InterSemiBold mt-2 text-[13px]">Utility</Text>
              </TouchableOpacity>

              <TouchableOpacity className="w-[90px] h-[90px] p-2 mx-2.5 bg-white active:bg-primary border-gray-200 shadow-lg shadow-slate-400 rounded-lg justify-center items-center">
                <Image source={require('../../../assets/statement.png')} resizeMode='contain' className="w-8 h-8" />
                <Text className="font-InterSemiBold mt-2 text-[13px]">Statement</Text>
              </TouchableOpacity>
            </View>

            <View className="flex-row justify-center mt-5">
              <TouchableOpacity className="w-[90px] h-[90px] p-2 mx-2.5 bg-white active:bg-primary border-gray-200 shadow-lg shadow-slate-400 rounded-lg justify-center items-center">
                <Image source={require('../../../assets/discount.png')} resizeMode='contain' className="w-8 h-8" />
                <Text className="font-InterSemiBold mt-2 text-[13px]">Discount</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View className="w-full px-7 mt-8">
          <View className="w-full flex-row justify-between">
            <Text className="font-InterBold text-base">My Payees</Text>
            <TouchableOpacity>
              <Text className="font-InterSemiBold text-primary text-xs underline underline-offset-1">View all</Text>
            </TouchableOpacity>
          </View>


        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

export default home