import React, { useEffect, useRef, useState } from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import StarRating from 'react-native-star-rating-widget'
import Moreinfo from './components/Moreinfo'
import Exterainfo from './components/Exterainfo'
import ProductReview from './components/ProductReview'
import Deliveryinfo from './components/Deliveryinfo'
import style from './style'
import HeaderLeft from '../../components/HeaderLeft/HeaderLeft'


const ProductDetails = () => {

  const navigation = useNavigation();
  const route = useRoute();
  const {product} = route.params;
  const scrollRef = useRef(null)
  const [rating, setRating] = useState();
  const [qun,setQun] = useState(1);

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => <HeaderLeft goBack={"goBack"}/>,
    });

  }, [])
  
  return (
    <View>
      <ScrollView style={style.container} ref={scrollRef}>
          <TouchableOpacity style={style.likeView} onPress={() => {}}>
            <Image style={style.like} source={require("../../assets/images/hearto.png")} />
          </TouchableOpacity>
          <View style={style.productImageView}>
            <Image style={style.productImage} source={product.image ? {uri: product.image} : require("../../assets/images/cartPurple.png") } />
          </View>
  
          <View style={style.main}>
            <Text style={style.productName}>{product.name}</Text>
            <View style={style.ratingView}>
              <StarRating rating={rating} onChange={setRating} />
              <Text style={style.ratingCount}>(2)</Text>
            </View>
            <View style={style.priceView}>
              <Text style={style.productPrice}>₹ {parseFloat(product.price).toFixed(2)}</Text>
              <Text style={style.off}>25% off</Text>
            </View>
            <Moreinfo />
            <View style={style.productDetailsView}>
              <Text  style={style.productDetails}>Product Details</Text>
              <Text  style={style.productDescription}>{product.description}</Text>
            </View>
            <Exterainfo />
            <ProductReview product={product} />
            <Deliveryinfo />
          </View>
      </ScrollView>
    </View>
  )
}

export default ProductDetails