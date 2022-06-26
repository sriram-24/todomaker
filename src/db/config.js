import Realm from "realm";

const getRealmApp = () => {
    const appID = ''; // your realm app id
    const appConfig = {
        id:appID,
        timeout:10000
    }
    return new Realm.App(appConfig)
}

export default getRealmApp;