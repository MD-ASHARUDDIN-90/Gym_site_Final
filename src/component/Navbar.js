import React from 'react'
import {Link} from 'react-router-dom'
import NavbarStyle from './Navbar.module.css'
import { AiOutlineMenu,AiOutlineClose } from "react-icons/ai";
import {useState} from 'react'
import { Data , Data2 , Data3} from '../Data';
import {useRecoilState} from 'recoil' 
export default function Navbar(){
  const[show , setShow] = useState(true)

  const [data,setData] = useRecoilState(Data)
  const [sub,setSub] = useRecoilState(Data2)
  const [sub1,setSub1] = useRecoilState(Data3)

  

  function logout() {
    setData(false)
   
  }

  return(
    <>
    <div className={NavbarStyle.box}>
    <a href='#'><div className={NavbarStyle.logo}>GYM</div></a>
    <div className={NavbarStyle.link} id={show? "" : NavbarStyle.menu }>
    
    <Link  className={NavbarStyle.lin} to="/about">ABOUT</Link>
    <a  className={NavbarStyle.lin} href="#program">PROGRAM</a>
    <a  className={NavbarStyle.lin} href="#program">TRAINING</a>
    {sub1 ? <a  className={NavbarStyle.lin} href="/activity1" style={{color: "black" , backgroundColor : "white" ,textShadow: "1px 1px red"}}>SUBSCRIBED @50$</a> :<>
    {sub ? <a  className={NavbarStyle.lin} href="/activity" style={{color: "black" , backgroundColor : "white" ,textShadow: "1px 1px red"}}>SUBSCRIBED @20$</a> :<>
    {data  ? 
    <a  className={NavbarStyle.lin} href="#pricing" style={{color: "black" , backgroundColor : "white" , textShadow: "1px 1px red"}}>SUBSCRIBE-NOW</a> : 
    <a  className={NavbarStyle.lin} href="#pricing">PRICING</a>
    }
    </>
  }
  </>
}
    </div>
    
    <Link to='/registration'><button className={NavbarStyle.joibus}>JOIN US</button></Link> 

    <div className={NavbarStyle.mobile} >
    {show ?
     <AiOutlineMenu onClick={()=>setShow(false)}/>
     :
     <AiOutlineClose onClick={()=>setShow(true)}/>
    }
    </div>
    </div>
    </>
  )
}