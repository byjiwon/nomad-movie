import React from "react";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { Ionicons } from "@expo/vector-icons";
import TabNavigation from "./navigation/TabNavigation";

export default class App extends React.Component {
  state = {
    loaded: false
  };

  handleError = error => {
    console.log(error);
  };

  handleLoaded = () => this.setState({ loaded: true });

  loadAssets = async () => {
    await Font.loadAsync({
      ...Ionicons.font
    });
  };

  render() {
    const { loaded } = this.state;
    if (loaded) {
      return <TabNavigation />;
    } else {
      return (
        <AppLoading
          startAsync={this.loadAssets}
          onError={this.handleError}
          onFinish={this.handleLoaded}
        />
      );
    }
  }
}
