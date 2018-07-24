import React, { Component } from 'react';

class Name extends Component {
	render(){
		return(
			<div className = "author author-name">
				<label htmlFor ="name">Name </label>
				<input type="text" />
			</div>
			);
	}
}
export default Name;