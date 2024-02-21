import { StyleSheet,Dimensions } from "react-native";
import Colors from "../../components/Colors";

const { width, height } = Dimensions.get("screen");

const style =  StyleSheet.create({
    container: {height: "100%"},
    topBg: {
        width: "100%",
        height: height*0.2,
        resizeMode:"cover",
    },
    scrollView: {
        flex: 1,
        backgroundColor: Colors.black2,
        marginTop: -width*0.30,
        borderTopLeftRadius: width*0.05,
        borderTopRightRadius: width*0.05,
        overflow: "hidden",
        padding: width*0.06,
    },
    scrollView2: {
        justifyContent: "center",
        alignItems: "center"
    },
    logo: {
        width: width* 0.7,
        height: width* 0.3,
        resizeMode: "contain",
    },
    loginText: {
        fontFamily: "Poppins-Bold",
        color: Colors.white2,
        fontSize: 25,
    },
    createNew: {
        fontFamily: "Poppins-Regular",
        color: Colors.white2,
        fontSize: 14,
        textAlign: "center",
        marginVertical: width* 0.025,
    },
    footer: {
        padding:15,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(50, 0, 64, 1)",
    },
    footerText: {
        color: Colors.white2,
        fontSize: 14,
        fontFamily: "Poppins-Regular",
    },
    bottom: {
        margin: 15,
    }
})

export default style;