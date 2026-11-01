import { useState, useEffect} from "react";
import { useDispatch } from "react-redux";

const Myapi = () =>{
    let[bloglist, updateBlog] = useState([]);

    const getBlog = ()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response=>response.json())
        .then(blogArray =>{
            updateBlog(blogArray);
        })

    }

    useEffect(()=>{
        getBlog();
    }, []);

    const dispatch = useDispatch();
    const save = ()=>{
        let mydata = {allblog:bloglist, type:"saveblog"};
        dispatch(mydata);
        alert("Blog list sent to redux ");
    }

    return(
        <div className="container mt-4">
            <div className="row">
                <div className="col-lg-12 mb-5 text-center">
                    <h3 className="text-center mb-4"> Manage Api Data  : {bloglist.length} </h3>
                    <button className="btn btn-danger m-4" onClick={save}> Send To Redux </button>
                </div>
                {
                    bloglist.map((blog, index)=>{
                        return(
                            <div className="col-lg-3 mb-4" key={index}>
                                <p className="p-3 shadow-lg rounded">{blog.body}</p>

                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Myapi;