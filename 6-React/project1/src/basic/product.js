const Myproduct = () =>{

    let allproduct = [
        {pname:"Apple", customer:['Alex', 'Sumit', 'Manoj']},
        {pname:"Mango", customer:['Sumit', 'Ganesh']},
        {pname:"Orange", customer:['Ali', 'Suraj', 'Manoj Siyaram', 'Ravi']},
        {pname:"Milk", customer:['Suresh', 'Alex', 'Mohit Enginner']}
    ];
    return(
        <section>
            <h1> Manage Product : {allproduct.length}</h1>
            {
                allproduct.map((product, index) =>{
                    return(
                        <fieldset key={index}>
                            <legend> {product.pname}</legend>
                            {
                                product.customer.map((customerName, index2) =>{
                                    return(
                                        <p key={index2}>{customerName}</p>
                                    )
                                })
                            }
                        </fieldset>
                    )
                })
            }
        </section>
    )
}

export default Myproduct;