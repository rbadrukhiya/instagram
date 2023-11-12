import { useRef, useState } from 'react'
import axios from 'axios'

function Form_Register() {

  const [fname, setfname] = useState('')
  const [lname, setlname] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [c_password, setc_password] = useState('')
  const image = useRef()

  function submit(e) {
    e.preventDefault()
    if (fname == '') {
      alert('enter name')
    }
    else if (lname == '') {
      alert('enter name')
    }
    else if (email == '') {
      alert('enter email')
    }
    else if (password == '') {
      alert('enter password')
    }
    else if (c_password == '') {
      alert('enter password')
    }
    else if (password != c_password) {
      alert('enter correct password')
    }
    // else {
    //   axios.post('http://localhost/instello/register.php', {
    //     fname: fname,
    //     lname: lname,
    //     email: email,
    //     password: password,
    //     c_password: c_password
    //   })
    //     .then(function (response) {

    //       console.log(response);
    //       window.location.href = '/login'
    //       setfname('')
    //       setlname('')
    //       setemail('')
    //       setpassword('')
    //       setc_password('')
    //     })
    //       .catch(function (error) {
    //         console.log(error);
    //       })
    // }
    else {
            const data = new FormData()
      data.append('image', image.current.files[0])
      data.append('fname', fname)
      data.append('lname', lname)
      data.append('email', email)
      data.append('password', password)
      data.append('c_password', c_password)

      axios.post('http://localhost/instello/register.php',
              data)
              .then(function (response) {
                console.log(response.data)
                window.location.href = '/login'
              })
                .catch(function (error) {
                  console.log(error);
                })

    }


  }

    return (
      <>
        <div classname="bg-gray-100">
          <div id="wrapper" className="flex flex-col justify-between h-screen">
            {/* header*/}
            <div className="bg-white py-4 shadow dark:bg-gray-800">
              <div className="max-w-6xl mx-auto">
                <div className="flex items-center lg:justify-between justify-around">
                  <a href="trending.html">
                    <img src={require('../img/logo.png')} alt='' className="w-32" />
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
                <h1 className="lg:text-3xl text-xl font-semibold mb-6"> Sign in</h1>
                <p className="mb-2 text-black text-lg"> Register to manage your account </p>
                <form method='post' onSubmit={submit}>
                  <div className="flex lg:flex-row flex-col lg:space-x-2">
                    <input type="text" placeholder="First Name" name='fname' onChange={(i) => setfname(i.target.value)} className="bg-gray-200 mb-2 shadow-none  dark:bg-gray-800" style={{ border: '1px solid #d3d5d8 !important' }} />
                    <input type="text" placeholder="Last Name" name='lname' onChange={(i) => setlname(i.target.value)} className="bg-gray-200 mb-2 shadow-none  dark:bg-gray-800" style={{ border: '1px solid #d3d5d8 !important' }} />
                  </div>
                  <input type="text" placeholder="Email" name='email' onChange={(i) => setemail(i.target.value)} className="bg-gray-200 mb-2 shadow-none  dark:bg-gray-800" style={{ border: '1px solid #d3d5d8 !important' }} />
                  <input type="text" placeholder="Password" name='password' onChange={(i) => setpassword(i.target.value)} className="bg-gray-200 mb-2 shadow-none  dark:bg-gray-800" style={{ border: '1px solid #d3d5d8 !important' }} />
                  <input type="text" placeholder="Confirm Password" name='c_password' onChange={(i) => setc_password(i.target.value)} className="bg-gray-200 mb-2 shadow-none  dark:bg-gray-800" style={{ border: '1px solid #d3d5d8 !important' }} />
                  <input type="file" placeholder="Confirm Password" name='file' ref={image} className="bg-gray-200 mb-2 shadow-none  dark:bg-gray-800" style={{ border: '1px solid #d3d5d8 !important' }} />

                  <div className="flex justify-start my-4 space-x-1">
                    <div className="checkbox">
                      <input type="checkbox" id="chekcbox1" defaultChecked />
                      <label htmlFor="chekcbox1"><span className="checkbox-icon" /> I Agree</label>
                    </div>
                    <a href="#"> Terms and Conditions</a>
                  </div>
                  <button type="submit" className="bg-gradient-to-br from-pink-500 py-3 rounded-md text-white text-xl to-red-400 w-full">Login</button>
                  <div className="text-center mt-5 space-x-2">
                    <p className="text-base"> Do you have an account? <a href="/login"> Login </a></p>
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


      </>
    )
  }
  export default Form_Register