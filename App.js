import React from 'react';
import { StyleSheet, View, SafeAreaView, StatusBar, Platform } from 'react-native';
import {Appbar, Text, Provider as PaperProvider} from 'react-native-paper';
import {createAppContainer, createBottomTabNavigator} from "react-navigation";
import WindowGuard from "react-native-window-guard";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        // justifyContent: 'center'
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    },
});

function Screen1() {
    return (
        <View style={styles.container}>
            <Text>{Platform.OS}</Text>
        </View>
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
    User: {
        screen: Screen2
    }
});

const Container = createAppContainer( bottomNavigator );

export default class App extends React.Component{
    componentDidMount() {
        WindowGuard.requestWindowInsets();
    }

    render(){
        return(
            <>
                <PaperProvider>
                    <WindowGuard applyInsets={WindowGuard.all}>
                        <Container />
                    </WindowGuard>
                </PaperProvider>
            </>
        );
    }
}