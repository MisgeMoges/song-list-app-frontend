import { call, put, takeEvery } from "redux-saga/effects";
import {
  addSongSuccess,
  deleteSongSuccess,
  editSongSuccess,
  getSongsSuccess,
} from "./slices/songListSlice";
import axios from "axios";

function* GetSongsFetch() {
  const songs = yield call(() => fetch("http://localhost:5000/api/v1/songs"));
  const response = yield songs.json();
  yield put(getSongsSuccess(response));
}

function* AddSong(action) {
  try {
    const response = yield call(() =>
      axios.post("http://localhost:5000/api/v1/songs", action.payload)
    );
    const newSong = response.data; 
    yield put(addSongSuccess(newSong));
    console.log(newSong);
  } catch (error) {
    console.log(error);
  }
}

function* DeleteSong(action) {
  try {
    yield call(() =>
      axios.delete(`http://localhost:5000/api/v1/songs/${action.payload}`)
    );
    yield put(deleteSongSuccess());
  } catch (error) {
    console.log(error);
  }
}

function* EditSong(action) {
  try {
    const response = yield call(() => {
      return axios.patch(
        `http://localhost:5000/api/v1/songs/${action.payload.id}`,
        action.payload
      );
    });
    yield put(editSongSuccess(response.data));
  } catch (error) {
    console.log(error);
  }
}

function* songsSaga() {
  yield takeEvery("songs/getSongsFetch", GetSongsFetch);
}

function* addSongSaga() {
  yield takeEvery("songs/addSong", AddSong);
}

function* editSongSaga() {
  yield takeEvery("songs/editSong", EditSong);
}
function* deleteSongSaga() {
  yield takeEvery("songs/deleteSong", DeleteSong);
}

export { songsSaga, addSongSaga, editSongSaga, deleteSongSaga };
