import {Dimensions, StyleSheet} from "react-native"
import Colors from "../../components/Colors";

const {width, height} = Dimensions.get("screen");

const style = StyleSheet.create({
    container: {
        marginTop: width* 0.02,
        marginBottom: width* 0.14,
    },
    likeView: {
        position: "absolute",
        right: width* 0.05,
        top: height* 0.04,
        zIndex: 4,
    },
    like: {
        width: width* 0.1,
        height: height* 0.05,
        resizeMode: "contain",
    },
    productImageView: {
        justifyContent: "center",
        alignItems: "center",
        top: 5,
    },
    productImage: {
        width: width* 0.9,
        height: height* 0.4,
        resizeMode: "contain",
    },
    main: {
        backgroundColor: Colors.white,
        padding: width* 0.04,
    },
    productName: {
        fontFamily: "Poppins-Bold",
        fontSize: 22,
        color: Colors.black,
    },
    ratingView: {
        flexDirection: "row",
        alignItems: "center",
    },
    ratingCount: {
        color: Colors.shadow,
        fontSize: 18,
    },
    priceView: {
        flexDirection: "row",
        alignItems: "center",
    },
    productPrice: {
        fontFamily: "Poppins-Bold",
        fontSize: 16,
        color: Colors.black,
        marginTop: width* 0.01,
    },
    off: {
        color: "green",
        fontSize: 16,
        fontFamily: "Poppins-Bold",
        marginLeft: width* 0.01,
    },
    productDetailsView: {
        borderBottomWidth: 1,
        borderBottomColor: Colors.primaryColor,
        paddingBottom: width* 0.02,
        marginBottom: width* 0.02,
    },
    productDetails: {
        fontFamily: "Poppins-Bold",
        fontSize: 16,
        color: Colors.darkPurple,
        marginTop: width* 0.01,
    },
    productDescription: {
        fontFamily: "Poppins-Regular",
        fontSize: 12,
        color: Colors.black,
    },
    addView: {
        width: width* 0.9,
        position: "absolute",
        bottom: width* 0.04,
        alignSelf: "center",
        backgroundColor: Colors.primaryColor,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: width* 0.03,
        borderRadius: width* 0.02,
    },
    qView: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderWidth: 1,
        borderColor: Colors.white,
        borderRadius: 10,
        paddingHorizontal: width* 0.05,
        gap: width* 0.05
    },
    qText1: {
        color: Colors.white,
        fontFamily: "Poppins-Bold",
        fontSize: 18,
    },
    qText2: {
        color: Colors.white,
        fontFamily: "Poppins-Bold",
        fontSize: 18,
    },
    addtocart: {
        color: Colors.white,
        fontFamily: "Poppins-Bold",
        fontSize: 18,
    }
})

export default style