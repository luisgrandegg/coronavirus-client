import React from 'react';
import { Route, RouteProps, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { getAuth } from '../store/selectors/status';
import { UserType } from '../entities/User';
import { ScrollToTop } from '../components/ScrollToTop';

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
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
                }
            />
        </ScrollToTop>
    );
}

export const AdminRoute: React.FunctionComponent<IRouteProps> = (
    props: IRouteProps
): JSX.Element => {
    const { children, ...rest } = props;

    return (
        <PrivateRoute userTypes={[UserType.ADMIN, UserType.DOCTOR_ADMIN]} {...rest}>
            {children}
        </PrivateRoute>
    )
}

export const DoctorRoute: React.FunctionComponent<IRouteProps> = (
    props: IRouteProps
): JSX.Element => {
    const { children, ...rest } = props;

    return (
        <PrivateRoute userTypes={[UserType.DOCTOR, UserType.DOCTOR_ADMIN]} {...rest}>
            {children}
        </PrivateRoute>
    )
}

export const PatientRoute: React.FunctionComponent<IRouteProps> = (
    props: IRouteProps
): JSX.Element => {
    const { children, ...rest } = props;

    return (
        <PrivateRoute userTypes={[UserType.PATIENT]} {...rest}>
            {children}
        </PrivateRoute>
    )
}
