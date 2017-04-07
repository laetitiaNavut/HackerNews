import { FETCH_STORIES } from '../actions/index';

const INITIAL_STATE = { all: [], post: null };

export default function(state = INITIAL_STATE, action) {
	switch(action.type) {
	case FETCH_STORIES:
		return { ...state, all: action.payload };
	default:
		return state;
	}
}

