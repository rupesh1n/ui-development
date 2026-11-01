const Mybook = () =>{
    let allbook = [     
        {bookname:"HTML", cost:3000, page:400, author:"Alex"},
        {bookname:"CSS", cost:2000, page:200, author:"Alex"},
        {bookname:"Bootstrap", cost:4000, page:300, author:"Alex"},
        {bookname:"JavaScript", cost:8000, page:400, author:"Alex"},
        ];
    return(
        <section>
            <h1> Manage Book : {allbook.length} </h1>
            
            <table id="datagrid">
                <thead>
                    <tr>
                        <th> Sl No</th>
                        <th> Book Name </th>
                        <th> Price </th>
                        <th> Pages </th>
                        <th> Author </th>
                    </tr>
                </thead>

                <tbody>
                    { allbook.map((book, index)=>{
                        return(
                            <tr key={index}>
                                <td> {index + 1}</td>
                                <td> {book.bookname}</td>
                                <td> {book.cost}</td>
                                <td> {book.page}</td>
                                <td> {book.author}</td>
                            </tr>
                        )
                    }
                    )}
                </tbody>
            </table>
        </section>
    )
}

export default Mybook;