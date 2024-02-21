import { StyleSheet, Dimensions } from "react-native";
import Colors from "../Colors";

const {width, height} = Dimensions.get("screen");

const style = StyleSheet.create({
    header: {
        borderWidth: 1,
        padding: width* 0.02,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    headerText: {
        fontFamily: "Poppins-Bold",
        fontSize: 16,
        color: Colors.darkPurple,
    },
    arrowDown: {
        width: width* 0.05,
        height: height* 0.018,
        resizeMode: "contain",
        marginLeft: width* 0.02,
    },
    contentView: {
        marginHorizontal: width* 0.02,
        marginVertical: height* 0.01,
    },
    contentText: {
        fontFamily: "Poppins-Regular",
        fontSize: 16,
        color: Colors.black,
        marginTop: width* 0.01,
        borderBottomWidth: 0.3,
    },
})

export default style;