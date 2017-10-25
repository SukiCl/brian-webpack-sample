import { fork, call, put, take } from 'redux-saga/effects';
import { changeTab, CHANGE_TAB } from '../../../src/actions';
import fetchRequest from '../../../src/helpers/fetchHelper';
import { expect } from 'chai';
import { cloneableGenerator } from 'redux-saga/utils';
import { tabLoadAsync, loadAsync } from '../../../src/sagas/tab';

describe('test the sagas tab', () => {
  it('test the tabLoadAsync', () => {
    const data = {};
    data.gen = cloneableGenerator(tabLoadAsync)();

    expect(data.gen.next().value).to.eql(take(CHANGE_TAB));
    expect(data.gen.next().value).to.eql(call(loadAsync));
  });

  it('test the loadAsync', () => {
    const loadData = {};
    loadData.gen = cloneableGenerator(loadAsync)();

    expect(loadData.gen.next().value).to.eql(
      call(fetchRequest, '/router/title', 'GET')
    );
    expect(loadData.gen.next().value).to.eql(put(changeTab()));
  });
});
