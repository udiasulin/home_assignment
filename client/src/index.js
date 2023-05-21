import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import AppLoader from "./components/AppLoader";
import ErrorBoundary from "./components/ErrorBoundry";
import ErrorPage from "./components/ErrorBoundry";
import './index.css';

import { Provider } from 'react-redux';
import store from './store/index';
import { getInitialState } from './store/images-actions';

const App = React.lazy(() => import("./App"));

// calling the server before the app render
store.dispatch(getInitialState());

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
        <ErrorBoundary fallback={<ErrorPage />}>
            <Suspense fallback={<AppLoader />}>
                <App />
            </Suspense>
        </ErrorBoundary>
    </Provider>);


