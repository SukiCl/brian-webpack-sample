import { fork } from 'redux-saga/effects';
import { watchLoadAsync } from './auth';
import { dataLoadAsync } from './data';
import { tabLoadAsync } from './tab';

export default function* rootSaga() {
  yield [fork(watchLoadAsync), fork(dataLoadAsync), fork(tabLoadAsync)];
}
