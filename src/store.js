import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducers from './reducers';

const ReduxLogger = createLogger({ predicate: (getState, action) => __DEV__ });

export default function configureStore(initialState) {
    const store = createStore(
        reducers,
        initialState,
        applyMiddleware(
            thunk,
            ReduxLogger
        )
    );

    if (module.hot) {
        module.hot.accept(() => {
            const nextRootReducer = require('./reducers').default;
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}