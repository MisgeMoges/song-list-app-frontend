import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import songReducer from "./slices/songListSlice";
import {
  addSongSaga,
  deleteSongSaga,
  editSongSaga,
  songsSaga,
} from "./songListSagas";
import { all } from "redux-saga/effects";

const saga = createSagaMiddleware();

function* rootSaga() {
  yield all([songsSaga(), addSongSaga(), editSongSaga(), deleteSongSaga()]);
}

const store = configureStore({
  reducer: {
    songs: songReducer,
  },
  middleware: [saga],
});

saga.run(rootSaga);

export default store;
