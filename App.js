import React from 'react';
import { StyleSheet, View, StatusBar, Platform } from 'react-native';
import {Appbar, Text, Provider as PaperProvider} from 'react-native-paper';
import {createAppContainer, createBottomTabNavigator, SafeAreaView} from "react-navigation";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ff00ff',
        alignItems: 'center',
        // justifyContent: 'center'
        // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    },
});

function Screen1() {
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#ff00ff'}}  forceInset={{ top: 'always'}}>
            <View style={styles.container}>
                <Text>{Platform.OS}</Text>
            </View>
        </SafeAreaView>
    );
}

function Screen2(){
    return(
        <View style={styles.container}>
            <Text>Test</Text>
        </View>
    )
}

const bottomNavigator = createBottomTabNavigator({
    Home: {
        screen: Screen1
    },
    Cubes: {
        screen: Screen2
    },
    Search: {
        screen: Screen2
    }
});

const Container = createAppContainer( bottomNavigator );

export default class App extends React.Component{
    render(){
        return(
            <PaperProvider>
                <Container />
            </PaperProvider>
        );
    }
}