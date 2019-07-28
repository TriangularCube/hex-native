import { createAppContainer, createDrawerNavigator } from "react-navigation";

// Screens
import Welcome from "~/components/screens/WelcomeScreen";

// Navigation Bar
import NavComponent from '~/components/Drawer';

// Our top level Navigation container with a Drawer Navigator
export default createAppContainer( createDrawerNavigator(
    // CANNOT use Async function components here, otherwise it will break Expo
    {
        Welcome: Welcome
    },
    {
        contentComponent: NavComponent
    }
));