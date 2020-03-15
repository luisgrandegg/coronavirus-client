import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Redirect, Route } from "react-router-dom";

import './App.css';
import { DoctorRoute, PatientRoute } from './router/PrivateRoute';
import { Login } from './pages/Login';
import { Routes } from './router/Routes';
import { Spinner } from './components/Spinner';
import { DoctorDashbord } from './pages/DoctorDashboard';
import { PatientDashbord } from './pages/PatientDashboard';
import { getAuth } from './store/selectors/status';
import { sdk } from './sdk';

export const App: React.FunctionComponent = (): JSX.Element => {
    const auth = useSelector(getAuth);

    auth && sdk.setAuthorization(auth);
    return (
        <Suspense fallback={<Spinner/>}>
            <Router>
                <Switch>
                    <Route path={Routes.LOGIN}>
                        <Login/>
                    </Route>
                    <DoctorRoute path={Routes.DOCTOR_DASHBOARD}>
                        <DoctorDashbord/>
                    </DoctorRoute>
                    <PatientRoute path={Routes.PATIENT_DASHBOARD}>
                        <PatientDashbord/>
                    </PatientRoute>
                    <Redirect exact={true} from={Routes.ROOT} to={Routes.LOGIN}/>
                </Switch>
            </Router>
        </Suspense>
    );
};

export default App;
