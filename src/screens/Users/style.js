import { StyleSheet,Dimensions } from "react-native";
import Colors from "../../components/Colors";

const { width, height } = Dimensions.get("screen");

const style =  StyleSheet.create({
    container: {
        padding: width* 0.04,
        justifyContent: "center",
        alignItems: "center",
    },
    userInfoView: {
        width: width* 0.9,
        flexDirection: "row",
        backgroundColor: Colors.lightPurpleBg,
        justifyContent: "flex-start",
        alignItems: "center",
        padding:  width* 0.03,
        marginVertical: width* 0.02,
        borderRadius: width*0.02,
    },
    userImage: {
        width: width* 0.14,
        height: height* 0.06,
        borderRadius: 50,
    },
    textView: {
        marginLeft: width* 0.04,
    },
    userName: {
        fontFamily: "Lato-Bold",
        fontSize: 20,
        color: Colors.primaryColor,
        paddingBottom: 5,
    },
    userEmail: {
        fontFamily: "Lato-Regular",
        fontSize: 16,
        color: Colors.darkPurple,
    },
    userPhone: {
        fontFamily: "Lato-Regular",
        fontSize: 16,
        color: Colors.shadow,
    },
    blockView: {
        position: "absolute",
        top: 10,
        right: 10,
        backgroundColor: Colors.red,
        borderRadius: width*0.01,
    },
    block: {
        color: Colors.white,
        padding: width* 0.01,
        fontSize: 14,
        fontFamily: "Lato-Bold"
    }
})

export default style;