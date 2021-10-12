import React,{Component} from 'react'
import { TextPropTypes } from 'react-native'
import { ImageBackgroundComponent } from 'react-native'
import { View,Text, StyleSheet } from 'react-native'
import {Input} from 'react-native-elements'
const CustomInput=props=>(

<Input 

containerStyle={[styles.input,props.style]}
inputContainerStyle={{borderBottomWidth:0,height:55}}
placeholder={props.placeholder}
//placeholderTextColor={props.placeholderTextColor}
onChangeText={props.onChangeText}
placeholderTextColor={"gray"}

/>

)
export default CustomInput

const styles=StyleSheet.create({

    input:{        
        
width:"80%",
height:55,
borderWidth:1.5,
borderColor:"black",
fontSize:20,
alignItems:'center',


        
}
})