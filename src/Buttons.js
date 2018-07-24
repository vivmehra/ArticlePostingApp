import React, { Component } from 'react';

class Buttons extends Component{
	render(){
		return(
			<div className="author author-buttons">
				<input type = "button" value = "Reset"/>
				<input type = "button" onChange = {this.handleSubmit} value="Submit" />
			</div>
			);
	}
}

export default Buttons;