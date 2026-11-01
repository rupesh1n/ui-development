import { useState, useEffect } from "react";

const UserList = () =>{
    let[alluser, updateUser] = useState([]);

    const getUser = () =>{
        fetch("http://localhost:1234/userapi")
        .then(response => response.json())
        .then(userArray =>{
            updateUser(userArray);
        })
    }

    useEffect( ()=>{
        getUser();
    }, []);

    let[uname, setUserName] = useState("");
    let[umobile, setUserMobile] = useState("");
    let[uedu, setUserEdu] = useState("");

    const save = () =>{

        if(userid != ""){
            updateUserInfo();

        } else{
            let url = "http://localhost:1234/userapi";
            let newuser = {fullname:uname, mobile:umobile, edu:uedu};
            let postdata = {
                headers:{'Content-Type' : 'application/json'},
                method:"post",
                body:JSON.stringify(newuser)
            }
            fetch(url, postdata)
            .then(response=>response.json())
            .then(userArray=>{
                getUser();
                setUserName("");
                setUserMobile("");
                setUserEdu("");
            })
        }
    }

    const updateUserInfo = () =>{
        let url = "http://localhost:1234/userapi/"+userid;
            let newuser = {fullname:uname, mobile:umobile, edu:uedu};
            let postdata = {
                headers:{'Content-Type' : 'application/json'},
                method:"put",
                body:JSON.stringify(newuser)
            }
            fetch(url, postdata)
            .then(response=>response.json())
            .then(userArray=>{
                getUser();
                setUserName("");
                setUserMobile("");
                setUserEdu("");
                updateUserid(""); // reset userid to empty so that next time it will allow to add new User
                alert(uname + " Updated Successfully !");
            })
    }

    const deluser = (id) =>{
        let url = "http://localhost:1234/userapi/"+id;
        let postdata = {method:"delete"};
        fetch(url, postdata)
        .then(response=>response.json())
        .then(userinfo=>{
            alert(userinfo.fullname + " - Delete Successfully !");
            getUser(); // to reload the list
        })
    
     }

    
     let[userid, updateUserid] = useState("");
     const editUser = (user) =>{
        setUserName(user.fullname);
        setUserMobile(user.mobile);
        setUserEdu(user.edu);
        updateUserid(user.id);
     }

    return(
        <section>
            <h1> Enter User Details </h1>
            <div align="center">
                <input type="text" placeholder="User Name" onChange={obj=>setUserName(obj.target.value)} value={uname}/>
                <input type="text" placeholder="User Mobile" onChange={obj=>setUserMobile(obj.target.value)} value={umobile}/>
                <input type="text" placeholder="User Qualification" onChange={obj=>setUserEdu(obj.target.value)} value={uedu}/>
                <button onClick={save}> Save User </button>
            </div>
            <p align="center"> User List : {alluser.length} - {userid}</p>
            <table id="datagrid">
                <thead>
                    <tr>
                        <th> User Id </th>
                        <th> User Name </th>
                        <th> Mobile No.</th>
                        <th> Qualification </th>
                        <th> Edit </th>
                        <th> Delete </th>
                    </tr>
                </thead>

                <tbody>
                    {
                        alluser.map((user, index) =>{
                            return(
                                <tr key={index}>
                                    <td>{user.id}</td>
                                    <td>{user.fullname}</td>
                                    <td>{user.mobile}</td>
                                    <td>{user.edu}</td>
                                    <td><button onClick={editUser.bind(this, user)}> Edit </button></td>
                                    <td><button onClick={deluser.bind(this, user.id)}> Delete </button></td>
                                </tr>
                            )

                        })
                        
                    }
                </tbody>
            </table>
        </section>
    )
}

export default UserList;