import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BasicTable from "./Table";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/table" element={<BasicTable />} />
      </Routes>
    </Router>
  );
}

export default App;
