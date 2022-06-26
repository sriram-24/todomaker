import React, { useState } from 'react'
import {  Text, TouchableOpacity, View } from 'react-native'
import { TextInput, Button } from 'react-native-paper';
import { basicAuthentication } from '../db/auth/Auth';
import { getUserIDFromStorage, putUserIdToStorage } from '../db/auth/storage';
import { auth } from '../Styles/AuthStyles';
import { style } from '../Styles/Theme';
import Loader from './Loader';
import Error from './Error';

function Login({setLoginState}) {
    const [username,setUsername] = useState(null);
    const [password,setPassword] = useState(null);
    const [isLoading,setLoader] = useState(false);
    const [isError,setError] = useState({
      error:false,
      message:null
    });

    const handleAuthentication = () =>{
      
        setLoader(true)
        basicAuthentication(username,password).then(res =>{
          console.log(`ID after auth : ${res.id}`);
        if(putUserIdToStorage(res.id)){
          getUserIDFromStorage().then( res =>{
            console.log(`ID from storage: `+res);
            setLoader(false)
          setLoginState(true)
          }
          )
          
        }
          
        }).catch(err=>{
          setLoader(false)
          console.log(`Error Logging in : ${JSON.stringify(err.message,null,2)}`);
          setError({
            error:true,
            message:`An Unexpected error has occured. please contact administratior. \n trace:${JSON.stringify(err.message,null,2)}`
          });
        })
        
    }
  return (

    <View style={auth.container}>
      <Loader isLoading={isLoading} />
      <Error isError={isError.error} errorMessage={isError.message} /> 
        <Text style = {[style.title,auth.logintitle]}>Welcome to Todo Maker</Text>
        <View>
            <TextInput style={auth.input} label='Email'  onChangeText={setUsername} value={username} />
            <TextInput style={auth.input}  label='Password' secureTextEntry={true}  onChangeText={setPassword} value={password} />
            <Button style={auth.button} mode="contained" onPress={handleAuthentication}>
              Login
            </Button>
        </View>
        <View>
          <TouchableOpacity style ={auth.registerlink}>
          <Text style={auth.registertext}>New user? Click here to register</Text>
          </TouchableOpacity>
        </View>
    </View>
  )
}

export default Login