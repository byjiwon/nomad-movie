import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "dfb9fe2b4320bd0c626c3384ee62781a",
    language: "en-US"
  }
});

export const movieApi = {
  getNowPlaying: () => api.get("movie/now_playing"),
  getUpcoming: () => api.get("movie/upcoming"),
  getPopular: () => api.get("movie/popular"),
  getMovieDetail: id =>
    api.get(`movie/${id}`, {
      params: {
        append_to_response: "videos"
      }
    }),
  getSearch: term =>
    api.get("search/tv", {
      params: {
        query: encodeURIComponent(term)
      }
    })
};

export const tvApi = {
  getAiringThisWeek: () => api.get("tv/on_the_air"),
  getPopular: () => api.get("tv/popular"),
  getAiringToday: () => api.get("tv/airing_today"),
  getShowDetail: id =>
    api.get(`tv/${id}`, {
      params: {
        append_to_response: "videos"
      }
    }),
  getSearch: term =>
    api.get("search/tv", {
      params: {
        query: encodeURIComponent(term)
      }
    })
};
