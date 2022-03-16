import React,{useEffect,useState} from 'react';
import axios from 'axios';

export const Users = () => {
 
    const [users,setUsers] = useState([])

    useEffect(() => {
        getData()
    },[])

    const getData = () => {
       var config = {
           method:'GET',
           url: 'https://jsonplaceholder.typicode.com/users/'
       }
       axios(config).then((response)=>{
          console.log(response.data)
          setUsers(response.data)
          //console.log(users)        
       }).catch((error)=>{
         alert(error)
       })
    }     

  return <div>
      {
          users.map((user)=>{ 
             return (<div>
             <h4>-------------</h4>
                 <h4> {user.name} </h4>
                 <p>{user.email}</p>
              <h4>-------------</h4>
             </div>)
          })
      }
  </div>;
};
