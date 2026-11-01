import {useState, useEffect} from 'react';

const ApiOne = () =>{
    let [allbook, setBook] = useState([]);

    const getbook = () =>{
        fetch("http://localhost:1111/booklist")
            .then(response =>response.json() )
            .then(bookArray =>{
                setBook(bookArray);
                })
    }

    useEffect(()=>{
        getbook();
    }, []);

    return (
        <section>
            <h1> Total Book : {allbook.length} </h1>
            {
                allbook.map((bookname, index)=>{
                    return(
                        <p key={index}> {bookname}</p>
                    )

                })
            }
        </section>
    )
}

export default ApiOne;