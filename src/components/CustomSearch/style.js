import React, { useEffect, useState } from 'react';
import {Dimensions, StyleSheet} from "react-native"
import Colors from "../Colors";

const {height, width} = Dimensions.get("screen");

const style = StyleSheet.create({
    container: {
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: width* 0.04,
    },
    containerFilter: {
        backgroundColor: Colors.white2,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
    searchContainer: {
        backgroundColor: Colors.lightPurpleBg,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: width* 0.03,
        borderRadius: 15,
        margin: width* 0.02,
        borderWidth: 1,
        borderColor: Colors.lightPurple
    },
    searchIcon: {
        width: width* 0.06,
        height: height* 0.028,
    },
    search: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    input: {
        flex: 1,
        color: Colors.primaryColor,
        marginLeft: 10,
    },
    FilterText: {
        color: Colors.primaryColor,
        margin: 15,
    },
})

export default style