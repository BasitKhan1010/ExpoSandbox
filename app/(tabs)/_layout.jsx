import React from 'react'
import { View, Text, Image } from "react-native";
import { Tabs } from "expo-router";

import { color } from '../../config/colors'
import home from '../../assets/icons/home-icon.png'
import points from '../../assets/icons/points-icon.png'
import qr from '../../assets/icons/qr-code-icon.png'
import promotion from '../../assets/icons/promotion-icon.png'
import account from '../../assets/icons/account-icon.png'

const TabIcon = ({ icon, color, name, focused }) => {
    return (
        <View className="items-center justify-center gap-2">
            <Image
                source={icon}
                resizeMode="contain"
                tintColor={color}
                className="w-6 h-6"
            />
            <Text
                className={`${focused ? "font-InterBold" : "font-InterMedium"} text-xs`}
                style={{ color: color }}
            >
                {name}
            </Text>
        </View>
    );
};

const QRIcon = ({ icon, focused }) => {
    return (
        <View className="items-center justify-center bg-white rounded-md p-2 -top-1">
            <Image
                source={icon}
                resizeMode="contain"
                tintColor={color.primary}
                className="w-9 h-9"
            />
        </View>
    );
};

const TabsLayout = () => {
    return (
        <>
            <Tabs
                screenOptions={{
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: "#ffffff",
                    tabBarInactiveTintColor: "#e0e0e0",
                    tabBarStyle: {
                        backgroundColor: color.primary,
                        borderTopWidth: 1,
                        borderTopColor: color.secondary,
                        height: 84,
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                    },
                }}
            >

                <Tabs.Screen
                    name="home"
                    options={{
                        title: "Home",
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={home}
                                color={color}
                                name="Home"
                                focused={focused}
                            />
                        ),
                    }}
                />

                <Tabs.Screen
                    name="cash-points"
                    options={{
                        title: "CashPoints",
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={points}
                                color={color}
                                name="Cash Points"
                                focused={focused}
                            />
                        ),
                    }}
                />

                <Tabs.Screen
                    name="QR-code"
                    options={{
                        title: "QRcode",
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <QRIcon
                                icon={qr}
                                focused={focused}
                            />
                        ),
                    }}
                />

                <Tabs.Screen
                    name="promotion"
                    options={{
                        title: "Promotion",
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={promotion}
                                color={color}
                                name="Promotion"
                                focused={focused}
                            />
                        ),
                    }}
                />

                <Tabs.Screen
                    name="account"
                    options={{
                        title: "Account",
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={account}
                                color={color}
                                name="Account"
                                focused={focused}
                            />
                        ),
                    }}
                />

            </Tabs>
        </>
    )
}

export default TabsLayout