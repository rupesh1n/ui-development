import { HashRouter, Routes, Route, Link } from "react-router-dom";
import Mybook from "./book";
import Myuser from "./user";
import Myproduct from "./product";
import Myapi from "./api";
import Mydashboard from "./dashboard";

function App() {
  return (
    <HashRouter>
      <div className="container mt-3">
          <div className="row">
              <div className="col-xl-3">
                  <h1 className="text-danger"> React & Redux </h1>
              </div>
              <div className="col-xl-9 text-end">
                  <div className="btn-group">
                      <Link className="btn btn-primary" to="/"> My Dashboard </Link>
                      <Link className="btn btn-success" to="/book"> Manage Book </Link>
                      <Link className="btn btn-info" to="/product"> Manage Product </Link>
                      <Link className="btn btn-warning" to="/api"> Manage Api </Link>
                      <Link className="btn btn-danger" to="/user"> Manage User </Link>
                  </div>
              </div>
          </div>
      </div>
      <Routes>
        <Route exact path="/" element={ <Mydashboard/> }/>
        <Route exact path="/book" element={ <Mybook/> } />
        <Route exact path="/user" element={ <Myuser/> }/>
        <Route exact path="/product" element={ <Myproduct/> }/>
        <Route exact path="/api" element={ <Myapi/> }/>
      </Routes>
    </HashRouter>
  );
}

export default App;
