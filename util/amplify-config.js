import Auth from "@aws-amplify/auth";
import API from "@aws-amplify/api";

import { AsyncStorage } from "react-native";

const targetName = 'APITarget';

const DEV = 'dev';
const DEV_MASTER = 'dev-master';
const STAGE = 'stage';
const PROD = 'prod';

const API_URL = 'https://api.hexahedron.io/';

const COGNITO_REGION = 'us-west-2';

const DEV_COGNITO_USER_POOL_ID = 'us-west-2_D3OfGsrAN';
const DEV_APP_CLIENT_ID = '7v624acs5o1himo64u4sjo94cm';

// TODO Add client id for Dev-Master
const DEV_MASTER_COGNITO_USER_POOL = 'us-west-2_tE4qGlZB2';
const DEV_MASTER_APP_CLIENT_ID = '';

// TODO Add client id for Stage
const STAGE_COGNITO_USER_POOL = 'us-west-2_At81PVMn4';
const STAGE_APP_CLIENT_ID = '';

// TODO Add prod entries
// const PROD_COGNITO_USER_POOL = '';
// const PROD_APP_CLIENT_ID = '';

const configure = ( stage ) => {

    switch( stage ){

        case DEV:
            configAmplify( stage, DEV_COGNITO_USER_POOL_ID, DEV_APP_CLIENT_ID );
            break;
        case DEV_MASTER:
            configAmplify( stage, DEV_MASTER_COGNITO_USER_POOL, DEV_MASTER_APP_CLIENT_ID );
            break;
        case STAGE:
            configAmplify( stage, STAGE_COGNITO_USER_POOL, STAGE_APP_CLIENT_ID );
            break;

        // TODO Prod Config
    }

};

const configAmplify = ( stage, poolID, appID ) => {

    // If this throws an error it should go back to the invoking code
    AsyncStorage.setItem( targetName, stage ).then( () => {

        // Config Auth
        Auth.configure({
            mandatorySignIn: false,
            region: COGNITO_REGION,
            userPoolId: poolID,
            userPoolWebClientId: appID,

            storage: AsyncStorage
        });

        // Config API
        API.configure({
            API:{
                endpoints:[
                    {
                        name: 'hex',
                        endpoint: API_URL + stage + '/'
                    }
                ]
            }
        });
    });

};

export {

    DEV,
    DEV_MASTER,
    STAGE,
    targetName,
    configure

}