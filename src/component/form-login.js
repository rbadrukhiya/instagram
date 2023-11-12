import { useState } from 'react'
import axios from 'axios'
import { FaCheck } from "react-icons/fa";


function Login() {
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')

  function submit(e) {
    e.preventDefault();

    // else
    // {
    axios.post('http://localhost/instello/login.php', {
      email: email,
      password: password
    })
      .then(function (response) {
        console.log(response);
        if (email == '') {
          alert('enter your email')
        }
        else if (password == '') {
          alert('enter your password')
        }
        else {
          if (email == response.data.email && password == response.data.password) {
            // var a = document.getElementById('popup')
            // a.classList.add('active')
            setemail('')
            setpassword('')
      window.location.href = '/'  

            window.localStorage.setItem("uid" , response.data.id)
          }
          else {
            alert('enter correct data!...')
          }
        }
      })
      .catch(function (error) {
        console.log(error);
      })
      // }
      
    }
  //   function cancel()
  //   {
  //     var a = document.getElementById('popup')
  //     a.classList.remove('active')
  //     window.location.href = '/'  
  // }
  return (
    <>
      <div classname="bg-gray-100 login-page">
        <div id="wrapper" className="flex flex-col justify-between h-screen">
          {/* header*/}
          <div className="bg-white py-4 shadow dark:bg-gray-800">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center lg:justify-between justify-around">
                <a href="trending.html">
                  <img src={require('../img/logo.png')} className="w-32" />
                  {/* <img src="../img/logo.png" alt=""  className="w-32"/> */}
                </a>
                <div className="capitalize flex font-semibold hidden lg:block my-2 space-x-3 text-center text-sm">
                  <a href="/login" className="py-3 px-4">Login</a>
                  <a href="/register" className="bg-pink-500 pink-500 px-6 py-3 rounded-md shadow text-white">Register</a>
                </div>
              </div>
            </div>
          </div>
          {/* Content*/}
          <div>
            <div className="lg:p-12 max-w-md max-w-xl lg:my-0 my-12 mx-auto p-6 space-y-">
              <h1 className="lg:text-3xl text-xl font-semibold  mb-6"> Log in</h1>
              <p className="mb-2 text-black text-lg"> Email or Username</p>
              <form action>
                <input type="text" placeholder="example@mydomain.com" name='email' onChange={(i) => setemail(i.target.value)} className="bg-gray-200 mb-2 shadow-none dark:bg-gray-800" style={{ border: '1px solid #d3d5d8 !important' }} />
                <input type="text" placeholder="***********" name='password' onChange={(i) => setpassword(i.target.value)} className="bg-gray-200 mb-2 shadow-none dark:bg-gray-800" style={{ border: '1px solid #d3d5d8 !important' }} />
                <div className="flex justify-between my-4">
                  <div className="checkbox">
                    <input type="checkbox" id="chekcbox1" defaultChecked />
                    <label htmlFor="chekcbox1"><span className="checkbox-icon" />Remember Me</label>
                  </div>
                  <a href="#"> Forgot Your Password? </a>
                </div>
                <button type="submit" onClick={submit} className="bg-gradient-to-br from-pink-500 py-3 rounded-md text-white text-xl to-red-400 w-full">Login</button>
                <div className="text-center mt-5 space-x-2">
                  <p className="text-base"> Not registered? <a href="form-register.html" className> Create a account </a></p>
                </div>
              </form>
            </div>
          </div>
          {/* Footer */}
          <div className="lg:mb-5 py-3 uk-link-reset">
            <div className="flex flex-col items-center justify-between lg:flex-row max-w-6xl mx-auto lg:space-y-0 space-y-3">
              <div className="flex space-x-2 text-gray-700 uppercase">
                <a href="#"> About</a>
                <a href="#"> Help</a>
                <a href="#"> Terms</a>
                <a href="#"> Privacy</a>
              </div>
              <p className="capitalize"> © copyright 2020 by Instello</p>
            </div>
          </div>
        </div>
      </div>
{/* 
      <div className="login-alert-page " id ='popup'>
        <div className="login-body">
          <div className="check">
          </div>
            <FaCheck className='check-icon'/>
          <h1 style={{textAlign:'center' , marginTop:'24px'}}>Thank You !...</h1>
          <p style={{textAlign:'center' , marginTop:'20px'}}>You Are Successfully login into instagram!...</p>
          <button className='contained' onClick={()=>cancel()}>ok</button>
        </div>
      </div> */}

    </>
  )
}
export default Login 