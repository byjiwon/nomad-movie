import React from "react";
import MoviesPresenter from "./MoviesPresenter";
import { movieApi } from "../../api";

export default class MoviesContainer extends React.Component {
  state = {
    loading: true,
    upcoming: null,
    popular: null,
    nowPlaying: null
  };

  async componentDidMount() {
    let upcoming, popular, nowPlaying;
    try {
      ({
        data: { results: upcoming }
      } = await movieApi.getUpcoming());
      ({
        data: { results: popular }
      } = await movieApi.getPopular());
      ({
        data: { results: nowPlaying }
      } = await movieApi.getNowPlaying());
      this.setState({
        upcoming,
        popular,
        nowPlaying
      });
    } catch (error) {
      console.log(error);
      this.setState({ error: "can't get movies." });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { loading, upcoming, popular, nowPlaying } = this.state;
    return <MoviesPresenter loading={loading} />;
  }
}
