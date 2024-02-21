import React, { useEffect } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import firestore from '@react-native-firebase/firestore';
import style from './style'

const CustomFooter = ({state, descriptors, navigation}) => {

  const cartCount = useSelector(state => state.cartCount);
  const userId = useSelector(state => state.userId);

  return (
    <View style={style.container}>
      {state.routes.map((route,index) => {

        if(route.name == "Home" || route.name == "Products" || route.name == "Orders" || route.name == "Profile") {
          const isFocused = index === state.index

          const icon = route.name === "Home" ? isFocused ? require("../../assets/images/homePurple.png") : require("../../assets/images/home.png") : 
          route.name === "Products" ? isFocused ? require("../../assets/images/menuPurple.png") : require("../../assets/images/menu.png") :
          route.name === "Orders" ? isFocused ? require("../../assets/images/searchPurple.png") : require("../../assets/images/order.png") :
          route.name === "Profile" ? isFocused ? require("../../assets/images/OffersPurple.png") : require("../../assets/images/user.png") : "";
          return (
            <TouchableOpacity key={index} style={style.btn} onPress={() => navigation.navigate(route.name)}>
            <Image source={icon} style={style.icon}/>
            <Text style={[style.text, {color: isFocused ? "#9B00FF" : "#fff"}]}>{route.name}</Text>
            </TouchableOpacity>
          )
        } else {
          return null
        }
      })
      }
    </View>
  )
}

export default CustomFooter