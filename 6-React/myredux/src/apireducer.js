
const Apilist = (state=[], action) =>{
    let data = Object.assign([], state);
    if (action.type === "saveblog"){
        data = action.allblog;  // assign 100 blogs to data array
    }
    return data;
}

export default Apilist;