import React from "react";
import { TouchableOpacity, Text } from "react-native";

import { color } from "../config/colors";

const CustomButton = ({ text, styles, textStyles, width, onPress, loading, bgcolor }) => {
  const backgroundColor = bgcolor || color.primary;

  return (
    <TouchableOpacity
      className={`py-3.5 rounded-lg ${width || "w-[100%]"} ${styles} ${
        loading ? "opacity-70" : ""
      }`}
      style={{ backgroundColor: backgroundColor }}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text
        className={`text-base font-InterSemiBold ${
          textStyles || "text-white"
        } text-center`}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;