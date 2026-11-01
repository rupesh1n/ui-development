import { useState, useEffect} from 'react';

const ManageUser = () =>{
    let[alluser, setUser] = useState( [] );
    const token = localStorage.getItem("token");

    const getUser = () =>{
        let postdata = {
            headers:{'authorization':token},
            "method":"get"
        };

        fetch("http://localhost:1111/user", postdata)
        .then(response =>response.json())
        .then(userArray=>{
            setUser(userArray);
        })
    }
    useEffect(()=>{
        getUser();
    }, []);


    let[fullname, setName] = useState("");
    let[mobileno, setMobile] = useState("");
    let[emailid, setEmail] = useState("");
    let[fulladdress, setAddress] = useState("");



    const save = () =>{
        let url = "http://localhost:1111/user";
        let mymethod = "post";
        let newuser = {
            "name":fullname,
            "email":emailid,
            "mobile":mobileno,
            "address":fulladdress
        }
        if(userid !=""){
            mymethod = "put";
            newuser["id"] = userid;
            setid("");
        }

      let postdata = {
        headers:{'content-type':'application/json', 'authorization':token},
        method:mymethod,
        body:JSON.stringify(newuser)
      }

      fetch(url, postdata)
      .then(response=> response.json())
      .then(info=>{
            alert(info.message);
            getUser();
            setName("");
            setMobile("");
            setEmail("");
            setAddress("");
      })
    }

    const deluser = (id) =>{
        let url = "http://localhost:1111/user/"+id;
        let postdata = {
            headers:{'authorization':token},
            "method":"delete"
        };

        fetch(url, postdata)
        .then(response=>response.json())
        .then(info=>{
            alert( info.message );
            getUser(); // reload the list after delete
        })
    }

    let[userid, setid] = useState("");
    let[btntext, changeText] = useState("Save User")
    const edituser = (user) =>{
        setid(user._id);
        changeText("Update User");

        setName(user.fname);
        setMobile(user.mobile);
        setEmail(user.email);
        setAddress(user.address);
    }

    return(
        <div className='container mt-4'>
            <div className='row'>
                <div className='col-xl-3'>
                    <div className='p-3 shadow-lg'>
                        <div className='mb-4'>
                            <label> Full Name </label>
                            <input type="text" className='form-control' onChange={obj=>setName(obj.target.value)} 
                            value={fullname}/>
                        </div>

                        <div className='mb-4'>
                            <label> Mobile No </label>
                            <input type="text" className='form-control' onChange={obj=>setMobile(obj.target.value)}
                            value={mobileno}/>
                        </div>

                        <div className='mb-4'>
                            <label> e-Mail Id </label>
                            <input type="text" className='form-control' onChange={obj=>setEmail(obj.target.value)}
                            value={emailid}/>
                        </div>

                        <div className='mb-4'>
                            <label> Address </label>
                            <textarea className='form-control' onChange={obj=>setAddress(obj.target.value)} value={fulladdress}></textarea>
                        </div>

                        <div className='text-center'>
                            <button className='btn btn-primary' onClick={save}> {btntext} </button>
                        </div>
                    </div>
                </div>
                <div className='col-xl-9'>
                    <h3 className='text-center mb-3'> Manage User : { alluser.length } </h3>
                    <table className='table table-bordered'>
                        <thead>
                            <tr>
                               
                                <th> Full Name </th>
                                <th> Mobie No </th>
                                <th> e-Mail id </th>
                                <th> Address </th>
                                <th colSpan={2}> Action </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                alluser.map((user, index)=>{
                                    return(
                                        <tr key={index}>
                                            
                                            <td> {user.fname} </td>
                                            <td> {user.mobile} </td>
                                            <td> {user.email} </td>
                                            <td> {user.address} </td>
                                            <td> 
                                                <button 
                                                    onClick={obj=>edituser(user)}
                                                    className='btn btn-info btn-sm'> Edit 
                                                </button> 
                                            </td>
                                            <td> 
                                                <button 
                                                    className='btn btn-warning btn-sm'
                                                    onClick={obj=>deluser(user._id)}> Delete 
                                                </button> 
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ManageUser;