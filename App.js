import React, { useEffect } from 'react';
import { View, StatusBar, Platform, AsyncStorage } from 'react-native';
import { SafeAreaView } from "react-navigation";

// Paper UI
import { Provider as PaperProvider } from 'react-native-paper';

// Navigator
import Navigator from '~/components/Navigator';

// Amplify config
import { configure, targetName, DEV } from '~/util/amplify-config';

AsyncStorage.getItem( targetName ).then( async (res) => {
    console.log( res );
    await configure( DEV );
}).catch( (err) => {
    console.log( err );
});

export default () => {


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

                    {/* The top level navigation container */}
                    <Navigator/>
                </View>
            </SafeAreaView>
        </PaperProvider>
    );
}