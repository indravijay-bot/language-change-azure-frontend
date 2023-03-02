import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import rootSaga from '../Sagas';

import rootReducer from '../Reducers';

const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();
     const store = createStore(
        rootReducer,
        composeWithDevTools(applyMiddleware(logger, sagaMiddleware))
      );
    sagaMiddleware.run(rootSaga);
    return store;
};

export default configureStore;
