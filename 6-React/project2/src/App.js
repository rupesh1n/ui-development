import {HashRouter, Routes, Route, Link} from "react-router-dom"
import Mycity from './basic/city';
import Mycompany from "./basic/company";
import Mycustomer from "./basic/customer";
import Myemployee from "./basic/employee";
import Myitem from "./basic/item";

function App() {
  return (
    <HashRouter>
      <header>
        <Link to="/" className="toplink"> City </Link>
        <Link to="/company" className="toplink"> Company </Link>
        <Link to="/customer" className="toplink"> Customer</Link>
        <Link to="/employee" className="toplink"> Employee </Link>
        <Link to="/item" className="toplink"> Item </Link>
      </header>

      <Routes>
        <Route exact path="/" element={<Mycity/>} />
        <Route exact path="/company" element={<Mycompany/>} />
        <Route exact path="/customer" element={<Mycustomer/>} />
        <Route exact path="/employee" element={<Myemployee/>} />
        <Route exact path="/item" element={<Myitem/>} />
      </Routes>

    </HashRouter>
  );
}

export default App;
