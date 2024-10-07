import React, { useEffect } from 'react'
import { SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
    const [fontsLoaded, error] = useFonts({
        InterBlack: require("../assets/fonts/Inter-Black.ttf"),
        InterBold: require("../assets/fonts/Inter-Bold.ttf"),
        InterMedium: require("../assets/fonts/Inter-Medium.ttf"),
        InterRegular: require("../assets/fonts/Inter-Regular.ttf"),
        InterSemiBold: require("../assets/fonts/Inter-SemiBold.ttf"),
    });

    useEffect(() => {
        if (error) throw error;
        if (fontsLoaded) SplashScreen.hideAsync();
    }, [fontsLoaded, error]);

    if (!fontsLoaded && !error) {
        return null;
    }

    return (
        <Stack initialRouteName="index">
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="(auth)" options={{ headerShown: false }} />
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
    )
}

export default RootLayout