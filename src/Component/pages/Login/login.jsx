import React, { useState } from 'react'
import Input from '../../Atoms/Forms/input'
import Image from '../../Atoms/Image/Image'
import Headings from '../../Atoms/Headings/Headings'
import BachhriImage from '../../../Asset/Images/bachhri2024.jpg';
import Buttons from '../../Atoms/Buttons/Buttons';
import './login.scss'

const Login = () => {
    const [useDetail, setUserDetail] = useState({uname : '', password: ''})

    const handleChange = (e) => {
        setUserDetail((prevState) => {
            return ({                
            ...prevState,
            [e.target.name] : e.target.value
            })
        })
    }

    const submitForm = () => {
        console.log(useDetail)
    }

  return (
    <>
    <Image imgSrc={BachhriImage}/>
    <Headings headingLevel="h1" headingText="Login - Bachhri Football Math Durga Puja Samiti" headingStyle="main-heading" />
    <div className='login-wrapper'>
      <Input type="text" id="username" labelText="Username / Email" handleChange = {handleChange} name="uname" value={useDetail.uname}/>
      <Input type="password" id="password" labelText="Password" handleChange = {handleChange} name="password" value={useDetail.password}/>
      <div>
        <Buttons handleClick= {submitForm} label="Login"/>
      </div>
    </div>
    </>
  )
}

export default Login
