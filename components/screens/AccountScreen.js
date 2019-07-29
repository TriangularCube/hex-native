import React, { useState } from "react";
import { View, Image, Dimensions } from "react-native";

import { createStackNavigator } from "react-navigation";

import {Appbar, Text} from "react-native-paper";

const Account = () => {
    return(
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
    )
};

export default createStackNavigator(
    {
        Settings: {
            screen: Account
        }
    },
    {
        defaultNavigationOptions: {
            header: null
        }
    }
);