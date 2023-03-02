import { call, takeLatest, put, take, takeEvery } from "redux-saga/effects";
import {
  exportDataFail,
  exportDataSuc,
  loadChangeLanFail,
  loadChangeLanSuc,
  loadFileFail,
  loadFileSuc,
} from "../actions";
import { changeLan, fileDownlod, fileUpload } from "../api";

export function* translateText(action) {
  try {
    const response = yield call(changeLan, action.payload);
    // console.log(response.responseData.translatedText);
    yield put(loadChangeLanSuc(response));
  } catch (error) {
    console.log(error);
    yield put(loadChangeLanFail({ error: error.message }));
  }
}
export function* loadFileHandle(action) {
  try {
    const response = yield call(fileUpload, action.payload);
    // console.log(response.responseData.translatedText);
    yield put(loadFileSuc(response.data));
  } catch (error) {
    yield put(loadFileFail({ error: error.message }));
  }
}
export function* exportFile(action) {
  try {
    console.log(action.payload);
    const response = yield call(fileDownlod, action.payload);

    // console.log(response.responseData.translatedText);
    yield put(exportDataSuc({ response: response }));
  } catch (error) {
    yield put(exportDataFail({ error: error.message }));
  }
}

function* rootSaga() {
  yield takeLatest("LOAD", translateText);
  yield takeEvery("LOAD_FILE", loadFileHandle);
  yield takeEvery("EXPORT_DATA", exportFile);
}
export default rootSaga;
