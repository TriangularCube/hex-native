import React from "react";
import { View, Image, Dimensions } from "react-native";

import { createStackNavigator } from "react-navigation";

import {Text, Button} from "react-native-paper";

import { LoggedInContextConsumer } from "../../util/LoggedInContext";

const Profile = () => {

    // This is the section that deals with accounts at the top of the screen
    const AccountSection = (
        <>
            <Image
                source={require( '~/assets/background.jpg')}
                style={{
                    width: Dimensions.get('window').width,
                    height: 250
                }}
                fadeDuration={0}
            />
            <LoggedInContextConsumer>
                { context => {
                    // If we're actually logged in
                    return context.isLoggedIn ?
                        <>
                            <Text style={{ position: 'relative', alignSelf: 'center', bottom: 100, color: 'white' }}>
                                You are logged in
                            </Text>
                            <Button
                                mode='contained'
                                onPress={ async () => {
                                    // If logout successful
                                    // if( await amp.Logout() ){
                                    //     loggedInContext.setLoggedIn( false );
                                    // } else {
                                    //     // TODO logout unsuccessful
                                    // }
                                }}
                                color='#ffffff'
                                style={{ borderRadius: 0, position: 'relative', bottom: 70 }}>
                                Logout!
                            </Button>
                        </>
                    :
                        <Text style={{ position: 'relative', alignSelf: 'center', bottom: 100, color: 'white' }}>
                            You are NOT logged in
                        </Text>
                    ;
                }}
            </LoggedInContextConsumer>
        </>
    );

    return(
        <>

             {AccountSection}

        </>
    )
};

// Kill the header as we're using a custom top area
Profile.navigationOptions = {
    header: null
};

export default createStackNavigator(
    {
        Settings: {
            screen: Profile
        }
    }
);