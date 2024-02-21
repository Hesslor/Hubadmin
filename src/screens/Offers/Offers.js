import React, { useCallback, useEffect, useRef, useState } from 'react'
import { View,Text, ScrollView, ImageBackground, FlatList, Dimensions, TouchableOpacity, Image, Alert } from 'react-native'
import style from './style'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import firestore from '@react-native-firebase/firestore';
import HeaderLeft from '../../components/HeaderLeft/HeaderLeft'
import CustomSearch from '../../components/CustomSearch/CustomSearch'
import ActionSheet from 'react-native-actions-sheet';
import CustomBtn from '../../components/CustomBtn/CustomBtn';
import CommonTextInput from '../../components/commonTextInput/CommonTextInput';
import Clipboard from '@react-native-clipboard/clipboard';
import Snackbar from 'react-native-snackbar';
import Colors from '../../components/Colors';

const Offers = () => {


  const navigation = useNavigation();
  const [offerArray, setOfferArray] = useState([]);
  const actionSheetRef = useRef(null);
  const chooseActionSheetRef = useRef(null);
  const [type, setType] = useState("");
  const [head, setHead] = useState("");
  const [description, setDescription] = useState("");
  const [off, setOff] = useState("");
  const [code, setCode] = useState("");
  const [selected, setSelected] = useState("");

  useEffect(() => {

    navigation.setOptions({
      headerLeft: () => <HeaderLeft/>,
      headerRight: () => <HeaderRight/>,
    })

    updateOrientation();
    // Add event listener for orientation changes
    Dimensions.addEventListener('change', updateOrientation);
  }, [])

  const [orientation, setOrientation] = useState(null);
  const updateOrientation = () => {
      const { width, height } = Dimensions.get('window');
      setOrientation(width < height ? 'portrait' : null);
    };

    const HeaderRight = () => {
        return (
          <TouchableOpacity
            style={style.container} onPress={() => {
                setType("create");
                setHead("");
                setDescription("");
                setOff("");
                setCode("");
                setSelected([])
                actionSheetRef.current?.show()}}>
            <Image style={style.img} source={require("../../assets/images/add.png")}/>
          </TouchableOpacity>
        )
      }

    useFocusEffect(
        useCallback(() => {
          getOffers();
        }, [])
    );

    const getOffers = async () => {
        await firestore()
        .collection("Offers")
        .get()
        .then(snapshot => {
          if(!snapshot.empty) {
            const result = []
            snapshot.docs.forEach(doc => {
              responseData = {id: doc.id, ...doc.data()}
              result.push(responseData)
            })
            setOfferArray(result)
          }
        })
    }

    const handleCopy = () => {
        Clipboard.setString(selected.code);
    }

    const handleEdit = () => {
        chooseActionSheetRef.current?.hide();
        setType("edit")
        setHead(selected.head);
        setDescription(selected.description);
        setOff(selected.off);
        setCode(selected.code);
        actionSheetRef.current?.show();
    }

    const handleDelete = () => {
        Alert.alert(
          'Delete Offer',
          'Do you want to delete this Offer, deleting the will lose the Offer data.',
          [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            { text: 'OK', onPress: async () => 
            await firestore()
            .collection("Offers")
            .doc(selected.id)
            .delete()
            .then(() => {
              getOffers();
              Snackbar.show({
                text: "Offer Deleted",
                duration: Snackbar.LENGTH_SHORT,
                textColor: Colors.white,
                fontFamily: "Poppins-SemiBold",
                backgroundColor: Colors.primaryColor,
              });
            }) },
          ],
          { cancelable: false }
        );
    }

    const handleCreate = async () => {
      if(head !== "" && description !== "" && off !== "" && code !== "") {
        const offer = {
          head: head,
          description: description,
          off: off,
          code: code,
        }
  
        await firestore()
        .collection("Offers")
        .add(offer)
        .then(() => {
          setTimeout(() => {
            Snackbar.show({
              text: "Offer Created",
              duration: Snackbar.LENGTH_SHORT,
              textColor: Colors.white,
              fontFamily: "Poppins-SemiBold",
              backgroundColor: Colors.primaryColor,
            });
          }, 1000);
          actionSheetRef.current?.hide();
          setHead("");
          setDescription("");
          setOff("");
          setCode("");
          getOffers();
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
      if(head !== "" && description !== "" && off !== "" && code !== "") {
          const banner = {
            head: head,
            description: description,
            off: off,
            code: code,
          }
    
          await firestore()
          .collection("Offers")
          .doc(selected.id)
          .update(banner)
          .then(() => {
            Snackbar.show({
              text: "Offer Updated",
              duration: Snackbar.LENGTH_SHORT,
              textColor: Colors.white,
              fontFamily: "Poppins-SemiBold",
              backgroundColor: Colors.primaryColor,
            });
            actionSheetRef.current?.hide()
            setHead("");
            setDescription("");
            setOff("");
            setCode("");
            getOffers();
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
    <View>
      <ScrollView style={style.container} nestedScrollEnabled={true} showsVerticalScrollIndicator={false}>
        <CustomSearch />

        <FlatList data={offerArray} showsVerticalScrollIndicator={false} scrollEnabled={false} renderItem={({item,index}) => {
            return (
              <TouchableOpacity  style={orientation ? style.product : style.Lproduct} onPress={() => {setSelected(item);chooseActionSheetRef.current?.show()}}>
                <ImageBackground style={orientation ? style.ImageBackground : style.LImageBackground} source={require("../../assets/images/OfferBanner.png")}>
                  <Text style={style.offer}>{item.off}</Text>
                  <View style={style.offView}>
                    <Text style={style.off}>%</Text>
                    <Text style={style.off}>off</Text>
                  </View>
                  <View style={style.contentView}>
                    <Text style={style.productHead} numberOfLines={1}>{item.head}</Text>
                    <Text style={style.productDescription} numberOfLines={2}>{item.description}</Text>
                  </View>
                  <View style={style.codeView}>
                    <Text style={style.code}>Use Code</Text>
                    <Text style={style.code}>{item.code}</Text>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            )
          }}/>
      </ScrollView>

      <ActionSheet ref={actionSheetRef}>
          <View style={style.actionView}>
            <View style={style.actionHeadView}>
              <Text style={style.actionHead}>{type === "create" ? "Create Offer" : "Edit Offer"}</Text>
              <TouchableOpacity onPress={() => actionSheetRef.current?.hide()}>
                <Image style={style.actionCloseImage} source={require("../../assets/images/close.png")}/>
              </TouchableOpacity>
            </View>
            <CommonTextInput placeholder={"Head"} value={head} handleText={text => setHead(text)}/>
            <CommonTextInput placeholder={"Description"} multiline = {true} value={description} handleText={text => setDescription(text)}/>
            <CommonTextInput placeholder={"Offer"} value={off} handleText={text => setOff(text)}/>
            <CommonTextInput placeholder={"Offer Code"} value={code} handleText={text => setCode(text)}/>
            <CustomBtn type={"primary"} buttonText={type === "create" ? "Create" : "Update"} handleButtonPress={() => type === "create" ? handleCreate() : handleUpdate()} />
          </View>
        </ActionSheet>

        <ActionSheet ref={chooseActionSheetRef}>
          <View style={style.actionView}>
            <View style={style.actionHeadView}>
              <Text style={style.actionHead}>{type === "create" ? "Create Banner" : "Edit Banner"}</Text>
              <TouchableOpacity onPress={() => chooseActionSheetRef.current?.hide()}>
                <Image style={style.actionCloseImage} source={require("../../assets/images/close.png")}/>
              </TouchableOpacity>
            </View>
            
            <View style={style.chooseView}>
                <TouchableOpacity onPress={handleCopy}>
                    <Image style={style.chooseIcon} source={require("../../assets/images//copy-link.png")} />
                    <Text style={style.chooseText}>Copy</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleEdit}>
                    <Image style={style.chooseIcon} source={require("../../assets/images/pages.png")} />
                    <Text style={style.chooseText}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleDelete}>
                    <Image style={style.chooseIcon} source={require("../../assets/images/delete.png")} />
                    <Text style={style.chooseText}>Delete</Text>
                </TouchableOpacity>
            </View>
          </View>
        </ActionSheet>
    </View>
  )
}

export default Offers