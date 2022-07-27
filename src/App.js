import {useEffect,useState} from 'react';
import UserForm from './core/UserForm'

const url = 'https://rest-api-without-db.herokuapp.com/users/';

const App = ()=>{
  
  //  State:
  // ========== 
  const [users,setUsers] = useState(null);
  const [updateFlag,setUpdateFlag] = useState(false);
  const [selectedUser,setSelectedUser] = useState('');
  const [isLoading,setIsLoading] = useState(true);
  // ========== 
  
  
  const getData = ()=>{
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
      setIsLoading(false)
      setUsers(data.users);
    })
    .catch(err=>console.log(err))
  }
  
  useEffect(()=>{
    getData();
  },[])
  
  // Delete logic:
  const handleDelete = (id)=>{
     fetch(url+`/${id}`,{
       method: 'DELETE',
       headers: {
        'Content-type': 'application/json; charset=UTF-8',
       }
     })
    .then(res=>res.json())
    .then(data=>setUsers(data))
    .catch(err=>console.log(err))
  }
  
  // Create Users logic:
  const createUsers = (data)=>{
    // alert(username+email);
    
    fetch(url,{
      method: 'POST',
      body: JSON.stringify(data),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },      
    })
      .then(res=>res.json())
      .then(data=>setUsers(data))
      .catch(err=>console.log(err))
    
  }
  
  const handleEdit = (id)=>{
    setUpdateFlag(!updateFlag)
    const newData = users.filter(user=>{
      return user.id === id;
    })
    setSelectedUser({
      id:id,
      username: newData[0].username,
      email: newData[0].email
    });
  }
  
  // Update user: 
  const updateUser = (user)=>{
    alert(selectedUser.id)
    fetch(url+`/${selectedUser.id}`,{
      method: 'PUT',
      body: JSON.stringify(user),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },      
    })
      .then(res=>res.json())
      .then(data=>{
        setUpdateFlag(false)
        setUsers(data)
      })
      .catch(err=>console.log(err))
        
  }
  
  return(
    <>
     {updateFlag?<UserForm btnText="Update User" selectedUser={selectedUser} sendData={updateUser}/>:<UserForm sendData={createUsers} btnText="Add User"/>}
     {isLoading?<img class="img-fluid" src="https://cdn.dribbble.com/users/108183/screenshots/2301400/spinnervlll.gif" alt="Loader"/>:''}
     {users?users.map(user=>{
       const {id,username,email} = user;
       return <div class="container">
        <section class="my-3 card bg-dark text-light my-3 p-3">
          <h2>{username}</h2>
          <p>{email}</p>
          <button onClick={()=>{handleEdit(id)}} class="my-1 btn btn-success">Edit</button>
          <button onClick={()=>{handleDelete(id)}} class="my-2 btn btn-danger">Delete</button>
        </section>
      </div>     
     }):''}  
    </>
    )
}

export default App;
