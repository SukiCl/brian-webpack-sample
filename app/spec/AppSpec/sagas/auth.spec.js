import { watchLoadAsync, loadAsync } from '../../../src/sagas/auth';
import { put, take, call } from 'redux-saga/effects';
import { cloneableGenerator } from 'redux-saga/utils';
import { expect } from 'chai';
import { viewJson, VIEW_BUTTON } from '../../../src/actions';
import fetchRequest from '../../../src/helpers/fetchHelper';

describe('test the auth', () => {
  it('test the watchLoadAsync', () => {
    const data = {};
    const asyncData = {};
    data.gen = cloneableGenerator(watchLoadAsync)();
    asyncData.gen = cloneableGenerator(loadAsync)();

    expect(data.gen.next().value).to.deep.equal(take(VIEW_BUTTON));
    expect(data.gen.next().value).to.deep.equal(call(loadAsync));

    let result = asyncData.gen.next().value;
    expect(result).to.deep.equal(call(fetchRequest, '/router/api', 'GET'));
    expect(asyncData.gen.next().value).to.deep.equal(put(viewJson()));
  });

  it('test the console when throw an error', () => {
    const asyncData = {};
    asyncData.gen = cloneableGenerator(loadAsync)();

    const fun = () => {
      throw new TypeError('new error');
    };
    let result = asyncData.gen.next().value;
    expect(result).to.not.equal(call(fetchRequest, '/router/api', 'POST'));
    asyncData.gen.next();
  });
});
