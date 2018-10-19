import React, {Component} from 'react';
import {connect} from 'react-redux';
import { setAge, setName, setColor } from './actions';

class UserInput extends Component{
	onSubmit(event){
		event.preventDefault();
/*		const {age, userName, color} = values;
		this.props.dispatch(setAge(age));
		this.props.dispatch(setName(userName));
		this.props.dispatch(setColor(color));*/
	}
	render(){
		return (
			<div className="userInput">
				<h1>Write a Pulitizer (please!)</h1>
				<form>

				</form>
			</div>
			);
	}
}

export default UserInput;