import React, { useEffect, useState } from 'react';
import { View, StatusBar, Platform, AsyncStorage, StyleSheet } from 'react-native';
import { SafeAreaView } from "react-navigation";

// Paper UI
import {ActivityIndicator, Provider as PaperProvider} from 'react-native-paper';

// Navigator
import Navigator from '~/components/Navigator';

// Amplify config
import { configure, targetName, DEV } from '~/util/amplify-config';

// TODO Styling

export default () => {

    const [ampConfigured, setAmpConfigured] = useState( false );

    useEffect( () => {
        // Note: CANNOT USE ASYNC and AWAIT with AsyncStorage on Expo, or it will break
        AsyncStorage.getItem( targetName ).then( (res) => {

            // Fetch target name, and if Null use DEV
            const target = res === null ? DEV : res;

            // Configure Amplify
            configure( target );

            setAmpConfigured( true );

        }).catch((err) => {
            console.log( err );
        });
    }, [] );

    let display;
    if( ampConfigured ){
        // The top level navigation container
        display = <Navigator/>;
    } else {
        // Just an empty page with an activity indicator
        display = <ActivityIndicator/>;
    }

    return(
        // Paper's Theme provider TODO use actual themes
        <PaperProvider>

            {/* SAV only works for iPhone, so we're adding an additional padding on top for Android */}
            <SafeAreaView
                style={{
                    backgroundColor: '#558ddd',
                    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
                    flex: 1
                }}
            >

                {/* An extra view to saturate the rest of the screen */}
                <View style={{ flex: 1, backgroundColor:'#ff8737' }}>

                    {display}

                </View>
            </SafeAreaView>
        </PaperProvider>
    );
}