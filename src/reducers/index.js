import { combineReducers } from 'redux';
import StoriesReducer from './reducer_stories';
import LastWeekReducer from './reducer_lastWeek';

const rootReducer = combineReducers({
  stories: StoriesReducer,
  allLastWeek: LastWeekReducer
});

export default rootReducer;
