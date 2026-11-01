import { useEffect, useState } from "react";

const MyApiOne = () =>{
    let[citylist, updateCity] = useState([]);
    const getCity = () =>{
       fetch("city.json")
       .then(response=>response.json())
       .then(cityArray =>{
        updateCity(cityArray);
       })
    }

    let[bloglist, updateBlog] = useState([]);
    const getBlog = ()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(blogArray =>{
            updateBlog(blogArray);
        })
    }

    let[postlist, updatePost] = useState([]);
    const getPost = () =>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(postArray =>{
            updatePost(postArray.slice(0, 10));
        })
    }

    let[todolist, updateTodo] = useState([]);
    const getTodo = () =>{
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then(response => response.json())
        .then(todoArray =>{
            updateTodo(todoArray.slice(0, 10));
        })
    }

    useEffect(()=>{
        getBlog();
        getPost();
        getTodo();
    },[]); // [] is fot to prevent from infinite list

    return(
        <section>
            <h1> useState(), fetch() api </h1>
            <div>
                <button onClick={getCity}> Show City </button>
            </div>

            <fieldset>
                <legend> City : {citylist.length} </legend>
                {
                    citylist.map((cityname, index)=>{
                        return(
                            <p key={index}> {cityname}</p>
                        )
                    })
                }
            </fieldset>
            <fieldset>
                <legend> Blogs : {bloglist.length}</legend>
                {
                    bloglist.map((blog, index)=>{
                        return(
                            <p key={index}> {blog.name}</p>
                        )
                    })
                }
            </fieldset>

            <fieldset>
                <legend> Posts : {postlist.length}</legend>
                {
                    postlist.map((post, index)=>{
                        return(
                            <p key={index}> {post?.title}</p>
                        )
                    })
                }
            </fieldset>

            <fieldset>
                <legend> Todo : {todolist.length}</legend>
                {
                    todolist.map((todo, index)=>{
                        return(
                            
                            <p key={index}> {todo?.title} , {todo?.completed.toString()}</p>
                            
                            
                        )
                    })
                }
            </fieldset>
        </section>
    )
}

export default MyApiOne;