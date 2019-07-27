import { createAppContainer, createDrawerNavigator } from "react-navigation";

// Screens
import Welcome from "~/components/screens/WelcomeScreen";

// Our top level Navigation container with a Drawer Navigator
export default createAppContainer( createDrawerNavigator({
    Welcome: Welcome
}));