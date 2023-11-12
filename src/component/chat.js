import { useEffect, useState } from 'react'
import Sidebar from './sidebar'
import axios from 'axios'
import Header from './header'

function Chat() {
    const [data, setdata] = useState([])
    const [follow, setfollow] = useState([])
    // const [chat, setchat] = useState(false)
    const [message, setmessage] = useState('')
    const [id, setid] = useState('')
    const [chatdata, set_chat_data] = useState([])

    var a = window.localStorage.getItem("uid")
    useEffect(() => {
        axios.get('http://localhost/instello/user-view.php')
            .then(function (response) {
                setdata(response.data.data)
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])
    useEffect(() => {
        axios.get('http://localhost/instello/follow-view.php')
            .then(function (response) {
                // handle success
                // console.log(response);
                setfollow(response.data.data)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [])
    // useEffect(() => {
    //     axios.get('http://localhost/instello/chat_view.php')
    //         .then(function (response) {
    //             // handle success
    //             console.log(response);
    //             set_chat_data(response.data)
    //         })
    //         .catch(function (error) {
    //             // handle error
    //             console.log(error);
    //         })
    // }, [])
    function chating(i) {
        setid(i)
        // alert(i)
        // if (chat == false) {
        //     setchat(true)
        // }
        axios.post('http://localhost/instello/chat_view.php', {
            id:a,
            id_1 : i
         
        })
            .then(function (response) {
                // handle success
                console.log(response);
                set_chat_data(response.data)
                // window.location.reload()
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })

    }
    
    function send() {
        axios.post('http://localhost/instello/chat.php', {
            user_id: a,
            follow_chat: id,
            user_chat: message,
            time : new Date().toLocaleTimeString()
        })
        .then(function (response) {
            // handle success
                console.log(response);
                window.location.reload()
            })
            .catch(function (error) {
                // handle error
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
                        {/* <div className="chat-container"> */}
                        <div className="chat-container  container m-auto pt-5 ">
                            <h1 className="font-semibold lg:mb-6 mb-3 text-2xl"> Messages</h1>
                            <div className="lg:flex lg:shadow lg:bg-white lg:space-y-0 space-y-8 rounded-md lg:-mx-0 -mx-5 overflow-hidden lg:dark:bg-gray-800">
                                {/* left message*/}
                                <div className="lg:w-4/12 bg-white border-r overflow-hidden dark:bg-gray-800 dark:border-gray-600">
                                    {/* search*/}
                                    <div className="border-b px-4 py-4 dark:border-gray-600">
                                        <div className="bg-gray-100 input-with-icon rounded-md dark:bg-gray-700">
                                            <input id="autocomplete-input" type="text" placeholder="Search" className="bg-transparent max-h-10 shadow-none" />
                                            <i className="icon-material-outline-search" />
                                        </div>
                                    </div>
                                    {/* user list*/}
                                    <div className="pb-16 w-full">
                                        <ul className="dark:text-gray-100">
                                            {



                                                follow.map((k) => {
                                                    if (k.u_id == a) {
                                                        const arr = k.f_id.split(',')
                                                        return (
                                                            <>
                                                                {
                                                                    arr.map((q) => {
                                                                        if (q != k.f_id) {
                                                                            return (
                                                                                <>
                                                                                    {
                                                                                        data.map((i) => {
                                                                                            if (i.id == q) {
                                                                                                return (
                                                                                                    <>
                                                                                                        <li onClick={() => chating(i.id)}>
                                                                                                            <a href="#" className="block flex items-center py-3 px-4 space-x-3 hover:bg-gray-100 dark:hover:bg-gray-700">
                                                                                                                <div className="w-12 h-12 rounded-full relative flex-shrink-0">
                                                                                                                    <img src={`http://localhost/instello/image/${i.image}`} alt className="absolute h-full rounded-full w-full" />
                                                                                                                    <span className="absolute bg-green-500 border-2 border-white bottom-0 h-3 m-0.5 right-0 rounded-full shadow-md w-3" />
                                                                                                                </div>
                                                                                                                <div className="flex-1 min-w-0 relative text-gray-500">
                                                                                                                    <h4 className="text-black font-semibold dark:text-white" >{i.fname}</h4>
                                                                                                                    <span className="absolute right-0 top-1 text-xs">{i.lname}</span>
                                                                                                                    <p className="truncate">{i.email}</p>
                                                                                                                </div>
                                                                                                            </a>
                                                                                                        </li>
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

                                        </ul>
                                    </div>
                                </div>

                                {
                                     <div className="lg:w-8/12 bg-white dark:bg-gray-800">
                                        {
                                            data.map((i) => {
                                                if (i.id == id) {
                                                    return (
                                                        <>
                                                            <div className="px-5 py-4 flex uk-flex-between">
                                                                <a href="#" className="flex items-center space-x-3">
                                                                    <div className="w-10 h-10 rounded-full relative flex-shrink-0">
                                                                        <img src={`http://localhost/instello/image/${i.image}`} alt className="h-full rounded-full w-full" />
                                                                        <span className="absolute bg-green-500 border-2 border-white bottom-0 h-3 m-0.5 right-0 rounded-full shadow-md w-3" />
                                                                    </div>
                                                                    <div className="flex-1 min-w-0 relative text-gray-500">
                                                                        <h4 className="font-semibold text-black text-lg">
                                                                            {i.fname}
                                                                        </h4>
                                                                        <p className="font-semibold leading-3 text-green-500 text-sm">is online</p>
                                                                    </div>
                                                                </a>
                                                                <a href="#" className="flex hover:text-red-400 items-center leading-8 space-x-2 text-red-500 font-medium">
                                                                    <i className="uil-trash-alt" /> <span className="lg:block hidden"> Delete Conversation </span>
                                                                </a>
                                                            </div>
                                                            <div className="border-t dark:border-gray-600">
                                                                <div className="lg:p-8 p-4 space-y-5">
                                                                    <h3 className="lg:w-60 mx-auto text-sm uk-heading-line uk-text-center lg:pt-2"><span> 28 June, 2018 </span></h3>
                                                                    {/* my message*/}
                                                                    {/* send message  start*/}
                                                                     {
                                                                        chatdata.map((k) => {
                                                                            if (k.user_id ==  a && k.follow_chat == id) {
                                                                                console.log(k);
                                                                                return (
                                                                                    <>
                                                                                        <div className="flex lg:items-center flex-row-reverse">
                                                                                            <div className="w-14 h-14 rounded-full relative flex-shrink-0">
                                                                                                <img src={`http://localhost/instello/image/${k.img}`} alt className="absolute h-full rounded-full w-full" />
                                                                                            </div>
                                                                                            <div className="text-white py-2 px-3 rounded bg-blue-600 relative h-full lg:mr-5 mr-2 lg:ml-20">
                                                                                                <p className="leading-6">{k.user_chat}<i className="uil-grin-tongue-wink" /> </p>
                                                                                                <div className="absolute w-3 h-3 top-3 -right-1 bg-blue-600 transform rotate-45" />
                                                                                            </div>
                                                                                        </div>
                                                                                    </>
                                                                                )
                                                                            }
                                                                            else {
                                                                                  return (
                                                                                    <>
                                                                                        <h3 className="lg:w-60 mx-auto text-sm uk-heading-line uk-text-center lg:pt-2"><span> 28 June, 2018 </span></h3>
                                                                                        <div className="flex lg:items-center">
                                                                                            <div className="w-14 h-14 rounded-full relative flex-shrink-0">
                                                                                                <img src={`http://localhost/instello/image/${k.img}`} alt className="absolute h-full rounded-full w-full" />
                                                                                            </div>
                                                                                            <div className="text-gray-700 py-2 px-3 rounded bg-gray-100 h-full relative lg:ml-5 ml-2 lg:mr-20 dark:bg-gray-700 dark:text-white">
                                                                                                <p className="leading-6">{k.user_chat}<urna className="i uil-heart" /> <i className="uil-grin-tongue-wink"> </i> </p>
                                                                                                <div className="absolute w-3 h-3 top-3 -left-1 bg-gray-100 transform rotate-45 dark:bg-gray-700" />
                                                                                            </div>
                                                                                        </div>
                                                                                    </>
                                                                                )
                                                                            }
                                                                        })
                                                                    } 

                                                                    {/* send message  end*/}

                                                                    <h3 className="lg:w-60 mx-auto text-sm uk-heading-line uk-text-center lg:pt-2"><span> 28 June, 2018 </span></h3>
                                                                    {/* get message */}
                                                                   

                                                                    {/* {
                                                                        chatdata.map((k) => {
                                                                            return (
                                                                                <>
                                                                                    <div className="flex lg:items-center flex-row-reverse">
                                                                                        <div className="w-14 h-14 rounded-full relative flex-shrink-0">
                                                                                            <img src={`http://localhost/instello/image/${k.image}`} alt className="absolute h-full rounded-full w-full" />
                                                                                        </div>
                                                                                        <div className="text-white py-2 px-3 rounded bg-blue-600 relative h-full lg:mr-5 mr-2 lg:ml-20">
                                                                                            <p className="leading-6">{k.user_chat}<i className="uil-grin-tongue-wink" /> </p>
                                                                                            <div className="absolute w-3 h-3 top-3 -right-1 bg-blue-600 transform rotate-45" />
                                                                                        </div>
                                                                                    </div>
                                                                                </>
                                                                            )
                                                                        })
                                                                    } */}

                                                                    {/* <div className="flex lg:items-center flex-row-reverse">
                                                                        <div className="w-14 h-14 rounded-full relative flex-shrink-0">
                                                                            <img src={`http://localhost/instello/image/`} alt className="absolute h-full rounded-full w-full" />
                                                                        </div>
                                                                        <div className="text-white py-2 px-3 rounded bg-blue-600 relative h-full lg:mr-5 mr-2 lg:ml-20">
                                                                            <p className="leading-6">fvf<i className="uil-grin-tongue-wink" /> </p>
                                                                            <div className="absolute w-3 h-3 top-3 -right-1 bg-blue-600 transform rotate-45" />
                                                                        </div>
                                                                    </div> */}

                                                                    {/* <div className="flex lg:items-center">
                                                                        <div className="w-14 h-14 rounded-full relative flex-shrink-0">
                                                                            <img src={`http://localhost/instello/image/`} alt className="absolute h-full rounded-full w-full" />
                                                                        </div>
                                                                        <div className="text-gray-700 py-2 px-3 rounded bg-gray-100 h-full relative lg:ml-5 ml-2 lg:mr-20 dark:bg-gray-700 dark:text-white">
                                                                            <p className="leading-6">ddf<urna className="i uil-heart" /> <i className="uil-grin-tongue-wink"> </i> </p>
                                                                            <div className="absolute w-3 h-3 top-3 -left-1 bg-gray-100 transform rotate-45 dark:bg-gray-700" />
                                                                        </div>
                                                                    </div> */}
                                                                    {/* get message */}
                                                                </div>
                                                                <div className="border-t flex p-6 dark:border-gray-700">
                                                                    <textarea cols={1} rows={1} placeholder="Your Message.." className="border-0 flex-1 h-10 min-h-0 resize-none min-w-0 shadow-none dark:bg-transparent" onChange={(i) => setmessage(i.target.value)} defaultValue={""} />
                                                                    <div className="flex h-full space-x-2">
                                                                        <button type="submit" className="bg-blue-600 font-semibold px-6 py-2 rounded-md text-white" onClick={send}>Send</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </>
                                                    )
                                                }
                                            })
                                        }

                                    </div>
                                }




                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
export default Chat