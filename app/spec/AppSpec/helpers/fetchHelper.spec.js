// import fetchRequest from '../../../src/helpers/fetchHelper';
// import sinon from 'sinon';
// import { expect } from 'chai';
// import fetch from 'isomorphic-fetch';

// describe('test the fetch Request', () => {
//   let url = 'url';
//   let method = 'method';
//   let data = 'data';
//   let response = { status: 250 };

//   let options = {
//     method: method,
//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'application/json'
//     },
//     body: data
//   };
//   //   var post = sinon.stub(response, 'status');
//   var spy = sinon.spy();
//   var fetchMock = sinon.mock(fetch);
//   fetchMock
//     .expects('get')
//     .withArgs(url, options)
//     .returned({
//       status: 255,
//       json: () => {
//         return 'json';
//       }
//     });
//   fetchRequest(url, spy, data);

//   expect(spy).to.have.been.calledOnce;
// });
