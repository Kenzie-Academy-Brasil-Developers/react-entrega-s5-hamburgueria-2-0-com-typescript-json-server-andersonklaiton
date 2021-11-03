import { Switch, Route } from "react-router-dom";
import Login from "../Pages/Login";
import Products from "../Pages/Products";
import Signup from "../Pages/Signup";



const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/dashboard">
        <Products />
      </Route>
    </Switch>
  );
};
export default Routes;
