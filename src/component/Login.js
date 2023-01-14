import React from 'react';
import { useState ,useEffect} from 'react';
import {Link} from 'react-router-dom'
import RegisterStyle from "./Registration.module.css"
import {  AiOutlineUser } from "react-icons/ai";
import { RiLockPasswordFill} from "react-icons/ri";
import {useRecoilState ,useRecoilValue} from 'recoil'
import {Data , Data2 , Data3} from '../Data'
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [show , setShow] = useState(false)
  const navigate = useNavigate()
  const [newData ,setNewData] = useRecoilState(Data) 
  setNewData(false)
  const sub = useRecoilValue(Data2)
  const sub1 = useRecoilValue(Data3)
  let getData= JSON.parse(localStorage.getItem("userDetails")) // local storage se array achuka
  console.log(getData , "i am from local") // data ara hai
 const[thisData ,setThisData]=useState([])
  
 

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');


  function handleSubmit(event) {
    event.preventDefault();
    const newARR = getData.filter(x=> x.UserName === userName   && x.Password === password)
    console.log(newARR , "i am matched data from local storage")
    if(newARR.length === 0){
      alert("user not found")
    }else{
      alert("you are logged in")
      setShow(true)
      // const newUserLoggedIn = {UserName : userName , Password : password , isLog : true , isSub : false }
      setNewData(true)
      if(sub === true){
     navigate('/activity')
      }if(sub1 === true){
        navigate('/activity1 ')
      }
    }
   
      
  }

  function loginButNotSUb(){
    setNewData(true)
  }

  
  function captUserName(e) {
    setUserName(e.target.value);
  }
  function capturePassword(e) {
    setPassword(e.target.value);
  }

  return (
    <>
    <div className={RegisterStyle.main}>
    <div className={RegisterStyle.form}>
    <form >
      <h1>Login Page</h1>
      
      <div className={RegisterStyle.email}>
      <label style={{fontSize:"2em"}}><AiOutlineUser/></label>
      <input
        type="text"
        placeholder="Your User Name"
        value={userName}
        onChange={captUserName}
      />
    
      </div>
      <div className={RegisterStyle.email}>
      <label style={{fontSize:"2em"}}><RiLockPasswordFill/></label>
      <input
        type="password"
        placeholder="Your Password"
        value={password}
        onChange={capturePassword}
      />
     
      </div>
      <br/>
      
      <input className={RegisterStyle.loginBtn} onClick={handleSubmit} type="button" value="SUBMIT" />
      <p >New User ? <Link to='/registration'>Registration</Link> </p>
      </form>
      {show ?<p className={RegisterStyle.popup}>NOW YOU CAN GET SUBSCRIBED TO OUR PREMIUM FEATURES <br/><Link to='/' style={{color : "white" , textDecoration : "none" , fontWeight: "bolder" , textShadow : "1px 1px black"}}><button onClick={loginButNotSUb}>Home</button></Link> </p> : "" }
      </div>
      </div>
</>
  );
}
