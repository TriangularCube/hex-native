import React from 'react';
import {View, Text, StatusBar, Button, Alert} from 'react-native';

export default function Welcome(){

    return(
        <View style={{ alignItems: 'center' }}>
            <Text>
                Welcome Screen!
            </Text>
            <View>
                <Button
                    onPress={ () => {
                        Alert.alert( null, StatusBar.currentHeight.toString() );
                    }}
                    title='Press me!'
                />
            </View>
        </View>
    )

}