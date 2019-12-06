import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import Paths from './common/RoutePaths';
import * as Pages from './pages';


const Routes = () => (
    <Switch>
        <Route exact path={Paths.main} component={Pages.Dashboard} />
        <Route exact path={Paths.admin.branch} component={Pages.Branch} />

    </Switch>
)

export default withRouter(Routes);