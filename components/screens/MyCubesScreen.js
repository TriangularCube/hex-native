import React from "react";
import {View, Text, StatusBar, Button, Alert} from "react-native";

import amp from "~/util/amp";

export default () => {

    return(
        <View style={{ alignItems: 'center' }}>
            <Text>
                This is the cube screen!
            </Text>
            <View>
                <Button
                    onPress={ () => amp.Get( 'user/bluntweapon' ) }
                    title='Press me!'
                />
            </View>
        </View>
    )

}