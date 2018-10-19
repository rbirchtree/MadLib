import { SET_AGE, SET_COLOR, SET_NAME } from '../actions';

const initalState = {
	name: 'Bob',
	age: 42,
	color: 'blue',
	randomPhrase: Math.round(Math.random() *3) + 1
};
//use random phrase in userstory
export const madLibReducer = (state=initalState, action) => {
	if (action.type === SET_AGE) {
		return Object.assign({},state,{
			age: action.age
		});
	}
	else if (action.type === SET_COLOR){
		return Object.assign({},state,{
			color: action.color
		});
	}
	else if(action.type === SET_NAME){
		return Object.assign({}, state,{
			name: action.name
		});
	}
	return state;
};