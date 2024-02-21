import { useFocusEffect, useIsFocused, useNavigation, useRoute } from '@react-navigation/native'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import HeaderLeft from '../../components/HeaderLeft/HeaderLeft';
import CommonTextInput from '../../components/commonTextInput/CommonTextInput';
import firestore from '@react-native-firebase/firestore';
import CustomDropDown from '../../components/CustomDropDown/CustomDropDown';
import ActionSheet from 'react-native-actions-sheet';
import CustomBtn from '../../components/CustomBtn/CustomBtn';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import UploadImage from '../../components/uploadImage/UploadImage';
import Snackbar from 'react-native-snackbar';
import Colors from '../../components/Colors';
import style from './style';

const CreateProduct = () => {

const navigation = useNavigation();
const isFocused = useIsFocused();
const actionSheetRef = useRef(null);
const route = useRoute();
const {type,data} = route.params;
const [categories, setCategories] = useState([{name:"Computers"}]);
const [name, setName] = useState("");
const [description, setDescription] = useState("");
const [category, setCategory] = useState(null);
const [price, setPrice] = useState("");
const [quantity, setQuantity] = useState("");
const [uploadUri, setUploadUri] = useState("");


  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => <HeaderLeft goBack={"goBack"} action={() => navigation.navigate("Products")}/>,
      title: type === "create" ? "Create Product" : "Edit Product",
    })

  }, []) 

  useEffect(() => {
    if(type === "edit") {
      setName(data.name)
      setDescription(data.description)
      setPrice(data.price)
      setQuantity(data.quantity)
      setUploadUri(data.image)
      //setCategoryWithObj()
    } else {
      setName("")
      setDescription("")
      setPrice("")
      setQuantity("")
      setUploadUri(null)
    }
  },[data])

  useFocusEffect(
    useCallback(() => {
      getCategory();
    }, []),
  );

  useEffect(() => {
    if(category){
      setCategory(category)
    }
  },[category])
  
  const getCategory = async () => {
    await firestore()
    .collection("Categories")
    .get()
    .then(snapshot => {
      if(!snapshot.empty) {
        const result = []
        snapshot.docs.map(doc => {
          responseData = {id: doc.id, ...doc.data()}
          result.push(responseData)
        })
        setCategories(result)
        setCategoryWithObj(result)
      } else setCategories([])
    })
  }

  const setCategoryWithObj = objArray => {
    if(data && data.categoryId){
      const result = objArray.find((ele) => {ele.id === data.categoryId});
      setCategory(result);
    }
  }

  const handleCamera = async () => {
    const options = {
      mediaType: "photo",
    }
    await launchCamera(options,res => {
      actionSheetRef.current?.hide()
      if(res && res.assets){
        if(type === "edit") {
          setUploadUri(res.assets[0].uri)
        } else {
          setUploadUri(res.assets[0])
        }
      }
    });
  }

  const handleGallery = async () => {
    const options = {
      mediaType: "photo",
    }
    await launchImageLibrary(options, res => {
      actionSheetRef.current?.hide()
      if(res && res.assets){
        if(type === "edit") {
          setUploadUri(res.assets[0].uri)
        } else {
          setUploadUri(res.assets[0])
        }
      }
    });
  }

  const handleCreate = async () => {
    if(uploadUri !== "" && name !== "" && description !== "" && category !== "" && price !== "" && quantity) {
      const responseUri = await UploadImage(uploadUri.originalPath)
      const product = {
        created: Date.now(),
        updated: Date.now(),
        name: name,
        description: description,
        categoryName: category.name,
        categoryId: category.id,
        price: price,
        quantity: quantity,
        image: responseUri,
      }

      await firestore()
      .collection("Products")
      .add(product)
      .then(() => {
        Snackbar.show({
          text: "Product Created",
          duration: Snackbar.LENGTH_SHORT,
          textColor: Colors.white,
          fontFamily: "Poppins-SemiBold",
          backgroundColor: Colors.primaryColor,
        });
        setName("")
        setDescription("")
        setCategory(null)
        setPrice("")
        setQuantity("")
        setUploadUri(null)
        navigation.goBack()
      })
    } else {
      Snackbar.show({
        text: "Fill up all the blanks to continue",
        duration: Snackbar.LENGTH_SHORT,
        textColor: Colors.white,
        fontFamily: "Poppins-SemiBold",
        backgroundColor: Colors.primaryColor,
      });
    }
  }

  const handleUpdate = async () => {
    if(uploadUri !== "" &&  description !== "" && category !== "" && price !== "" && quantity) {
      const responseUri =  type === "edit" ? uploadUri : uploadUri.originalPath
      if(responseUri.includes("file:///")){
        const resp = await UploadImage(responseUri)
        setUploadUri(resp)
        return resp;
      } else {
        setUploadUri(responseUri)
      }

      const product = {
        updated: Date.now(),
        name: name,
        description: description,
        categoryName: category.name,
        categoryId: category.id,
        price: price,
        quantity: quantity,
        image: uploadUri,
      }

      await firestore()
      .collection("Products")
      .doc(data.id)
      .update(product)
      .then(() => {
        Snackbar.show({
          text: "Product Updated",
          duration: Snackbar.LENGTH_SHORT,
          textColor: Colors.white,
          fontFamily: "Poppins-SemiBold",
          backgroundColor: Colors.primaryColor,
        });
        navigation.goBack()
      })
    } else {
      Snackbar.show({
        text: "Fill up all the blanks to continue",
        duration: Snackbar.LENGTH_SHORT,
        textColor: Colors.white,
        fontFamily: "Poppins-SemiBold",
        backgroundColor: Colors.primaryColor,
      });
    }
  }

  return (
    <ScrollView contentContainerStyle={style.container}>
        <CommonTextInput placeholder={"Name"} value={name} handleText={text => setName(text)}/>
        <CommonTextInput placeholder={"Description"} value={description} handleText={text => setDescription(text)}/>
        <Text style={style.selectCategory}>Select the category</Text>
        <CustomDropDown data={categories} prevData = {category} setData={text => setCategory(text)}/>
        <CommonTextInput placeholder={"Price"} value={price} handleText={text => setPrice(text)}/>
        <CommonTextInput placeholder={"Quantity"} value={quantity} handleText={text => setQuantity(text)}/>
        <TouchableOpacity style={style.imgPickerView} onPress={() => actionSheetRef.current?.show()}>
          <Text style={style.uploadImgText}>Upload Product Image</Text>
          {uploadUri && 
          <TouchableOpacity style={style.removeImg} onPress={() => setUploadUri("")}>
            <Image style={style.close} source={require("../../assets/images/close.png")}/>
          </TouchableOpacity>}
          <Image style={style.uploadImg} source={uploadUri ? {uri: type === "edit" ? uploadUri :uploadUri.uri} :require("../../assets/images/picture.png")}/>
        </TouchableOpacity>
        <CustomBtn  type={"primary"} buttonText={type === "create" ? "Create" : "Update"} handleButtonPress={type === "create" ? handleCreate : handleUpdate}/>

        <ActionSheet ref={actionSheetRef}>
          <View style={style.imgSelView}>
            <View style={style.imgSelView2}>
              <Text style={style.ChoseImg}>Upload Image</Text>
              <TouchableOpacity onPress={() => actionSheetRef.current?.hide()}>
                <Image style={style.close} source={require("../../assets/images/close.png")}/>
              </TouchableOpacity>
            </View>
            <View style={style.imgSelView3}>
              <TouchableOpacity style={style.imgSelView4} onPress={handleCamera}>
                <Image style={style.imgPicker} source={require("../../assets/images/diaphragm.png")}/>
                <Text style={style.choseText}>Camera</Text>
              </TouchableOpacity>
              <TouchableOpacity style={style.imgSelView4} onPress={handleGallery}>
                <Image style={style.imgPicker} source={require("../../assets/images/photo-gallery.png")}/>
                <Text style={style.choseText}>Gallery</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ActionSheet>
    </ScrollView>
  )
}

export default CreateProduct