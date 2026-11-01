
import { legacy_createStore as createStore } from "redux";
import Allreducer from "./mainreducer";

const Mystore = createStore(Allreducer);

export default Mystore;