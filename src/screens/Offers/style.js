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
    //offer style
    container: {
        padding: width*0.01,
    },
    product: {
        paddingHorizontal: width* 0.02,
        marginTop: width* 0.025,
        overflow: "hidden"
    },
    Lproduct: {
        paddingHorizontal: width* 0.04,
        justifyContent: "center",
        alignItems: "center",
        marginTop: width* 0.028,
        overflow: "hidden"
    },
    ImageBackground: {
        width: width* 0.95,
        height: height* 0.15,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        resizeMode: "contain",
    },
    LImageBackground: {
        width: width* 1.4,
        height: height* 0.18,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        resizeMode: "contain",
    },
    offer: {
        fontFamily: "Orbitron-Bold",
        color: Colors.white,
        fontSize: 28,
    },
    offView: {
        marginHorizontal: width* 0.01,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    off: {
        fontFamily: "Orbitron-Bold",
        color: Colors.white,
    },
    contentView: {
        width: "40%",
        paddingLeft: width* 0.01,
    },
    productHead: {
        fontFamily: "Poppins-Bold",
        color: Colors.black,
        fontSize: 14,
        overflow: "hidden",
    },
    productDescription: {
        fontFamily: "Poppins-Regular",
        color: Colors.black,
        fontSize: 11,
    },
    codeView: {
        marginHorizontal: width* 0.02,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.red,
        padding: width* 0.01,
        borderRadius: 10,
    },
    code: {
        fontFamily: "Poppins-Bold",
        color: Colors.white,
        fontSize: 10,
    },
    //action view
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
    //choose action View
    chooseView: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        margin: width* 0.06,
    },
    chooseIcon: {
        width: width* 0.14,
        height: height* 0.061,
        resizeMode: "contain",
    },
    chooseText: {
        color: Colors.black,
        fontFamily: "Poppins-Regular",
        textAlign: "center",
        marginTop: height* 0.015,
    }
})

export default style