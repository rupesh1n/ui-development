
function useLogout() {

    const token = localStorage.getItem("token");

   
        let postdata = {
            headers: { 'authorization': token },
            "method": "post"
        };

        fetch("http://localhost:1111/myadmin/logout", postdata)
            .then(response => response.json())
            .then(info => {
                alert(info.message);
                localStorage.clear();
                window.location.reload();
            })
    }
export default useLogout;