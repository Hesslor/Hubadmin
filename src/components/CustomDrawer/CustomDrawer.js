import React from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import style from './style'
import { useDispatch, useSelector } from 'react-redux'
import { SignOut } from '../../storage/actions'

const CustomDrawer = (props) => {

  const navigation = useNavigation();
  const dispatch  = useDispatch();

  

  const Contents = [
    {
      Id: 0,
      name: "Home",
      navigateTo: "Home",
      icon: require("../../assets/images/home.png")
    },
    {
      Id: 1,
      name: "Products",
      navigateTo: "Products",
      icon: require("../../assets/images/loading.png")
    },
    //{
    //  Id: 2,
    //  name: "Categories",
    //  navigateTo: "Category",
    //  icon: require("../../assets/images/cubes.png")
    //},
    {
      Id: 3,
      name: "Orders",
      navigateTo: "Orders",
      icon: require("../../assets/images/order.png")
    },
    {
      Id: 4,
      name: "Reviews",
      navigateTo: "Reviews",
      icon: require("../../assets/images/feedback.png")
    },
    {
      Id: 5,
      name: "Banners",
      navigateTo: "Banners",
      icon: require("../../assets/images/folded-ribbon.png")
    },
    {
      Id: 6,
      name: "Offers",
      navigateTo: "Offers",
      icon: require("../../assets/images/Offers.png")
    },
  ]

  const handleSignOut = () => {
    dispatch(SignOut())
  }

  return (
    <ScrollView style={style.scrollView} showsVerticalScrollIndicator={false}>
    <View style={style.container}>
        <View style={style.profile}>
          <View style={style.profilePic}>
            <Image style={style.image} source={require("../../assets/images/user.png")} />
          </View>
          <View style={style.profileText}>
            <Text style={style.ProfileName}>Admin</Text>
            <Text style={style.ProfileMail}>admin@gmail.com</Text>
          </View>
        </View>

        <View style={style.content}>
            {Contents.map((item,index) => {
              return (
                <TouchableOpacity key={item.Id} onPress={() => navigation.navigate(item.navigateTo)}>
                  <View style={style.contents}>
                    <Image source={item.icon} style={style.icon}/>
                    <Text style={style.text}>{item.name}</Text>
                  </View>
                </TouchableOpacity>
              )
            })}
        </View>
        
        <TouchableOpacity onPress={handleSignOut}>
          <Text style={style.logout}>Sign Out</Text>
        </TouchableOpacity>
    </View>
    </ScrollView>
  )
}

export default CustomDrawer