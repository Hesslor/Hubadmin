import {Dimensions, StyleSheet} from "react-native"

const {width, height} = Dimensions.get("screen");

const style = StyleSheet.create({
    container: {
        marginLeft: width* 0.04,
    },
    img: {
        width: width* 0.07,
        height: height* 0.03,
        resizeMode: "contain",
    },
})

export default style