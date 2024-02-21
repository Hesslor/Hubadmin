import {Dimensions, StyleSheet} from "react-native"
import Colors from "../../components/Colors";

const {width, height} = Dimensions.get("screen");

const style = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.black,
    },
    image: {
        width: width* 0.8,
        height: height* 0.25,
        resizeMode: "contain",
    }
})

export default style