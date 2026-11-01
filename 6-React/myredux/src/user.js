import { useState } from "react";

const Myuser = () =>{
    let[alluser, setUser] = useState( [] );
    let[newuser, pickUser] = useState("");

    const save = () =>{
        setUser( [...alluser, newuser] );
        pickUser("");
    }

    return(
        <div className="container mt-4">
            <div className="row">
                <div className="col-lg-12">
                    <h3 className="text-center mb-4"> Manage User : { alluser.length } </h3>
                    <p className="text-center">
                        Enter Full Name : 
                        
                        <input type="text" 
                        className="m-3" 
                        onChange={obj=>pickUser( obj.target.value )} 
                        value={newuser}/>

                        <button className="btn btn-primary m-3" onClick={save}> Save </button>
                    </p>
                </div>
            </div>
            <div className="row mt-4">
                {
                    alluser.map((user, index)=>{
                        return(
                            <div className="col-lg-3 mb-3" key={index}>
                                <p className="p-3 bg-info rounded text-center text-white"> { user } </p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Myuser;