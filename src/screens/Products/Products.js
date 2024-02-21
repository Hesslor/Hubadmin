import { useIsFocused, useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react'
import { Alert, FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import firestore from '@react-native-firebase/firestore';
import CustomSearch from '../../components/CustomSearch/CustomSearch';
import style from './style';
import HeaderLeft from '../../components/HeaderLeft/HeaderLeft';
import Snackbar from 'react-native-snackbar';
import Colors from '../../components/Colors';

const Products = () => {

  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [products,setProducts] = useState([]);


  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => <HeaderLeft goBack={true}/>,
      headerRight: () => <HeaderRight />,
    })
  },[]) 

  const HeaderRight = () => {
    return (
      <TouchableOpacity 
        style={style.container} onPress={() => {
          
          navigation.navigate("CreateProduct", {type: "create"})}}>
        <Image style={style.img} source={require("../../assets/images/add.png")}/>
      </TouchableOpacity>
    )
  }

  useEffect(() => {
    getProducts()
  }, [isFocused])
  
  const getProducts = async () => {
    await firestore()
    .collection("Products")
    .get()
    .then(snapshot => {
      if(!snapshot.empty) {
        const result = []
        snapshot.docs.forEach(doc => {
          responseData = {id: doc.id, ...doc.data()}
          result.push(responseData)
        })
        setProducts(result)
      }
    })
  }

  const handleSearch = async text => {
    await firestore()
    .collection("Products")
    .orderBy("name")
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
        setProducts(result)
      } else {
        setProducts([])
      }
    })
  }

  const handleEdit = productData => {
    navigation.navigate("CreateProduct", {type: "edit", data: productData})
  };

  const handleDelete = async productData => {
    Alert.alert(
      'Delete Product',
      'Do you want to delete this product, deleting the will lose the product data.',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'OK', onPress: async () => 
        await firestore()
        .collection("Products")
        .doc(productData.id)
        .delete()
        .then(() => {
          getProducts();
          Snackbar.show({
            text: "Product Deleted",
            duration: Snackbar.LENGTH_SHORT,
            textColor: Colors.white,
            fontFamily: "Poppins-SemiBold",
            backgroundColor: Colors.primaryColor,
          });
        }) },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={style.container}>
        <CustomSearch onchange={handleSearch} />

        <FlatList data={products} contentContainerStyle={style.productContainer} showsVerticalScrollIndicator={false} renderItem={({item,data}) => {
        return (
          <TouchableOpacity style={style.product} onPress={() => navigation.navigate("ProductDetails",{product: item})}>
            <View style={style.imageView}>
                <Image style={style.productImage} source={item.image == null ? require("../../assets/images/wishlist.png") : {uri: item.image}}/>
            </View>
            <View style={style.contentView}>
              <Text style={style.productName} numberOfLines={1}>{item.name}</Text>
              <Text style={style.productContent} numberOfLines={2}>{item.description}</Text>
              <View style={style.priceView}>
                 <View style={style.priceView2}>
                     <Text style={style.price}>₹{item.price}</Text>
                     <Text style={style.offerView}>offer%</Text>
                 </View>
                 <View style={style.qView}>
                   <Text style={style.qText1}>-</Text>
                   <Text style={style.qText2}>0</Text>
                   <Text style={style.qText1}>+</Text>
                 </View>
              </View>
            </View>
            <TouchableOpacity style={style.editView} onPress={() => handleEdit(item)}>
                <Image style={style.editImg} source={require("../../assets/images/Edit.png")}/>
              </TouchableOpacity>
              <TouchableOpacity style={style.deleteView} onPress={() => handleDelete(item)}>
                <Image style={style.editImg} source={require("../../assets/images/close.png")} />
              </TouchableOpacity>
           </TouchableOpacity>
          )
        }} ListEmptyComponent={() => {
              return (
                <View style={style.emptyView}>
                 <Text style={style.emptyText}>Empty</Text>
                </View>
              )
            }}/>
    </View>
  )
}

export default Products