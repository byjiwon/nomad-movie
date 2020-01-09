import React from "react";
import TVPresenter from "./TVPresenter";
import { tvApi } from "../../api";

export default class extends React.Component {
  state = {
    loading: true,
    popular: null,
    topRated: null,
    airingToday: null
  };

  async componentDidMount() {
    let popular, topRated, airingToday, error;
    try {
      ({
        data: { result: popular }
      } = await tvApi.getPopular());
      ({
        data: { result: topRated }
      } = await tvApi.getTopRated());
      ({
        data: { result: airingToday }
      } = await tvApi.getAiringToday());
    } catch {
      erro = "Can't get TV";
    } finally {
      this.setState({
        loading: false,
        error,
        popular,
        topRated,
        airingToday
      });
    }
  }

  render() {
    const { loading, popular, topRated, airingToday } = this.state;
    return (
      <TVPresenter
        loading={loading}
        popular={popular}
        topRated={topRated}
        airingToday={airingToday}
      />
    );
  }
}
