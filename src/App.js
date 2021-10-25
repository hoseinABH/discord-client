import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Account from './pages/Account';
import AuthRoute from './pages/AuthRoute';
import ForgotPassword from './pages/ForgotPassword';
import Home from './pages/Home';
import Invite from './pages/Invite';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';
import ResetPassword from './pages/ResetPassword';
import ViewGuild from './pages/ViewGuild';

export default function App() {
  return (
    <Switch>
      <Route exact component={Landing} path="/" />
      <Route component={Login} path="/login" />
      <Route component={Register} path="/register" />
      <Route component={ForgotPassword} path="/forgot-password" />
      <Route component={ResetPassword} path="/reset-password/:token" />
      <AuthRoute exact path="/channels/me" component={Home} />
      <AuthRoute exact path="/channels/me/:channelId" component={Home} />
      <AuthRoute
        exact
        path="/channels/:guildId/:channelId"
        component={ViewGuild}
      />
      <AuthRoute exact path="/account" component={Account} />
      <AuthRoute exact path="/:link" component={Invite} />
    </Switch>
  );
}
