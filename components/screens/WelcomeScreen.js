import React, { useState } from "react";
import {View, Text, Alert} from "react-native";

import { Button } from "react-native-paper";

import amp from "~/util/amp";

import { LoggedInContextConsumer } from "~/util/LoggedInContext";

// Components
import ScreenActivity from "~/components/common/ScreenActivity";

// Micro-optimizations, which is probably a bad idea at the moment
const getUser = async () => {

    const user = await amp.GetUser();

    if( user ){
        Alert.alert( null, JSON.stringify( user.username ) );
    } else {
        Alert.alert( null, 'Not logged in' );
    }

};

export default () => {

    const [working, setWorking] = useState( false );

    // Context based log button (in/out)
    const LoggingButton =

        // First, provide consumer
        <LoggedInContextConsumer>

            {/* Fetch logged in context object */}
            { loggedInContext => {

                if( !loggedInContext.isLoggedIn ) {
                    return (
                        <Button
                            mode='contained'
                            onPress={ async () => {
                                setWorking( true );

                                // If login successful
                                if( await amp.Login(
                                    "michael.liu0@gmail.com",
                                    "this is a very long password"
                                ) ){
                                    loggedInContext.setLoggedIn( true );
                                } else {
                                    // TODO Unsuccessful
                                }

                                setWorking( false );
                            }}
                            color='#fff333' style={{borderRadius: 0}}>
                            Login!
                        </Button>
                    )
                } else {
                    return (
                        <Button
                            mode='contained'
                            onPress={ async () => {
                                setWorking( true );

                                // If logout successful
                                if( await amp.Logout() ){
                                    loggedInContext.setLoggedIn( false );
                                } else {
                                    // TODO logout unsuccessful
                                }

                                setWorking( false );
                            }}
                            color='#fff333' style={{ borderRadius: 0 }}>
                            Logout!
                        </Button>
                    )
                }
            }}
        </LoggedInContextConsumer>
    ;

    return(
        <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#33ffa8' }}>

            {
                working ?
                    <ScreenActivity/>
                    :
                    <>
                        <Text>
                            Welcome Screen!
                        </Text>

                        {/* Spacer */}
                        <View style={{ flex: 1 }} />

                        {/* Buttons on the bottom */}
                        <View style={{ alignSelf: 'stretch' }}>
                            {LoggingButton}
                            <Button mode='contained' onPress={ getUser } color='#fff333' style={{ borderRadius: 0 }}>
                                Press me!
                            </Button>
                        </View>

                        <View style={{ height: 25 }} />
                    </>
            }



        </View>
    )

}