import { StyleSheet, Dimensions } from "react-native";
import Colors from "../Colors";

const { width,height } = Dimensions.get("screen");
const style = StyleSheet.create({
    button: {
        width: width* 0.88,
        padding: width* 0.03,
        borderRadius: 10,
        marginVertical: width* 0.025,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    icon: {
        width: width* 0.06,
        height: width* 0.06,
        marginRight: width* 0.04
    }
});

export default style