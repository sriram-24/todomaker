import { anonymousLogin } from "./auth/Auth";
import { Todo } from "./model/Todo";
import Realm from "realm";

const openRealm = async() =>{
    let user;
    let realm;
    

    try{
        user = anonymousLogin();
        console.log(`Logged in with user : ${(await user).isLoggedIn}`);
        const config = {
            schema : [Todo.schema],
            sync:{
                user: (await user),
                partitionValue:(await (await user).id).toString()

            },
        };
        return await Realm.open(config) 
    } catch(err){
        throw `Error opening realm : ${JSON.stringify(err.message,null,2)}`
    }
}

export default openRealm;