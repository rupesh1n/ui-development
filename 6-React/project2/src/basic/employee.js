const Myemployee = () =>{
    let employeeDetails = [
        {name:"Ganesh", address:"Banglore", mobile:"7891239078", email:"ganesh@gmail.com", pic:"default_profile.png"},
        {name:"Mahesh", address:"Patna", mobile:"2391239078", email:"mahesh@gmail.com", pic:"default_profile.png"},
        {name:"Ramesh", address:"Kolkata", mobile:"9091239078", email:"ramesh@gmail.com", pic:"default_profile.png"},
        {name:"Kalpesh", address:"Mumbai", mobile:"6791239078", email:"kalpesh@gmail.com", pic:"default_profile.png"},
        {name:"Lakshmi", address:"Banglore", mobile:"7891239078", email:"lakshmi@gmail.com", pic:"default_profile.png"},
        {name:"Shiva", address:"Hyderabad", mobile:"7891239078", email:"shiva@gmail.com", pic:"default_profile.png"},
        {name:"Rajesh", address:"Delhi", mobile:"7891239078", email:"rajesh@gmail.com", pic:"default_profile.png"},
    ];
    return(
        <section>
            <h1> Our Employee </h1>
            <table id="datagrid">
                <thead>
                    <tr>
                        <th> Sl No</th>
                        <th> Image</th>
                        <th> Name </th>
                        <th> Address </th>
                        <th> Mobile </th>
                        <th> E-mail </th>
                    </tr>
                </thead>

                <tbody>
                    { employeeDetails.map((employee, index)=>{
                        return(
                            <tr key={index}>
                                <td> {index}</td>
                                <td>  <img src={employee.pic} className="homepic"/> </td>
                                <td> {employee.name}</td>
                                <td> {employee.address}</td>
                                <td> {employee.mobile}</td>
                                <td> {employee.email}</td>
                            </tr>
                        )
                    }
                    )}
                </tbody>
            </table>
        </section>
    )
    
}
export default Myemployee