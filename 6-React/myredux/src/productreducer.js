
const Productlist = (state = [], action) => {

    let data = Object.assign([], state);
    if (action.type === "addproduct") {
        data.push(action.bdetails);
    }
     if (action.type === "removeproduct"){
        data.splice(action.pindex, 1); // remove element from array
     }

    return data;
}

export default Productlist;