import React from "react";
import { View, Image } from "react-native";
import { createAppContainer } from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

// Icons
import { Entypo, FontAwesome, MaterialIcons } from "@expo/vector-icons";

// Screens
import Welcome from "~/components/screens/WelcomeScreen";
import MyCubes from "~/components/screens/MyCubesScreen";
import Profile from "~/components/screens/ProfileScreen";

// TODO Dynamic Tabs

// Our top level Navigation container
export default createAppContainer( createMaterialBottomTabNavigator(
    // CANNOT use Async function components here, otherwise it will break Expo
    {
        Welcome: {
            // Which component to render
            screen: Welcome,

            // Nav options
            navigationOptions: {

                // Set the icon
                tabBarIcon: ( opt ) => {
                    return(
                        <View>
                            <Entypo size={20} style={{ color: opt.tintColor }} name='home'/>
                        </View>
                    )
                },
                // TabBarColor only active when Shifting is true, which is by default when tabs >= 3
                tabBarColor: '#558ddd',
                // So have to match color when not shifting
                barStyle: {
                    backgroundColor: "#558ddd"
                }
            }
        },
        MyCubes: {
            screen: MyCubes,
            navigationOptions: {
                tabBarIcon: ( opt ) => {
                    return(
                        <View>
                            <FontAwesome size={20} style={{ color: opt.tintColor }} name='cubes'/>
                        </View>
                    )
                },
                tabBarColor: '#fff333',
                barStyle: {
                    backgroundColor: '#fff333'
                }
            }
        },
        Profile: {
            screen: Profile,
            navigationOptions: {
                tabBarIcon: ( opt ) => {
                    return(
                        <View>
                            <MaterialIcons size={20} style={{ color: opt.tintColor }} name='account-circle'/>
                        </View>
                    )
                },
                tabBarColor: '#c38d9e',
                barStyle: {
                    backgroundColor: '#c38d9e'
                }
            }
        }
    },
    {
        // shifting: true,
        // initialRouteName: 'Welcome',
        lazy: false
    }
));

/*
#daad86
#659dbd
#558ddd
*/