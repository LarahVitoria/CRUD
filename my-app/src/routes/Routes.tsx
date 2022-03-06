import { BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom";
import ListUsers from "../pages/listUser/index";
import RegisterUsers from "../pages/registerUser/index";


function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" element={<RegisterUsers />} />
        <Route path="/listUsers" element={<ListUsers />} />
      </Switch>
    </Router>
  );
}

export default Routes;