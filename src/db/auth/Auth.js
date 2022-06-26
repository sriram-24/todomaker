import Realm, { User } from "realm";
import getRealmApp from "../config";
import { getUserIDFromStorage } from "./storage";

export let currentUserId = null;

const anonymousLogin = async () =>{
    let user;
    try{
        const app = getRealmApp();
        
        const credentials = Realm.Credentials.anonymous();
        user = await app.logIn(credentials);
        return user;
    }catch(err){
        throw `Error logging in: ${JSON.stringify(err,null,2)}`;
    }
}

const basicAuthentication = async (username,password) =>{
    let user;
    try{
        const app = getRealmApp();
        const credentials = Realm.Credentials.emailPassword(username,password);
        const user = await app.logIn(credentials);
        return user;
    } catch (err){
        throw `Error Logging in ${JSON.stringify(err,null,2)}`;
    }
}

const getCurrentRealmUserId = () =>{
    const app = getRealmApp();
    const currentRealmId = app.currentUser?.id;
    try{

        let localRealmId =  getUserIDFromStorage();
        // console.log(`current user id local : ${localRealmId.then(id => console.log(id))}`);
        // if ( localRealmId !==null ){
        //     if(localRealmId === currentRealmId ){
        //         return localRealmId
        //     }
        //     return null;
        // }
        // else {
        //     return null;
        // }
        return localRealmId.then(id => id)
    }catch(err){
        throw `Error getting current user : ${JSON.stringify(err.message,null,2)}`
    }
} 

const logout = () =>{
    try{
        const app = getRealmApp();
        if(app.currentUser !==null){
           return app.currentUser.logOut().then(res => console.log(res));
        }
        return;
    }catch(err){
        throw `Error Logging out user : ${JSON.stringify(err.message,null,2)}`
    }
}

export {
    anonymousLogin,
    basicAuthentication,
    getCurrentRealmUserId,
    logout
};