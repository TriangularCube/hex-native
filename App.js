import React, { useEffect, useState } from "react";
import { View, StatusBar, Platform, AsyncStorage, StyleSheet } from "react-native";
import { SafeAreaView } from "react-navigation";

// Paper UI
import { Provider as PaperProvider } from "react-native-paper";

// Navigator
import Navigator from "~/components/Navigator";

// Amplify config
import { configure, targetName, DEV } from "~/util/amplify-config";
import amp from "~/util/amp";

// Logged In Context
import { LoggedInContextProvider } from "./util/LoggedInContext";

// Components
import ScreenActivity from "./components/common/ScreenActivity";

// TODO Styling

export default () => {

    // Is AWS Amplify finished configuring?
    const [ampConfigured, setAmpConfigured] = useState( false );

    // Is the user logged in? This is passed into context and is used to re-render based on login status
    const [isLoggedIn, setLoggedIn] = useState( false );

    // fire off an effect to configure Amplify and figure out if user is logged in
    useEffect( () => {

        // Note: CANNOT USE ASYNC and AWAIT with AsyncStorage on Expo, or it will break
        AsyncStorage.getItem( targetName ).then( async (res) => {

            // Fetch target name, and if Null use DEV
            const target = res === null ? DEV : res;

            // Configure Amplify
            configure( target );

            // See if the user is logged in already, and set logged in state
            if( await amp.GetUser() ){
                setLoggedIn( true );
            } else {
                setLoggedIn( false );
            }

            setAmpConfigured( true );

        }).catch((err) => {
            Alert.alert( 'ERROR', 'AsyncStorage GetItem threw an error: ' + err.message );
        });

    }, [] );

    let display;
    if( ampConfigured ){
        // The top level navigation container
        display = <Navigator/>;
    } else {
        // Just an empty page with an activity indicator
        display = <ScreenActivity/>
    }

    return(
        // Paper's Theme provider TODO use actual themes
        <PaperProvider>

            {/* SAV only works for iPhone, so we're adding an additional padding on top for Android */}
            <SafeAreaView
                style={{
                    backgroundColor: '#558ddd',
                    // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
                    flex: 1
                }}
            >

                {/* An extra view to saturate the rest of the screen */}
                <View style={{ flex: 1 }}>
                    <LoggedInContextProvider value={{ isLoggedIn, setLoggedIn }}>
                        {display}
                    </LoggedInContextProvider>
                </View>
            </SafeAreaView>
        </PaperProvider>
    );
}