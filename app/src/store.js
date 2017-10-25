// import { createStore, applyMiddleware } from 'redux';
// import createSagaMiddleware from 'redux-saga';
// import reducers from './reducers';
// import rootSaga from './sagas/index';

// const sagaMiddleware = createSagaMiddleware();

// const store = createStore(reducers, applyMiddleware(sagaMiddleware));

// sagaMiddleware.run(rootSaga); //register sagas

// export default store;

import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import rootSaga from './sagas/index';

import { composeWithDevTools } from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga); //register sagas

export default store;
