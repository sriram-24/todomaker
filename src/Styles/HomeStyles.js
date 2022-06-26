import React from "react";
import { StyleSheet } from "react-native";
import { colorText, colorTextInverse, fontSize, statusColorFour, statusColorOne, statusColorThree, statusColorTwo } from "./Theme";

const commonStatusItem = {
    paddingTop:20,
    paddingBottom:20,
    backgroundColor:"#000",
    borderRadius:15,
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center",
    flex:1,
    
}

export const home = StyleSheet.create({
    topSection:{
        margin:10,
        display:"flex",
        justifyContent:"space-around",
        flexDirection:"row",
        alignItems:"center",
        top:20,
        
    },
    today:{
        fontSize:fontSize,
        fontWeight:"bold",
        color:colorText
    },
    status:{
        display:"flex",
        flexDirection:"column",
        padding:30
    },
    statusHorizontal:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-around",
        marginBottom:20
    },
    completed:{
        ...commonStatusItem,
        backgroundColor:statusColorOne
    },
    pending:{
        ...commonStatusItem,
        marginLeft:15,
        backgroundColor:statusColorTwo
    },
    cancelled:{
        ...commonStatusItem,
        backgroundColor:statusColorThree
    },
    ongoing:{
        ...commonStatusItem,
        marginLeft:15,
        backgroundColor:statusColorFour
    },
    statusCount:{
        marginLeft:5
    },
    count:{
        fontSize:fontSize+2,
        fontWeight:"bold",
        color:colorTextInverse
    },
    textColor:{
        color:colorTextInverse,
        fontSize:12
    },
    taskHeader:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        padding:30
    },
    taskTitle:{
        fontSize:fontSize+2,
        color:colorText,
        fontWeight:"bold"
    }

})