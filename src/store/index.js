import { createStore, applyMiddleware, compose } from 'redux';
import {persistStore} from 'redux-persist'
// middlewares
import createSagaMiddleware from 'redux-saga'

// Import custom components
import reducers from '../redux';
import rootSagas from "../sagas";

const sagaMiddleware = createSagaMiddleware()

/* Create a Redux store that holds the app state. */

const composeEnhancers =
typeof window === 'object' &&
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
  }) : compose;

const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));
// const store = createStore(reducers, enhancer);
// sagaMiddleware.run(rootSagas)
// 



export const store = createStore(reducers, enhancer);


export const persistor =persistStore(store)

export default {store, persistor};


// export default store;

