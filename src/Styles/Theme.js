import React from "react";
import { StyleSheet } from "react-native";
import { Dimensions, Platform, PixelRatio } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';


export const colorSecondary = "#8fa8cc";
export const colorPrimary = "#306bdd";
export const colorBackground = "#f1f5fb";
export const colorText = "#324672"
export const colorTextInverse = "#fff"
export const defaultFontSize=16;


export const statusColorOne ="#1ab0b0"
export const statusColorTwo ="#ff7443"
export const statusColorThree ="#fa5a7d"
export const statusColorFour = "#8676fe"

const {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
} = Dimensions.get('window');


const scale = SCREEN_WIDTH / 320;

export function normalize(size) {
  const newSize = size * scale 
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize))
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
  }
}
export const fontSize = normalize(defaultFontSize)

export const style = StyleSheet.create({
    iconButton:{
        backgroundColor:"#fff",
        padding:10,
        borderRadius:10
    },
    title:{
      fontSize: normalize(18),
      fontWeight:"600",
      textAlign:"center"
    }
})

export const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#306bdd',
  },
};