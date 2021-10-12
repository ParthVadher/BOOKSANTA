import React,{Component} from 'react'
import { View,Text, Alert,TouchableOpacity,StyleSheet } from 'react-native'
import CustomInput from '../Components/CustomInput'
import db from '../config'
import firebase from 'firebase'
import { Touchable } from 'react-native'
export default class Login extends Component{

constructor(){

    super()

    this.state={
        email:'',
        password:''
    }

}

login=(email,password)=>{

    firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
return(
        Alert.alert("Logged In Succesfully")
) 
    }).catch((error)=>{
        var errorCode =error.code ;
        var errorMessage= error.message;
        return(
            Alert.alert(errorMessage)
            )
       })
}

signUp=(email,password)=>{
    firebase.auth().createUserWithEmailAndPassword(email,password).then(()=>{
        return(
                Alert.alert("User Added succesfully")
        ) 
            }).catch((error)=>{
                var errorCode = error.code ;
                var errorMessage= error.message;
                return(
                    Alert.alert(errorMessage)
                    )
               })
        }


    render(){
        
        var {email,password}=this.state;
        return(
            <View>
                <View>
                    <Text>Book Santa</Text>
                </View>
                <View>
                    <CustomInput 
                    placeholder={"abc@example.com"} 
                    keyboardType={"email-address"} 
                    onChangeText={inputtedWord=>{this.setState=({email:inputtedWord})}}/>
                   
                   <CustomInput 
                    placeholder={"enter password"} 
                    secureTextEntry={true}
                    onChangeText={inputtedWord=>{this.setState=({password:inputtedWord})}}/>

                    
                </View>

                <View>

                <TouchableOpacity onPress={()=>this.login(email,password)}><Text>Log In</Text></TouchableOpacity>
                <TouchableOpacity onPress={()=>this.signUp(email,password)}><Text>Sign Up</Text></TouchableOpacity>
                </View>
            </View>
        )}
   
}
