import React, { Component } from 'react';

class Email extends Component {
	render(){
		return(
			<div className = "author author-email">
				<label htmlFor = "email">Email </label>
				<input type = "text" />
			</div>
			);
	}
}

export default Email;