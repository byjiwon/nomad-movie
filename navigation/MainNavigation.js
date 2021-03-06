import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import DetailScreen from "../screens/Detail";
import TabNavigation from "../navigation/TabNavigation";
import { headerStyles } from "./config";

const MainNavigation = createStackNavigator(
  {
    Tabs: { screen: TabNavigation, navigationOptions: { header: null } },
    Detail: {
      screen: DetailScreen,
      navigationOptions: {
        ...headerStyles
      }
    }
  },
  {
    headerMode: "screen",
    headerBackTitleVisible: false
  }
);

export default createAppContainer(MainNavigation);
