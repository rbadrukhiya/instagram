
import { useEffect, useState } from 'react'
import Header from './header'
import Sidebar from './sidebar'
import axios from 'axios'

function Feed() {
    const [user, setuser] = useState([])
    const [follow, setfollow] = useState([])
    var a = window.localStorage.getItem("uid")
    const [file, setfile] = useState([])
    const [video, setvideo] = useState([]);
    const [like, setlike] = useState([])
    const [comment, setcomment] = useState('')
    const [comment_view, setcomment_view] = useState([])

    var a = window.localStorage.getItem("uid")
    // comment send
    function submit(i, j) {
        // alert(i)
        // alert(k)
        axios.post('http://localhost/instello/comment.php', {
            user_id: i,
            img_id: j,
            login_id: a,

            comment: comment,
        })
            .then(function (response) {
                console.log(response);
                window.location.reload()
            })
            .catch(function (error) {
                console.log(error);
            })
    }
//  user view
    useEffect(() => {
        axios.get('http://localhost/instello/user-view.php')
            .then(function (response) {
                // handle success
                setuser(response.data.data)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [])

    // follow view
    useEffect(() => {
        axios.get('http://localhost/instello/follow-view.php')
            .then(function (response) {
                setfollow(response.data.data)

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [])
// comment view
    useEffect(() => {
        axios.get('http://localhost/instello/comment_view.php')
            .then(function (response) {
                setcomment_view(response.data)
                console.log(response.data)

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [])
// follow send
    function follows(i) {

        // alert('follow')
        axios.post('http://localhost/instello/follow.php', {
            l_id: a,
            u_id: i
        })
            .then(function (response) {

                console.log(response)
                window.location.reload()
            })
            .catch(function (error) {
                console.log(error);
            })

    }
    // unfollow view
    function unfollow(i) {
        alert('unfollow')

        axios.post('http://localhost/instello/unfollow.php', {
            l_id: a,
            u_id: i
        })
            .then(function (response) {
                window.location.reload()
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    useEffect(() => {
        follow.map((i) => {
            if (i.u_id == a) {
                const arr = i.f_id.split(',')
                // console.log(arr)
                arr.map((j) => {
                    if (j != 0) {
                        document.getElementById(`follow-${j}`).style.display = "none"
                        document.getElementById(`follows-${j}`).style.display = "block"
                    }
                })
            }
        })
    })
                // post view
    useEffect(() => {
        axios.get('http://localhost/instello/file-view.php')
            .then(function (response) {
                setfile(response.data.data)
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])
    // video view
    useEffect(() => {
        axios.get('http://localhost/instello/video-view.php')
            .then(function (response) {
                setvideo(response.data.data)
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])
// post like view
    useEffect(() => {
        axios.get('http://localhost/instello/post_like_view.php')
            .then(function (response) {
                setlike(response.data)
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])

    // like view
    useEffect(() => {
        like.map((i) => {
            const login = i.login_id.split(',')
            login.map((j) => {
                if (j == a) {

                    document.getElementById('normal-heart'+i.post_id).style.display = "none"
                    document.getElementById('like-heart'+ i.post_id).style.display = "block"

                }
            })
        })
    })
    function postlike(i, j) {
        axios.post('http://localhost/instello/post_like.php', {
            user_id: j,
            post_id: i,
            login_id: a
        })
            .then(function (response) {
                console.log(response);
                window.location.reload()
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    return (
        <>
            <div>
                <div id="wrapper">
                    <Sidebar />
                    <div className="main_content">
                        <Header />
                        <div className="container m-auto">
                            <h1 className="lg:text-2xl text-lg font-extrabold leading-none text-gray-900 tracking-tight mb-5"> Feed </h1>
                            <div className="lg:flex justify-center lg:space-x-10 lg:space-y-0 space-y-5">
                                {/* left sidebar*/}
                                <div className="space-y-5 flex-shrink-0 lg:w-7/12">
                                    {/* post 1*/}

                                    {
                                        follow.map((i) => {
                                            if (i.u_id == a) {
                                                const arr = i.f_id.split(',')
                                                // console.log(arr)
                                                return (
                                                    <>
                                                        {
                                                            arr.map((b) => {
                                                                if (b != i.f_id) {
                                                                    return (
                                                                        <>
                                                                            {
                                                                                file.map((img) => {
                                                                                    if (img.uid === b) {
                                                                                        // console.log(img.image)
                                                                                        return (

                                                                                            <>

                                                                                                <div className="bg-white shadow rounded-md dark:bg-gray-900 -mx-2 lg:mx-0">
                                                                                                    <div className="flex justify-between items-center px-4 py-3">
                                                                                                        <div className="flex flex-1 items-center space-x-4">
                                                                                                            <a href="#">
                                                                                                                <div className="bg-gradient-to-tr from-yellow-600 to-pink-600 p-0.5 rounded-full">
                                                                                                                    {
                                                                                                                        user.map((k) => {
                                                                                                                            if (k.id == img.uid) {
                                                                                                                                return (
                                                                                                                                    <>
                                                                                                                                        <img src={`http://localhost/instello/image/${k.image}`} className="bg-gray-200 border border-white rounded-full w-8 h-8" />
                                                                                                                                    </>
                                                                                                                                )
                                                                                                                            }
                                                                                                                        })
                                                                                                                    }

                                                                                                                </div>
                                                                                                            </a>
                                                                                                            <span className="block capitalize font-semibold dark:text-gray-100">
                                                                                                                {
                                                                                                                    user.map((k) => {
                                                                                                                        if (k.id == img.uid)
                                                                                                                            return (
                                                                                                                                <>
                                                                                                                                    {k.fname}
                                                                                                                                </>
                                                                                                                            )
                                                                                                                    })
                                                                                                                }
                                                                                                            </span>
                                                                                                        </div>
                                                                                                        <div>
                                                                                                            <a href="#"> <i className="icon-feather-more-horizontal text-2xl hover:bg-gray-200 rounded-full p-2 transition -mr-1 dark:hover:bg-gray-700" /> </a>
                                                                                                            <div className="bg-white w-56 shadow-md mx-auto p-2 mt-12 rounded-md text-gray-500 hidden text-base border border-gray-100 dark:bg-gray-900 dark:text-gray-100 dark:border-gray-700" uk-drop="mode: hover;pos: top-right">
                                                                                                                <ul className="space-y-1">
                                                                                                                    <li>
                                                                                                                        <a href="#" className="flex items-center px-3 py-2 hover:bg-gray-200 hover:text-gray-800 rounded-md dark:hover:bg-gray-800">
                                                                                                                            <i className="uil-share-alt mr-1" /> Share
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li>
                                                                                                                        <a href="#" className="flex items-center px-3 py-2 hover:bg-gray-200 hover:text-gray-800 rounded-md dark:hover:bg-gray-800">
                                                                                                                            <i className="uil-edit-alt mr-1" />  Edit Post
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li>
                                                                                                                        <a href="#" className="flex items-center px-3 py-2 hover:bg-gray-200 hover:text-gray-800 rounded-md dark:hover:bg-gray-800">
                                                                                                                            <i className="uil-comment-slash mr-1" />   Disable comments
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li>
                                                                                                                        <a href="#" className="flex items-center px-3 py-2 hover:bg-gray-200 hover:text-gray-800 rounded-md dark:hover:bg-gray-800">
                                                                                                                            <i className="uil-favorite mr-1" />  Add favorites
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li>
                                                                                                                        <hr className="-mx-2 my-2 dark:border-gray-800" />
                                                                                                                    </li>
                                                                                                                    <li>
                                                                                                                        <a href="#" className="flex items-center px-3 py-2 text-red-500 hover:bg-red-100 hover:text-red-500 rounded-md dark:hover:bg-red-600">
                                                                                                                            <i className="uil-trash-alt mr-1" />  Delete
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                </ul>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div uk-lightbox>
                                                                                                        <a href={require('../img/post/img4.jpg')}>
                                                                                                            <img src={`http://localhost/instello/image/${img.image}`} alt />
                                                                                                        </a>
                                                                                                    </div>
                                                                                                    <div className="py-3 px-4 space-y-3">
                                                                                                        <div className="flex space-x-4 lg:font-bold">
                                                                                                            <a href="#" className="flex items-center space-x-2">
                                                                                                                <div className="p-2 rounded-full text-black">
                                                                                                                    <i class="fa-regular fa-heart  dark:text-gray-100"
                                                                                                                        id={'normal-heart' + img.id} onClick={() => postlike(img.id, img.uid)} width={22} height={22}></i>
                                                                                                                    <i class="fa-solid fa-heart dark:text-gray-100"
                                                                                                                        id={'like-heart' + img.id} readOnly style={{ color: 'red', display: 'none' }} width={22} height={22}></i>

                                                                                                                </div>
                                                                                                                <div>
                                                                                                                    {
                                                                                                                        like.map((i) => {
                                                                                                                            if ((i.user_id != a) && i.post_id == img.id) {
                                                                                                                                return (
                                                                                                                                    <>
                                                                                                                                        {i.likes} likes
                                                                                                                                    </>
                                                                                                                                )
                                                                                                                            }
                                                                                                                        })
                                                                                                                    }
                                                                                                                </div>
                                                                                                            </a>
                                                                                                            <a href="#" className="flex items-center space-x-2">
                                                                                                                <div className="p-2 rounded-full text-black">
                                                                                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width={22} height={22} className="dark:text-gray-100">
                                                                                                                        <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" />
                                                                                                                    </svg>
                                                                                                                </div>
                                                                                                                <div> Comment</div>
                                                                                                            </a>
                                                                                                            <a href="#" className="flex items-center space-x-2 flex-1 justify-end">
                                                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width={22} height={22} className="dark:text-gray-100">
                                                                                                                    <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                                                                                                                </svg>
                                                                                                                <div> Share</div>
                                                                                                            </a>
                                                                                                        </div>
                                                                                                        <div className="flex items-center space-x-3">
                                                                                                            <div className="flex items-center">
                                                                                                                <img src={require('../img/avatars/avatar-1.jpg')} alt className="w-6 h-6 rounded-full border-2 border-white dark:border-gray-900" />
                                                                                                                <img src={require('../img/avatars/avatar-4.jpg')} alt className="w-6 h-6 rounded-full border-2 border-white dark:border-gray-900 -ml-2" />
                                                                                                                <img src={require('../img/avatars/avatar-2.jpg')} alt className="w-6 h-6 rounded-full border-2 border-white dark:border-gray-900 -ml-2" />
                                                                                                            </div>
                                                                                                            <div className="dark:text-gray-100">
                                                                                                                Liked <strong> Johnson</strong> and <strong> 209 Others </strong>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                        <div className="border-t pt-4 space-y-4 dark:border-gray-600">
                                                                                                            {comment_view.map((i) => {
                                                                                                                if (img.id == i.img_id) {

                                                                                                                    return (
                                                                                                                        <>
                                                                                                                            <div className="flex">
                                                                                                                                <div className="w-10 h-10 rounded-full relative flex-shrink-0">
                                                                                                                                    <img src={`http://localhost/instello/image/${i.image}`} alt className="absolute h-full rounded-full w-full" />
                                                                                                                                </div>
                                                                                                                                <div className="text-gray-700 py-2 px-3 rounded-md bg-gray-100 h-full relative lg:ml-5 ml-2 lg:mr-20  dark:bg-gray-800 dark:text-gray-100">
                                                                                                                                    <p className="leading-6">{i.comment}<urna className="i uil-heart" /> <i className="uil-grin-tongue-wink"> </i> </p>
                                                                                                                                    <div className="absolute w-3 h-3 top-3 -left-1 bg-gray-100 transform rotate-45 dark:bg-gray-800" />
                                                                                                                                </div>
                                                                                                                            </div>
                                                                                                                        </>
                                                                                                                    )
                                                                                                                }
                                                                                                                })}



                                                                                                        </div>
                                                                                                        <div className="bg-gray-100 bg-gray-100 rounded-full rounded-md relative dark:bg-gray-800">
                                                                                                            <input type="text" placeholder="Add your Comment.." className="bg-transparent max-h-10 shadow-none" onChange={(i) => setcomment(i.target.value)} />
                                                                                                            <div className="absolute bottom-0 flex h-full items-center right-0 right-3 text-xl space-x-2">
                                                                                                                <button type='submit' onClick={() => submit(img.uid, img.id)}>comment</button>
                                                                                                                <a href="#"> <i className="uil-image" /></a>
                                                                                                                <a href="#"> <i className="uil-video" /></a>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                {/* <p> {j.id} </p> */}
                                                                                                {/* <img src={`http://localhost/instello/image/${j.image}`} alt width={100} height={100} /> */}

                                                                                            </>
                                                                                        )
                                                                                    }
                                                                                })
                                                                            }
                                                                            {
                                                                                video.map((img) => {
                                                                                    if (img.uid === b) {
                                                                                        // console.log(img.image)
                                                                                        return (

                                                                                            <>

                                                                                                <div className="bg-white shadow rounded-md dark:bg-gray-900 -mx-2 lg:mx-0">
                                                                                                    <div className="flex justify-between items-center px-4 py-3">
                                                                                                        <div className="flex flex-1 items-center space-x-4">
                                                                                                            <a href="#">
                                                                                                                <div className="bg-gradient-to-tr from-yellow-600 to-pink-600 p-0.5 rounded-full">
                                                                                                                    {
                                                                                                                        user.map((k) => {
                                                                                                                            if (k.id == img.uid) {
                                                                                                                                return (
                                                                                                                                    <>
                                                                                                                                        <img src={`http://localhost/instello/image/${k.image}`} className="bg-gray-200 border border-white rounded-full w-8 h-8" />
                                                                                                                                    </>
                                                                                                                                )
                                                                                                                            }
                                                                                                                        })
                                                                                                                    }

                                                                                                                </div>
                                                                                                            </a>
                                                                                                            <span className="block capitalize font-semibold dark:text-gray-100">
                                                                                                                {
                                                                                                                    user.map((k) => {
                                                                                                                        if (k.id == img.uid)
                                                                                                                            return (
                                                                                                                                <>
                                                                                                                                    {k.fname}
                                                                                                                                </>
                                                                                                                            )
                                                                                                                    })
                                                                                                                }
                                                                                                            </span>
                                                                                                        </div>
                                                                                                        <div>
                                                                                                            <a href="#"> <i className="icon-feather-more-horizontal text-2xl hover:bg-gray-200 rounded-full p-2 transition -mr-1 dark:hover:bg-gray-700" /> </a>
                                                                                                            <div className="bg-white w-56 shadow-md mx-auto p-2 mt-12 rounded-md text-gray-500 hidden text-base border border-gray-100 dark:bg-gray-900 dark:text-gray-100 dark:border-gray-700" uk-drop="mode: hover;pos: top-right">
                                                                                                                <ul className="space-y-1">
                                                                                                                    <li>
                                                                                                                        <a href="#" className="flex items-center px-3 py-2 hover:bg-gray-200 hover:text-gray-800 rounded-md dark:hover:bg-gray-800">
                                                                                                                            <i className="uil-share-alt mr-1" /> Share
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li>
                                                                                                                        <a href="#" className="flex items-center px-3 py-2 hover:bg-gray-200 hover:text-gray-800 rounded-md dark:hover:bg-gray-800">
                                                                                                                            <i className="uil-edit-alt mr-1" />  Edit Post
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li>
                                                                                                                        <a href="#" className="flex items-center px-3 py-2 hover:bg-gray-200 hover:text-gray-800 rounded-md dark:hover:bg-gray-800">
                                                                                                                            <i className="uil-comment-slash mr-1" />   Disable comments
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li>
                                                                                                                        <a href="#" className="flex items-center px-3 py-2 hover:bg-gray-200 hover:text-gray-800 rounded-md dark:hover:bg-gray-800">
                                                                                                                            <i className="uil-favorite mr-1" />  Add favorites
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li>
                                                                                                                        <hr className="-mx-2 my-2 dark:border-gray-800" />
                                                                                                                    </li>
                                                                                                                    <li>
                                                                                                                        <a href="#" className="flex items-center px-3 py-2 text-red-500 hover:bg-red-100 hover:text-red-500 rounded-md dark:hover:bg-red-600">
                                                                                                                            <i className="uil-trash-alt mr-1" />  Delete
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                </ul>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div uk-lightbox>
                                                                                                        <a href={require('../img/post/img4.jpg')}>
                                                                                                            <video width={500} height={500} controls>
                                                                                                                <source src={`http://localhost/instello/video/${img.video}`} type='video/mp4'></source>
                                                                                                            </video>
                                                                                                        </a>
                                                                                                    </div>
                                                                                                    <div className="py-3 px-4 space-y-3">
                                                                                                        <div className="flex space-x-4 lg:font-bold">
                                                                                                            <a href="#" className="flex items-center space-x-2">
                                                                                                                <div className="p-2 rounded-full text-black">
                                                                                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width={22} height={22} className="dark:text-gray-100">
                                                                                                                        <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                                                                                                                    </svg>
                                                                                                                </div>
                                                                                                                <div> Like</div>
                                                                                                            </a>
                                                                                                            <a href="#" className="flex items-center space-x-2">
                                                                                                                <div className="p-2 rounded-full text-black">
                                                                                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width={22} height={22} className="dark:text-gray-100">
                                                                                                                        <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" />
                                                                                                                    </svg>
                                                                                                                </div>
                                                                                                                <div> Comment</div>
                                                                                                            </a>
                                                                                                            <a href="#" className="flex items-center space-x-2 flex-1 justify-end">
                                                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width={22} height={22} className="dark:text-gray-100">
                                                                                                                    <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                                                                                                                </svg>
                                                                                                                <div> Share</div>
                                                                                                            </a>
                                                                                                        </div>
                                                                                                        <div className="flex items-center space-x-3">
                                                                                                            <div className="flex items-center">
                                                                                                                <img src={require('../img/avatars/avatar-1.jpg')} alt className="w-6 h-6 rounded-full border-2 border-white dark:border-gray-900" />
                                                                                                                <img src={require('../img/avatars/avatar-4.jpg')} alt className="w-6 h-6 rounded-full border-2 border-white dark:border-gray-900 -ml-2" />
                                                                                                                <img src={require('../img/avatars/avatar-2.jpg')} alt className="w-6 h-6 rounded-full border-2 border-white dark:border-gray-900 -ml-2" />
                                                                                                            </div>
                                                                                                            <div className="dark:text-gray-100">
                                                                                                                Liked <strong> Johnson</strong> and <strong> 209 Others </strong>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                        <div className="border-t pt-4 space-y-4 dark:border-gray-600">
                                                                                                            <div className="flex">
                                                                                                                <div className="w-10 h-10 rounded-full relative flex-shrink-0">
                                                                                                                    <img src={require('../img/avatars/avatar-1.jpg')} alt className="absolute h-full rounded-full w-full" />
                                                                                                                </div>
                                                                                                                <div className="text-gray-700 py-2 px-3 rounded-md bg-gray-100 h-full relative lg:ml-5 ml-2 lg:mr-20  dark:bg-gray-800 dark:text-gray-100">
                                                                                                                    <p className="leading-6">In ut odio libero vulputate <urna className="i uil-heart" /> <i className="uil-grin-tongue-wink"> </i> </p>
                                                                                                                    <div className="absolute w-3 h-3 top-3 -left-1 bg-gray-100 transform rotate-45 dark:bg-gray-800" />
                                                                                                                </div>
                                                                                                            </div>
                                                                                                            <div className="flex">
                                                                                                                <div className="w-10 h-10 rounded-full relative flex-shrink-0">
                                                                                                                    <img src={require('../img/avatars/avatar-1.jpg')} alt className="absolute h-full rounded-full w-full" />
                                                                                                                </div>
                                                                                                                <div className="text-gray-700 py-2 px-3 rounded-md bg-gray-100 h-full relative lg:ml-5 ml-2 lg:mr-20  dark:bg-gray-800 dark:text-gray-100">
                                                                                                                    <p className="leading-6">Nam liber tempor cum soluta nobis eleifend option <i className="uil-grin-tongue-wink-alt" />
                                                                                                                    </p>
                                                                                                                    <div className="absolute w-3 h-3 top-3 -left-1 bg-gray-100 transform rotate-45 dark:bg-gray-800" />
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                        <div className="bg-gray-100 bg-gray-100 rounded-full rounded-md relative dark:bg-gray-800">
                                                                                                            <input type="text" placeholder="Add your Comment.." className="bg-transparent max-h-10 shadow-none" />
                                                                                                            <div className="absolute bottom-0 flex h-full items-center right-0 right-3 text-xl space-x-2">
                                                                                                                <a href="#"> <i className="uil-image" /></a>
                                                                                                                <a href="#"> <i className="uil-video" /></a>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                {/* <p> {j.id} </p> */}
                                                                                                {/* <img src={`http://localhost/instello/image/${j.image}`} alt width={100} height={100} /> */}

                                                                                            </>
                                                                                        )
                                                                                    }
                                                                                })
                                                                            }
                                                                        </>
                                                                    )
                                                                }
                                                            })
                                                        }
                                                    </>
                                                )
                                            }
                                        })
                                    }

                                    {/* post 2*/}
                                    <div className="bg-white shadow rounded-md dark:bg-gray-900 -mx-2 lg:mx-0">
                                        {/* post header*/}
                                        <div className="flex justify-between items-center px-4 py-3">
                                            <div className="flex flex-1 items-center space-x-4">
                                                <a href="#">
                                                    <div className="bg-gradient-to-tr from-yellow-600 to-pink-600 p-0.5 rounded-full">
                                                        <img src={require('../img/avatars/avatar-2.jpg')} className="bg-gray-200 border border-white rounded-full w-8 h-8" />
                                                    </div>
                                                </a>
                                                <span className="block capitalize font-semibold dark:text-gray-100"> Johnson smith </span>
                                            </div>
                                            <div>
                                                <a href="#"> <i className="icon-feather-more-horizontal text-2xl hover:bg-gray-200 rounded-full p-2 transition -mr-1 dark:hover:bg-gray-700" /> </a>
                                                <div className="bg-white w-56 shadow-md mx-auto p-2 mt-12 rounded-md text-gray-500 hidden text-base border border-gray-100 dark:bg-gray-900 dark:text-gray-100 dark:border-gray-700" uk-drop="mode: hover;pos: top-right">
                                                    <ul className="space-y-1">
                                                        <li>
                                                            <a href="#" className="flex items-center px-3 py-2 hover:bg-gray-200 hover:text-gray-800 rounded-md dark:hover:bg-gray-800">
                                                                <i className="uil-share-alt mr-1" /> Share
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" className="flex items-center px-3 py-2 hover:bg-gray-200 hover:text-gray-800 rounded-md dark:hover:bg-gray-800">
                                                                <i className="uil-edit-alt mr-1" />  Edit Post
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" className="flex items-center px-3 py-2 hover:bg-gray-200 hover:text-gray-800 rounded-md dark:hover:bg-gray-800">
                                                                <i className="uil-comment-slash mr-1" />   Disable comments
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" className="flex items-center px-3 py-2 hover:bg-gray-200 hover:text-gray-800 rounded-md dark:hover:bg-gray-800">
                                                                <i className="uil-favorite mr-1" />  Add favorites
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <hr className="-mx-2 my-2 dark:border-gray-800" />
                                                        </li>
                                                        <li>
                                                            <a href="#" className="flex items-center px-3 py-2 text-red-500 hover:bg-red-100 hover:text-red-500 rounded-md dark:hover:bg-red-600">
                                                                <i className="uil-trash-alt mr-1" />  Delete
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div uk-lightbox>
                                            <div className="grid grid-cols-2 gap-2 p-2">
                                                <a href={require('../img/post/img9.jpg')} className="col-span-2">
                                                    <img src={require('../img/post/img9.jpg')} alt className="rounded-md w-full lg:h-76 object-cover" />
                                                </a>
                                                <a href={require('../img/post/img10.jpg')}>
                                                    <img src={require('../img/post/img10.jpg')} alt className="rounded-md w-full h-full" />
                                                </a>
                                                <a href={require('../img/post/img11.jpg')} className="relative">
                                                    <img src={require('../img/post/img11.jpg')} alt className="rounded-md w-full h-full" />
                                                    <div className="absolute bg-gray-900 bg-opacity-30 flex justify-center items-center text-white rounded-md inset-0 text-2xl"> + 15 more </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="py-3 px-4 space-y-3">
                                            <div className="flex space-x-4 lg:font-bold">
                                                <a href="#" className="flex items-center space-x-2">
                                                    <div className="p-2 rounded-full text-black">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width={22} height={22} className="dark:text-gray-100">
                                                            <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                                                        </svg>
                                                    </div>
                                                    <div> Like</div>
                                                </a>
                                                <a href="#" className="flex items-center space-x-2">
                                                    <div className="p-2 rounded-full text-black">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width={22} height={22} className="dark:text-gray-100">
                                                            <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" />
                                                        </svg>
                                                    </div>
                                                    <div> Comment</div>
                                                </a>
                                                <a href="#" className="flex items-center space-x-2 flex-1 justify-end">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width={22} height={22} className="dark:text-gray-100">
                                                        <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                                                    </svg>
                                                    <div> Share</div>
                                                </a>
                                            </div>
                                            <div className="flex items-center space-x-3">
                                                <div className="flex items-center">
                                                    <img src={require('../img/avatars/avatar-1.jpg')} alt className="w-6 h-6 rounded-full border-2 border-white dark:border-gray-900" />
                                                    <img src={require('../img/avatars/avatar-4.jpg')} alt className="w-6 h-6 rounded-full border-2 border-white dark:border-gray-900 -ml-2" />
                                                    <img src={require('../img/avatars/avatar-2.jpg')} alt className="w-6 h-6 rounded-full border-2 border-white dark:border-gray-900 -ml-2" />
                                                </div>
                                                <div className="dark:text-gray-100">
                                                    Liked <strong> Johnson</strong> and <strong> 209 Others </strong>
                                                </div>
                                            </div>
                                            <div className="border-t pt-4 space-y-4 dark:border-gray-600">
                                                <div className="flex">
                                                    <div className="w-10 h-10 rounded-full relative flex-shrink-0">
                                                        <img src={require('../img/avatars/avatar-1.jpg')} alt className="absolute h-full rounded-full w-full" />
                                                    </div>
                                                    <div className="text-gray-700 py-2 px-3 rounded-md bg-gray-100 h-full relative lg:ml-5 ml-2 lg:mr-20  dark:bg-gray-800 dark:text-gray-100">
                                                        <p className="leading-6">In ut odio libero vulputate <urna className="i uil-heart" /> <i className="uil-grin-tongue-wink"> </i> </p>
                                                        <div className="absolute w-3 h-3 top-3 -left-1 bg-gray-100 transform rotate-45 dark:bg-gray-800" />
                                                    </div>
                                                </div>
                                                <div className="flex">
                                                    <div className="w-10 h-10 rounded-full relative flex-shrink-0">
                                                        <img src={require('../img/avatars/avatar-1.jpg')} alt className="absolute h-full rounded-full w-full" />
                                                    </div>
                                                    <div className="text-gray-700 py-2 px-3 rounded-md bg-gray-100 h-full relative lg:ml-5 ml-2 lg:mr-20  dark:bg-gray-800 dark:text-gray-100">
                                                        <p className="leading-6">Nam liber tempor cum soluta nobis eleifend option <i className="uil-grin-tongue-wink-alt" />
                                                        </p>
                                                        <div className="absolute w-3 h-3 top-3 -left-1 bg-gray-100 transform rotate-45 dark:bg-gray-800" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="bg-gray-100 bg-gray-100 rounded-full rounded-md relative dark:bg-gray-800">
                                                <input type="text" placeholder="Add your Comment.." className="bg-transparent max-h-10 shadow-none" />
                                                <div className="absolute bottom-0 flex h-full items-center right-0 right-3 text-xl space-x-2">
                                                    <a href="#"> <i className="uil-image" /></a>
                                                    <a href="#"> <i className="uil-video" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Load more*/}
                                    <div className="flex justify-center mt-6" id="toggle" uk-toggle="target: #toggle ;animation: uk-animation-fade">
                                        <a href="#" className="bg-white dark:bg-gray-900 font-semibold my-3 px-6 py-2 rounded-full shadow-md dark:bg-gray-800 dark:text-white">
                                            Load more ..</a>
                                    </div>
                                    {/* post 3*/}
                                    <div className="bg-white shadow rounded-md dark:bg-gray-900 -mx-2 lg:mx-0" id="toggle" hidden>
                                        {/* post header*/}
                                        <div className="flex justify-between items-center px-4 py-3">
                                            <div className="flex flex-1 items-center space-x-4">
                                                <a href="#">
                                                    <div className="bg-gradient-to-tr from-yellow-600 to-pink-600 p-0.5 rounded-full">
                                                        <img src={require('../img/avatars/avatar-2.jpg')} className="bg-gray-200 border border-white rounded-full w-8 h-8" />
                                                    </div>
                                                </a>
                                                <span className="block capitalize font-semibold dark:text-gray-100"> Johnson smith </span>
                                            </div>
                                            <div>
                                                <a href="#"> <i className="icon-feather-more-horizontal text-2xl hover:bg-gray-200 rounded-full p-2 transition -mr-1 dark:hover:bg-gray-700" /> </a>
                                                <div className="bg-white w-56 shadow-md mx-auto p-2 mt-12 rounded-md text-gray-500 hidden text-base border border-gray-100 dark:bg-gray-900 dark:text-gray-100 dark:border-gray-700" uk-drop="mode: hover;pos: top-right">
                                                    <ul className="space-y-1">
                                                        <li>
                                                            <a href="#" className="flex items-center px-3 py-2 hover:bg-gray-200 hover:text-gray-800 rounded-md dark:hover:bg-gray-800">
                                                                <i className="uil-share-alt mr-1" /> Share
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" className="flex items-center px-3 py-2 hover:bg-gray-200 hover:text-gray-800 rounded-md dark:hover:bg-gray-800">
                                                                <i className="uil-edit-alt mr-1" />  Edit Post
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" className="flex items-center px-3 py-2 hover:bg-gray-200 hover:text-gray-800 rounded-md dark:hover:bg-gray-800">
                                                                <i className="uil-comment-slash mr-1" />   Disable comments
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" className="flex items-center px-3 py-2 hover:bg-gray-200 hover:text-gray-800 rounded-md dark:hover:bg-gray-800">
                                                                <i className="uil-favorite mr-1" />  Add favorites
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <hr className="-mx-2 my-2 dark:border-gray-800" />
                                                        </li>
                                                        <li>
                                                            <a href="#" className="flex items-center px-3 py-2 text-red-500 hover:bg-red-100 hover:text-red-500 rounded-md dark:hover:bg-red-600">
                                                                <i className="uil-trash-alt mr-1" />  Delete
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-3 border-b dark:border-gray-700">
                                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim laoreet dolore magna aliquam erat volutpat
                                        </div>
                                        <div className="py-3 px-4 space-y-3">
                                            <div className="flex space-x-4 lg:font-bold">
                                                <a href="#" className="flex items-center space-x-2">
                                                    <div className="p-2 rounded-full text-black">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width={22} height={22} className="dark:text-gray-100">
                                                            <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                                                        </svg>
                                                    </div>
                                                    <div> Like</div>
                                                </a>
                                                <a href="#" className="flex items-center space-x-2">
                                                    <div className="p-2 rounded-full text-black">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width={22} height={22} className="dark:text-gray-100">
                                                            <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" />
                                                        </svg>
                                                    </div>
                                                    <div> Comment</div>
                                                </a>
                                                <a href="#" className="flex items-center space-x-2 flex-1 justify-end">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width={22} height={22} className="dark:text-gray-100">
                                                        <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                                                    </svg>
                                                    <div> Share</div>
                                                </a>
                                            </div>
                                            <div className="flex items-center space-x-3">
                                                <div className="flex items-center">
                                                    <img src={require('../img/avatars/avatar-1.jpg')} alt className="w-6 h-6 rounded-full border-2 border-white dark:border-gray-900" />
                                                    <img src={require('../img/avatars/avatar-4.jpg')} alt className="w-6 h-6 rounded-full border-2 border-white dark:border-gray-900 -ml-2" />
                                                    <img src={require('../img/avatars/avatar-2.jpg')} alt className="w-6 h-6 rounded-full border-2 border-white dark:border-gray-900 -ml-2" />
                                                </div>
                                                <div className="dark:text-gray-100">
                                                    Liked <strong> Johnson</strong> and <strong> 209 Others </strong>
                                                </div>
                                            </div>
                                            <div className="border-t pt-4 space-y-4 dark:border-gray-600">
                                                <div className="flex">
                                                    <div className="w-10 h-10 rounded-full relative flex-shrink-0">
                                                        <img src={require('../img/avatars/avatar-1.jpg')} alt className="absolute h-full rounded-full w-full" />
                                                    </div>
                                                    <div className="text-gray-700 py-2 px-3 rounded-md bg-gray-100 h-full relative lg:ml-5 ml-2 lg:mr-20  dark:bg-gray-800 dark:text-gray-100">
                                                        <p className="leading-6">In ut odio libero vulputate <urna className="i uil-heart" /> <i className="uil-grin-tongue-wink"> </i> </p>
                                                        <div className="absolute w-3 h-3 top-3 -left-1 bg-gray-100 transform rotate-45 dark:bg-gray-800" />
                                                    </div>
                                                </div>
                                                <div className="flex">
                                                    <div className="w-10 h-10 rounded-full relative flex-shrink-0">
                                                        <img src={require('../img/avatars/avatar-1.jpg')} alt className="absolute h-full rounded-full w-full" />
                                                    </div>
                                                    <div className="text-gray-700 py-2 px-3 rounded-md bg-gray-100 h-full relative lg:ml-5 ml-2 lg:mr-20  dark:bg-gray-800 dark:text-gray-100">
                                                        <p className="leading-6">Nam liber tempor cum soluta nobis eleifend option <i className="uil-grin-tongue-wink-alt" />
                                                        </p>
                                                        <div className="absolute w-3 h-3 top-3 -left-1 bg-gray-100 transform rotate-45 dark:bg-gray-800" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="bg-gray-100 bg-gray-100 rounded-full rounded-md relative dark:bg-gray-800">
                                                <input type="text" placeholder="Add your Comment.." className="bg-transparent max-h-10 shadow-none" />
                                                <div className="absolute bottom-0 flex h-full items-center right-0 right-3 text-xl space-x-2">
                                                    <a href="#"> <i className="uil-image" /></a>
                                                    <a href="#"> <i className="uil-video" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* post 4*/}
                                    <div className="bg-white shadow rounded-md dark:bg-gray-900 -mx-2 lg:mx-0" id="toggle" hidden>
                                        {/* post header*/}
                                        <div className="flex justify-between items-center px-4 py-3">
                                            <div className="flex flex-1 items-center space-x-4">
                                                <a href="#">
                                                    <div className="bg-gradient-to-tr from-yellow-600 to-pink-600 p-0.5 rounded-full">
                                                        <img src={require('../img/avatars/avatar-2.jpg')} className="bg-gray-200 border border-white rounded-full w-8 h-8" />
                                                    </div>
                                                </a>
                                                <span className="block capitalize font-semibold dark:text-gray-100"> Johnson smith </span>
                                            </div>
                                            <div>
                                                <a href="#"> <i className="icon-feather-more-horizontal text-2xl hover:bg-gray-200 rounded-full p-2 transition -mr-1 dark:hover:bg-gray-700" /> </a>
                                                <div className="bg-white w-56 shadow-md mx-auto p-2 mt-12 rounded-md text-gray-500 hidden text-base border border-gray-100 dark:bg-gray-900 dark:text-gray-100 dark:border-gray-700" uk-drop="mode: hover;pos: top-right">
                                                    <ul className="space-y-1">
                                                        <li>
                                                            <a href="#" className="flex items-center px-3 py-2 hover:bg-gray-200 hover:text-gray-800 rounded-md dark:hover:bg-gray-800">
                                                                <i className="uil-share-alt mr-1" /> Share
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" className="flex items-center px-3 py-2 hover:bg-gray-200 hover:text-gray-800 rounded-md dark:hover:bg-gray-800">
                                                                <i className="uil-edit-alt mr-1" />  Edit Post
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" className="flex items-center px-3 py-2 hover:bg-gray-200 hover:text-gray-800 rounded-md dark:hover:bg-gray-800">
                                                                <i className="uil-comment-slash mr-1" />   Disable comments
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" className="flex items-center px-3 py-2 hover:bg-gray-200 hover:text-gray-800 rounded-md dark:hover:bg-gray-800">
                                                                <i className="uil-favorite mr-1" />  Add favorites
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <hr className="-mx-2 my-2 dark:border-gray-800" />
                                                        </li>
                                                        <li>
                                                            <a href="#" className="flex items-center px-3 py-2 text-red-500 hover:bg-red-100 hover:text-red-500 rounded-md dark:hover:bg-red-600">
                                                                <i className="uil-trash-alt mr-1" />  Delete
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full h-full">
                                            <iframe src="https://www.youtube.com/embed/pQN-pnXPaVg" frameBorder={0} uk-video="automute: true" allowFullScreen uk-responsive className="w-full lg:h-64 h-40" />
                                        </div>
                                        <div className="py-3 px-4 space-y-3">
                                            <div className="flex space-x-4 lg:font-bold">
                                                <a href="#" className="flex items-center space-x-2">
                                                    <div className="p-2 rounded-full text-black">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width={22} height={22} className="dark:text-gray-100">
                                                            <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                                                        </svg>
                                                    </div>
                                                    <div> Like</div>
                                                </a>
                                                <a href="#" className="flex items-center space-x-2">
                                                    <div className="p-2 rounded-full text-black">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width={22} height={22} className="dark:text-gray-100">
                                                            <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" />
                                                        </svg>
                                                    </div>
                                                    <div> Comment</div>
                                                </a>
                                                <a href="#" className="flex items-center space-x-2 flex-1 justify-end">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width={22} height={22} className="dark:text-gray-100">
                                                        <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                                                    </svg>
                                                    <div> Share</div>
                                                </a>
                                            </div>
                                            <div className="flex items-center space-x-3">
                                                <div className="flex items-center">
                                                    <img src={require('../img/avatars/avatar-1.jpg')} alt className="w-6 h-6 rounded-full border-2 border-white dark:border-gray-900" />
                                                    <img src={require('../img/avatars/avatar-4.jpg')} alt className="w-6 h-6 rounded-full border-2 border-white dark:border-gray-900 -ml-2" />
                                                    <img src={require('../img/avatars/avatar-2.jpg')} alt className="w-6 h-6 rounded-full border-2 border-white dark:border-gray-900 -ml-2" />
                                                </div>
                                                <div className="dark:text-gray-100">
                                                    Liked <strong> Johnson</strong> and <strong> 209 Others </strong>
                                                </div>
                                            </div>
                                            <div className="border-t pt-4 space-y-4 dark:border-gray-600">
                                                <div className="flex">
                                                    <div className="w-10 h-10 rounded-full relative flex-shrink-0">
                                                        <img src={require('../img/avatars/avatar-1.jpg')} alt className="absolute h-full rounded-full w-full" />
                                                    </div>
                                                    <div className="text-gray-700 py-2 px-3 rounded-md bg-gray-100 h-full relative lg:ml-5 ml-2 lg:mr-20  dark:bg-gray-800 dark:text-gray-100">
                                                        <p className="leading-6">In ut odio libero vulputate <urna className="i uil-heart" /> <i className="uil-grin-tongue-wink"> </i> </p>
                                                        <div className="absolute w-3 h-3 top-3 -left-1 bg-gray-100 transform rotate-45 dark:bg-gray-800" />
                                                    </div>
                                                </div>
                                                <div className="flex">
                                                    <div className="w-10 h-10 rounded-full relative flex-shrink-0">
                                                        <img src={require('../img/avatars/avatar-1.jpg')} alt className="absolute h-full rounded-full w-full" />
                                                    </div>
                                                    <div className="text-gray-700 py-2 px-3 rounded-md bg-gray-100 h-full relative lg:ml-5 ml-2 lg:mr-20  dark:bg-gray-800 dark:text-gray-100">
                                                        <p className="leading-6">Nam liber tempor cum soluta nobis eleifend option <i className="uil-grin-tongue-wink-alt" />
                                                        </p>
                                                        <div className="absolute w-3 h-3 top-3 -left-1 bg-gray-100 transform rotate-45 dark:bg-gray-800" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="bg-gray-100 bg-gray-100 rounded-full rounded-md relative dark:bg-gray-800">
                                                <input type="text" placeholder="Add your Comment.." className="bg-transparent max-h-10 shadow-none" />
                                                <div className="absolute bottom-0 flex h-full items-center right-0 right-3 text-xl space-x-2">
                                                    <a href="#"> <i className="uil-image" /></a>
                                                    <a href="#"> <i className="uil-video" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Load more*/}
                                    <div className="flex justify-center mt-6" id="toggle" hidden>
                                        <a href="#" className="bg-white dark:bg-gray-900 font-semibold my-3 px-6 py-2 rounded-full shadow-md dark:bg-gray-800 dark:text-white">
                                            Load more ..</a>
                                    </div>
                                </div>
                                {/* right sidebar*/}
                                <div className="lg:w-5/12">
                                    <div className="bg-white dark:bg-gray-900 shadow-md rounded-md overflow-hidden">
                                        <div className="bg-gray-50 dark:bg-gray-800 border-b border-gray-100 flex items-baseline justify-between py-4 px-6 dark:border-gray-800">
                                            <h2 className="font-semibold text-lg">Who to follow</h2>
                                            <a href="#"> Refresh</a>
                                        </div>
                                        <div className="divide-gray-300 divide-gray-50 divide-opacity-50 divide-y px-4 dark:divide-gray-800 dark:text-gray-100">
                                            {
                                                user.map((i, j) => {
                                                    if (i.id != a) {
                                                        return (
                                                            <>
                                                                <div className="flex items-center justify-between py-3">
                                                                    <div className="flex flex-1 items-center space-x-4">
                                                                        <a href="profile.html">
                                                                            <img src={`http://localhost/instello/image/${i.image}`}
                                                                                className="bg-gray-200 rounded-full w-10 h-10" />
                                                                        </a>
                                                                        <div className="flex flex-col">
                                                                            <span className="block capitalize font-semibold"> {i.fname} </span>
                                                                            <span className="block capitalize text-sm"> {i.lname} </span>
                                                                        </div>
                                                                    </div>

                                                                    <button className='follow' onClick={() => follows(i.id)}
                                                                        id={"follow-" + i.id}>
                                                                        follow
                                                                    </button>
                                                                    {/* <button  className='border border-gray-200 font-semibold rounded-full hover:bg-pink-600 hover:text-white hover:border-pink-600 dark:border-gray-800' type="text" id={"follows-" + i.id} defaultValue={'following'} readOnly  style={{display:'none'}}>,/</button> */}
                                                                    <button className='follow' type="text" id={"follows-" + i.id}
                                                                        defaultValue={'following'} style={{ display: 'none' }}
                                                                        onClick={() => unfollow(i.id)}>following</button>


                                                                </div>
                                                            </>
                                                        )
                                                    }

                                                })
                                            }

                                            {/* <div className="flex items-center justify-between py-3">
                                                <div className="flex flex-1 items-center space-x-4">
                                                    <a href="profile.html">
                                                        <img src={require('../img/avatars/avatar-1.jpg')} className="bg-gray-200 rounded-full w-10 h-10" />
                                                    </a>
                                                    <div className="flex flex-col">
                                                        <span className="block capitalize font-semibold"> James Lewis </span>
                                                        <span className="block capitalize text-sm"> Istanbul </span>
                                                    </div>
                                                </div>
                                                <a href="#" className="border border-gray-200 font-semibold px-4 py-1 rounded-full hover:bg-pink-600 hover:text-white hover:border-pink-600 dark:border-gray-800"> Follow </a>
                                            </div>
                                            <div className="flex items-center justify-between py-3">
                                                <div className="flex flex-1 items-center space-x-4">
                                                    <a href="profile.html">
                                                        <img src={require('../img/avatars/avatar-5.jpg')} className="bg-gray-200 rounded-full w-10 h-10" />
                                                    </a>
                                                    <div className="flex flex-col">
                                                        <span className="block capitalize font-semibold"> John Michael </span>
                                                        <span className="block capitalize text-sm"> New York </span>
                                                    </div>
                                                </div>
                                                <a href="#" className="border border-gray-200 font-semibold px-4 py-1 rounded-full hover:bg-pink-600 hover:text-white hover:border-pink-600 dark:border-gray-800"> Follow </a>
                                            </div>
                                            <div className="flex items-center justify-between py-3">
                                                <div className="flex flex-1 items-center space-x-4">
                                                    <a href="profile.html">
                                                        <img src={require('../img/avatars/avatar-7.jpg')} className="bg-gray-200 rounded-full w-10 h-10" />
                                                    </a>
                                                    <div className="flex flex-col">
                                                        <span className="block capitalize font-semibold"> Monroe Parker </span>
                                                        <span className="block capitalize text-sm"> Yeman </span>
                                                    </div>
                                                </div>
                                                <a href="#" className="border border-gray-200 font-semibold px-4 py-1 rounded-full hover:bg-pink-600 hover:text-white hover:border-pink-600 dark:border-gray-800"> Follow </a>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div className="mt-5" uk-sticky="offset:28; bottom:true ; media @m">
                                        <div className="bg-white dark:bg-gray-900 shadow-md rounded-md overflow-hidden">
                                            <div className="bg-gray-50 border-b border-gray-100 flex items-baseline justify-between py-4 px-6 dark:bg-gray-800 dark:border-gray-700">
                                                <h2 className="font-semibold text-lg">Latest</h2>
                                                <a href="explore.html"> See all</a>
                                            </div>
                                            <div className="grid grid-cols-2 gap-2 p-3 uk-link-reset">
                                                <div className="bg-red-500 max-w-full h-32 rounded-lg relative overflow-hidden uk-transition-toggle">
                                                    <a href="#story-modal" uk-toggle>
                                                        <img src={require('../img/post/img2.jpg')} className="w-full h-full absolute object-cover inset-0" />
                                                    </a>
                                                    <div className="flex flex-1 justify-around items-center absolute bottom-0 w-full p-2 text-white custom-overly1 uk-transition-slide-bottom-medium">
                                                        <a href="#"> <i className="uil-heart" /> 150 </a>
                                                        <a href="#"> <i className="uil-heart" /> 30 </a>
                                                    </div>
                                                </div>
                                                <div className="bg-red-500 max-w-full h-40 rounded-lg relative overflow-hidden uk-transition-toggle">
                                                    <a href="#story-modal" uk-toggle>
                                                        <img src={require('../img/post/img7.jpg')} className="w-full h-full absolute object-cover inset-0" />
                                                    </a>
                                                    <div className="flex flex-1 justify-around items-center absolute bottom-0 w-full p-2 text-white custom-overly1 uk-transition-slide-bottom-medium">
                                                        <a href="#"> <i className="uil-heart" /> 150 </a>
                                                        <a href="#"> <i className="uil-heart" /> 30 </a>
                                                    </div>
                                                </div>
                                                <div className="bg-red-500 max-w-full h-40 -mt-8 rounded-lg relative overflow-hidden uk-transition-toggle">
                                                    <a href="#story-modal" uk-toggle>
                                                        <img src={require('../img/post/img5.jpg')} className="w-full h-full absolute object-cover inset-0" />
                                                    </a>
                                                    <div className="flex flex-1 justify-around  items-center absolute bottom-0 w-full p-2 text-white custom-overly1 uk-transition-slide-bottom-medium">
                                                        <a href="#"> <i className="uil-heart" /> 150 </a>
                                                        <a href="#"> <i className="uil-heart" /> 30 </a>
                                                    </div>
                                                </div>
                                                <div className="bg-red-500 max-w-full h-32 rounded-lg relative overflow-hidden uk-transition-toggle">
                                                    <a href="#story-modal" uk-toggle>
                                                        <img src={require('../img/post/img3.jpg')} className="w-full h-full absolute object-cover inset-0" />
                                                    </a>
                                                    <div className="flex flex-1 justify-around  items-center absolute bottom-0 w-full p-2 text-white custom-overly1 uk-transition-slide-bottom-medium">
                                                        <a href="#"> <i className="uil-heart" /> 150 </a>
                                                        <a href="#"> <i className="uil-heart" /> 30 </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Story modal */}
                <div id="story-modal" className="uk-modal-container" uk-modal>
                    <div className="uk-modal-dialog story-modal">
                        <button className="uk-modal-close-default lg:-mt-9 lg:-mr-9 -mt-5 -mr-5 shadow-lg bg-white rounded-full p-4 transition dark:bg-gray-600 dark:text-white" type="button" uk-close />
                        <div className="story-modal-media">
                            <img src={require('../img/post/img4.jpg')} alt className="inset-0 h-full w-full object-cover" />
                        </div>
                        <div className="flex-1 bg-white dark:bg-gray-900 dark:text-gray-100">
                            {/* post header*/}
                            <div className="border-b flex items-center justify-between px-5 py-3 dark:border-gray-600">
                                <div className="flex flex-1 items-center space-x-4">
                                    <a href="#">
                                        <div className="bg-gradient-to-tr from-yellow-600 to-pink-600 p-0.5 rounded-full">
                                            <img src={require('../img/avatars/avatar-2.jpg')} className="bg-gray-200 border border-white rounded-full w-8 h-8" />
                                        </div>
                                    </a>
                                    <span className="block text-lg font-semibold"> Johnson smith </span>
                                </div>
                                <a href="#">
                                    <i className="icon-feather-more-horizontal text-2xl rounded-full p-2 transition -mr-1" />
                                </a>
                            </div>
                            <div className="story-content p-4" data-simplebar>
                                <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. </p>
                                <div className="py-4 ">
                                    <div className="flex justify-around">
                                        <a href="#" className="flex items-center space-x-3">
                                            <div className="flex font-bold items-baseline"> <i className="uil-heart mr-1"> </i> Like</div>
                                        </a>
                                        <a href="#" className="flex items-center space-x-3">
                                            <div className="flex font-bold items-baseline"> <i className="uil-heart mr-1"> </i> Comment</div>
                                        </a>
                                        <a href="#" className="flex items-center space-x-3">
                                            <div className="flex font-bold items-baseline"> <i className="uil-heart mr-1"> </i> Share</div>
                                        </a>
                                    </div>
                                    <hr className="-mx-4 my-3" />
                                    <div className="flex items-center space-x-3">
                                        <div className="flex items-center">
                                            <img src={require('../img/avatars/avatar-1.jpg')} alt className="w-6 h-6 rounded-full border-2 border-white" />
                                            <img src={require('../img/avatars/avatar-4.jpg')} alt className="w-6 h-6 rounded-full border-2 border-white -ml-2" />
                                            <img src={require('../img/avatars/avatar-2.jpg')} alt className="w-6 h-6 rounded-full border-2 border-white -ml-2" />
                                        </div>
                                        <div>
                                            Liked <strong> Johnson</strong> and <strong> 209 Others </strong>
                                        </div>
                                    </div>
                                </div>
                                <div className="-mt-1 space-y-1">
                                    <div className="flex flex-1 items-center space-x-2">
                                        <img src={require('../img/avatars/avatar-2.jpg')} className="rounded-full w-8 h-8" />
                                        <div className="flex-1 p-2">
                                            consectetuer adipiscing elit, sed diam nonummy nibh euismod
                                        </div>
                                    </div>
                                    <div className="flex flex-1 items-center space-x-2">
                                        <img src={require('../img/avatars/avatar-4.jpg')} className="rounded-full w-8 h-8" />
                                        <div className="flex-1 p-2">
                                            consectetuer adipiscing elit
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3 border-t dark:border-gray-600">
                                <div className="bg-gray-200 dark:bg-gray-700 rounded-full rounded-md relative">
                                    <input type="text" placeholder="Add your Comment.." className="bg-transparent max-h-8 shadow-none" />
                                    <div className="absolute bottom-0 flex h-full items-center right-0 right-3 text-xl space-x-2">
                                        <a href="#"> <i className="uil-image" /></a>
                                        <a href="#"> <i className="uil-video" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
export default Feed