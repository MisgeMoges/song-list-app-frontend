import axios from "axios";

axios.defaults.baseURL = "https://song-list-b8xl.onrender.com";

export const getSongsAPI = async () => axios.get("/api/v1/songs");

export const getSongByIdAPI = async (id) => axios.get(`/api/v1/songs/${id}`);

export const createSongAPI = async (song) => axios.post(`/api/v1/songs`, song);

export const updateSongAPI = async (song) =>
  axios.put(`/api/v1/songs/${song.id}`, song);

export const deleteSongByIdAPI = async (id) => axios.delete(`/api/v1/songs/${id}`);
