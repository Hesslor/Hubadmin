import React,{useState} from 'react'
import { Image, TextInput, View, TouchableOpacity, Text } from "react-native"
import style from './style';
import Colors from '../Colors';

const CommonTextInput = (props) => {

  const {type, placeholder, handleText, value, check=false, multiline=false} = props;
  const [show, setShow] = useState(false)

  const keyboardType = type == "email" ? "email-address" : type == "password" ? "default": type == "phone" ? "phone-pad" : "default";

  const secureTextEntry = type === "password" ? (!show ? true: false) : false;

  const Icon = type == "email" ? require("../../assets/images/email.png") :
   type == "password" ? ( !show ? require("../../assets/images/hide.png") : require("../../assets/images/show.png") ) : false;

  const handlePassword = () => {
    setShow(!show)
  }

  return (
    <View style={style.container}>
      <TextInput 
      style={style.textInput}
      placeholder={placeholder}
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
      placeholderTextColor={Colors.lightPurple}
      selectionColor={Colors.primaryColor}
      onChangeText={handleText}
      value={value}
      multiline={multiline}
      />
      {!Icon ? null :
        <TouchableOpacity
        onPress={handlePassword}
        disabled={type!= "password" ? true : false}>
        <Image style={style.icon} source={Icon} />
        </TouchableOpacity>
      }
      {check ? <TouchableOpacity><Text style={style.check}>Check</Text></TouchableOpacity> : null}
    </View>
  )
}

export default CommonTextInput;