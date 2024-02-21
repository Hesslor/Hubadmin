import { StyleSheet, Dimensions } from "react-native";
import Colors from "../Colors";

const {width, height} = Dimensions.get("screen")

const style = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: Colors.inputBg,
        paddingHorizontal: width* 0.03,
        marginVertical: width* 0.025,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: Colors.primaryColor,
    },
    textInput: {
        flex: 1,
        color: Colors.lightPurple,
        fontFamily: 'Poppins-Regular',
        fontSize: 14,
    },
    icon: {
        width: width* 0.05,
        height: height* 0.05,
        resizeMode: "contain"
    },
    check : {
        color: Colors.white,
        fontFamily: 'Poppins-Bold',
        fontSize: 16,
        backgroundColor: Colors.primaryColor,
        paddingHorizontal: width* 0.03,
        borderRadius: width* 0.01,
    }
})

export default style;