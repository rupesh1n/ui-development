const Mycompany = () =>{
    let company = ['Cognizant', 'Wipro', 'Cognizant', 'TCS', 'LG', 'Samsung', 'Infosys'];
    return(
        <section>
            <h1> List of Companies : {company.length}</h1>
            {
                company.map((cityName, index) =>{
                    return(
                        <p key={index} className="four">{cityName} </p>
                    )
                })
            }
        </section>
    )
    
}
export default Mycompany