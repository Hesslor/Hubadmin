import { StyleSheet, Dimensions } from "react-native";
import Colors from "../Colors";

const {width, height} = Dimensions.get("screen")

const style = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.black,
    },
    container: {
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        alignContent: "flex-start",
        padding: width* 0.04,
        gap: width* 0.06,
        backgroundColor: Colors.black,
        overflow: "hidden"
    },
    profile: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
    },
    profilePic: {
       marginRight: width* 0.03,
    },
    image: {
        width: width* 0.2,
        height: height* 0.09,
        borderRadius: width* 15,
        overflow: "hidden",
    },
    ProfileName: {
        color: Colors.white,
        fontSize: 20,
        fontFamily: "Poppins-Regular",
    },
    ProfileMail: {
        color: Colors.white2,
        fontSize: 12,
        fontFamily: "Poppins-Regular",
    },
    content: {
        borderTopWidth: 1,
        paddingVertical: width* 0.05,
        borderTopColor: Colors.lightPurple,
        gap: width* 0.07,
    },
    contents: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: width* 0.04
    },
    icon: {
        width: width* 0.07,
        height: height* 0.032,
    },
    text: {
        color: Colors.white,
        fontSize: 18,
        fontFamily: "Poppins-Regular",
    },
    logout: {
        color: Colors.white,
        fontSize: 20,
        fontFamily: "Poppins-Regular",
        paddingHorizontal: width* 0.06,
        paddingVertical: width* 0.02,
        borderWidth: 1,
        borderColor: Colors.lightPurple,
        borderRadius: 10,
        marginTop: width* 0.04,
    }
})

export default style;