
const Myuser = () =>{
    let alluser = ['Alex', 'Mohit', 'Punit', 'Ganesh','Ramesh','Prakash','Akhil', 'Rudra', 'Malik'];
    return (
        <section>
            <h1> Manage User : { alluser.length } </h1>
            
            {
                alluser.map((fullname, index)=>{
                    return(
                        <p className="four" key={index}> {index + 1} # {fullname} </p>
                    )
                })
            }
        </section>
    )
}

export default Myuser;