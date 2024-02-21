import React, { useEffect, useRef, useState } from 'react'
import { Image, ScrollView, View, Text, TouchableOpacity, Modal, ActivityIndicator } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import Snackbar from 'react-native-snackbar';
import Colors from '../../components/Colors';
import HeaderLeft from '../../components/HeaderLeft/HeaderLeft';
import style from './style';
import ActionSheet from 'react-native-actions-sheet';
import CustomBtn from '../../components/CustomBtn/CustomBtn';
import CustomDropDown from '../../components/CustomDropDown/CustomDropDown';

const OrderDetails = () => {

    const navigation = useNavigation();
    const route = useRoute();
    const item = route.params.order;
    const [loading,setLoading] = useState(false);
    const [orderStatus,setOrderStatus] = useState("");
    const [status,setStatus] = useState([]);
    const actionSheetRef = useRef(null);

      useEffect(() => {
          navigation.setOptions({
            headerLeft: () => <HeaderLeft goBack={"goBack"} action={() => navigation.navigate("Orders")}/>,
            title: "Order Details",
          })   
        }, [])

      useEffect(() => {
        if(item){
          setOrderStatus(item.orderStatus)
        }
      }, [item])

    const updateOrder = () => {
      actionSheetRef.current?.show();
    }

  const statusData = [{name:"Shipped"},{name:"Ordered"},{name:"Out for Delivery"},{name:"Delivered"},{name:"Returned"}];
  
  const handleUpdateOrder = async () => {
    await firestore()
    .collection("Orders")
    .doc(item.id)
    .update({
      orderStatus: status,
    })
    .then(() => {
      actionSheetRef.current?.hide();
      setOrderStatus(status);
      setTimeout(() => {
        console.warn(status)
      }, 1000);
    })
  }
  
  return (
    <View style={style.container}>
      <ScrollView contentContainerStyle={style.scrollView} showsVerticalScrollIndicator={false}>
      <Modal
          animationType="slide"
          transparent={true}
          visible={loading}>
          <View style={style.activityIndicatorView}>
            <ActivityIndicator size={"large"} color={Colors.primaryColor}/>
          </View>
        </Modal>
        <View style={style.headerBarView}>
          <Image style={style.headerIcon} source={require("../../assets/images/Edit.png")}/>
          <View style={style.headerTextView}>
            <Text style={style.orderId}>Order id:{item.orderId}</Text>
            <Text style={style.ordered}>{orderStatus ?? "oooo"}</Text>
          </View>
        </View>

        <View style={style.innerView}>
          <Text style={style.h2}>Items:</Text>
          {item.cartItems.map((x,index) => {
            return (
              <View style={style.itemView} key={index}>
                <View style={style.itemNameView}>
                  <Text style={style.itemQuantity}>{x.quantity}</Text>
                  <View>
                  <Text style={style.itemName}>{x.name}</Text>
                  <Text style={style.itemDescription}>{x.description}</Text>
                  </View>
                </View>
                <Text style={style.itemPrice}>₹{x.price}</Text>
              </View>
            )
          })}
        </View>

        <View style={style.innerView}>
          <Text style={style.h2}>Payment Details:</Text>
          <View style={style.orderContainer}>
            <View style={style.orderView}>
              <Text style={style.orderText}>Total</Text>
              <Text style={style.orderText}>Saving</Text>
              <Text style={style.orderText}>Discount</Text>
              <Text style={style.orderText}>Delivery</Text>
            </View>
            <View style={style.orderNumView}>
              <Text style={style.orderText}>₹{parseFloat(item.totalAmount).toFixed(2)}</Text>
              <Text style={style.orderSavings}>₹0.00</Text>
              <Text style={style.orderDiscount}>Apply Coupon</Text>
              <Text style={style.orderText}>₹{parseFloat(50).toFixed(2)}</Text>
            </View>
          </View>
          <View style={style.totalContainer}>
            <Text style={style.orderDetails}>Order Details</Text>
            <Text style={style.orderDetails}>₹{parseFloat(item.totalAmount + 50).toFixed(2)}</Text>
          </View>
        </View>

        <View style={style.innerView}>
          <Text style={style.h2}>Address:</Text>
          <Text style={style.p}>hi hello how r you</Text>
          <Text style={style.p}>hi hello how r you</Text>
          <Text style={style.p}>hi hello how r you</Text>
        </View>

        <View style={style.innerView}>
          <Text style={style.h2}>Payment Method:</Text>
          <Text style={style.p}>{item.paymentMethod}</Text>
        </View>
      </ScrollView>
        <TouchableOpacity style={style.updateOrder} onPress={updateOrder}>
          <Text style={style.updateOrderText}>updateOrder</Text>
        </TouchableOpacity>
        <ActionSheet ref={actionSheetRef}>
          <View style={style.actionView}>
            <View style={style.actionHeadView}>
              <Text style={style.actionHead}>Update Order</Text>
              <TouchableOpacity onPress={() => actionSheetRef.current?.hide()}>
                <Image style={style.actionCloseImage} source={require("../../assets/images/close.png")}/>
              </TouchableOpacity>
            </View>
            
            <CustomDropDown data={statusData} setData={text => {setStatus(text.name)}}/>
            <CustomBtn type={"primary"} buttonText={"Submit"} handleButtonPress={handleUpdateOrder} />
          </View>
        </ActionSheet>
    </View>
  )
}

export default OrderDetails