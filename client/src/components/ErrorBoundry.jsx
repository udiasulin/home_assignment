import React from 'react';
import ErrorPage from './ErrorPage';
import { connect } from 'react-redux';

class ErrorBoundary extends React.Component {
	state = {
		hasError: this.props.notification,
		error: { message: '', stack: '' },
		info: { componentStack: '' },
	};

	static getDerivedStateFromError = () => {
		return { hasError: this.props.notification };
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
const mapStateToProps = (state) => ({
	notification: state.image.notification,
});

export default connect(mapStateToProps)(ErrorBoundary)
