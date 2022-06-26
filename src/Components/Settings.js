import React from 'react'
import { Button, Text, View } from 'react-native'
import { logout } from '../db/auth/Auth'
import { removeUserIdFromStorage } from '../db/auth/storage'

function Settings({route}) {
  const {onLogout} = route.params
  const handleLogout = () =>{
    logout();
    removeUserIdFromStorage();
    onLogout(true);
  }
  return (
    <View>
        <Button title='Logout' onPress={handleLogout} />
    </View>
  )
}

export default Settings