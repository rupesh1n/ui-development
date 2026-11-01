import ManageUser from "./user";
import useLogout from "./logout";

function App() {
  return (
    <>
      <div className="container mt-3 mb-4">
          <div className="row">
              <div className="col-xl-6"> Welcome : { localStorage.getItem("name") } </div>
              <div className="col-xl-6 text-end">  
                  <button className="btn btn-danger" onClick={useLogout}> Logout </button>  
              </div>
          </div>
      </div>
      <ManageUser/>
    </>
  );
}

export default App;