import axios from "axios";

import { API_KEY } from "../config/apiConfig";
import { BASE_URL } from "../config/apiConfig";

const api = axios.create({
  baseURL: BASE_URL,
});

export const getMovies = async (category) => {
  try {
    const response = await api.get(`/movie/${category}?api_key=${API_KEY}`);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
};

export const getTVShows = async (category) => {
  try {
    const response = await api.get(`/tv/${category}?api_key=${API_KEY}`);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching tv shows:", error);
    return [];
  }
};

export const searchContents = async (category, query) => {
  try {
    const response = await api.get(
      `/search/${category}?api_key=${API_KEY}&query=${query}`
    );
    return response.data.results;
  } catch (error) {
    console.error("Error searching contents:", error);
    return [];
  }
};
