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
    /*products*/
    productContainer: {
        paddingTop: width* 0.02,
        paddingBottom: width* 0.38,
        gap: width* 0.02,
    },
    product: {
        backgroundColor: Colors.white,
        flexDirection: "row",
        padding: width* 0.02,
        margin: width* 0.022,
        borderRadius: 10,
        gap: width* 0.04,
    },
    imageView: {
        justifyContent: "center",
        alignItems: "center",
    },
    productImage: {
        width: width* 0.15,
        height: height* 0.06,
        resizeMode: "contain",
    },
    contentView: {
        width: "70%",
        borderLeftWidth: 1,
        borderColor: Colors.primaryColor,
        paddingLeft: width* 0.02,
    },
    productName: {
        fontFamily: "Poppins-Bold",
        color: Colors.black,
        fontSize: 18,
    },
    productContent: {
        fontFamily: "Poppins-Regular",
        color: Colors.black,
        fontSize: 14,
    },
    priceView: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    priceView2: {
        flexDirection: "row",
        gap: width* 0.02,
        alignItems: "center"
    },
    price: {
        color: Colors.black,
        fontFamily: "Poppins-Bold",
        fontSize: 14,
    },
    offerView: {
        fontFamily: "Orbitron-Bold",
        fontSize: 15,
        backgroundColor: Colors.primaryColor,
        color: Colors.white,
        paddingHorizontal: width* 0.03,
        paddingVertical:  width* 0.01,
        borderRadius: 10,
    },
    qView: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        borderWidth: 1,
        borderColor: Colors.lightPurple,
        borderRadius: 10,
        paddingHorizontal: width* 0.04,
        gap: width* 0.03
    },
    qText1: {
        color: Colors.primaryColor,
        fontFamily: "Poppins-Bold",
        fontSize: 15,
    },
    qText2: {
        color: Colors.primaryColor,
        fontFamily: "Poppins-Bold",
    },
    //edit & delete
    editImg: {
        width: width* 0.065,
        height: height* 0.03,
        resizeMode: "contain",
    },
    editView: {
        position: "absolute",
        top: -10,
        right: 25,
    },
    deleteView: {
        position: "absolute",
        top: -10,
        right: -8,
    }
})

export default style