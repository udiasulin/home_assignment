import React from 'react';
import ErrorPage from './ErrorPage';

class ErrorBoundary extends React.Component {
	state = {
		hasError: false,
		error: { message: '', stack: '' },
		info: { componentStack: '' },
	};

	static getDerivedStateFromError = () => {
		return { hasError: true };
	};

	componentDidCatch = (error, info) => {
		this.setState({ error, info });
	};

	render() {
		const { hasError } = this.state;
		const { children } = this.props;

		return hasError ? <ErrorPage /> : children;
	}
}

export default ErrorBoundary;