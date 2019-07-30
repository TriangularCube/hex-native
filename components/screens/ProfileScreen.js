import React, { useState } from "react";
import { View, Image, Dimensions } from "react-native";

import { createStackNavigator } from "react-navigation";

import {Appbar, Text} from "react-native-paper";

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
            />
            <Text style={{ position: 'absolute', alignSelf: 'center', top: 100, color: 'white' }}>
                Some Text
            </Text>
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