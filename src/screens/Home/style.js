import { StyleSheet,Dimensions } from "react-native";
import Colors from "../../components/Colors";

const { width, height } = Dimensions.get("screen");

const style =  StyleSheet.create({
    container: {
        padding: width* 0.04,
        justifyContent: "center",
        alignItems: "center",
    },
    contentView: {
        width: width* 0.9,
        height: height* 0.18,
        backgroundColor: Colors.darkPurple,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        borderRadius: width* 0.02,
        padding: width* 0.06,
        marginVertical: width* 0.04,
        gap: width* 0.08,
    },
    contentImage: {
        width: width* 0.22,
        height: height* 0.1,
        resizeMode: "contain",
    },
    contentName: {
        fontFamily: "Lato-Bold",
        fontSize: 26,
        color: Colors.white,
        paddingBottom: 5,
    },
    contentQun: {
        fontFamily: "Lato-Regular",
        fontSize: 24,
        color: Colors.white,
    },
})

export default style;