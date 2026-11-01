import {useState} from 'react';

const HookOne = () =>{
    let city = ['Banglore', 'Mumbai'];
    const[a, b] = city;

    console.log(useState()); // [undefined, ƒ()]

    let[x, y] = useState(1000);  // x = ?, y = ?
    let[msg, changeMsg] = useState(" Welcome back...");

    const one = () =>{
        y(x + 10);
        changeMsg("Wow... Value is increasing.....");
    }
    const two = () =>{
        y(x - 10);
        changeMsg("Wow... Value is decreasing.....");
    }

    const three = () =>{
        updateBook(booklist = [...booklist, 'Text Book']);
    }

    let[booklist, updateBook] = useState(['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'PHP'])

    return(
        <section>
            <h1> How to Use useState() hook ?</h1>
            <p> {a}, {b}</p>

            <button onClick={one}> Click to + By 10</button>
            <button onClick={two}> Click to - By 10</button>
            <button onClick={three}> Add Book</button>

            <p> {x}</p>
            <p> {msg}</p>

            {
                booklist.map((bookname, index) => {
                    return(
                        <p key={index}>{bookname}</p>
                    )
                })
            }
        </section>
    )
}

export default HookOne;