//constants
import { updateObject } from '../../../constants/Helpers';
//lodash
import { cloneDeep } from 'lodash';
//action types
import {
	FETCH_IS_TYPING,
	FETCH_IS_TYPING_FAILED,
	FETCH_IS_TYPING_SUCCESS,
	SEND_IS_TYPING,
	SEND_MESSAGE,
	SEND_MESSAGE_FAIL,
	SEND_MESSAGE_SUCCESS,
	SAVE_RECEIVED_TYPING_USERNAME,
	SAVE_RECEIVED_MESSAGES,
	FETCH_MESSAGES,
	FETCH_MESSAGES_SUCCESS,
	FETCH_MESSAGES_FAIL,
} from '../chatActionTypes';

const initialState = {
	messageStatus: '',
	messages: [],
	feedback: '',
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case SEND_MESSAGE: {
			return updateObject(state, { messageStatus: 'Sending message' });
		}
		case SEND_MESSAGE_SUCCESS: {
			console.log(action.result);
			return updateObject(state, { messageStatus: 'Sent message' });
		}
		case SEND_MESSAGE_FAIL: {
			return updateObject(state, { messageStatus: 'send failed' });
		}
		case FETCH_MESSAGES: {
			return state;
		}
		case FETCH_MESSAGES_SUCCESS: {
			return state;
		}
		case FETCH_MESSAGES_FAIL: {
			return state;
		}
		case SAVE_RECEIVED_MESSAGES: {
			const messages = cloneDeep(state.messages);
			messages.push(action.messages);
			return updateObject(state, { messages, feedback: '' });
		}
		case SEND_IS_TYPING: {
			return state;
		}
		case FETCH_IS_TYPING: {
			return state;
		}
		case FETCH_IS_TYPING_SUCCESS: {
			console.log('GET_IS_TYPING_SUCCESS ', action.result);
			return state;
		}
		case FETCH_IS_TYPING_FAILED: {
			console.log('error', action.error);
			return state;
		}
		case SAVE_RECEIVED_TYPING_USERNAME: {
			return updateObject(state, { feedback: action.feedback });
		}
		default:
			return state;
	}
};

export default reducer;
