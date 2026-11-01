import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const Myproduct = () =>{
    let[productname, pickName] = useState('');
    let[productcost, pickCost] = useState('');
    let[sellername, pickSeller] = useState('');

    const dispatch = useDispatch();
    const save = ()=>{
        let iteminfo = {pname:productname, price:productcost, seller:sellername};
        let mydata = {bdetails:iteminfo, type:"addproduct"};
        dispatch(mydata); //dispatching data to store
        pickName("");
        pickCost("");
        pickSeller("");
    }

    const delpro = (index) =>{
        let mydata = {pindex:index, type:"removeproduct"};
        dispatch(mydata); //dispatching action to delete the data
    }
    
    let allproduct = useSelector(state=>state.Productlist); // Productlist is function name in productreducer.js file

    return(
        <div className="container mt-4">
            <div className="row">
                <div className="col-lg-12">
                    <h3 className="text-center mb-4"> Manage Product : {allproduct.length }</h3>

                    <p className="text-center">
                        <input type="text" className="m-3" placeholder="Enter Name" 
                        onChange={obj=>pickName(obj.target.value)} value={productname}/>

                        <input type="text" className="m-3" placeholder="Enter Price" 
                         onChange={obj=>pickCost(obj.target.value)} value={productcost}/>

                        <input type="text" className="m-3" placeholder="Enter Seller Name" 
                         onChange={obj=>pickSeller(obj.target.value)} value={sellername}/>

                        <button className="btn btn-primary m-3" onClick={save}> Save </button>
                    </p>
                </div>
            </div>

            <div className="row mt-4">
                {
                    allproduct.map((product, index)=>{
                        return(
                            <div className="col-lg-3 mb-4" key={index}> 
                            <div className="p-4 rounded bg-light border">
                                <h4 className="text-primary"> {product.pname} </h4>
                                <p> Rs. {product.price} </p>
                                <p> Sold By : {product.seller} </p>
                                <button 
                                className="btn btn-danger btn-sm" 
                                onClick={delpro.bind(this, index)}> Delete
                                </button>
                            </div>
                            
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Myproduct;