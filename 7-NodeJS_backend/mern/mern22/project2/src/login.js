import { useState } from 'react';
import axios from 'axios';


const Login = () =>{
    let[info, setInfo] = useState({});
    
    const pickValue = (obj) =>{
        info[obj.target.name] = obj.target.value;
        setInfo(info);
    }   

    const loginCheck = (fromObj) =>{
        fromObj.preventDefault();

    let url = "http://localhost:1111/myadmin/login";

    axios.post(url, info)
    .then(response =>{
            if( response.data.token ){
              localStorage.setItem("token", response.data.token);
              localStorage.setItem("name", response.data.fullname);
              window.location.reload();
            }else{
                alert("Invalid or not exists..")
            }
        }).catch(function(error){
            alert("Server side error...");
        })
    }

    return(
        <section className='container mt-5'>
            <div className='row'>
                <div className='col-xl-4'></div>
                <div className='col-xl-4'>
                    <div className='p-4 shadow-lg'>
                        <h3 className='text-center mb-4'> Admin Login </h3>
                        <form onSubmit={loginCheck}>
                            <div className='mb-3'>
                                <p> e-Mail Id </p>
                                <input type="text" className='form-control' name="email" onChange={pickValue}/>
                            </div>
                            <div className='mb-3'>
                                <p> Password </p>
                                <input type="password" className='form-control' name="password" onChange={pickValue}/>
                            </div>
                            <div className='text-center'>
                                <button className='btn btn-danger'> Login </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='col-xl-4'></div>
            </div>
        </section>
    )

}

export default Login;