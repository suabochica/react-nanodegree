import thunk from 'redux-thunk'
import { applyMiddleware } from 'redux'
// Relative imports
import logger from './logger'

export default applyMiddleware(
    thunk,
    logger
)