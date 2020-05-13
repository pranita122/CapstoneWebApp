import React from "react";
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { BrowserRouter, Route, Redirect, useHistory } from "react-router-dom";
import { Login } from "./routes/login";
import { Register } from "./routes/register";
import { Home } from "./routes/home";
import { Accounts } from "./routes/accounts";
import { FraudHistory } from "./routes/fraudhistory";
import { YourCredentials } from "./routes/yourcredentials";

const App = () => {
  const isAuthenticated = () => {
    // Perform authentication logic once user handling on backend is set up
    return true
  }

  const AuthedRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props => isAuthenticated()
        ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/login" }} />
        )
      }
    >
    </Route>
  );

  return (
    <BrowserRouter>
      <switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/accounts" component={Accounts} />
        <Route exact path="/fraudhistory" component={FraudHistory} />
        <Route exact path="/yourcredentials" component={YourCredentials} />
      </switch>
    </BrowserRouter>
  )
}

export default App;
