import React from "react";
// import "./style.css";
import PricingStyle from './Pricing.module.css'
import {useRecoilState} from 'recoil'
import {Data ,Data2 ,Data3} from '../Data'
import {Link } from 'react-router-dom'
// import Activity from './Activity'
import { useNavigate } from "react-router-dom";

export default function Pricing() {
let getData = JSON.parse(localStorage.getItem("userDetails"))
const navigate = useNavigate()
const [ sub ,setSub] = useRecoilState(Data2)  // 20
const [ sub1 ,setSub1] = useRecoilState(Data3)  // 50
const [ login ,setLogin] = useRecoilState(Data)  //login
// console.log(getData,"I am from pricing but i am from recoil")

function confirmation(){
  if(login === true ){
    confirm("Press Ok to confirm the plan")
    if(confirm("Press Ok to confirm the plan") == true){
      // setShow(true)
    setSub(true)
    setLogin(true)
    navigate('/activity')
    alert("You have successfully subcribe now you can click to 'subscribed' button to go to activity page")
    }else{
      setSub(false)
    }

  }else{
    alert("LOGIN FIRST")
  }
}

function redirection(){
  
}
function confirmationtwo(){

  if(login === true ){
    confirm("Press Ok to confirm the plan")
    if(confirm("Press Ok to confirm the plan")){
      // setShow(true)
      setSub1(true)
      
    setLogin(true)
    alert("You have successfully sub now you can click to subscribed button to go to activity page")
    navigate('/activity1')
    }else{
      setSub1(false)
    }

  }else{
    alert("LOGIN FIRST")
  }
}





  return (
    <div className={PricingStyle.wrap}>
    <div className={PricingStyle.day}>
    <p>Day Pass</p>
    <p><sup style={{fontSize:"2em"}}>$</sup> <span className={PricingStyle.price}><sub>20</sub></span><br/><span>/pass</span></p>
    
    <ul>
    <li>1 Day Pass</li> 
    <li>Free Gym Access</li>
    <li>24 Hours Access</li>
    </ul>
   {sub ? <Link to='/activity'><button>SUBSCRIBED</button></Link>:
    <button onClick={confirmation} className={PricingStyle.btn}>Subscribe</button> }
   
  </div>
    <div className={PricingStyle.month}>
    <p>Month to Month</p>
    <p><sup style={{fontSize:"2em"}}>$</sup><span className={PricingStyle.price}><sub>90 </sub></span><br/><span><em>/month</em></span></p>
   
    <ul>
      <li>$99 Joining Fee</li> 
      <li>No Contract</li>
      <li>Free Gym Access</li>
      <li>1 Group Class Included</li>
      <li>24 Hours Access</li>
      </ul>
     {sub1 ? <Link to='/activity1'> <button>SUBSCRIBED</button></Link>:
     <button onClick={confirmationtwo} className={PricingStyle.btn}>Subscribe</button>}

      </div>
      <div className={PricingStyle.content}>
        <h3 style={{ fontFamily: "Colonna MT" ,textShadow: "2px 2px black"}}>Membership</h3>
        <h1 style={{ fontFamily: "Colonna MT" ,textShadow: "2px 2px black"}}>From Punch Pass to Monthly or Annual</h1>
        <p>At Gym Base, we offer a wide range of membership with options to suit every budget. Everything from One Day Pass, Punch Pass to monthly or annual prepaid memberships. What's more, we won't tie you in to a long term contract, giving you greater flexibility.
</p>
<h3 style={{ fontFamily: "Colonna MT" ,textShadow: "2px 2px black"}}>Each plan included
</h3>
<ul className={PricingStyle.list}>
  <li className={PricingStyle.li}><i class="fa fa-solid fa-arrow-right"> The best equipment global brands </i></li>
  <li className={PricingStyle.li}> <i class="fa fa-solid fa-arrow-right"> The gym is open 24 hours a day, 7 days a week </i></li>
  <li className={PricingStyle.li}> <i  class="fa fa-solid fa-arrow-right"> Two safe payment methods  </i> </li>
  <li className={PricingStyle.li}> <i class="fa fa-solid fa-arrow-right"> Two safe payment methods  </i></li>
  <li className={PricingStyle.li}> <i class="fa fa-solid fa-arrow-right"> Group fitness classes in the price of the subscription  </i></li>
  <li className={PricingStyle.li}> <i class="fa fa-solid fa-arrow-right"> No long-term contract, period  </i></li>
  </ul>
        </div>
        
    </div>
  );
}
