import PubSub from 'pubsub-js';
import React, { Suspense, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Redirect, Route } from "react-router-dom";

import { DoctorRoute, PatientRoute } from './router/PrivateRoute';
import { Routes } from './router/Routes';
import { Spinner } from './components/Spinner';
import { DoctorDashbord } from './pages/DoctorDashboard';
import { PatientDashbord } from './pages/PatientDashboard';
import { getAuth } from './store/selectors/status';
import { sdk } from './sdk';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { RegisterDoctor } from './pages/RegisterDoctor';
import { CreateInquiry } from './pages/CreateInquiry';
import { InquiryDetail } from './pages/InquiryDetail';
import { DoctorInquiries } from './pages/DoctorInquiries';
import { logout } from './store/actions/status';

export const App: React.FunctionComponent = (): JSX.Element => {
    const auth = useSelector(getAuth);
    const dispatch = useDispatch();

    auth && sdk.setAuthorization(auth);

    useEffect((): () => void => {
        const subscriptions = [
            PubSub.subscribe('auth::delete', (): void => { dispatch(logout()); }),
        ];
        return (): void => { subscriptions.forEach((subscription: string): void => PubSub.unsubscribe(subscription)); };
    }, [dispatch]);

    return (
        <Suspense fallback={<Spinner/>}>
            <Router>
                <Switch>
                    <Route exact path={Routes.ROOT}>
                        <Home/>
                    </Route>
                    <Route path={Routes.LOGIN}>
                        <Login/>
                    </Route>
                    <Route exact={true} path={Routes.REGISTER_DOCTOR}>
                        <RegisterDoctor/>
                    </Route>
                    <Route exact={true} path={Routes.REGISTER_PATIENT}>
                        <CreateInquiry/>
                    </Route>
                    <DoctorRoute exact={true} path={Routes.DOCTOR_DASHBOARD}>
                        <DoctorDashbord/>
                    </DoctorRoute>
                    <DoctorRoute exact={true} path={Routes.DOCTOR_INQUIRIES}>
                        <DoctorInquiries/>
                    </DoctorRoute>
                    <DoctorRoute path={Routes.INQUIRY_DETAIL}>
                        <InquiryDetail/>
                    </DoctorRoute>
                    <PatientRoute exact={true} path={Routes.PATIENT_DASHBOARD}>
                        <PatientDashbord/>
                    </PatientRoute>
                    <Redirect exact={true} from={Routes.REGISTER} to={Routes.REGISTER_PATIENT}/>
                    <Redirect to={Routes.ROOT}/>
                </Switch>
            </Router>
        </Suspense>
    );
};

export default App;
