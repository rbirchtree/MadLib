import { SET_ADJECTIVE, SET_COLOR, SET_NAME } from '../actions';

const initalState = {
	userName: 'Bob',
	adjective: 'precarious',
	color: 'blue',
	randomPhrase: Math.round(Math.random() *3) + 1
};
//use random phrase in userstory
export const madLibReducer = (state=initalState, action) => {
	if (action.type === SET_ADJECTIVE) {
		return Object.assign({},state,{
			adjective: action.adjective
		});
	}
	else if (action.type === SET_COLOR){
		return Object.assign({},state,{
			color: action.color
		});
	}
	else if(action.type === SET_NAME){
		return Object.assign({}, state,{
			userName: action.userName
		});
	}
	return state;
};