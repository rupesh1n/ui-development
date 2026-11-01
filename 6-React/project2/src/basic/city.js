const Mycity = () =>{
    let city = ['Banglore', 'Kolkata', 'Mumbai', 'Delhi', 'Patna', 'Chennai', 'Hyderabad'];
    return(
        <section>
            <h1> Numbers of City : {city.length}</h1>
            {
                city.map((cityName, index) =>{
                    return(<p className="four" key={index}>{cityName}</p>)
                })
            }

        </section>
    )
    
}

export default Mycity;