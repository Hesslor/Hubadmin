import React, { useCallback, useEffect, useState } from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import style from './style'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import HeaderLeft from '../../components/HeaderLeft/HeaderLeft'
import firestore from '@react-native-firebase/firestore';

const Home = () => {

  const navigation = useNavigation();
  const [orders, setOrders] = useState();
  const [products, setProducts]  = useState();
  const [users, setUsers]  = useState();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => <HeaderLeft />
    })
  },[])

  useFocusEffect(
    useCallback(() => {
      getAllCount()
    }, [])
  );

  const getAllCount = async () => {
    const ordersRef = (await firestore().collection("Orders").get()).size
    const productRef = (await firestore().collection("Products").get()).size
    const userRef = (await firestore().collection("Users").get()).size

    setOrders(ordersRef)
    setProducts(productRef)
    setUsers(userRef - 1)
  }

  content= [
    {
      id: 0,
      name: "Orders",
      quantity: orders,
      image: require("../../assets/images/received.png"),
      navigate: "Orders",
    },
    {
      id: 1,
      name: "Products",
      quantity: products,
      image: require("../../assets/images/order-fulfillment.png"),
      navigate: "Products",
    },
    {
      id: 2,
      name: "Users",
      quantity: users,
      image: require("../../assets/images/team.png"),
      navigate: "Users",
    },
  ]

  return (
    <View>
    <ScrollView contentContainerStyle={style.container} showsVerticalScrollIndicator={false}>
        {content.map((content,index) => {
          return(
            <TouchableOpacity key={content.id} style={style.contentView} onPress={() => navigation.navigate(content.navigate)}>
              <Image style={style.contentImage} source={content.image} />
              <View>
                <Text style={style.contentName}>{content.name}</Text>
                <Text style={style.contentQun}>{content.quantity}</Text>
              </View>
            </TouchableOpacity>
          )
        })}
    </ScrollView>
    </View>
  )
}

export default Home