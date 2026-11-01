import { useState } from "react";

const HookThree = () =>{

    let [userlist, updateUser] = useState(['Alex', 'Mohit', 'Punit']);

    const save = () =>{
       // updateUser(userlist = [...userlist, "Test User"]); // a = a+b
                                                           // userlist = userlist + newuser 
        // updateUser(userlist => [...userlist, "Test User"]);
        updateUser([...userlist, newuser]); // userlist += newuser
        pickuser("");// empty the newuser
    }
    let[newuser, pickuser] = useState("Test User");

    const delitem = (index) =>{
        userlist.splice(index, 1); // delete element from list
        updateUser([...userlist]); // update remaining element in state
    }

    return(
        <section>
            <h1> Add, List, Delete Using useState(), [...] spread operator</h1>
            <p align="center"> {newuser} </p>
            <div align="center">
                Enter Full Name : <input type="text" onChange={obj=>pickuser(obj.target.value)} value={newuser} />
                <button onClick={save}> Add User</button>
            </div>

            {
                userlist.map((name, index) =>{
                    return(
                        <p className="four" key={index}>{name}
                            <br/>
                            <button onClick={delitem.bind(this, index)}> Delete 1</button>
                            <button onClick={obj=> delitem(index)}> Delete 2</button>
                        </p>
                            
                    )
                })
            }
        </section>
    )
}

export default HookThree;