import { Link } from "react-router-dom"

const MyFooter = () =>{
    return(
        <footer className="bg-dark p-5 text-white mt-5">
            <div className="container">
                <div className="row"> 
                    <div className="col-xl-4">
                        <h5 className="text-warning"> About Us </h5>
                        <p>
                            asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd
                            asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd
                            asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd
                            asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd
                        </p>
                    </div>

                    <div className="col-xl-5">
                        <h5 className="text-warning"> Our Address </h5>
                        <p> #41, 2nd Cross, Outer ring road marathalli, Banglore 560037 </p>
                        <p> e-Mail - contact@urwebsite.com</p>
                        <p> Mobile - +91-9980006790</p>
                    </div>

                    <div className="col-xl-3">
                        <h5 className="text-warning"> In Social Media </h5>
                        <p><i className="fab fa-facebook fa-lg"></i> www.facebook.com</p>
                        <p><i className="fab fa-twitter fa-lg"></i> www.twitter.com</p>
                        <p><i className="fab fa-linkedin fa-lg"></i> www.linkedin.com</p>
                        <p><i className="fab fa-instagram fa-lg"></i> www.instagram.com</p>
                    </div>

                </div>
            </div>

        </footer>
    )
}

export default MyFooter;