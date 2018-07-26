import { createStore, applyMiddleware } from "../../node_modules/redux";
import { createLogger } from '../../node_modules/redux-logger';
import rootReducer from '../reducers/index';

const logger = createLogger();

const createStoreWithMiddleware = applyMiddleware(logger)(createStore);

export default function configureStore(initialState) {
    return createStore(rootReducer, initialState);
}