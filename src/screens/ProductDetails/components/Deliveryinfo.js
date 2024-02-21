import React from 'react'
import { Text, View } from 'react-native'
import style from './style'
import CommonTextInput from '../../../components/commonTextInput/CommonTextInput'

const Deliveryinfo = () => {
  return (
    <View style={style.container}>
        <Text style={style.deliveryHead}>Check Delivery</Text>
        <Text style={style.deliveryInfoText}>Enter pin code to check delivery date/pickup option</Text>
        <CommonTextInput placeholder={"pin code"} check={true} />
        <Text style={style.deliveryInfoText}>Free shipment above the order of 500₹</Text>
        <Text style={style.deliveryInfoText}>Enter pin code to check delivery date/pickup option</Text>
        <Text style={style.deliveryInfoText}>Enter pin code to check delivery date/pickup option</Text>
    </View>
  )
}

export default Deliveryinfo;