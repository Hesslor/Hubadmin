import {Dimensions, StyleSheet} from "react-native"
import Colors from "../../components/Colors";

const {width, height} = Dimensions.get("screen");

const style = StyleSheet.create({
    scrollView: {
        gap: width* 0.06,
        margin: width* 0.04,
        paddingBottom: width* 0.2,
    },
    activityIndicatorView: {
        width: "100%",
        height: "100%",
        backgroundColor: Colors.black3,
        justifyContent: "center",
        alignItems: "center",
    },
    headerBarView: {
        backgroundColor: Colors.darkPurple,
        padding: width* 0.04,
        borderRadius: width* 0.02,
        flexDirection: 'row',
    },
    headerIcon: {
        width: width* 0.12,
        height: height* 0.05,
        resizeMode: "contain",
        marginRight: width* 0.06,
    },
    orderId: {
        color: Colors.white,
        fontFamily: "Poppins-Regular",
    },
    ordered: {
        color: Colors.white,
        fontFamily: "Poppins-Bold"
    },
    h2: {
        color: Colors.primaryColor,
        fontFamily: "Poppins-Bold",
        fontSize: 18,
    },
    p: {
        color: Colors.black2,
        fontFamily: "Poppins-Regular",
    },
    itemView: {
        flexDirection: "row",
        marginVertical: width* 0.04,
        justifyContent: "space-between",
        alignItems: "center",
    },
    itemQuantity: {
        backgroundColor: Colors.primaryColor,
        color: Colors.white,
        fontFamily: "Poppins-Bold",
        paddingHorizontal: width* 0.04,
        paddingVertical: width* 0.015,
        borderRadius: width* 0.01,
    },
    itemNameView: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: width* 0.06,
    },
    itemName: {
        color: Colors.black2,
        fontFamily: "Poppins-Bold",
    },
    itemDescription: {
        color: Colors.black2,
        fontFamily: "Poppins-Regular",
    },
    itemPrice: {
        color: Colors.black2,
        fontFamily: "Poppins-Bold",
    },

    orderContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: width* 0.03,
        borderBottomWidth: 1,
        borderBottomColor: Colors.primaryColor,
    },
    orderDetails: {
        fontFamily: "Poppins-Bold",
        color: Colors.black,
        fontSize: 18,
        marginBottom: width* 0.02,
    },
    orderText: {
        fontFamily: "Poppins-Regular",
        color: Colors.black,
        fontSize: 14,
    },
    orderSavings: {
        fontFamily: "Poppins-Regular",
        color: "green",
        fontSize: 14,
    },
    orderDiscount: {
        fontFamily: "Poppins-Regular",
        color: Colors.red,
        fontSize: 14,
    },
    ordernum: {
        fontFamily: "Poppins-Bold",
        color: Colors.white2,
        fontSize: 18,
        marginBottom: width* 0.026,
    },
    orderNumView: {
        alignItems: "flex-end",
    },
    totalContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        
        marginVertical: width* 0.02,
    },
    updateOrder: {
        position: "absolute",
        bottom: 15,
        width: width* 0.9,
        backgroundColor: Colors.primaryColor,
        padding: width* 0.02,
        borderRadius: width *0.02,
        alignSelf: "center",
    },
    updateOrderText: {
        color: Colors.white,
        fontFamily: "Poppins-Bold",
        fontSize: 20,
        textAlign: "center"
    },
     /*Action View*/
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
})

export default style