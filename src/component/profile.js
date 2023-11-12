import { useState, useEffect } from "react"
import Sidebar from "./sidebar"
import axios from "axios"
import Header from "./header"

function Profile() {

  const [data, setdata] = useState([])
  const [video, setvideo] = useState([])
  const [user, setuser] = useState([])
  const [follow_view, setfollow_view] = useState([])
  const [followers, setfollowers] = useState([])
  const [file, setfile] = useState([])
  const [like , setlike] = useState([])
  var cnt = 0;


  var a = window.localStorage.getItem("uid")
  useEffect(() => {
    axios.get('http://localhost/instello/file-view.php')
      .then(function (response) {
        // handle success
        console.log(response);
        setfile(response.data.data)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }, [])
  useEffect(() => {
    axios.get('http://localhost/instello/user-view.php')
      .then(function (response) {
        // handle success
        // console.log(response);
        setuser(response.data.data)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }, [])

  useEffect(() => {
    axios.get('http://localhost/instello/video-view.php')
      .then(function (response) {
        // handle success
        // console.log(response);
        setvideo(response.data.data)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }, [])
  useEffect(() => {
    axios.get('http://localhost/instello/follow-view.php')
      .then(function (response) {
        // handle success
        // console.log(response.data.data);
        setfollow_view(response.data.data)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }, [])
  useEffect(() => {
    axios.get('http://localhost/instello/followers-view.php')
      .then(function (response) {
        // handle success
        // console.log(response);
        setfollowers(response.data.data)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }, [])
 
  useEffect(() => {
    axios.get('http://localhost/instello/post_like_view.php')
        .then(function (response) {
            console.log(response);
            setlike(response.data)
        })
        .catch(function (error) {
            console.log(error);
        })
}, [])
  return (
    <>
      <div>
        <div id="wrapper">
          <Sidebar />
          <div className="main_content">
            <Header />
            <div className="container pro-container profile-container m-auto">
              {/* profile-cover*/}
              <div className="flex lg:flex-row flex-col items-center lg:py-8 lg:space-x-8">
                <div>
                  <div className="bg-gradient-to-tr from-yellow-600 to-pink-600 p-1 rounded-full m-0.5 mr-2  w-56 h-56 relative overflow-hidden uk-transition-toggle">
                    {
                      user.map((i) => {
                        if (i.id == a) {
                          return (
                            <>
                              <img src={`http://localhost/instello/image/${i.image}`} className="bg-gray-200 border-4 border-white rounded-full w-full h-full dark:border-gray-900" />

                            </>
                          )
                        }
                      })
                    }
                    <div className="absolute -bottom-3 custom-overly1 flex justify-center pt-4 pb-7 space-x-3 text-2xl text-white uk-transition-slide-bottom-medium w-full">
                      <a href="#" className="hover:text-white">
                        <i className="uil-camera" />
                      </a>
                      <a href="#" className="hover:text-white">
                        <i className="uil-crop-alt" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="lg:w/8/12 flex-1 flex flex-col lg:items-start items-center">
                  <h2 className="font-semibold lg:text-2xl text-lg mb-2">
                    {
                      user.map((i) => {
                        if (i.id == a) {
                          return (
                            <>
                              {i.fname}&nbsp;{i.lname}
                            </>
                          )
                        }
                      })
                    }
                  </h2>
                  <p className="lg:text-left mb-2 text-center  dark:text-gray-100"> Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet
                    doming id quod mazim placerat facer possim assum</p>
                  <div className="flex font-semibold mb-3 space-x-2  dark:text-gray-10">
                    <a href="#">Travailing</a> , <a href="#">Sports</a>  , <a href="#">Movies</a>
                  </div>
                  <div className="capitalize flex font-semibold space-x-3 text-center text-sm my-2">
                    <a href="#" className="bg-gray-300 shadow-sm p-2 px-6 rounded-md dark:bg-gray-700"> Add friend</a>
                    <button className="bg-gray-300 shadow-sm p-2 px-6 rounded-md dark:bg-gray-700"><a href={`/edit_profile/${a}`}> Edit Profile</a></button>
                    {/* <a href="#" className="bg-pink-500 shadow-sm p-2 pink-500 px-6 rounded-md text-white hover:text-white hover:bg-pink-600"> Send message</a> */}
                    <div>
                      <a href="#" className="bg-gray-300 flex h-12 h-full items-center justify-center rounded-full text-xl w-9 dark:bg-gray-700">
                        <i className="icon-feather-chevron-down" />
                      </a>
                      <div className="bg-white w-56 shadow-md mx-auto p-2 mt-12 rounded-md text-gray-500 hidden text-base dark:bg-gray-900" uk-drop="mode: click">
                        <ul className="space-y-1">
                          <li>
                            <a href="#" className="flex items-center px-3 py-2 hover:bg-gray-200 hover:text-gray-800 rounded-md dark:hover:bg-gray-700">
                              <i className="uil-user-minus mr-2" />Unfriend
                            </a>
                          </li>
                          <li>
                            <a href="#" className="flex items-center px-3 py-2 hover:bg-gray-200 hover:text-gray-800 rounded-md dark:hover:bg-gray-700">
                              <i className="uil-eye-slash  mr-2" />Hide Your Story
                            </a>
                          </li>
                          <li>
                            <a href="#" className="flex items-center px-3 py-2 hover:bg-gray-200 hover:text-gray-800 rounded-md dark:hover:bg-gray-700">
                              <i className="uil-share-alt mr-2" /> Share This Profile
                            </a>
                          </li>
                          <li>
                            <hr className="-mx-2 my-2  dark:border-gray-700" />
                          </li>
                          <li>
                            <a href="#" className="flex items-center px-3 py-2 text-red-500 hover:bg-red-100 hover:text-red-500 rounded-md dark:hover:bg-red-600">
                              <i className="uil-stop-circle mr-2" /> Block
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="divide-gray-300 divide-transparent divide-x grid grid-cols-3 lg:text-left lg:text-lg mt-3 text-center w-full dark:text-gray-100">
                    <div className="flex lg:flex-row flex-col">
                      {
                        file.map((i) => {
                          if (i.uid === a) {
                            cnt++
                            return (
                              <>
                                {/* <p> {cnt} </p> */}
                              </>
                            )
                          }

                        })
                      }

                      <p>{cnt}</p>
                      <strong className="lg:pl-2">Posts</strong></div>
                    <div className="lg:pl-4 flex lg:flex-row flex-col"> {
                      followers.map((i) => {
                        if (i.u_id == a) {
                          return (
                            <>
                              {i.followers}
                            </>
                          )
                        }
                      })

                    } <strong className="lg:pl-2">Followers</strong></div>
                    <div className="lg:pl-4 flex lg:flex-row flex-col">  {
                      follow_view.map((i) => {
                        if (i.u_id == a) {
                          return (
                            <>
                              {i.following}
                            </>
                          )
                        }
                      })

                    } <strong className="lg:pl-2">Following</strong></div>
                  </div>
                </div>
                <div className="w-20" />
              </div>
              <h1 className="lg:text-2xl text-lg font-extrabold leading-none text-gray-900 tracking-tight mt-8"> Highths </h1>
              <div className="my-6 grid lg:grid-cols-5 grid-cols-3 gap-2 hover:text-yellow-700 uk-link-reset">
                <a href="#">
                  <div className="bg-gray-100 border-4 border-dashed flex flex-col h-full items-center justify-center relative rounded-2xl w-full">
                    <i className="text-4xl uil-plus-circle" /> <span> Add new </span>
                  </div>
                </a>
                <a href="#story-modal" uk-toggle>
                  <img src={require('../img/avatars/avatar-lg-1.jpg')} alt className="w-full lg:h-60 h-40 rounded-md object-cover" />
                </a>
                <a href="#story-modal" uk-toggle>
                  <img src={require('../img/post/img2.jpg')} alt className="w-full lg:h-60 h-40 rounded-md object-cover" />
                </a>
                <a href="#story-modal" uk-toggle>
                  <img src={require('../img/post/img7.jpg')} alt className="w-full lg:h-60 h-40 rounded-md object-cover uk-visible@s" />
                </a>
              </div>
              <div className="flex items-center justify-between mt-8 space-x-3">
                <h1 className="flex-1 font-extrabold leading-none lg:text-2xl text-lg text-gray-900 tracking-tight uk-heading-line"><span>Explore</span></h1>
                <div className="bg-white border border-2 border-gray-300 divide-gray-300 divide-x flex rounded-md shadow-sm dark:bg-gray-100">
                  <a href="#" className="bg-gray300 flex h-10 items-center justify-center  w-10" data-tippy-placement="top" title="Grid view"> <i className="uil-apps" /></a>
                  <a href="#" className="flex h-10 items-center justify-center w-10" data-tippy-placement="top" title="List view"> <i className="uil-list-ul" /></a>
                </div>
              </div>
              <div className="my-6 grid lg:grid-cols-4 grid-cols-2 gap-1.5 hover:text-yellow-700 uk-link-reset">
                {/* <div> */}
                {
                  file.map((i) => {
                    if (i.uid == a) {
                      return (
                        <>
                          <div className="bg-red-500 max-w-full lg:h-64 h-40 rounded-md relative overflow-hidden uk-transition-toggle" tabIndex={0}>
                            <img src={`http://localhost/instello/image/${i.image}`}
                              className="w-full h-full absolute object-cover inset-0" />
                            <div className="absolute bg-black bg-opacity-40 bottom-0 flex h-full items-center justify-center space-x-5 text-lg text-white uk-transition-scale-up w-full">
                              <a href="#story-modal" uk-toggle className="flex items-center"> <ion-icon name="heart" className="mr-1" />
                                {
                                  like.map((k) => {
                                    if ((k.user_id == a) && k.post_id == i.id)
                                     {
                                      return (
                                        <>
                                          {k.likes} 
                                        </>
                                      )
                                    }
                                  })
                                }

                                 </a>
                              <a href="#story-modal" uk-toggle className="flex items-center"> <ion-icon name="chatbubble-ellipses" className="mr-1" /> 30 </a>
                              <a href="#story-modal" uk-toggle className="flex items-center"> <ion-icon name="pricetags" className="mr-1" /> 12</a>
                            </div>
                          </div>
                          {/* <p>{i.id}</p> */}
                        </>
                      )
                    }
                  })
                }
                {
                  video.map((i) => {
                    if (i.uid == a) {
                      return (
                        <>
                          <div className="bg-red-500 max-w-full lg:h-64 h-40 rounded-md relative overflow-hidden uk-transition-toggle" tabIndex={0}>
                            <video width={500} height={500} controls className="w-full h-full absolute object-cover inset-0">
                              <source src={`http://localhost/instello/video/${i.video}`} type='video/mp4'></source>
                            </video>
                            <div className="absolute bg-black bg-opacity-40 bottom-0 flex h-full items-center justify-center space-x-5 text-lg text-white uk-transition-scale-up w-full">
                              <a href="#story-modal" uk-toggle className="flex items-center"> <ion-icon name="heart" className="mr-1" /> 150 </a>
                              <a href="#story-modal" uk-toggle className="flex items-center"> <ion-icon name="chatbubble-ellipses" className="mr-1" /> 30 </a>
                              <a href="#story-modal" uk-toggle className="flex items-center"> <ion-icon name="pricetags" className="mr-1" /> 12</a>
                            </div>
                          </div>
                          {/* <p>{i.id}</p> */}

                        </>
                      )
                    }
                  })
                }
                {/* </div> */}
                {/* <div>
            <div className="bg-red-500 max-w-full lg:h-64 h-40 rounded-md relative overflow-hidden uk-transition-toggle" tabIndex={0}>
              <img src={require('../img/post/img1.jpg')} className="w-full h-full absolute object-cover inset-0" />
              <div className="absolute bg-black bg-opacity-40 bottom-0 flex h-full items-center justify-center space-x-5 text-lg text-white uk-transition-scale-up w-full">
                <a href="#story-modal" uk-toggle className="flex items-center"> <ion-icon name="heart" className="mr-1" /> 150 </a>
                <a href="#story-modal" uk-toggle className="flex items-center"> <ion-icon name="chatbubble-ellipses" className="mr-1" /> 30 </a>
                <a href="#story-modal" uk-toggle className="flex items-center"> <ion-icon name="pricetags" className="mr-1" /> 12</a>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-red-500 max-w-full lg:h-64 h-40 rounded-md relative overflow-hidden uk-transition-toggle" tabIndex={0}>
              <img src={require('../img/post/img2.jpg')} className="w-full h-full absolute object-cover inset-0" />
              <div className="absolute bg-black bg-opacity-40 bottom-0 flex h-full items-center justify-center space-x-5 text-lg text-white uk-transition-scale-up w-full">
                <a href="#story-modal" uk-toggle className="flex items-center"> <ion-icon name="heart" className="mr-1" /> 150 </a>
                <a href="#story-modal" uk-toggle className="flex items-center"> <ion-icon name="chatbubble-ellipses" className="mr-1" /> 30 </a>
                <a href="#story-modal" uk-toggle className="flex items-center"> <ion-icon name="pricetags" className="mr-1" /> 12</a>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-red-500 max-w-full lg:h-64 h-40 rounded-md relative overflow-hidden uk-transition-toggle" tabIndex={0}>
              <img src={require('../img/post/img3.jpg')} className="w-full h-full absolute object-cover inset-0" />
              <div className="absolute bg-black bg-opacity-40 bottom-0 flex h-full items-center justify-center space-x-5 text-lg text-white uk-transition-scale-up w-full">
                <a href="#story-modal" uk-toggle className="flex items-center"> <ion-icon name="heart" className="mr-1" /> 150 </a>
                <a href="#story-modal" uk-toggle className="flex items-center"> <ion-icon name="chatbubble-ellipses" className="mr-1" /> 30 </a>
                <a href="#story-modal" uk-toggle className="flex items-center"> <ion-icon name="pricetags" className="mr-1" /> 12</a>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-red-500 max-w-full lg:h-64 h-40 rounded-md relative overflow-hidden uk-transition-toggle" tabIndex={0}>
              <img src={require('../img/post/img4.jpg')} className="w-full h-full absolute object-cover inset-0" />
              <div className="absolute bg-black bg-opacity-40 bottom-0 flex h-full items-center justify-center space-x-5 text-lg text-white uk-transition-scale-up w-full">
                <a href="#story-modal" uk-toggle className="flex items-center"> <ion-icon name="heart" className="mr-1" /> 150 </a>
                <a href="#story-modal" uk-toggle className="flex items-center"> <ion-icon name="chatbubble-ellipses" className="mr-1" /> 30 </a>
                <a href="#story-modal" uk-toggle className="flex items-center"> <ion-icon name="pricetags" className="mr-1" /> 12</a>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-red-500 max-w-full lg:h-64 h-40 rounded-md relative overflow-hidden uk-transition-toggle" tabIndex={0}>
              <img src={require('../img/post/img5.jpg')} className="w-full h-full absolute object-cover inset-0" />
              <div className="absolute bg-black bg-opacity-40 bottom-0 flex h-full items-center justify-center space-x-5 text-lg text-white uk-transition-scale-up w-full">
                <a href="#story-modal" uk-toggle className="flex items-center"> <ion-icon name="heart" className="mr-1" /> 150 </a>
                <a href="#story-modal" uk-toggle className="flex items-center"> <ion-icon name="chatbubble-ellipses" className="mr-1" /> 30 </a>
                <a href="#story-modal" uk-toggle className="flex items-center"> <ion-icon name="pricetags" className="mr-1" /> 12</a>
              </div>
            </div>
          </div> */}
                {/* <div>
            <div className="bg-red-500 max-w-full lg:h-64 h-40 rounded-md relative overflow-hidden uk-transition-toggle" tabIndex={0}>
              <img src={require('../img/avatars/avatar-1.jpg')} className="w-full h-full absolute object-cover inset-0" />
              <div className="absolute bg-black bg-opacity-40 bottom-0 flex h-full items-center justify-center space-x-5 text-lg text-white uk-transition-scale-up w-full">
                <a href="#story-modal" uk-toggle className="flex items-center"> <ion-icon name="heart" className="mr-1" /> 150 </a>
                <a href="#story-modal" uk-toggle className="flex items-center"> <ion-icon name="chatbubble-ellipses" className="mr-1" /> 30 </a>
                <a href="#story-modal" uk-toggle className="flex items-center"> <ion-icon name="pricetags" className="mr-1" /> 12</a>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-red-500 max-w-full lg:h-64 h-40 rounded-md relative overflow-hidden uk-transition-toggle" tabIndex={0}>
              <img src={require('../img/avatars/avatar-6.jpg')} className="w-full h-full absolute object-cover inset-0" />
              <div className="absolute bg-black bg-opacity-40 bottom-0 flex h-full items-center justify-center space-x-5 text-lg text-white uk-transition-scale-up w-full">
                <a href="#story-modal" uk-toggle className="flex items-center"> <ion-icon name="heart" className="mr-1" /> 150 </a>
                <a href="#story-modal" uk-toggle className="flex items-center"> <ion-icon name="chatbubble-ellipses" className="mr-1" /> 30 </a>
                <a href="#story-modal" uk-toggle className="flex items-center"> <ion-icon name="pricetags" className="mr-1" /> 12</a>
              </div>
            </div>
          </div> */}
              </div>
              <div className="flex justify-center mt-6">
                <a href="#" className="bg-white dark:bg-gray-900 font-semibold my-3 px-6 py-2 rounded-full shadow-md dark:bg-gray-800 dark:text-white"> Load more ..</a>
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
export default Profile