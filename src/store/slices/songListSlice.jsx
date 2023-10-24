import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  songs: [],
  isLoading: false,
  isError: null,
};

const songListState = createSlice({
  name: "songs",
  initialState,
  reducers: {
    getSongsFetch: (state) => {
      state.isLoading = true;
      state.isError = null;
    },
    getSongsSuccess: (state, action) => {
      state.songs = action.payload;
      state.isLoading = false;
      state.isError = null;
    },
    addSong: (state, action) => {
      state.isLoading = true;
      state.isError = null;
    },
    addSongSuccess: (state, action) => {
      state.songs.push(action.payload);
      state.isLoading = false;
      state.isError = null;
    },
    deleteSong: (state, action) => {
      state.isLoading = true;
      state.isError = null;
    },
    deleteSongSuccess: (state, action) => {
      state.isLoading = false;
      state.isError = null;
    },
    editSong: (state, action) => {
      state.isLoading = true;
      state.isError = null;
    },
    editSongSuccess: (state, action) => {
      state.songs = state.songs.map((song) => {
        if (song.id === action.payload.id) {
          return {
            ...song,
            title: action.payload.title,
          };
        }
       
      });
      
      state.isLoading = false;
      state.isError = null;
    },
    getSongError: (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
    },
  },
});

export const {
  getSongsFetch,
  getSongsSuccess,
  getSongError,
  addSong,
  addSongSuccess,
  editSong,
  editSongSuccess,
  deleteSong,
  deleteSongSuccess,
} = songListState.actions;

export default songListState.reducer;
