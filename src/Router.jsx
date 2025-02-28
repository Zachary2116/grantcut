import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./login";
import Dashboard from "./Dashboard";
import PrivateRoute from "./PrivateRoute";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
      </Routes>
    </Router>
  );
};

export default App;
