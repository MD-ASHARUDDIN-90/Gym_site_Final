import React from 'react'
import {Routes ,Route} from 'react-router-dom'
import App from './App'
import About from './component/About'
import Training from './component/Training'
import Pricing from './component/Pricing'
import Registration from './component/Registration'
import Login from './component/Login'
import Activity from './component/Activity'
import Activity1 from './component/Activity1'
import RegAlert from './component/RegAlert'

export default function Routing(){
  return(
    <>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/training' element={<Training/>}/>
      <Route path='/pricing' element={<Pricing/>}/>
      <Route path='/registration' element={<Registration/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/activity' element={<Activity/>}/>
      <Route path='/activity1' element={<Activity1/>}/>
      <Route path='/regalert' element={<RegAlert/>}/>

    </Routes>

    </>
  )
}