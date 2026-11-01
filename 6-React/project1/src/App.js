import {HashRouter, Routes, Route, Link} from "react-router-dom"
import Myuser from "./basic/user";
import Mybook from "./basic/book";
import Myproduct from "./basic/product";
import Myhome from "./basic/Home";

import HookOne from "./hooks/page1";
import HookTwo from "./hooks/page2";
import HookThree from "./hooks/page3";
import HookFour from "./hooks/page4";
import MyApiOne from "./api/api1";
import BookList from "./api/bookapi";
import UserList from "./api/userapi";
import ProductList from "./api/productapi";

function App() {
  return (
    <>
    <HashRouter>
      <header>
        <Link to="/" className="toplink"> Home </Link>
        <Link to="/user" className="toplink"> User </Link>
        <Link to="/book" className="toplink"> Book </Link>
        <Link to="/product" className="toplink"> Product </Link>
        <Link to="/hook1" className="toplink"> H-1 </Link>
        <Link to="/hook2" className="toplink"> H-2 </Link>
        <Link to="/hook3" className="toplink"> H-3 </Link>
        <Link to="/hook4" className="toplink"> H-4 </Link>
        <Link to="/api1" className="toplink"> Api-1 </Link>
        <Link to="/bookapi" className="toplink"> Bookapi </Link>
        <Link to="/userapi" className="toplink"> Userapi </Link>
        <Link to="/productapi" className="toplink"> Productapi </Link>
      </header>

      <Routes>
       <Route exact path="/" element={<Myhome/>} />
        <Route exact path="/user" element={<Myuser/>} />
        <Route exact path="/book" element={<Mybook/>} />
        <Route exact path="/product" element={<Myproduct/>} />
        <Route exact path="/hook1" element={<HookOne/>} />
        <Route exact path="/hook2" element={<HookTwo/>} />
        <Route exact path="/hook3" element={<HookThree/>} />
        <Route exact path="/hook4" element={<HookFour/>} />
        <Route exact path="/api1" element={<MyApiOne/>} />
        <Route exact path="/bookapi" element={<BookList/>} />
        <Route exact path="/userapi" element={<UserList/>} />
        <Route exact path="/productapi" element={<ProductList/>} />
      </Routes>

    </HashRouter>
    </>
  );
}

export default App;

// Myuser(); - in javascript
// <Myuser/> - in jsx
