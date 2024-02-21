import {Dimensions, StyleSheet} from "react-native"
import Colors from "../../../components/Colors";


const {width, height} = Dimensions.get("screen");

const style = StyleSheet.create({
    container: {
        margin: width* 0.02,
    },
    moreinfoContainer: {
        margin: width* 0.02,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    innerView: {
        backgroundColor: Colors.lightPurpleBg,
        paddingVertical: width* 0.02,
        paddingHorizontal: width* 0.02,
        borderRadius: 10,
    },
    text: {
        color: Colors.primaryColor,
        fontFamily: "Poppins-Regular",
        fontSize: 18,
    },
    Accordion: {
        borderBottomWidth: 1,
        borderBottomColor: Colors.primaryColor,
        paddingBottom: width* 0.01,
        marginBottom: width* 0.02,
    },
    infoHeader: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginVertical: width* 0.015,
    },
    arrowDown: {
        width: width* 0.05,
        height: height* 0.018,
        resizeMode: "contain",
        marginLeft: width* 0.02,
    },
    infoHeaderText: {
        fontFamily: "Poppins-Bold",
        fontSize: 16,
        color: Colors.darkPurple,
    },
    contentView: {
        marginHorizontal: width* 0.01,
    },
    contentText: {
        fontFamily: "Poppins-Regular",
        fontSize: 12,
        color: Colors.black,
    },
    ProductReviewContainer: {
        marginVertical: width* 0.01,
    },
    reviewHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    reviewHeaderText: {
        color: Colors.black,
        fontFamily: "Poppins-Regular",
        fontSize: 16,
    },
    reviewseeall: {
        color: "green",
        fontFamily: "Poppins-Regular",
        fontSize: 16,
    },
    reviewContent: {
        backgroundColor: Colors.steel,
        borderRadius: 10,
        marginVertical: width* 0.02,
        padding:  width* 0.03,
    },
    reviewUser: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginVertical: width* 0.025,
    },
    reviewUserImg: {
        width: width* 0.08,
        height: height* 0.04,
        resizeMode: "contain",
    },
    reviewUserInnerView: {
        marginLeft: width* 0.02,
    },
    reviewUserName: {
        color: Colors.black,
        fontFamily: "Poppins-Bold",
        fontSize: 14,
        marginLeft: width* 0.02,
    },
    reviewText: {
        color: Colors.shadow,
    },
    deliveryHead: {
        fontFamily: "Poppins-Bold",
        fontSize: 16,
        color: Colors.darkPurple,
    },
    deliveryInfoText: {
        fontFamily: "Poppins-Regular",
        fontSize: 12,
        color: Colors.black,
    }
})

export default style