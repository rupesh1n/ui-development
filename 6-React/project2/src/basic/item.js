const Myitem = () =>{
    let allTechnology = [
        {pname:"Web", tools:['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'React.js']},
        {pname:"Android", tools:['Java', 'Kotlin', 'Android Studio']},
        {pname:"iOS", tools:['C++', 'Swift', 'Xcode']},
        {pname:"ReactNative", tools:['JavaScript', 'ReactNative']},
    ];
    return(
        <section>
            <h1> List of Items </h1>
            {
                allTechnology.map((product, index) =>{
                    return(
                        <fieldset key={index}>
                            <legend> {product.pname}</legend>
                            {
                                product.tools.map((technology, index2) =>{
                                    return(
                                        <p key={index2}>{technology}</p>
                                    )
                                })
                            }
                        </fieldset>
                    )
                })
            }
        </section>
    )
    
}
export default Myitem