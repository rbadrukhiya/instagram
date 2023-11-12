import { useRef, useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import './css/style.css'
import './css/tailwind.css'
import './css/uikit.css'



function Edit_profile() {
    const [fname, setfname] = useState('')
    const [lname, setlname] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [imagename, setimagename] = useState('')

    const image = useRef()

    const { id } = useParams();
    const u_id = `${id}`


    useEffect(() => {
        axios.post('http://localhost/instello/edit_profile.php', {
            edit_id: u_id
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
        // alert()
        if (image.current.files[0] == undefined) {
            const data = new FormData()
            data.append('image', imagename)
            data.append('fname', fname)
            data.append('lname', lname)
            data.append('email', email)
            data.append('password', password)
            data.append('edit_id', u_id)

            axios.post('http://localhost/instello/register.php', data)
                .then(function (response) {
                    console.log(response)
                    window.location.href = '/'
                })
                .catch(function (error) {
                    console.log(error);
                }, [])
        }
        else {
            const data = new FormData()
            data.append('image', image.current.files[0])
            data.append('fname', fname)
            data.append('lname', lname)
            data.append('email', email)
            data.append('password', password)
            data.append('edit_id', u_id)


            axios.post('http://localhost/instello/register.php', data)
                .then(function (response) {
                    console.log(response)
                    window.location.href = '/'

                })
                .catch(function (error) {
                    console.log(error);
                }, [])
        }
    }
    return (
        <>
            {/* <div className=" edit_profile">
            <form >
            <table>
                    <tr>
                        <td>fname</td>
                        <td><input type="text" value={fname} name="fname" onChange={(i)=>setfname(i.target.value)}/></td>
                    </tr>
                    <tr>
                        <td>lname</td>
                        <td><input type="text" name="lname" value={lname} onChange={(i)=>setlname(i.target.value)}/></td>
                    </tr>
                    <tr>
                        <td>email</td>
                        <td><input type="text" name="email" value={email} onChange={(i)=>setemail(i.target.value)}/></td>
                    </tr>
                    <tr>
                        <td>image</td>
                        <td><input type="file" ref={image} /></td>
                    </tr>
                    <tr>
                        <td>
                            <button type="submit" className="mt-5">submit</button>
                        </td>
                    </tr>

                </table>

            </form>
            </div> */}
         
            <div classname="bg-gray-100">
                <div id="wrapper" className="flex flex-col justify-between h-screen">
                    <div className="bg-white py-4 shadow dark:bg-gray-800">
                        <div className="max-w-6xl mx-auto">
                            <div className="flex items-center lg:justify-between justify-around">
                                <a href="trending.html">
                                    <img src={require('../img/logo.png')} alt='' className="w-32" />
                                </a>
                                <div className="capitalize flex font-semibold hidden lg:block my-2 space-x-3 text-center text-sm">
                                    {/* <a href="/login" className="py-3 px-4">Login</a> */}
                                    {/* <a href="/register" className="bg-pink-500 pink-500 px-6 py-3 rounded-md shadow text-white">Register</a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="lg:p-12 max-w-md max-w-xl lg:my-0 my-12 mx-auto p-6 space-y-">
                            <h1 className="lg:text-3xl text-xl font-semibold mb-6"> Edit</h1>
                            <p className="mb-2 text-black text-lg"> Edit Your Account </p>
                            <form method="post" encType="multipart/form-data" onSubmit={submit}>
                                <div className="flex lg:flex-row flex-col lg:space-x-2">
                                    <input type="text" placeholder="First Name"value={fname} name="fname" onChange={(i)=>setfname(i.target.value)} className="bg-gray-200 mb-2 shadow-none  dark:bg-gray-800" style={{ border: '1px solid #d3d5d8 !important' }} />
                                    <input type="text" placeholder="Last Name" value={lname} name="lname" onChange={(i)=>setlname(i.target.value)} className="bg-gray-200 mb-2 shadow-none  dark:bg-gray-800" style={{ border: '1px solid #d3d5d8 !important' }} />
                                </div>
                                <input type="text" placeholder="Email" name="email" value={email} onChange={(i)=>setemail(i.target.value)} className="bg-gray-200 mb-2 shadow-none  dark:bg-gray-800" style={{ border: '1px solid #d3d5d8 !important' }} />
                                <input type="file"  name='file' ref={image} className="bg-gray-200 mb-2 shadow-none  dark:bg-gray-800" style={{ border: '1px solid #d3d5d8 !important' }} />

                                
                                <button type="submit" className="bg-gradient-to-br from-pink-500 py-3 rounded-md text-white text-xl to-red-400 w-full">submit</button>
                                
                            </form>
                        </div>
                    </div>
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
export default Edit_profile
