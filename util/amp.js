import Auth from "@aws-amplify/auth";
import API from "@aws-amplify/api";

import { Alert } from "react-native";

const GetUser = async () => {

    try{

        // Fetch the current user from Auth
        return await Auth.currentAuthenticatedUser();
        
    } catch( e ){

        // Return undefined if not logged in
        return undefined;

    }

};

const Get = async ( path ) => {

    // Get the user auth token
    const user = await GetUser();
    const token = user ? user.getSignInUserSession().getIdToken().getJwtToken() : 'none';


    try{

        const res = await API.get( 'hex', path, {
            headers: {
                Authorization: token
            }
        });

        return res;

    } catch( e ){
        return 'ERROR';
    }
    
};

const Login = async ( name, pwd ) => {

    try{

        await Auth.signIn( name, pwd );

        return true;

    } catch( e ){

        return e;

    }

};

const Logout = async () => {

    try{
        await Auth.signOut();
        return true;
    } catch( e ){
        return false;
    }

};

export default {
    GetUser,
    Get,
    Login,
    Logout
}