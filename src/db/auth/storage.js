import AsyncStorage from "@react-native-async-storage/async-storage"

export const USERID = '@UserID'

const getUserIDFromStorage = async() => {
    try{

        const localUserId = await AsyncStorage.getItem(USERID);
        return localUserId;

    }catch(err){

        throw `Async get storage error : ${err}`

    }
}

const putUserIdToStorage = async (realmUserId) =>{
 try{
   await AsyncStorage.setItem(USERID,realmUserId).then(res => {console.log(res);}).catch(err => console.log(err));
    return true
 }
 catch(err){
    console.log(`Async put storage error : ${err}`);
    return false
 }
}

const removeUserIdFromStorage = async () =>{
    try{
        const id = await AsyncStorage.removeItem(USERID);
        return true
     }
     catch(err){
        console.log(`Asunc storage error : ${err}`);
        return false
     }
}
export {
    getUserIDFromStorage,
    putUserIdToStorage,
    removeUserIdFromStorage
};