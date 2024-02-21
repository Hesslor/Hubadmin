import React,{useState} from 'react'
import { Image, ScrollView, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import style from './style';
import CommonTextInput from '../../components/commonTextInput/CommonTextInput';
import CustomBtn from '../../components/CustomBtn/CustomBtn';
import Snackbar from 'react-native-snackbar';
import Colors from '../../components/Colors';
import { login } from '../../storage/actions';
import { useDispatch } from 'react-redux';



const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Navigation = useNavigation();
  const dispatch = useDispatch();

  const handleLogin = async () => {
    if(email !== "" & password !== "") {
        await firestore().collection("Users")
              .where("email", "==", email.trim())
              .get()
              .then( async SnapShot => {
                if(SnapShot.empty){
                  Snackbar.show({
                    text: "Invalid User",
                    duration: Snackbar.LENGTH_SHORT,
                    textColor: Colors.red,
                    fontFamily: "Poppins-SemiBold",
                    backgroundColor: Colors.black,
                  });
                } else {
                  SnapShot.forEach( SnapShotData => {
                    const respData = SnapShotData.data();
                    if(respData.password == password.trim()) {
                      Snackbar.show({
                        text: "Logged In",
                        duration: Snackbar.LENGTH_SHORT,
                        textColor: Colors.white,
                        fontFamily: "Poppins-SemiBold",
                        backgroundColor: Colors.primaryColor,
                      });

                      dispatch(login({
                        userId: SnapShotData.id,
                        email: respData.email,
                      }));
                      //Navigation.navigate("AppDrawer")
                    } else{
                      Snackbar.show({
                        text: "Incorrect password",
                        duration: Snackbar.LENGTH_SHORT,
                        textColor: Colors.red,
                        fontFamily: "Poppins-SemiBold",
                        backgroundColor: Colors.black,
                      });
                    }
                  })
                }
                })
                .catch( err => console.warn(err))
    } else {
      Snackbar.show({
        text: "Fill up all the fields to continue",
        duration: Snackbar.LENGTH_SHORT,
        textColor: Colors.red,
        fontFamily: "Poppins-SemiBold",
        backgroundColor: Colors.black,
      });
    }
  }

  const goToSignUp = () => {
    Navigation.navigate("SignUp");
  }

  const handleButtonPress = () => {
    Navigation.navigate("AppDrawer")
  };

  return (
    <View style={style.container}>
        <Image source={require("../..//assets/images/pexels-pixabay-255464.jpg")} style={style.topBg} />
        <ScrollView style={style.scrollView} contentContainerStyle={style.scrollView2} showsVerticalScrollIndicator={false}>
            <Image source={require("../../assets/images/logo.png")} style={style.logo} />
            <Text style={style.loginText} >Login Account</Text>
  
            <CommonTextInput type="email" placeholder="Email Address" handleText= {text => setEmail(text)}/>
            <CommonTextInput type="password" placeholder="Password" handleText= {text => setPassword(text)} />
            <CustomBtn type="primary" buttonText="Sign in" handleButtonPress={handleLogin} />
  
            <Text style={style.createNew} onPress={goToSignUp}>If you are new, Create here</Text>
            <View style={style.bottom}></View>
        </ScrollView>
        <View style={style.footer}>
          <Text style={style.footerText}>Login as a guest</Text>
        </View>
    </View>
    
  )
}

export default Login