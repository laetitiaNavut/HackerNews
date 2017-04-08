import axios from 'axios';

export const FETCH_STORIES = 'FETCH_STORIES';
export const FETCH_STORIES_LAST_WEEK = 'FETCH_STORIES_LAST_WEEK';

const lastWeek = new Date(new Date().getTime() - (168 * 60 * 60 * 1000));
const lastWeekTimestamp = Math.floor(lastWeek / 1000);

const ROOT_URL_1 = 'http://hn.algolia.com/api/v1/search_by_date?tags=story&hitsPerPage=600';

const ROOT_URL_2 = `http://hn.algolia.com/api/v1/search_by_date?tags=story&numericFilters=created_at_i>${lastWeekTimestamp}&hitsPerPage=600`;

export function fetchStories() {
	const request = axios.get(ROOT_URL_1);
	return {
		type: FETCH_STORIES,
		payload: request
	};
}

export function fetchStoriesLastWeek() {
	const request = axios.get(ROOT_URL_2);
	return {
		type: FETCH_STORIES_LAST_WEEK,
		payload: request
	};
}