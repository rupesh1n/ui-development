const Mycustomer = () =>{
    let customer = [
        {name:"Ganesh", address:"Banglore", mobile:"7891239078", email:"ganesh@gmail.com"},
        {name:"Mahesh", address:"Patna", mobile:"2391239078", email:"mahesh@gmail.com"},
        {name:"Ramesh", address:"Kolkata", mobile:"9091239078", email:"ramesh@gmail.com"},
        {name:"Kalpesh", address:"Mumbai", mobile:"6791239078", email:"kalpesh@gmail.com"},
        {name:"Lakshmi", address:"Banglore", mobile:"7891239078", email:"lakshmi@gmail.com"},
        {name:"Shiva", address:"Hyderabad", mobile:"7891239078", email:"shiva@gmail.com"},
        {name:"Rajesh", address:"Delhi", mobile:"7891239078", email:"rajesh@gmail.com"},
    ];
    return(
        <section>
            <h1> Our Customer </h1>
            <table id="datagrid">
                <thead>
                    <tr>
                        <th> Sl No</th>
                        <th> Name </th>
                        <th> Address </th>
                        <th> Mobile </th>
                        <th> E-mail </th>
                    </tr>
                </thead>

                <tbody>
                    { customer.map((customerDetails, index)=>{
                        return(
                            <tr key={index}>
                                <td> {index}</td>
                                <td> {customerDetails.name}</td>
                                <td> {customerDetails.address}</td>
                                <td> {customerDetails.mobile}</td>
                                <td> {customerDetails.email}</td>
                            </tr>
                        )
                    }
                    )}
                </tbody>
            </table>
        </section>
    )
    
}
export default Mycustomer