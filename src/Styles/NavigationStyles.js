import React from "react"
import { StyleSheet } from "react-native"
import { colorBackground, colorPrimary, colorSecondary } from "./Theme"
import { DefaultTheme } from '@react-navigation/native'

export const nav = StyleSheet.create({
    bottomLine:{
        
        marginTop:5,
        marginLeft:5,
        marginRight:5,
    },
    borderPrimary:{
        borderWidth: 1,
        borderRadius:50,
        borderColor:colorPrimary,
    },
    borderSecondary:{
        borderWidth: 1,
        borderRadius:50,
        borderColor:colorSecondary
    },
    bar:{
        
        borderTop:1,
        borderTopColor: colorSecondary,
        
        shadowColor:"#fff",
        height:70
    },
    newTask:{
        backgroundColor:colorPrimary,
        borderRadius:50,
        marginTop:-5,
        padding:10,
        color:"#fff",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    }
})

export const NavigationTheme =  {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background:colorBackground
    },
  };