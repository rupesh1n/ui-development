import { useState } from "react";

const CreateAccount = ()=>{

    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");

    let [emailError, setEmailError] = useState("");
    let [passwordError, setPasswordError] = useState("");

    let [message, setMessage] = useState("Enter Vender Details");
    let[mybtn, handlebtn] = useState(false);

    const registrationCheck = () => {
        let formstatus = true;
        let epattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        //              mohit.mca@gmail.com
        //              username + @ + domainname + . +extension

        if (!epattern.test(email)) {
            setEmailError("Invalid Email id");
            formstatus = false;
        } else {
            setEmailError("");
        }

        if (password == "") {
            setPasswordError("Invalid Password !");
            formstatus = false;
        } else {
            setPasswordError("");
        }

        if (formstatus == false) {
            setMessage("Please fill the details !")
        } else {
            handlebtn(true);
            setMessage("Please wait Processing...")
        }
    }

    return(
        <section className="p-5">
        <div className="container">
            <div className="row">
                <div className="col-xl-4"></div>
                <div className="col-xl-4">
                <p className="text-center text-primary">{message}</p>
                    <div className="card border-0 shadow-lg">
                        <div className="card-header bg-danger text-white"> <i className="fa fa-user-plus"></i> Vender Create Account</div>
                        <div className="card-body">
                            <div className="mb-3">
                                <label> Your Full Name</label>
                                <input type="text" className="form-control"/>
                            </div>
                            <div className="mb-3">
                                <label> Your e-Mail id</label>
                                <input type="email" className="form-control" onChange={obj => setEmail(obj.target.value)} />
                                <small className="text-danger">{emailError}</small>

                            </div>
                            <div className="mb-3">
                                <label> Your Password</label>
                                <input type="password" className="form-control" onChange={obj => setPassword(obj.target.value)} />
                                    <small className="text-danger">{passwordError}</small>

                            </div>
                            <div className="mb-3">
                                <label> Your Mobile No</label>
                                <input type="number" className="form-control"/>

                            </div>

                        </div>
                        <div className="card-footer text-center">
                            <button disabled={mybtn}  className="btn btn-danger" onClick={registrationCheck}> Register <i className="fa fa-user-plus"></i> </button>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4"></div>
            </div>
        </div>
    </section>
    )

}
export default CreateAccount;