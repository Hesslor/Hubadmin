import React from 'react'
import { Image, Text, View } from 'react-native'
import style from './style'

const Splash = () => {
  return (
    <View style={style.container}>
        <Image style={style.image} source={require("../../assets/images/logo.png")}/>
    </View>
  )
}

export default Splash 