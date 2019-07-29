import React from "react";
import { View } from "react-native";
import { ActivityIndicator } from "react-native-paper";


export default () => {
    return(
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <ActivityIndicator size='large'/>
        </View>
    )
}