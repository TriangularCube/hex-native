import Auth from '@aws-amplify/auth';

const isLoggedIn = async () => {

    try{

        await Auth.currentAuthenticatedUser();
        
    } catch( e ){

        return false;

    }

};