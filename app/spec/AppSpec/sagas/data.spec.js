import { dataLoadAsync, loadAsync } from '../../../src/sagas/data';
import { expect } from 'chai';
import { fork, call, put, take } from 'redux-saga/effects';
import { viewTable, VIEW_DATA } from '../../../src/actions';
import fetchRequest from '../../../src/helpers/fetchHelper';
import { cloneableGenerator } from 'redux-saga/utils';

describe('test the sagas data', () => {
  it('just test the dataLoadAsync', () => {
    const data = {};

    data.gen = cloneableGenerator(dataLoadAsync)();

    expect(data.gen.next().value).to.deep.equal(take(VIEW_DATA));
    expect(data.gen.next().value).to.deep.equal(call(loadAsync));
  });

  it('just test the loadAsync', () => {
    const fetchdata = {};
    fetchdata.gen = cloneableGenerator(loadAsync)();
    let result = fetchdata.gen.next().value;
    expect(result).to.deep.equal(call(fetchRequest, '/router/data', 'GET'));
    expect(fetchdata.gen.next().value).to.eql(put(viewTable()));
  });
});
