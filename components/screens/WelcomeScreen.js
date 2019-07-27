import React from 'react';
import {View, Text, StatusBar, Button, Alert} from 'react-native';

import Auth from '@aws-amplify/auth';

export default () => {

    const getUser = async () => {
        try{
            const user = await Auth.currentAuthenticatedUser();
            Alert.alert( null, user );
        } catch( e ){
            Alert.alert( null, 'Not logged in' );
        }
    };

    return(
        <View style={{ alignItems: 'center' }}>
            <Text>
                Welcome Screen!
            </Text>
            <View>
                <Button
                    onPress={ getUser }
                    title='Press me!'
                />
            </View>
        </View>
    )

}