import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import CoctailInfo from "./pages/CoctailInfo/CoctailInfo";
import MainPage from "./pages/MainPage/MainPage.jsx";
import { store } from './store';

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/coctails" component={MainPage} />
          <Route exact path="/coctails/:id" component={CoctailInfo} />
          <Redirect to="/coctails"/>
        </Switch>
      </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);

