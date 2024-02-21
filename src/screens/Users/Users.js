import React, { useEffect, useState } from 'react'
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import firestore from '@react-native-firebase/firestore';
import style from './style';
import CustomSearch from '../../components/CustomSearch/CustomSearch';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import Colors from '../../components/Colors';
import Snackbar from 'react-native-snackbar';
import HeaderLeft from '../../components/HeaderLeft/HeaderLeft';

const Users = () => {

  const navigation = useNavigation();
  const [users,setUsers] = useState([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => <HeaderLeft goBack={true}/>
    })
  },[])

  useEffect(() => {
    getUsers()
  }, [isFocused])
  
  const getUsers = async () => {
    await firestore()
    .collection("Users")
    .get()
    .then(snapshot => {
      if(!snapshot.empty) {
        const result = []
        snapshot.docs.forEach(doc => {
          responseData = {id: doc.id, ...doc.data()}
          result.push(responseData)
        })
        setUsers(result)
      }
    })
  }

  const handleSearch = async text => {
    await firestore()
    .collection("Users")
    .orderBy("username")
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
        setUsers(result)
      } else {
        setUsers([])
      }
    })
  }

  const handleBlock = async data => {
    await firestore()
    .collection("Users")
    .doc(data.id)
    .update({ active: data.active ? false : true})
    .then(() => {
      updatedUsers = users.map(obj => {
        if(obj.id == data.id) {
          obj.active = data.active ? false : true;
        }
        return obj;
      })
      Snackbar.show({
        text: "User updated Successfully",
        duration: Snackbar.LENGTH_SHORT,
        textColor: Colors.Green,
        fontFamily: "Poppins-SemiBold",
        backgroundColor: Colors.black,
      });
      setUsers(updatedUsers)
    })
  }

  return (
    <View>
      <CustomSearch onchange={handleSearch} />

      <FlatList data={users}
        contentContainerStyle={style.container}
        showsVerticalScrollIndicator={false}
        renderItem={({item,index}) => {
          if(item.username === "admin") {
            return null;
          } else {
            return(
              <View style={style.userInfoView}>
                <Image style={style.userImage} source={item.profileimage ? {uri: item.profileimage} : require("../../assets/images/user.png")}/>
                <View style={style.textView}>
                  <Text style={style.userName}>{item.username}</Text>
                  <Text style={style.userEmail}>{item.email}</Text>
                  <Text style={style.userPhone}>{item.mobilenumber}</Text>
                </View>
                <TouchableOpacity style={[style.blockView,{backgroundColor: item.active ? Colors.red : Colors.Green }]} onPress={() => handleBlock(item)}>
                  <Text style={style.block}>{item.active ? "Block" : "Unblock"}</Text>
                </TouchableOpacity>
              </View>
            )
          }
        }} 
        ListEmptyComponent={() => {
          return(
           <View style={style.emptyView}>
            <Text style={style.emptyText}>Empty</Text>
           </View>
          )
        }}/>
    </View>
    
  )
}

export default Users