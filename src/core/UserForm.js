import './Form.css'

import {useState,useEffect} from 'react';

const UserForm = ({sendData,btnText,selectedUser})=>{
  
  const [inputText,setInputText] = useState({username:'',email:''});
  const {username,email} = inputText;
  
  const handleChange = (e)=>{
    const selectedField = e.target.name;
    const selectedValue = e.target.value;
    setInputText({
      ...inputText,
      [selectedField]:selectedValue
    })
  }
  
  const submit = (e)=>{
    e.preventDefault();
    sendData(inputText);
    setInputText({
      username:'',
      email: ''
    })
  }
  
  useEffect(()=>{
    setInputText({
      username: selectedUser.username,
      email: selectedUser.email
    })
  },[selectedUser])
  
  return(
    <>
      <form onSubmit={submit} class="container">
        <div class="">
          <label for="">Username:</label>
          <input onChange={handleChange} name="username" type="text" value={username}/>
        </div>
        <div class="mt-2">
          <label for="">Email:</label>
          <input onChange={handleChange} name="email" type="email" value={email}/>
        </div>
        <button class="mt-3 w-100 d-block btn btn-outline-primary">{btnText}</button>
      </form>
    </>
    )
}

UserForm.defaultProps = {
  selectedUser: {
    username: "",
    email: "",
  },
};

export default UserForm;