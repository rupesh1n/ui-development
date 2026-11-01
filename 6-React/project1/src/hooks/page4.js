import { useState } from "react";

const HookFour = () =>{

    let[booklist, updateBook] = useState([{banme:"HTML", bprice:5000, bqty:10, bauthor:'Alex'}]);

    let[bookname, pickName] = useState("");
    let[bookprice, pickPrice] = useState("");
    let[bquantity, pickQty] = useState("");
    let[bookauthor, pickAuthor] = useState("");
    let[message, pickMessage] = useState("Enter Book Details");

    const save = () =>{
       // alert(bookname + bookprice + bquantity + bookauthor);
       let newbook = {banme:bookname, bprice:bookprice, bqty:bquantity, bauthor:bookauthor};
       
       if(bookindex == -1){
        updateBook(booklist = [...booklist, newbook]);
        pickMessage(bookname + " - Added Successfully !");
       } else {
        booklist[bookindex] = newbook; // Update  book details
        updateBook(booklist = [...booklist]);
        pickMessage(bookname + " - Updated Successfully !");
        updateindex(-1);
       }
       
       pickName("");
       pickPrice("");
       pickQty("");
       pickAuthor("");
    }

    const delitem = (index, itemname) =>{
        booklist.splice(index, 1);
        updateBook([...booklist]);
        pickMessage(itemname + " - Deleted Successfully !");
    }

    const editbook = (book, index) => {
        updateindex(index);
        pickName(book.banme);
        pickPrice(book.bprice);
        pickQty(book.bqty);
        pickAuthor(book.bauthor);
    }

    let [bookindex, updateindex] = useState(-1);

    return(
        <section>
            <h1> Array of object Add, List, Delete, Edit - (CRUD) : {bookindex} </h1>
            <p align="center">{message}</p>
            <div align="center">
                <input type="text" placeholder="Book Name" onChange={obj=>pickName(obj.target.value)} value={bookname}/>
                <input type="text" placeholder="Price" onChange={obj=>pickPrice(obj.target.value)} value={bookprice}/>
                <input type="text" placeholder="Quantity" onChange={obj=>pickQty(obj.target.value)} value={bquantity}/>
                <input type="text" placeholder="Author" onChange={obj=>pickAuthor(obj.target.value)} value={bookauthor}/>
                <button onClick={save}> Save </button>
            </div>
            <p align="center"> Total Book : {booklist.length}</p>
            <table id="datagrid">
                <thead>
                    <tr>
                        <th> Sl No </th>
                        <th> Book Name </th>
                        <th> Book Price </th>
                        <th> Book Quantity </th>
                        <th> Book Author </th>
                        <th> Edit </th>
                        <th> Delete </th>
                    </tr>
                </thead>
                {
                    booklist.map((book, index)=>{
                        return(
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{book.banme}</td>
                                <td>{book.bprice}</td>
                                <td>{book.bqty}</td>
                                <td>{book.bauthor}</td>
                                <td><button onClick={editbook.bind(this, book, index)} > Edit </button></td>
                                <td><button onClick={delitem.bind(this, index, book.banme)} > Delete </button></td>
                            </tr>
                        )
                    })
                }
            </table>
        </section>
    )
}

export default HookFour;