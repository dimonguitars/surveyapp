import { combineReducers } from 'redux';
import authReducers from './authReducers'
import { reducer as reduxForm} from 'redux-from';

export default combineReducers ({
  auth: authReducers,
  form: reduxForm
})
