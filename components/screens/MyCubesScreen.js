// React
import React, { useState, useEffect } from "react";
import { View, Text, Button, Alert } from "react-native";
import { createStackNavigator } from "react-navigation";

// Utilities
import amp from "~/util/amp";
import { LoggedInContextConsumer } from "~/util/LoggedInContext";

// Paper components
import {Title} from "react-native-paper";

// Custom components
import ScreenActivity from "../common/ScreenActivity";


// More Micro-Optimization! Don't do this in the future!
const NotLoggedIn = () => {
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ maxWidth: 200 }}>
                <Title style={{ textAlign: 'center' }}>
                    You are not logged in. Please login from the Profiles page.
                </Title>
            </View>
        </View>
    )
};

const LoggedIn = () => {
    const [cubeList, setCubeList] = useState( null );

    const fetchCubes = async () => {

        let res = await amp.Get( 'myCubes' );
        console.log( res );
        setCubeList( {} );

    };

    useEffect(  () => {
        fetchCubes();
    }, [] );

    // If we have not yet fetched the cube list
    if( cubeList === null ){
        return (
            <ScreenActivity text='Fetching Cube' />
        )
    }

    // Else render the list
    return (
        <View style={{ alignItems: 'center' }}>
            <Text>
                This is the cube screen!
            </Text>
            <View>
                <Button
                    onPress={ async () => {
                        const res = await amp.Get( 'cubes' );
                        console.log( res );
                        Alert.alert( 'Result for cubes', JSON.stringify( res ) );
                    }}

                    title='Press me!'
                />
            </View>
        </View>
    )
};

const CubeScreen = () => {

    return(
        // Get the context
        <LoggedInContextConsumer>
            { loggedInContext => {

                // If the user is not logged in, show the not logged in screen
                if( !loggedInContext.isLoggedIn ){
                    return (
                        <NotLoggedIn/>
                    )
                }

                // Else
                return (
                    <LoggedIn/>
                )

            }}
        </LoggedInContextConsumer>
    )

};

export default createStackNavigator(
    {
        CubeList: {
            screen: CubeScreen,
            navigationOptions: {
                title: 'My Cubes'
            }
        }
    }
);