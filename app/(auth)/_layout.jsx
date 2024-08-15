import React from "react";
import { Stack } from "expo-router";

const AuthLayout = () => {
  return (
      <Stack>
          <Stack.Screen name="login" options={{ headerShown: false }} />
          <Stack.Screen name="signup" options={{ headerShown: false }} />
          <Stack.Screen name="forgot-username" options={{ headerShown: false }} />
          <Stack.Screen name="forgot-password" options={{ headerShown: false }} />
          <Stack.Screen name="otp-screen" options={{ headerShown: false }} />
          <Stack.Screen name="new-password" options={{ headerShown: false }} />
      </Stack>
  );
};

export default AuthLayout;