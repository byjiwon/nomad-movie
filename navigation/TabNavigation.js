import React from "react";
import { Platform } from "react-native";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer } from "react-navigation";
import MovieScreen from "../screens/Movies";
import SearchScreen from "../screens/Search";
import TVScreen from "../screens/TV";
import { BG_COLOR } from "../constants/Color";
import TabBarIcon from "../comonents/TabBarIcons";

const TabNavigation = createBottomTabNavigator(
  {
    Movie: {
      screen: MovieScreen,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <TabBarIcon
            focused={focused}
            name={Platform.OS === "ios" ? "ios-film" : "md-film"}
          />
        )
      }
    },
    TV: {
      screen: TVScreen,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <TabBarIcon
            focused={focused}
            name={Platform.OS === "ios" ? "ios-tv" : "md-tv"}
          />
        )
      }
    },
    Search: {
      screen: SearchScreen,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <TabBarIcon
            focused={focused}
            name={Platform.OS === "ios" ? "ios-search" : "md-search"}
          />
        )
      }
    }
  },
  {
    tabBarOptions: {
      showLabel: true,
      style: {
        backgroundColor: BG_COLOR
      }
    }
  }
);

export default createAppContainer(TabNavigation);
