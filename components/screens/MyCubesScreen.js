// React
import React, { useState, useEffect } from "react";
import { View, Text, Button, Alert, FlatList } from "react-native";
import { createStackNavigator, withNavigation } from "react-navigation";

// Utilities
import amp from "~/util/amp";
import { LoggedInContextConsumer } from "~/util/LoggedInContext";

// Paper components
import {Title, List} from "react-native-paper";

// Custom components
import ScreenActivity from "../common/ScreenActivity";
import Cube from "./CubeScreen";


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
        setCubeList( res.cubes );

    };

    useEffect(() => {
        fetchCubes();
    }, [] );

    // If we have not yet fetched the cube list
    if( cubeList === null ){
        return (
            <ScreenActivity text='Fetching Cube' />
        )
    }

    if( cubeList.length === 0 ){
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>
                    You have no cubes
                </Text>
            </View>
        )
    }

    const ListItem =  withNavigation( (props) =>
        <List.Item
            title={props.cubeName}
            description={`This is cube id ${props.cubeID}`}
            onPress={ () => {
                props.navigation.push('CubeScreen', { cubeName: props.cubeName, cubeID: props.cubeID });
            }}
        />
    );

    // Else render the list
    return (
        <FlatList
            data={cubeList}
            renderItem={ ( item ) => {
                const cubeName = item.item[0];
                const cubeID = item.item[1];
                return(
                   <ListItem cubeName={cubeName} cubeID={cubeID}/>
                )
            }}
            // HACK
            keyExtractor={ ( item, index ) => index.toString() }
        />

        /*<View style={{ alignItems: 'center' }}>
            <Text>
                This is the cube screen!
            </Text>
            <View>
                <Button
                    onPress={ async () => {
                        Alert.alert( 'Result for cubes', JSON.stringify( cubeList ) );
                    }}

                    title='Press me!'
                />
            </View>
        </View>*/
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
        },
        CubeScreen: {
            screen: Cube
        }
    }
);