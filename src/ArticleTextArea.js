import React, { Component } from 'react';

class ArticleTextArea extends Component {
	render(){
		return(
			<div className = "author author-article">
				<label htmlFor="textarea">Article </label>
				<textarea />
			</div>
			);
	}
}

export default ArticleTextArea;