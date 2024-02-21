import {Dimensions, StyleSheet} from "react-native"
import Colors from "../../components/Colors";

const {width, height} = Dimensions.get("screen");

const style = StyleSheet.create({
    container: {
        padding: width* 0.05,
        paddingVertical:  width* 0.06,
    },
    selectCategory: {
        color: Colors.black,
        fontFamily: "Poppins-Regular",
        fontSize: 14,
        paddingVertical: width* 0.01,
    },
    imgPickerView: {
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: width* 0.05,
        paddingHorizontal: width* 0.1,
        marginVertical: width* 0.05,
        borderWidth: 1,
        borderRadius: 10,
    },
    close: {
        width: width* 0.08,
        height: height* 0.04,
        resizeMode: "contain",
    },
    uploadImgText: {
        color: Colors.black,
        fontFamily: "Poppins-Regular",
        fontSize: 18,
        paddingBottom: height* 0.02,
    },
    uploadImg: {
        width: width* 0.31,
        height: height* 0.14,
        resizeMode: "contain",
    },
    removeImg: {
        position: "absolute",
        top: height* 0.06,
        right: width* 0.05,
    },
    ChoseImg: {
        color: Colors.black,
        fontFamily: "Poppins-Bold",
        fontSize: 20,
    },
    imgSelView2: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: width* 0.08,
    },
    imgSelView3: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom: width* 0.1,
    },
    imgSelView4: {
        justifyContent: "center",
        alignItems: "center", 
    },
    imgPicker: {
        width: width* 0.12,
        height: height* 0.05,
        resizeMode: "contain",
    },
    choseText: {
        color: Colors.black,
        fontFamily: "Poppins-Regular",
        fontSize: 16,
        paddingTop: width* 0.04,
    },
})

export default style