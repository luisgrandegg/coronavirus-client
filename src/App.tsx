import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
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
import { RegisterPatient } from './pages/RegisterPatient';

export const App: React.FunctionComponent = (): JSX.Element => {
    const auth = useSelector(getAuth);

    auth && sdk.setAuthorization(auth);
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
                    <Route path={Routes.REGISTER_DOCTOR}>
                        <RegisterDoctor/>
                    </Route>
                    <Route path={Routes.REGISTER_PATIENT}>
                        <RegisterPatient/>
                    </Route>
                    <DoctorRoute path={Routes.DOCTOR_DASHBOARD}>
                        <DoctorDashbord/>
                    </DoctorRoute>
                    <PatientRoute path={Routes.PATIENT_DASHBOARD}>
                        <PatientDashbord/>
                    </PatientRoute>
                    <Redirect exact={true} from={Routes.REGISTER} to={Routes.REGISTER_PATIENT}/>
                </Switch>
            </Router>
        </Suspense>
    );
};

export default App;
