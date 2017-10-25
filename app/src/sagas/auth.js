import { call, put, take } from 'redux-saga/effects';
import { viewJson, VIEW_BUTTON } from '../actions';
import fetchRequest from '../helpers/fetchHelper';

export function* loadAsync() {
  let result = yield call(fetchRequest, '/router/api', 'GET');
  yield put(viewJson(result));
}

export function* watchLoadAsync() {
  yield take(VIEW_BUTTON);
  yield call(loadAsync);
}
