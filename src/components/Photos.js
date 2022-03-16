import React, { useEffect, useState } from 'react';
import axios, { Axios } from 'axios';
export const Photos = () => {
    const [Photos, setPhotos] = useState([]);
    const [title,setTitle] = useState("");
    const [url,seturl] = useState(""); 
     const [thumbnailurl,setthumbnailurl] = useState("");
    useEffect(() => {
        getData()
    }, []);

    const getData = () => {
        var config = {
            method: 'GET',
            url: "https://jsonplaceholder.typicode.com/photos"
        }
        axios(config).then((Response) => {
            console.log(Response.data)
            setPhotos(Response.data)

        })
            .catch((error) => {
                alert(error)
            })
    }

    const postData = () => {
        var body =  {
            email: email,
            password: password
            url: "https://st2.depositphotos.com/4684319/7048/i/600/depositphotos_70486253-stock-photo-smiling-cat-cats.jpg",
            thumbnailUrl: "https://st2.depositphotos.com/4684319/7048/i/600/depositphotos_70486253-stock-photo-smiling-cat-cats.jpg", 
          }

          var jsonObject = JSON.stringify(body)
  
        var config = {
            method:'POST',
            url: 'https://jsonplaceholder.typicode.com/photos',
            header:{
                ContentType:"application/json"
            },
            data:jsonObject
            
        }
        axios(config).then((response)=>{
           console.log(response.data)
           //setTodos(response.data)
           //console.log(users)        
        }).catch((error)=>{
          alert(error)
        })
     }    

     const patchData = () => {
        var body =  {
            title: title,
            url: "https://st2.depositphotos.com/4684319/7048/i/600/depositphotos_70486253-stock-photo-smiling-cat-cats.jpg",
            thumbnailUrl: "https://st2.depositphotos.com/4684319/7048/i/600/depositphotos_70486253-stock-photo-smiling-cat-cats.jpg", 
          
          }

          var jsonObject = JSON.stringify(body)
  
        var config = {
            method:'PATCH',
            url: 'https://jsonplaceholder.typicode.com/todos/'+ title,
            header:{
                ContentType:"application/json"
            },
            data:jsonObject
        }
        axios(config).then((response)=>{
           console.log(response.data)
           //setTodos(response.data)
           //console.log(users)        
        }).catch((error)=>{
          alert(error)
        })
     } 

     const deleteData = () => {

        var config = {
            method:'DELETE',
            url: 'https://jsonplaceholder.typicode.com/todos/' + title,
            header:{
                ContentType:"application/json"
            },
        }
        axios(config).then((response)=>{
           console.log(response.data)
           //setTodos(response.data)
           //console.log(users)        
        }).catch((error)=>{
          alert(error)
        })
     } 


    return <div > <input type="text" placeholder="Enter Img" onChange={(e) => setTitle(e.target.value)}/>
    <button style={{color:"whitesmoke", backgroundColor:"black"}} onClick={postData}>   Save photo   </button>
    <button style={{color:"white", backgroundColor:"green"}} onClick={patchData}>     Edit photo     </button>
    <button style={{color:"white", backgroundColor:"red"}} onClick={deleteData}>     Delete photo    </button>

    {
        Photos.map((Photo) => {
            return <div style={{ margin:"50px" , textAlign:"center",  justifyContent: "center" , color: "whitesmoke", backgroundColor: "black", border: "8px", fontFamily: "sans-serif", borderRadius: "4px", borderColor: "red" }}>
             
                <img src={Photo.url}  height="100px"  width="100px" /> 
                <h4>{Photo.title} </h4>
                <img src={Photo.thumbnailUrl}  height="100px"  width="100px"/>
            </div>
        })
    }
    </div>;
};
