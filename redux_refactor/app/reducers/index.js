import { combineReducers } from 'redux';
import category from 'reducers/category';
import { routerReducer as routing } from 'react-router-redux';

// Combine reducers with routeReducer which keeps track of
// router state
const rootReducer = combineReducers({
  category,
  routing
});

export default rootReducer;
