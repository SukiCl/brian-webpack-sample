import { fork, call, put, take } from 'redux-saga/effects';
import { changeTab, CHANGE_TAB } from '../actions';
import fetchRequest from '../helpers/fetchHelper';

export function* loadAsync() {
  let result = yield call(fetchRequest, '/router/title', 'GET');
  yield put(changeTab(result));
}

export function* tabLoadAsync() {
  yield take(CHANGE_TAB);
  yield call(loadAsync);
}
