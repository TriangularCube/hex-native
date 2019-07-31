import React from "react";
import { View } from "react-native";
import {ActivityIndicator, Title} from "react-native-paper";


export default ( { text } ) => {
    return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            { text &&
                <>
                    <Title>
                        {text}
                    </Title>
                    <View style={{ height: 10 }} />
                </>
            }
            <ActivityIndicator size='large'/>
        </View>
    )
}