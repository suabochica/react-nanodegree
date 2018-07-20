import thunk from 'redux-thunk'
import { applyMiddleware, compose } from 'redux'
// Relative imports
import logger from './logger.middleware'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default composeEnhancers(applyMiddleware(
	thunk,
	logger
))