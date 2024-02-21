import React from 'react'
import { Image, TouchableOpacity } from 'react-native'
import style from './style'
import { useNavigation } from '@react-navigation/native'


const HeaderLeft = ({goBack,action}) => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity 
    style={style.container} 
    onPress={() => goBack ? action ? action() : navigation.goBack() : navigation.toggleDrawer()}>
      <Image style={style.img} source={goBack ? require("../../assets/images/previous.png") : require("../../assets/images/drawer.png")}/>
    </TouchableOpacity>
  )
}

export default HeaderLeft