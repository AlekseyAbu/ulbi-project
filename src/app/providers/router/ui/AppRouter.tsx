import React, {
    Component, memo, Suspense, useCallback, useMemo,
} from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppRouters, AppRoutesProps, routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader/ui/PageLoader';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import RequireAuth from 'app/providers/router/ui/RequireAuth';

// class AppRouter extends Component {
//     render() {
//         return (
//             <Routes>
//                 {Object.values(routeConfig).map(({ element, path }) => (
//                     <Route
//                         key={path}
//                         path={path}
//                         element={(
//                             <Suspense fallback={<PageLoader />}>
//                                 <div className="page-wrapper">
//                                     {element}
//                                 </div>
//                             </Suspense>
//                         )}
//                     />
//                 ))}
//             </Routes>
//
//         );
//     }
// }

const AppRouter = () => {
    const renderWithWrapper = useCallback((route: AppRoutesProps) => {
        const element = (
            <Suspense fallback={<PageLoader />}>
                <div className="page-wrapper">
                    {route.element}
                </div>
            </Suspense>
        );

        return (
            <Route
                key={route.path}
                path={route.path}
                element={(
                    route.authOnly
                        ? <RequireAuth>{element}</RequireAuth>
                        : element
                )}
            />
        );
    }, []);

    return (
        <Routes>
            {Object.values(routeConfig).map(renderWithWrapper)}
        </Routes>

    );
};

export default memo(AppRouter);
