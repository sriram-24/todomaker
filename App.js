/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React,{useEffect, useState} from 'react';

 import {
   SafeAreaView, Text, View,
 } from 'react-native';
 import Loader from './src/Components/Loader';
 import Navigation from './src/Components/Navigation';
 import { getCurrentRealmUserId } from './src/db/auth/Auth';
 import { LogBox } from 'react-native';
 import Login from './src/Components/Login';
 import { theme } from './src/Styles/Theme';
 
 
 LogBox.ignoreLogs([
   'Non-serializable values were found in the navigation state',
 ]);
 
 
 
 const App = () => {
   const [isLoading, setLoading] = useState(false);
   const [isLoggedIn,setLoginState] = useState(false)
   const [registerUser, setRegisterUser] = useState(false);
 
   useEffect(()=>{
     setLoading(true);
     let currentuser = getCurrentRealmUserId();
    
     if (currentuser === null){
       console.log(currentuser);
       setLoading(false)
       setRegisterUser(true)
     }
     else{
       console.log(currentuser);
       setLoading(false)
       setRegisterUser(false)
       setLoginState(true)
     }
     
   },[])
 
 
   return  isLoading ? <Loader isLoading ={isLoading} /> :
         isLoggedIn ? <Navigation setLoginState={setLoginState} /> :
         <Login setLoader={setLoading} setLoginState ={setLoginState} />  
 
 }
 export default App;
 