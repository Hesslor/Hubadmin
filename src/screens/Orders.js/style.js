import {Dimensions, StyleSheet} from "react-native"
import Colors from "../../components/Colors";

const {width, height} = Dimensions.get("screen");

const style = StyleSheet.create({
    container: {
        paddingBottom: width* 0.24,
    },
    order: {
        backgroundColor: Colors.lightPurpleBg,
        padding:10,
        marginHorizontal: width* 0.04,
        marginVertical: width* 0.015,
        borderRadius: 10,
    },
    orderView: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingBottom: width* 0.01,
        borderBottomWidth: 1,
        borderBottomColor: Colors.black2,
    },
    orderId: {
        color: Colors.black,
        fontFamily: "Poppins-Bold",
        fontSize: 14,
        overflow: "hidden",
    },
    orderedOn: {
        color: Colors.primaryColor,
        fontFamily: "Poppins-Regular",
        fontSize: 13,
    },
    orderEmail: {
        color: Colors.black,
        fontFamily: "Poppins-Regular",
        fontSize: 11,
    },
    orderAddress: {
        color: Colors.shadow,
        fontFamily: "Poppins-Regular",
        fontSize: 11,
    },
    orderPriceView: {
        color: Colors.shadow,
        fontFamily: "Poppins-Bold",
        fontSize: 11,
    },
    orderPrice: {
        color: Colors.Green,
        fontFamily: "Poppins-Bold",
        fontSize: 11,
    },
    image: {
        width: width* 0.3,
        height: height* 0.12,
        borderRadius: width* 0.1,
        overflow: "hidden",
    },
    orderView2: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: width* 0.02,
    },
    orderBottomText: {
        color: Colors.black,
        fontFamily: "Poppins-Regular",
        fontSize: 13,
    }
})

export default style