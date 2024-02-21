import React from 'react'
import { Image, Text, View, TouchableOpacity } from 'react-native'
import style from './style'

const Profile = () => {
  return (
    <View style={style.container}>
      <Text style={style.FullName}>Admin</Text>
      <View style={style.imageView}>
        <TouchableOpacity style={style.imageTouch}>
          <Image style={style.image} source={require("../../assets/images/user.png")}/>
        </TouchableOpacity>
      </View>
      <Image style={style.logo} source={require("../../assets/images/H-hub.png")}/>
    </View>
  )
}

export default Profile