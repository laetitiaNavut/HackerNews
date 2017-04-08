import { FETCH_STORIES } from '../actions/index';
import { FETCH_STORIES_LAST_WEEK } from '../actions/index';

const INITIAL_STATE = { allLastWeek: [], post: null };

export default function(state = INITIAL_STATE, action) {
	switch(action.type) {
	case FETCH_STORIES_LAST_WEEK:
		return { ...state, allLastWeek: action.payload };
	default:
		return state;
	}
}

