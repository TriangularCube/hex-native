import React from "react";
import { View, Text, Button, Alert } from "react-native";
import { createStackNavigator } from "react-navigation";

import amp from "~/util/amp";

import { LoggedInContextConsumer } from "~/util/LoggedInContext";


// More Micro-Optimization! Don't do this in the future!
const NotLoggedIn = () => {
    return(
        <View/>
    )
};

const fetchCubes = () => {

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

                // Otherwise, show
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