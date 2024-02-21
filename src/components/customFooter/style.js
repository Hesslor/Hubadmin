import { StyleSheet, Dimensions } from "react-native";
import Colors from "../Colors";

const {width, height} = Dimensions.get("screen");

const style = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        paddingVertical: width* 0.03,
        backgroundColor: Colors.black,
    },
    btn: {
        justifyContent: "center",
        alignItems: "center",
    },
    icon: {
        width: width* 0.08,
        height: height* 0.03,
        resizeMode: "contain",
        
    },
    text: {
        color: Colors.white,
        fontSize: 15,
        marginTop: width* 0.03,
    },
    cartCount: {
        position: "absolute",
        top: -10,
        right: -5,
        fontSize: 12,
        fontWeight: "900",
        backgroundColor: Colors.red,
        paddingHorizontal: width* 0.01,
        borderRadius: 50,
        zIndex: 5,
    }
})

export default style;