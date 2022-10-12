import React, { Component, Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';

class AppRouter extends Component {
    render() {
        return (
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    {Object.values(routeConfig).map(({ element, path }) => (
                        <Route
                            key={path}
                            path={path}
                            element={<div className="page-wrapper">element</div>}
                        />
                    ))}
                </Routes>
            </Suspense>
        );
    }
}

export default AppRouter;