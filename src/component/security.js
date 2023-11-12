import Header from './header'
import Sidebar from './sidebar'
import { useRef, useState, useEffect } from "react"
import axios from 'axios'

function Security() {
    var a = window.localStorage.getItem("uid")
    function cancel() {
        window.location.reload()
        // alert(a)
    }
    const [fname, setfname] = useState('')
    const [lname, setlname] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [imagename, setimagename] = useState('')
    const [newpassword, setnew_password] = useState('')
    const [con_password, setcon_password] = useState('')
    const [o_password, seto_password] = useState('')

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
    function submit(e) {
        e.preventDefault()

        if (password != o_password) {
            alert('enter correct password')
        }
        else if (newpassword == '') {
            alert('enter new password!...')
        }
        else if (con_password == '') {
            alert('enter confirm passsword')
        }
        else if (newpassword != con_password) {
            alert('not success')
        }
        else {

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
                    // window.location.href = '/'
                })
                .catch(function (error) {
                    console.log(error);
                }, [])




        }


        // alert()
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
                                            <label htmlFor>Enter old password</label>
                                            <input type="password" placeholder="Old password..." name='o-password' onChange={(i) => seto_password(i.target.value)} className="shadow-none bg-gray-100" />
                                        </div>

                                        <div className="col-span-2">
                                            <label htmlFor> Enter new pasword</label>
                                            <input type="password" placeholder="New password..." name='n-password' onChange={(i) => setnew_password(i.target.value)} className="shadow-none bg-gray-100" />
                                        </div>
                                        <div className="col-span-2">
                                            <label htmlFor="about">Confirm password</label>
                                            <input type="password" placeholder="Confirm password..." name='cn-password' onChange={(i) => setcon_password(i.target.value)} className="shadow-none bg-gray-100" />

                                        </div>


                                    </div>
                                    <div className="bg-gray-10 p-6 pt-0 flex justify-end space-x-3">
                                        <button className="p-2 px-4 rounded bg-gray-50 text-red-500" onClick={cancel}> Cancel </button>
                                        <button type="submit" className="button bg-blue-700"> Save </button>
                                    </div>
                                </form>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Security