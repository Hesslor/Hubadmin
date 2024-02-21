import React from 'react'
import { Text, TouchableOpacity, Image } from 'react-native'
import style from "./style"
import Colors from '../Colors'

const CustomBtn = (props) => {
    const {type, buttonText, handleButtonPress, icon} = props

  return (
    <TouchableOpacity 
    onPress={handleButtonPress} 
    style={[style.button,{backgroundColor: type == "primary" ? Colors.primaryColor : Colors.inputBg}]} >

      {type !== "primary" ? <Image source={icon} style={style.icon}/> : false}

      <Text style={{
          color: type == "primary" ? Colors.white2 : Colors.white2,
          fontFamily: type == "primary" ? "Poppins-SemiBold" : "Poppins-Regular",
          fontSize: type == "primary" ? 20 : 14
      }}>{buttonText}</Text>
    </TouchableOpacity>
  )
}

export default CustomBtn;