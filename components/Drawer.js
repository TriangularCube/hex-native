import * as React from 'react';
import {StyleSheet, View} from 'react-native';

// React Paper
import {withTheme, Text, Drawer} from 'react-native-paper';

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1
    }
});

const DrawerComponent = ( props ) => {

    return(
        <View>
            <Text>
                This is a Nav Drawer!
            </Text>
        </View>
    );

};

export default withTheme( DrawerComponent );