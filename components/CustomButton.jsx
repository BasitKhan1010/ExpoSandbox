import React from "react";
import { TouchableOpacity, Text } from "react-native";

import { color } from "../config/colors";

const CustomButton = ({ text, styles, textStyles, width, onPress, loading }) => {
  return (
    <TouchableOpacity
      className={`py-3.5 rounded-lg ${width || "w-[100%]"} ${styles} ${
        loading ? "opacity-70" : ""
      }`}
      style={{ backgroundColor: color.primary }}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text
        className={`text-base ${
          textStyles || "text-white"
        } font-medium text-center font-InterSemiBold`}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;