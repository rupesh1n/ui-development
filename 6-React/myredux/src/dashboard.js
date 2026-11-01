import { useSelector } from "react-redux";

const Mydashboard = () =>{
    let allbook = useSelector(state => state.Booklist);
    let allproduct = useSelector(state=>state.Productlist);
    let allapi = useSelector(state=>state.Apilist);

    return(
        <div className="container mt-4">
            <div className="row">
                <div className="col-lg-12">
                    <h1 className="text-center mb-4"> React Redux Dashboard </h1>
                </div>
            </div>

            
            <div className="row mt-5">
                <div className="col-lg-4 text-center">
                    <h3> Total book in store <br/> {allbook.length}</h3>
                </div>

                <div className="col-lg-4 text-center">
                    <h3> Total Product in store <br/> {allproduct.length}</h3>
                </div>

                <div className="col-lg-4 text-center">
                    <h3> Total Blogs in store <br/> {allapi.length}</h3>
                </div>
            </div>

        </div>
    )
}

export default Mydashboard;