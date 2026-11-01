import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";// useSelector to bring data from Redux // useDispatch to send data to store

const Mybook = () =>{

    let allbook = useSelector(state => state.Booklist);
    let[newbook, pickBook] = useState('');

    const dispatch = useDispatch();
    const save =() =>{
       let mydata = {bookname:newbook, type:"addbook"};
       dispatch(mydata); // send data to store in redux
       pickBook("");
    }

    const delbook = (index) =>{
        let mydata = {bookindex:index, type:"removebook"};
        dispatch(mydata); // send data to store in redux // dispacting the action
    }

    return(
        <div className="container mt-4">
            <div className="row mb-4">
                <div className="col-lg-12 text-center">
                    <h3 className="text-center mb-4"> Manage Book : {allbook.length} </h3>
                    Enter Book Name : <input type="text" className="m-3"
                    onChange={obj=>pickBook(obj.target.value)}
                    value={newbook}/>
                    <button className="btn btn-info m-3" onClick={save}> Save </button>
                </div>
            </div>
            <div className="row">
            {
                    allbook.map((bookname, index)=>{
                        return(
                            <div className="col-lg-3 mb-3" key={index}>
                                <p className="p-3 bg-info rounded text-center text-white"> 
                                { bookname } 
                                <br/>
                                <button className="btn btn-danger btn-sm mt-3"
                                onClick={delbook.bind(this, index)}> Delete </button>
                                </p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Mybook;