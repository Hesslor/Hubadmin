import React from 'react'
import { Text, View } from 'react-native'
import style from './style'

const Moreinfo = () => {
  return (
    <View style={style.moreinfoContainer}>
        <View style={style.innerView}>
            <Text style={style.text}>Delivery</Text>
        </View>
        <View style={style.innerView}>
            <Text style={style.text}>Delivery Time</Text>
        </View>
    </View>
  )
}

export default Moreinfo