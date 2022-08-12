import { applyMiddleware, legacy_createStore as createStore} from "redux";
import { Middleware } from "redux";
import logger from "redux-logger";

import rootReducer from "./rootReducer";

const store = createStore(rootReducer, applyMiddleware(logger));
export default store;