
import { combineReducers } from "redux";

import Booklist from "./bookreducer";
import Productlist from "./productreducer";
import Apilist from "./apireducer";

const Allreducer = combineReducers({
    Booklist, Productlist, Apilist
});

export default Allreducer;