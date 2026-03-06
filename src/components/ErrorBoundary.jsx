import React from "react";

export default class ErrorBoundary extends React.Component {
    state = { error: null }
	static getDerivedStateFromError(error) {
		return { error }
	}
     	componentDidCatch(error, errorInfo) {
    	console.log("Uncaught error:", error, errorInfo);
    }
	render() {
		if (this.state.error) {
			return this.props.fallback
		}
		return this.props.children
	}
}