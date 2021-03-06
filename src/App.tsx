import PubSub from 'pubsub-js';
import React, { Suspense, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Redirect, Route } from "react-router-dom";
import { ThemeProvider } from '@material-ui/core/styles';
import CookieConsent from "react-cookie-consent";

import { DoctorRoute, AdminRoute, SuperAdminRoute } from './router/PrivateRoute';
import { Routes } from './router/Routes';
import { Spinner } from './components/Spinner';
import { DoctorDashbord } from './pages/DoctorDashboard';
import { getAuth } from './store/selectors/status';
import { sdk } from './sdk';
import { HelpDoctor } from './pages/HelpDoctor';
import { HelpCitizen } from './pages/HelpCitizen';
import { Home } from './pages/Home';
import { Landing } from './pages/Landing';
import { Login } from './pages/Login';
import { AboutUs } from './pages/AboutUs';
import { RegisterDoctor } from './pages/RegisterDoctor';
import { CreateInquiry } from './pages/CreateInquiry';
import { InquiryDetail } from './pages/InquiryDetail';
import { DoctorInquiries } from './pages/DoctorInquiries';
import { logout } from './store/actions/status';

import theme from "./theme";
import { AdminDashboard } from './pages/AdminDashboard';
import { ScrollToTop } from './components/ScrollToTop';
import { AdminModerate } from './pages/AdminModerate';
import { AdminStats } from './pages/AdminStats';
import { DoctorType } from './entities/Doctor';
import { DoctorDashboardMain } from './pages/DoctorDashboardMain';
import { AdminDashboardMain } from './pages/AdminDashboardMain';
import { GratitudeWall } from './pages/GratitudeWall';

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
        <ThemeProvider theme={theme}>
            <Suspense fallback={<Spinner />}>
                <Router>
                    <Switch>
                        <Route exact={true} path={Routes.ROOT}>
                            <ScrollToTop>
                                <Home />
                            </ScrollToTop>
                        </Route>
                        <Route exact={true} path={Routes.HOME_OPENED}>
                            <ScrollToTop>
                                <GratitudeWall opened={true}/>
                            </ScrollToTop>
                        </Route>
                        <Route exact={true} path={Routes.HOME}>
                            <ScrollToTop>
                                <GratitudeWall />
                            </ScrollToTop>
                        </Route>
                        <Route exact={true} path={Routes.ABOUT_US}>
                            <ScrollToTop>
                                <AboutUs />
                            </ScrollToTop>
                        </Route>
                        <Route exact={true} path={Routes.HELP_CITIZEN}>
                            <ScrollToTop>
                                <HelpCitizen />
                            </ScrollToTop>
                        </Route>
                        <Route exact={true} path={Routes.HELP_DOCTOR}>
                            <ScrollToTop>
                                <HelpDoctor />
                            </ScrollToTop>
                        </Route>
                        <Route exact={true} path={Routes.LANDING}>
                            <ScrollToTop>
                                <Landing />
                            </ScrollToTop>
                        </Route>
                        <Route exact={true} path={Routes.GRATITUDE_WALL}>
                            <ScrollToTop>
                                <GratitudeWall />
                            </ScrollToTop>
                        </Route>
                        <Route exact={true} path={Routes.GRATITUDE_WALL_OPENED}>
                            <ScrollToTop>
                                <GratitudeWall opened={true}/>
                            </ScrollToTop>
                        </Route>
                        <Route exact={true} path={Routes.LOGIN}>
                            <ScrollToTop>
                                <Login />
                            </ScrollToTop>
                        </Route>
                        <Route exact={true} path={Routes.REGISTER_PSYCHOLOGIST}>
                            <ScrollToTop>
                                <RegisterDoctor doctorType={DoctorType.PSYCHOLOGIST} />
                            </ScrollToTop>
                        </Route>
                        <Route exact={true} path={Routes.REGISTER_DOCTOR}>
                            <ScrollToTop>
                                <RegisterDoctor doctorType={DoctorType.REGULAR} />
                            </ScrollToTop>
                        </Route>
                        <Route exact={true} path={Routes.REGISTER_CITIZEN}>
                            <ScrollToTop>
                                <CreateInquiry />
                            </ScrollToTop>
                        </Route>
                        <DoctorRoute exact={true} path={Routes.DOCTOR_DASHBOARD}>
                            <DoctorDashboardMain/>
                        </DoctorRoute>
                        <DoctorRoute exact={true} path={Routes.DOCTOR_DASHBOARD_REGULAR}>
                            <DoctorDashbord doctorType={DoctorType.REGULAR}/>
                        </DoctorRoute>
                        <DoctorRoute exact={true} path={Routes.DOCTOR_DASHBOARD_PSYCHOLOGIST}>
                            <DoctorDashbord doctorType={DoctorType.PSYCHOLOGIST}/>
                        </DoctorRoute>
                        <DoctorRoute exact={true} path={Routes.DOCTOR_INQUIRIES}>
                            <DoctorInquiries />
                        </DoctorRoute>
                        <DoctorRoute path={Routes.INQUIRY_DETAIL}>
                            <InquiryDetail />
                        </DoctorRoute>
                        <AdminRoute exact={true} path={Routes.ADMIN_DASHBOARD}>
                            <AdminDashboardMain />
                        </AdminRoute>
                        <AdminRoute exact={true} path={Routes.ADMIN_DASHBOARD_REGULAR}>
                            <AdminDashboard doctorType={DoctorType.REGULAR}/>
                        </AdminRoute>
                        <AdminRoute exact={true} path={Routes.ADMIN_DASHBOARD_PSYCHOLOGIST}>
                            <AdminDashboard doctorType={DoctorType.PSYCHOLOGIST}/>
                        </AdminRoute>
                        <AdminRoute exact={true} path={Routes.ADMIN_MODERATE}>
                            <AdminModerate />
                        </AdminRoute>
                        <SuperAdminRoute exact={true} path={Routes.ADMIN_STATS}>
                            <AdminStats />
                        </SuperAdminRoute>
                        <Redirect exact={true} from={Routes.REGISTER} to={Routes.REGISTER_CITIZEN} />
                        <Redirect to={Routes.HOME} />
                    </Switch>
                </Router>
                <CookieConsent
                    buttonText="Acepto"
                >
                    Usamos cookies para mejorar la experiencia de nuestras usuarios.
                </CookieConsent>
            </Suspense>
        </ThemeProvider>
    );
};

export default App;
