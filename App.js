import React from 'react';
import { View, StatusBar, Platform } from 'react-native';
import { SafeAreaView } from "react-navigation";

// Paper UI
import { Provider as PaperProvider } from 'react-native-paper';

// Navigator
import Navigator from "~/components/Navigator";


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
    )
}