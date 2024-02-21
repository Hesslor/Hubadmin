import { useIsFocused, useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react'
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import firestore from '@react-native-firebase/firestore';
import CustomSearch from '../../components/CustomSearch/CustomSearch';
import HeaderLeft from '../../components/HeaderLeft/HeaderLeft';
import style from './style';
import moment from 'moment';

const Orders = () => {

  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [ordersArray,setOrdersArray] = useState([]);

  useEffect(() => {
    getOrders()
  }, [isFocused])

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => <HeaderLeft goBack={true}/>
    })
  },[])
  
  const getOrders = async () => {
    await firestore()
    .collection("Orders")
    .get()
    .then(snapshot => {
      if(!snapshot.empty) {
        const result = []
        snapshot.docs.forEach(doc => {
          responseData = {id: doc.id, ...doc.data()}
          result.push(responseData)
        })
        setOrdersArray(result)
      }
    })
  }

  const handleSearch = async text => {
    await firestore()
    .collection("Orders")
    .orderBy("orderId")
    .startAt(text)
    .endAt(text + "\uf8ff")
    .get()
    .then(snapshot => {
      if(!snapshot.empty) {
        const result = []
        snapshot.docs.forEach(doc => {
          if(doc.exists){
            responseData = {id: doc.id, ...doc.data()}
            result.push(responseData)
          }
        })
        setOrdersArray(result)
      } else {
        setOrdersArray([])
      }
    })
  }

  const dateFormate = date => {
    formattedDate = moment(date).format('YYYY-MM-DD HH:mm');
    return formattedDate;
  }

  return (
    <View style={style.container}>
        <CustomSearch onchange={handleSearch} />

        <FlatList data={ordersArray} contentContainerStyle={style.container} showsVerticalScrollIndicator={false} renderItem={({item,index}) => {
          return (
            <TouchableOpacity style={style.order} onPress={() => navigation.navigate("OrderDetails",{order: item})}>
              <View style={style.orderView}>
                <View>
                  <Text style={style.orderId}>ID: {item.orderId}</Text>
                  <Text style={style.orderedOn}>Ordered On: {dateFormate(item.created)}</Text>
                  <Text style={style.orderEmail}>Email: {item.userEmail}</Text>
                  <Text style={style.orderAddress}>address: {item.address}</Text>
                  <Text style={style.orderAddress}>address: {}</Text>
                  <Text style={style.orderPriceView}>
                    {"price: "}
                   <Text style={style.orderPrice}>{item.totalAmount}</Text>
                   {"  quantity: "}
                   <Text style={style.orderPrice}>{item.cartItems.length}</Text>
                  </Text>
                </View>
                <Image style={style.image} source={require("../../assets/images/images.jpeg")}/>
              </View>
              <View style={style.orderView2}>
                <Text style={style.orderBottomText}>Order Shipped</Text>
                <Text style={style.orderBottomText}>Rate & ROrder</Text>
              </View> 
            </TouchableOpacity>
          )
        }}
        ListEmptyComponent={() => {
          return(
           <View style={style.emptyView}>
            <Text style={style.emptyText}>No Order</Text>
           </View>
          )
        }}/>
    </View>
  )
}

export default Orders