// ErrorBoundary is a higher-order component with the goal of wrapping an existing component with this. We will wrap the person component inside App.js with this 

// dont over-use Error Boundary component other than logical fail-safe mechanism. 90% the error in a React.js app will be because of development errors. 

import React, { Component } from 'react';

class ErrorBoundary extends Component{
	state = {
		hasError: false,
		errorMessage: ''
	}

	componentDidCatch = (error, info) => {
		this.setState({
			hasError: true,
			errorMessage: error
		});
	}

	render(){
		if(this.state.hasError){
		 	return <h1>{this.state.error}</h1>;
		} else{
			return this.props.children;
		}
	}
}

export default ErrorBoundary; 