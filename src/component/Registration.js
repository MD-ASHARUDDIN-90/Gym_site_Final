import React from 'react';
import { useState ,useEffect } from 'react';
import {Link} from 'react-router-dom'
import RegisterStyle from "./Registration.module.css"
import { AiOutlineMail ,AiOutlineUser } from "react-icons/ai";
import { RiLockPasswordFill} from "react-icons/ri";
import { Data } from '../Data';
import { useRecoilState } from 'recoil';


export default function Registration() {
  const [login ,setLogin] = useRecoilState(Data)
  useEffect(()=>{
    if(localStorage.getItem("userDetails")){
      let data= JSON.parse(localStorage.getItem("userDetails"))
      setData(data)
      console.log(data)
    }
    },[])
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [EM, setEM] = useState('');
  const [PW, setPW] = useState('');
  const [US, setUS] = useState('');
  const [show, setShow] = useState(false);
  const [data ,setData]= useState([])



  function captureEmail(e) {
    setEmail(e.target.value);
    const regEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (regEmail.test(email)) {
      setEM('');
    } else if(!regEmail.test(email) && email !== ""){
      setEM("Email is Not Valid");
    }
  }
  function captUserName(e) {
    setUserName(e.target.value);  //first check e byub makin condition
    const userRegEx = /\s/g;
    if (userRegEx.test(!userName) ) {
      setUS('');
    }  else if(userRegEx.test(userName) && userName !== ""){
      setUS('UserName is not Valid');
    }else{
      setUS('');
    }
  }
  function capturePassword(e) {
    setPassword(e.target.value);
    const pwRegEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,20}$/;
    if (pwRegEx.test(password)) {
      setPW('');
    } else if(!pwRegEx.test(password) && password !== " "){
      setPW("pw is Not Valid");
    
    } else  {
      setPW('');
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    //===================email

   
    //=============username
    

    //==================password
   
    if(email === "" || userName === "" || password=== ""){
      alert("please enter something")
    }else if(EM === "EMAIL IS NOT VALID" || PW === "pw is Not Valid" || US === 'UserName is not Valid'){
      alert("you have enter wrong details")
    
    }else{
    const userData= {Email :email , UserName : userName , Password : password ,isSubScribe20 : false , isSubScribe50 : false}
    data.push(userData)
    setData([...data])
    if(show=== true){
      setShow(false)
    }else{
      setShow(true)
      alert(`${userName.toUpperCase()} 👍 You Have Successfully Register` )
      setLogin(true)
      setShow(true)
    }
  }
  localStorage.setItem("userDetails" , JSON.stringify(data))
 
  
  setEmail("")
  setUserName("")
  setPassword("")
  setEM("")
  setPW("")
  setUS("")
  }
  
  return (
    <>
    
    <div className={RegisterStyle.main}>
      <div className={RegisterStyle.form}>
      <form >
        <h1>Registration Page</h1>
        <div className={RegisterStyle.email}>
        <label style={{fontSize:"2em"}}><AiOutlineMail/></label>
        <input 
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={captureEmail}
        />
        </div>
        <p>{EM}</p>
        <div className={RegisterStyle.email}>
        <label style={{fontSize:"2em"}}><AiOutlineUser/></label>
        <input
          type="text"
          placeholder="Your User Name"
          value={userName}
          onChange={captUserName}
        />
        </div>
        <p>{US}</p>
        <div className={RegisterStyle.email}>
        <label style={{fontSize:"2em"}}><RiLockPasswordFill/></label>
        <input
          type="password"
          placeholder="Your Password"
          value={password}
          onChange={capturePassword}
        />
        </div>
        <p>{PW}</p>
        <input className={RegisterStyle.btn} onClick={handleSubmit} type="button" value="SUBMIT" />
        <p className={RegisterStyle.loginLink}>Already Registered ? <Link to='/login'>Login</Link> </p>
        <p className={RegisterStyle.loginLink}>Go Back To Home <Link to='/'>Home</Link> </p>
    
      </form>
      {show ? <p className={RegisterStyle.redirection}>Now You Can Go To <Link to='/'>Home</Link> To Get Subscription</p> : ""}
    </div>
    </div>
</>
  );
}