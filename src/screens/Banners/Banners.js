import { useIsFocused, useNavigation } from '@react-navigation/native'
import React, { useEffect, useRef, useState } from 'react'
import { Alert, Dimensions, FlatList, Image, ImageBackground, Text, TouchableOpacity, View } from 'react-native'
import HeaderLeft from '../../components/HeaderLeft/HeaderLeft';
import firestore from '@react-native-firebase/firestore';
import Snackbar from 'react-native-snackbar';
import style from './style';
import ActionSheet from 'react-native-actions-sheet';
import CustomBtn from '../../components/CustomBtn/CustomBtn';
import CommonTextInput from '../../components/commonTextInput/CommonTextInput';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import UploadImage from '../../components/uploadImage/UploadImage';
import Colors from '../../components/Colors';


const Banners = () => {

    const navigation = useNavigation();
    const isFocused = useIsFocused();
    const actionSheetRef = useRef(null);
    const [banner,setBanner] = useState([]);
    const [head, setHead] = useState("");
    const [description, setDescription] = useState("");
    const [uploadUri, setUploadUri] = useState("");
    const [type, setType] = useState("edit");
    const [bannerId, setBannerId] = useState("");

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
                setType("create");
                setHead("");
                setDescription("");
                setUploadUri(null);
                actionSheetRef.current?.show()}}>
            <Image style={style.img} source={require("../../assets/images/add.png")}/>
          </TouchableOpacity>
        )
      }

      useEffect(() => {
        getBanners();
  
        updateOrientation();
        // Add event listener for orientation changes
        Dimensions.addEventListener('change', updateOrientation);
      }, [isFocused])
  
      const [orientation, setOrientation] = useState(null);
      const updateOrientation = () => {
          const { width, height } = Dimensions.get('window');
          setOrientation(width < height ? 'portrait' : null);
        };

      const getBanners = async () => {
        await firestore()
        .collection("Banners")
        .get()
        .then(snapshot => {
          if(!snapshot.empty) {
            const result = []
            snapshot.docs.forEach(doc => {
              responseData = {id: doc.id, ...doc.data()}
              result.push(responseData)
            })
            setBanner(result)
          }
        })
      }

      const handleCamera = async () => {
        const options = {
          mediaType: "photo",
        }
        await launchCamera(options,res => {
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
        if(uploadUri !== "" && head !== "" && description !== "" ) {
          const responseUri = await UploadImage(uploadUri.originalPath)
          const banner = {
            head: head,
            description: description,
            image: responseUri,
          }
    
          await firestore()
          .collection("Banners")
          .add(banner)
          .then(() => {
            Snackbar.show({
              text: "Banner Created",
              duration: Snackbar.LENGTH_SHORT,
              textColor: Colors.white,
              fontFamily: "Poppins-SemiBold",
              backgroundColor: Colors.primaryColor,
            });
            actionSheetRef.current?.hide();
            setHead("");
            setDescription("");
            setUploadUri(null);
            getBanners();
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
        if(uploadUri !== "" && head !== "" && description !== "" ) {
            const responseUri = await type === "edit" ? uploadUri : UploadImage(uploadUri.originalPath)
            const banner = {
              head: head,
              description: description,
              image: responseUri,
            }
      
            await firestore()
            .collection("Banners")
            .doc(bannerId)
            .update(banner)
            .then(() => {
              Snackbar.show({
                text: "Banner Created",
                duration: Snackbar.LENGTH_SHORT,
                textColor: Colors.white,
                fontFamily: "Poppins-SemiBold",
                backgroundColor: Colors.primaryColor,
              });
              actionSheetRef.current?.hide()
              setHead("");
              setDescription("");
              setUploadUri(null);
              getBanners();
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

      const handleEdit = bannerData => {
        setType("edit");
        setHead(bannerData.head);
        setDescription(bannerData.description);
        setUploadUri(bannerData.image);
        setBannerId(bannerData.id)
        actionSheetRef.current?.show()
      };
    
      const handleDelete = async bannerData => {
        Alert.alert(
          'Delete Banner',
          'Do you want to delete this Banner, deleting the will lose the Banner data.',
          [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            { text: 'OK', onPress: async () => 
            await firestore()
            .collection("Banners")
            .doc(bannerData.id)
            .delete()
            .then(() => {
              getBanners();
              Snackbar.show({
                text: "Banner Deleted",
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
    <View>
        <ActionSheet ref={actionSheetRef}>
          <View style={style.actionView}>
            <View style={style.actionHeadView}>
              <Text style={style.actionHead}>{type === "create" ? "Create Banner" : "Edit Banner"}</Text>
              <TouchableOpacity onPress={() => actionSheetRef.current?.hide()}>
                <Image style={style.actionCloseImage} source={require("../../assets/images/close.png")}/>
              </TouchableOpacity>
            </View>
            <CommonTextInput placeholder={"Head"} value={head} handleText={text => setHead(text)}/>
            <CommonTextInput placeholder={"Description"} multiline = {true} value={description} handleText={text => setDescription(text)}/>
            <View style={style.imgPickerView}>
              <Text style={style.uploadImgText}>Upload Product Image</Text>
              {uploadUri && 
              <TouchableOpacity style={style.removeImg} onPress={() => setUploadUri("")}>
                <Image style={style.close} source={require("../../assets/images/close.png")}/>
              </TouchableOpacity>}
              <Image style={style.uploadImg} source={uploadUri ? {uri: type === "edit" ? uploadUri : uploadUri.uri} :require("../../assets/images/picture.png")}/>
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

            <CustomBtn type={"primary"} buttonText={type === "create" ? "Create" : "Update"} handleButtonPress={() => type === "create" ? handleCreate() : handleUpdate()} />
          </View>
        </ActionSheet>
        <FlatList data={banner} contentContainerStyle={style.scrollView} showsVerticalScrollIndicator={false} renderItem={({item,index}) => {
            return(
                <ImageBackground source={item.image == null ? require("../../assets/images/1_GNFNf_V7rj_C2YUCeZNzsw.webp") : {uri: item.image}} style={orientation ? style.backgroundImage : style.LbackgroundImage}>
                    <View style={style.textContainer}>
                        <Text style={style.head}>{item.head}</Text>
                        <Text style={style.description}>{item.description}</Text>
                    </View>
                    <TouchableOpacity style={style.editView} onPress={() => handleEdit(item)}>
                      <Image style={style.editImg} source={require("../../assets/images/Edit.png")}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.deleteView} onPress={() => handleDelete(item)}>
                      <Image style={style.editImg} source={require("../../assets/images/close.png")} />
                    </TouchableOpacity>
                </ImageBackground>
            )
        }} />
    </View>
  )
}

export default Banners