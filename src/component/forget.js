
import Header from './header'
import Sidebar from './sidebar'
import { useRef, useState, useEffect } from "react"
import axios from 'axios'
function Forget() {
    var a = window.localStorage.getItem('uid')
    
    // var b = Math.random()
    // console.log(b)
    // alert(b)
    function cancel() {
        window.location.reload()
    }
    const [fname, setfname] = useState('')
    const [lname, setlname] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [imagename, setimagename] = useState('')
    const [newpassword, setnew_password] = useState('')
    const [con_password, setcon_password] = useState('')
    const [otp , setotp] = useState('')

    const image = useRef()

    useEffect(() => {
        axios.post('http://localhost/instello/edit_profile.php', {
            edit_id: a
        })
            .then(function (response) {
                console.log(response)
                setfname(response.data.fname)
                setlname(response.data.lname)
                setemail(response.data.email)
                setpassword(response.data.password)
                setimagename(response.data.image)
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])
    var b
    function get_otp()
    {
         b = Math.floor((Math.random()*1000000)+1)
// var otp_code = Math.floor((Math.random() * 1000000) + 1)

        alert("your otp is -:"+b)
        console.log(b)
        
    }

    function submit(e) {
        e.preventDefault()
        if(otp == '')
        {
            alert('enter your otp')
        }
       else if(otp == b)
        {
            alert('enter otp')
        }
       else if (newpassword == '') {
            alert('enter new password!...')
        }
        else if (con_password == '') {
            alert('enter confirm passsword')
        }
        else if (newpassword != con_password) 
        {
            alert('enter correct password')
        }

        else {

                // alert('success')
            const data = new FormData()
            data.append('image', imagename)
            data.append('fname', fname)
            data.append('lname', lname)
            data.append('email', email)
            data.append('password', newpassword)
            data.append('edit_id', a)

            axios.post('http://localhost/instello/register.php', data)
                .then(function (response) {
                    console.log(response)
                })
                .catch(function (error) {
                    console.log(error);
                }, [])




        }
    }
    return (
        <>
            <div id="wrapper">
                <Sidebar />
                <div className="main_content">
                    <Header />
                    <div className="container m-auto">
                        <h1 className="text-2xl leading-none text-gray-900 tracking-tight mt-3"> Account Setting </h1>
                        <ul className="mt-5 -mr-3 flex-nowrap lg:overflow-hidden overflow-x-scroll uk-tab">
                            <li className="uk-active"><a href="/setting">General</a></li>
                            <li className='uk-active'><a href="/security">Security</a></li>
                            <li className='uk-active'><a href="/forget">Forget Password</a></li>
                            <li className='uk-active'><a href="#">Notification</a></li>
                            <li className='uk-active'><a href="#">Social links</a></li>
                            <li className='uk-active'><a href="#">Billing</a></li>
                        </ul>
                        <div className="grid lg:grid-cols-3 mt-12 gap-8">
                            <div>
                                <h3 className="text-xl mb-2"> Basic</h3>
                                <p> Lorem ipsum dolor sit amet nibh consectetuer adipiscing elit</p>
                            </div>
                            <div className="bg-white rounded-md lg:shadow-lg shadow col-span-2">
                                <form method='post' onSubmit={submit}>
                                    <div className="grid grid-cols-2 gap-3 lg:p-6 p-4">
                                        <div className='col-span-2'>
                                            <label htmlFor>Enter otp</label>
                                            <input type="password" placeholder="Enter Otp..." name='otp' onChange={(i) => setotp(i.target.value)} className="shadow-none bg-gray-100" />
                                        </div>

                                        <div className="col-span-2">
                                            <label htmlFor> Enter new pasword</label>
                                            <input type="password" placeholder="Enter New password..." onChange={(i)=> setnew_password(i.target.value)} name='n-password' className="shadow-none bg-gray-100" />
                                        </div>
                                        <div className="col-span-2">
                                            <label htmlFor="about">Confirm password</label>
                                            <input type="password" placeholder="Confirm password" onChange={(i)=>setcon_password(i.target.value)} name='cn-password' className="shadow-none bg-gray-100" />

                                        </div>


                                    </div>
                                        <div className="bg-gray-10 p-6 pt-0 flex justify-end space-x-3">
                                            
                                            <button type="submit" className="button bg-blue-700" onClick={()=> get_otp()}> Get otp </button>
                                            <button type="submit" className="button bg-blue-700"> Save </button>
                                        </div>
                                    </form>
                                    <button className="p-2 px-4 rounded bg-gray-50 text-red-500" onClick={cancel} >cancel </button>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}
export default Forget