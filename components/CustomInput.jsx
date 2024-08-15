import React from 'react'
import { TextInput } from 'react-native-paper'

const CustomInput = ({ label, style, isPassword, placeholder, value, disabled, onChange, outlineColor, keyboardType, onSubmitEditing }) => {
    return (
        <TextInput
            label={label}
            mode="outlined"
            placeholder={placeholder}
            activeOutlineColor="#A5A7A8"
            placeholderTextColor="#A5A7A8"
            secureTextEntry={isPassword}
            value={value}
            disabled={disabled}
            onChangeText={onChange}
            keyboardType={keyboardType}
            onSubmitEditing={onSubmitEditing}
            blurOnSubmit={false}
            style={[
                style,
                {
                    backgroundColor: '#F4F5F9',
                    fontSize: 15,
                    height: 40,
                    paddingVertical: 11,
                    lineHeight: 20,
                },
            ]}
            theme={{
                fonts: { bodyLarge: { fontFamily: "InterRegular" } },
                roundness: 10,
                colors: {
                    outline: outlineColor || "#F4F5F9",
                },
            }}
        />
    )
}

export default CustomInput