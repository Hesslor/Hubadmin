import {Dimensions, StyleSheet} from "react-native"
import Colors from "../../components/Colors";


const {width, height} = Dimensions.get("screen");

const style = StyleSheet.create({
    container: {
        backgroundColor: Colors.white2,
        padding: width* 0.04,
    },
    FullName: {
        color: Colors.black,
        fontFamily: "Poppins-Bold",
        fontSize: 25,
        textAlign: "center",
    },
    imageView: {
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        marginVertical: width* 0.03,
    },
    image: {
        width: width* 0.45,
        height: height* 0.2,
        borderRadius: width* 15,
        overflow: "hidden",
    },
    logo: {
        width: width* 0.45,
        height: height* 0.2,
        resizeMode: "contain",
        alignSelf: "center",
    }
})

export default style