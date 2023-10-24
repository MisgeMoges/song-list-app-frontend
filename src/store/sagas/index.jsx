import { all } from "redux-saga/effects";
import { watchSongsAsync } from "./songListSagas";

export function* rootSaga() {
  yield all([watchSongsAsync()]);
}
