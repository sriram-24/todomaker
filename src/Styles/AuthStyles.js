import react from "react";
import { StyleSheet } from "react-native";
import { colorBackground, colorPrimary, colorSecondary, colorText } from "./Theme";

export const auth = StyleSheet.create({
    container:{
       padding:30,
       flex:1,
       justifyContent:"center"
    },
    logintitle:{
        marginBottom:20,
        color:colorPrimary
    },
    input:{
        marginBottom:30,
        backgroundColor:colorBackground,
        color:colorPrimary
    },
    button:{
       alignSelf:'center',
       minWidth:200
    },
    registerlink:{
        marginTop:30,
        alignSelf:'center',
    },
    registertext:{
        color:colorText
    }
   
})