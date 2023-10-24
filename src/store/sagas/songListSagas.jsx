import {
  getSongsAPI,
  getSongByIdAPI,
  createSongAPI,
  updateSongAPI,
  deleteSongByIdAPI,
} from "../../api/index";
import { setSongSlice } from "../slices/songSlice";
import {
  addSongSlice,
  deleteSongSlice,
  editSongSlice,
  getSongsSlice,
} from "../slices/songListSlice";
// import {
//   CREATE_USER,
//   DELETE_USER_BY_ID,
//   GET_USERS,
//   GET_USER_BY_ID,
//   UPDATE_USER_BY_ID,
// } from "../types";
import { put, takeEvery } from "redux-saga/effects";
export function* getSongsSaga() {
  const songs = yield getSongsAPI();
  yield put(getSongsSlice(songs.data));
}

export function* getSongByIdSaga(action) {
  yield getSongByIdAPI(action.id);
  yield put(setSongSlice(action.id));
}
export function* createSongSaga(action) {
  yield createSongAPI(action.song);
  yield put(addSongSlice(action.song));
}

export function* updateSongSaga(action) {
  yield updateSongAPI(action.song);
  yield put(editSongSlice(action.song));
}

export function* deleteSongByIdSaga(action) {
  yield deleteSongByIdAPI(action.id);
  yield put(deleteSongSlice(action.id));
}

export function* watchSongsAsync() {
  yield takeEvery('songs/getSongsSlice', getSongsSaga);
//   yield takeEvery(GET_USER_BY_ID, getSongByIdSaga);
  yield takeEvery('songs/addSongSlice', createSongSaga);
  yield takeEvery('songs/editSongSlice', updateSongSaga);
  yield takeEvery('songs/deleteSongSlice', deleteSongByIdSaga);
}
