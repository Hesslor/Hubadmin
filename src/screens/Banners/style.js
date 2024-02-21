import {Dimensions, StyleSheet} from "react-native"
import Colors from "../../components/Colors";

const {width, height} = Dimensions.get("screen");

const style = StyleSheet.create({
    /*HeaderRight*/
    container: {
        marginRight: width* 0.04,
    },
    img: {
        width: width* 0.07,
        height: height* 0.03,
        resizeMode: "contain",
    },
    //Banner
    scrollView: {
        gap: width* 0.04,
        paddingBottom: width* 0.2,
        alignSelf: "center",
    },
    activityIndicatorView: {
        width: "100%",
        height: "100%",
        backgroundColor: Colors.black3,
        justifyContent: "center",
        alignItems: "center",
    },
    backgroundImage: {
        width: width* 0.9,
        height: height* 0.2,
        resizeMode: "contain",
        overflow: "hidden",
        borderRadius: width* 0.05,
        marginVertical: width* 0.02,
        marginHorizontal: width* 0.04,
    },
    LbackgroundImage: {
        width: width* 1.8,
        height: height* 0.26,
        resizeMode: "contain",
        overflow: "hidden",
        borderRadius: width* 0.05,
        marginVertical: width* 0.02,
        marginHorizontal: width* 0.04,
    },
    textContainer: {
        margin: width* 0.06,
    },
    head: {
        fontSize: 22,
        color: Colors.white,
    },
    description: {
        fontSize: 15,
        color: Colors.white,
    },
     //Action View
    actionView: {
        padding: width* 0.05,
    },
    actionHeadView: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingBottom: width* 0.05,
    },
    actionHead: {
        color: Colors.black,
        fontFamily: "Poppins-Bold",
        fontSize: 20,
    },
    actionCloseImage: {
        width: width* 0.08,
        height: height* 0.036,
        resizeMode: "contain",
    },
    //uploadImage
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
        marginBottom: width* 0.06,
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
    //edit and delete
    editImg: {
        width: width* 0.065,
        height: height* 0.03,
        resizeMode: "contain",
    },
    editView: {
        position: "absolute",
        top: 10,
        right: 45,
    },
    deleteView: {
        position: "absolute",
        top: 10,
        right: 8,
    }
})

export default style