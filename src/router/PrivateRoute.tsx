import React from 'react';
import { Route, RouteProps, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { getAuth } from '../store/selectors/status';
import { UserType } from '../entities/User';

export interface IPrivateRouteLocationState {
    from: Location;
}

export interface IRouteProps extends RouteProps {
    children: React.ReactNode
}

export interface IPrivateRouteProps extends IRouteProps {
    userType: UserType
}

export const PrivateRoute: React.FunctionComponent<IPrivateRouteProps> = (
    props: IPrivateRouteProps
): JSX.Element => {
    const { children, userType, ...rest } = props;

    const auth = useSelector(getAuth);
    const isAuthorized = auth && auth.userType === userType;
    return (
        <Route
            {...rest}
            render={({ location }) =>
                isAuthorized ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}

export const AdminRoute: React.FunctionComponent<IRouteProps> = (
    props: IRouteProps
): JSX.Element => {
    const { children, ...rest } = props;

    return (
        <PrivateRoute userType={UserType.ADMIN} {...rest}>
            {children}
        </PrivateRoute>
    )
}

export const DoctorRoute: React.FunctionComponent<IRouteProps> = (
    props: IRouteProps
): JSX.Element => {
    const { children, ...rest } = props;

    return (
        <PrivateRoute userType={UserType.DOCTOR} {...rest}>
            {children}
        </PrivateRoute>
    )
}

export const PatientRoute: React.FunctionComponent<IRouteProps> = (
    props: IRouteProps
): JSX.Element => {
    const { children, ...rest } = props;

    return (
        <PrivateRoute userType={UserType.PATIENT} {...rest}>
            {children}
        </PrivateRoute>
    )
}
