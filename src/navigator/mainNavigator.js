import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen15167217Navigator from '../features/BlankScreen15167217/navigator';
import BlankScreen14167216Navigator from '../features/BlankScreen14167216/navigator';
import Settings167215Navigator from '../features/Settings167215/navigator';
import UserProfile167208Navigator from '../features/UserProfile167208/navigator';
import Settings167207Navigator from '../features/Settings167207/navigator';
import Settings167205Navigator from '../features/Settings167205/navigator';
import SignIn2167203Navigator from '../features/SignIn2167203/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen15167217: { screen: BlankScreen15167217Navigator },
BlankScreen14167216: { screen: BlankScreen14167216Navigator },
Settings167215: { screen: Settings167215Navigator },
UserProfile167208: { screen: UserProfile167208Navigator },
Settings167207: { screen: Settings167207Navigator },
Settings167205: { screen: Settings167205Navigator },
SignIn2167203: { screen: SignIn2167203Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
