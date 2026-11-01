import { useState, useEffect } from "react";

const ProductList = () =>{
    let[allproduct, updateProduct] = useState([]);

    const getProduct = () =>{
        fetch("http://localhost:1234/productapi")
        .then(response => response.json())
        .then(productArray =>{
            updateProduct(productArray);
        })
    }

    useEffect( ()=>{
        getProduct();
    }, []);

    let[pname, setProductName] = useState("");
    let[pcost, setProductCost] = useState("");
    let[pseller, setSeller] = useState("");
    let[pstock, setStock] = useState("");

    const save = () =>{
        if(productid != ""){
            updateProductInfo();
        } else {
            let url = "http://localhost:1234/productapi";
            let newproduct = {pname:pname, cost:pcost, seller:pseller, stock:pstock};
            let postdata = {
                headers:{'Content-Type' : 'application/json'},
                method:"post",
                body:JSON.stringify(newproduct)
            }
            fetch(url, postdata)
            .then(response=>response.json())
            .then(productArray=>{
                getProduct();
                setProductName("");
                setProductCost("");
                setSeller("");
                setStock("");
            })
        }
    }

    const updateProductInfo = () =>{
        let url = "http://localhost:1234/productapi/"+productid;
        let newproduct = {pname:pname, cost:pcost, seller:pseller, stock:pstock};
        let postdata = {
            headers:{'Content-Type' : 'application/json'},
            method:"put",
            body:JSON.stringify(newproduct)
        }
        fetch(url, postdata)
        .then(response=>response.json())
        .then(productArray=>{
            getProduct();
            setProductName("");
            setProductCost("");
            setSeller("");
            setStock("");
            updateProductid(""); // reset productid to empty so that next time it will allow to add new product
            alert(pname + " Updated Successfully !");
        })
    }


    const delproduct = (id) =>{
        let url = "http://localhost:1234/productapi/"+id;
        let postdata = {method:"delete"};
        fetch(url, postdata)
        .then(response=>response.json())
        .then(productinfo=>{
            alert(productinfo.pname + " - Delete Successfully !");
            getProduct(); // to reload the list
        })
    
     }

     let[productid, updateProductid] = useState("");
     const editProduct = (product) =>{
        setProductName(product.pname);
        setProductCost(product.cost);
        setSeller(product.seller);
        setStock(product.stock);
        updateProductid(product.id);
     }

    return(
        <section>
            <h1> Enter Product Details </h1>
            <div align="center">
                <input type="text" placeholder="Product Name" onChange={obj=>setProductName(obj.target.value)} value={pname}/>
                <input type="text" placeholder="Product Cost" onChange={obj=>setProductCost(obj.target.value)} value={pcost}/>
                <input type="text" placeholder="Seller" onChange={obj=>setSeller(obj.target.value)} value={pseller}/>
                <input type="text" placeholder="Stock" onChange={obj=>setStock(obj.target.value)} value={pstock}/>
                <button onClick={save}> Save Product </button>
            </div>
            <p align="center"> Product List : {allproduct.length} - {productid}</p>
            <table id="datagrid">
                <thead>
                    <tr>
                        <th> Product Id </th>
                        <th> Product Name </th>
                        <th> Product Cost</th>
                        <th> Seller </th>
                        <th> Stock </th>
                        <th> Edit </th>
                        <th> Delete </th>
                    </tr>
                </thead>

                <tbody>
                    {
                        allproduct.map((product, index) =>{
                            return(
                                <tr key={index}>
                                    <td>{product.id}</td>
                                    <td>{product.pname}</td>
                                    <td>{product.cost}</td>
                                    <td>{product.seller}</td>
                                    <td>{product.stock}</td>
                                    <td><button onClick={editProduct.bind(this, product)}> Edit </button></td>
                                    <td><button onClick={delproduct.bind(this, product.id)}> Delete </button></td>
                                </tr>
                            )

                        })
                        
                    }
                </tbody>
            </table>
        </section>
    )
}

export default ProductList;