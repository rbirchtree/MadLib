import React from 'react';
import {connect} from 'react-redux';
import { setAdjective, setName, setColor } from './actions';

export function UserInput (props){
		return (
				<form className="userInput" onSubmit={e => e.preventDefault()}>
					<label htmlFor="userName">Name</label>
					<input type="text" value={props.userName} 
					onChange={e => props.dispatch(setName(e.target.value))}/>
					<label htmlFor="adjective">Adjective</label>
					<input type="text" value={props.adjective}
					onChange={e => props.dispatch(setAdjective(e.target.value))}/>
					<label htmlFor="color">Color</label>
					<input type="text" value={props.Color}
					onChange={e => props.dispatch(setColor(e.target.value))}/>
				</form>
			
			);
}


export default connect()(UserInput);