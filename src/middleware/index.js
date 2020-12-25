import {applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import logger from './logger'

//Apply Middleware
export default applyMiddleware (
  thunk,
  logger
)
