import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';

import { List } from 'react-native-paper';

import amp from '~/util/amp';

const Cube =  ({ navigation }) => {

    const [isFetching, setFetching] = useState( true );
    const [cube, setCube] = useState( [] );

    const fetchCube = async () => {
        setFetching( true );
        const cubeID = navigation.getParam( 'cubeID' );

        const result = await amp.Get( `cube/${cubeID}` );

        setCube( result.list );
        setFetching( false );
    };

    useEffect( () => {
        fetchCube();
    }, [] );

    const CardDisplay = ( props ) =>
        <List.Item
            title={props.name}
        />;

    return(
        <FlatList
            data={cube}
            refreshing={ isFetching }
            onRefresh={ fetchCube }
            renderItem={ (item) => {
                const cardName = item.item.name;

                return(
                    <CardDisplay
                        name={cardName}
                    />
                )
            }}
            keyExtractor={ (item, index) => index.toString() }
        />
    )

};

Cube.navigationOptions = ({navigation}) => {
    return {
        title: navigation.getParam( 'cubeName' )
    };
};

export default Cube;