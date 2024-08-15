import React, { useState } from 'react'
import { View, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { TextInput } from 'react-native-paper'

const CustomInputIcon = ({ isPassword, value, onChange, placeholder, disable, outlineColor, keyboardType, onSubmitEditing }) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    return (
        <View style={{ position: "relative", flexDirection: "row", alignItems: "center" }}>
            <TextInput
                mode="outlined"
                placeholder={placeholder}
                activeOutlineColor="#A5A7A8"
                placeholderTextColor="#A5A7A8"
                secureTextEntry={!showPassword && isPassword}
                value={value}
                disabled={disable}
                onChangeText={onChange}
                outlineColor={outlineColor}
                keyboardType={keyboardType}
                onSubmitEditing={onSubmitEditing}
                style={{
                    flex: 1,
                    backgroundColor: "#F4F5F9",
                    fontSize: 15,
                    paddingVertical: 3,
                    paddingRight: 35
                }}
                theme={{
                    fonts: { bodyLarge: { fontFamily: "InterRegular" } },
                    roundness: 10,
                    colors: {
                        outline: "#F4F5F9",
                    },
                }} 
            />
            {isPassword && (
                <TouchableOpacity
                    onPress={togglePasswordVisibility}
                    style={{ position: "absolute", right: 19 }}
                >
                    <Feather
                        name={showPassword ? "eye" : "eye-off"}
                        size={18}
                        color="#A5A7A8"
                    />
                </TouchableOpacity>
            )}
        </View>
    )
}

export default CustomInputIcon