import { fork, call, put, take } from 'redux-saga/effects';
import { viewTable, VIEW_DATA } from '../actions';
import fetchRequest from '../helpers/fetchHelper';

export function* loadAsync() {
  let result = yield call(fetchRequest, '/router/data', 'GET');
  yield put(viewTable(result));
}

export function* dataLoadAsync() {
  yield take(VIEW_DATA);
  yield call(loadAsync);
}
