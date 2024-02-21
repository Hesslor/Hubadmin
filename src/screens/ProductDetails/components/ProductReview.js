import React, { useState } from 'react'
import {Image, Text, TouchableOpacity, View } from 'react-native'
import StarRating from 'react-native-star-rating-widget'
import { useNavigation } from '@react-navigation/native'
import style from './style'

const ProductReview = (props) => {

    const {product} = props;
    const [rating, setRating] = useState();
    const navigation = useNavigation();

    const handleReview = product => {
        navigation.navigate("Review")
    }

  return (
    <View style={style.ProductReviewContainer}>
        <View style={style.reviewHeader}>
            <Text style={style.reviewHeaderText}>Product Review</Text>
            <TouchableOpacity onPress={() => handleReview(product)}>
                <Text style={style.reviewseeall}>see all</Text>
            </TouchableOpacity>
        </View>
        <View style={style.reviewContent}>
            <View style={style.reviewUser}>
                <Image source={require("../../../assets/images/user.png")} style={style.reviewUserImg}/>
                <View style={style.reviewUserInnerView}>
                <Text style={style.reviewUserName}>hippo</Text>
                <StarRating starSize={20} rating={rating} onChange={()=>{}} />
                </View>
            </View>
            <Text style={style.reviewText}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</Text>
        </View>
    </View>
  )
}

export default ProductReview