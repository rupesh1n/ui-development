import { useState, useEffect } from "react";

const BookList = () =>{
    let[allbook, updateBook] = useState([]);

    const getbook = () =>{
        fetch("http://localhost:1234/bookapi")
        .then(response=> response.json())
        .then(bookArray =>{
            
            updateBook(bookArray);
        })
    }

    useEffect(()=>{
        getbook();
    }, []);

    let[bname, pickName] = useState("");
    let[bprice, pickPrice] = useState("");
    let[bqty, pickQty] = useState("");

    const save = () => {
        if(bookid != ""){
            updateBookInfo();
        } else {
            let url = "http://localhost:1234/bookapi";
            let newbook = {bookname:bname, price:bprice, qty:bqty};
            let postdata = {
                headers:{'Content-Type' : 'application/json'},
                method:"post",
                body:JSON.stringify(newbook)
            }
            fetch(url, postdata)
            .then(response=>response.json())
            .then(bookinfo =>{
                getbook(); // reload the list after adding new book
                pickName("");
                pickPrice("");
                pickQty("");
            })
        }
        
    }

    const updateBookInfo = () =>{
        let url = "http://localhost:1234/bookapi/"+bookid;
            let newbook = {bookname:bname, price:bprice, qty:bqty};
            let postdata = {
                headers:{'Content-Type' : 'application/json'},
                method:"put",
                body:JSON.stringify(newbook)
            }
            fetch(url, postdata)
            .then(response=>response.json())
            .then(bookinfo =>{
                getbook(); // reload the list after adding new book
                pickName("");
                pickPrice("");
                pickQty("");
                updateBookid(""); // reset bookid to empty so that next time it will allow to add new book
                alert(bname + " Updated Successfully !");
            })
    }

    const delbook = (id) =>{
        let url = "http://localhost:1234/bookapi/"+id;
        let postdata = {method:"delete"};
        fetch(url, postdata)
        .then(response=>response.json())
        .then(bookinfo=>{
            alert(bookinfo.bookname + " - Delete Successfully !");
            getbook(); // to reload the list
        })

    }
    let[bookid, updateBookid] = useState("");
    const editBook = (book) =>{
        pickName(book.bookname);
        pickPrice(book.price);
        pickQty(book.qty);
        updateBookid(book.id);
    }

    return(
        <section>
            <h1> Enter Book Details </h1>
            <div align="center">
                <input type="text" placeholder="Book Name"  onChange={obj=>pickName(obj.target.value)} value={bname}/>
                <input type="text" placeholder="Book Price"  onChange={obj=>pickPrice(obj.target.value)} value={bprice}/>
                <input type="text" placeholder="Book Quantity"  onChange={obj=>pickQty(obj.target.value)} value={bqty}/>
                <button onClick={save}> Save Book </button>
            </div>

            <p align="center"> Book List : {allbook.length} - {bookid}</p>

            <table id="datagrid">
                <thead>
                    <tr>
                        <th> Book id </th>
                        <th> Book Name </th>
                        <th> Book Price </th>
                        <th> Book Quantity </th>
                        <th> Edit </th>
                        <th> Delete </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allbook.map((book, index) =>{
                            return(
                                <tr key={index}>
                                    <td>{book.id}</td>
                                    <td>{book.bookname}</td>
                                    <td>{book.price}</td>
                                    <td>{book.qty}</td>
                                    <td><button onClick={editBook.bind(this, book)}> Edit </button></td>
                                    <td><button onClick={delbook.bind(this, book.id)}> Delete </button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </section>
    )
}
export default BookList;
