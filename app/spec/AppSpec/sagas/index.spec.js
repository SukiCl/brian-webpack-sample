import { fork } from 'redux-saga/effects';
import { watchLoadAsync } from '../../../src/sagas/auth';
import { dataLoadAsync } from '../../../src/sagas/data';
import { tabLoadAsync } from '../../../src/sagas/tab';
import { rootSaga } from '../../../src/sagas/index';
import { cloneableGenerator } from 'redux-saga/utils';
import { expect } from 'chai';

// describe('test the index fork', () => {
//   it('test the async fork', () => {
//     const data = {};
//     data.gen = cloneableGenerator(rootSaga)();
//     expect(data.gen.next().value).to.eql([
//       fork(watchLoadAsync),
//       fork(dataLoadAsync),
//       fork(tabLoadAsync)
//     ]);
//     // expect(data.gen.next().value).to.eql(fork(dataLoadAsync));
//     // expect(data.gen.next().value).to.eql(fork(tabLoadAsync));
//   });
// });
