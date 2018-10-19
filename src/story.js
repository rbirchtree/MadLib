import React, { Component } from 'react';
import { connect } from 'react-redux';


function Story(props)	{
		let storylines;
	if (props.randomPhrase ===2){
		 storylines = `${props.userName} then decided to paint the White House, Pentagon, and Statue of Liberty ${props.color} in the morning.`;
	} else if (props.randomPhrase ===3){
		 storylines = `${props.userName}  decided to do the running the bulls.`;
	} else {
		storylines = `A very ${props.adjective} unicorn took ${props.userName} to Wonderland to find candy.`
	}
	console.log(props.storylines)
	return (
		<div className="story">
			<h2>The Story</h2>
			<p>{props.userName} was a very {props.adjective} person. {props.userName}'s 
			favorite color was {props.color}.
			</p>
			<p>
			{storylines}
			</p>
		</div>
		);
};


const mapStateToProps = state => ({
	userName: state.userName,
	adjective: state.adjective,
	color: state.color,
	randomPhrase: state.randomPhrase
});

export default connect(mapStateToProps)(Story);