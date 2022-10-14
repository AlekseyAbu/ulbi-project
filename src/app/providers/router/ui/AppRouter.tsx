import React, { Component, Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader/ui/PageLoader';

class AppRouter extends Component {
    render() {
        return (
            <Routes>
                {Object.values(routeConfig).map(({ element, path }) => (
                    <Route
                        key={path}
                        path={path}
                        element={(
                            <Suspense fallback={<PageLoader />}>
                                <div className="page-wrapper">
                                    {element}
                                </div>
                            </Suspense>
                        )}
                    />
                ))}
            </Routes>

        );
    }
}

export default AppRouter;
