import React, { Component } from 'react';
import Name from './Name';
import Email from './Email';
import Buttons from './Buttons';
import Article from './ArticleTextArea';

class ArticleForm extends Component {
	constructor(props){
		super(props);
		this.state = {
			name : '',
			email : '',
			article: ''
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	render(){
		return(
			<div className = "author-article-from">
			  <form action = "">
		          <Name />
		          <Email />
		          <Article />
		          <Buttons />
	          </form>
	        </div>
			);
	}
}

export default ArticleForm;