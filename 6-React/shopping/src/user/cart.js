import { useState, useEffect } from "react";

const MyCart = () => {

    let [allproduct, setProduct] = useState([]);

    const getProduct = () => {
        fetch("http://localhost:1234/cartapi")
            .then(response => response.json())
            .then(proArray => {
                setProduct(proArray);
            })
    }

    const delPro = (pid)=>{
        let url = "http://localhost:1234/cartapi/"+pid;
        let postdata = {method:"delete"};
        fetch(url, postdata)
        .then(response=>response.json())
        .then(pinfo =>{
            alert(pinfo.pname + " Deleted Successfully !");
            getProduct(); // reload the list after delete
        })
    }

    useEffect(() => {
        getProduct();
    }, []);

 let totalcost = 0;

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-lg-4"></div>
                <div className="col-lg-8">
                    <h3 className="text-center"> {allproduct.length}  - item in My Cart</h3>
                    <table className="table">
                        <thead>
                            <tr>
                                <th> Item Name </th>
                                <th> Photo </th>
                                <th> Price </th>
                                <th> Quantity </th>
                                <th> Total </th>
                                <th> Action </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allproduct.map((product, index) =>{
                                    totalcost = totalcost + (product.price * product.qty);
                                    return(
                                        <tr key={index}>
                                            <td> {product.pname} </td>
                                            <td> <img src={product.photo} height='30' width='40'/> </td>
                                            <td> {product.price} </td>
                                            <td> {product.qty} </td>
                                            <td> {product.price * product.qty} </td>
                                            <td>
                                                <button className="btn btn-danger btn-sm" onClick={delPro.bind(this, product.id)}> <i className="fa fa-trash"></i> </button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                            <tr>
                                <td colSpan={5} className="text-end pe-5 text-primary">
                                <b> Final Cost : Rs. {totalcost} </b>
                                </td>
                                <td></td>
                            </tr>
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    )

}
export default MyCart;