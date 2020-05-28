import React from 'react';
import { Route, RouteProps, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { getAuth } from '../store/selectors/status';
import { UserType } from '../entities/User';
import { ScrollToTop } from '../components/ScrollToTop';
import { Routes } from './Routes';

export interface IPrivateRouteLocationState {
    from: Location;
}

export interface IRouteProps extends RouteProps {
    children: React.ReactNode
}

export interface IPrivateRouteProps extends IRouteProps {
    userTypes: UserType[]
}

export const PrivateRoute: React.FunctionComponent<IPrivateRouteProps> = (
    props: IPrivateRouteProps
): JSX.Element => {
    const { children, userTypes = [], ...rest } = props;

    const auth = useSelector(getAuth);
    const isAuthorized = auth && userTypes.includes(auth.userType);
    return (
        <ScrollToTop>
            <Route
                {...rest}
                render={({ location }) =>
                    isAuthorized ? (
                        children
                    ) : (
                        <Redirect
                            to={{
                                pathname: Routes.LOGIN,
                                state: { from: location }
                            }}
                        />
                    )
                }
            />
        </ScrollToTop>
    );
}

export const SuperAdminRoute: React.FunctionComponent<IRouteProps> = (
    props: IRouteProps
): JSX.Element => {
    const { children, ...rest } = props;
    const userTypes = [
        UserType.SUPER_ADMIN
    ];
    return (
        <PrivateRoute userTypes={userTypes} {...rest}>
            {children}
        </PrivateRoute>
    )
}

export const AdminRoute: React.FunctionComponent<IRouteProps> = (
    props: IRouteProps
): JSX.Element => {
    const { children, ...rest } = props;
    const userTypes = [
        UserType.ADMIN,
        UserType.SUPER_ADMIN
    ];
    return (
        <PrivateRoute userTypes={userTypes} {...rest}>
            {children}
        </PrivateRoute>
    )
}

export const DoctorRoute: React.FunctionComponent<IRouteProps> = (
    props: IRouteProps
): JSX.Element => {
    const { children, ...rest } = props;
    const userTypes = [
        UserType.ADMIN,
        UserType.DOCTOR,
        UserType.SUPER_ADMIN
    ];
    return (
        <PrivateRoute userTypes={userTypes} {...rest}>
            {children}
        </PrivateRoute>
    )
}
