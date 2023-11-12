import Header from "./header"
import Sidebar from "./sidebar"
   
function Explore() {
    return (
        <>
            <div>
                <div id="wrapper">
                   <Sidebar/>
                    <div className="main_content">
                     <Header/>
                        <div className="container explore-container m-auto">
                            <h1 className="lg:lg:text-2xl text-lg text-lg font-extrabold leading-none text-gray-900 tracking-tight mt-3"> Explore </h1>
                            <div className="lg:m-0 -mx-5 flex justify-between items-center py-2 relative space-x-3 dark-tabs" uk-sticky="cls-active: bg-gray-100 bg-opacity-95; media : @m ; media @m">
                                <div className="flex overflow-x-scroll lg:overflow-hidden lg:pl-0 pl-5 space-x-3 lg:py-2">
                                    <a href="#" className="bg-white py-2 px-4 rounded inline-block font-bold shadow"> Shop</a>
                                    <a href="#" className="bg-white py-2 px-4 rounded inline-block font-bold shadow"> Travel </a>
                                    <a href="#" className="bg-white py-2 px-4 rounded inline-block font-bold shadow"> Fitness</a>
                                    <a href="#" className="bg-white py-2 px-4 rounded inline-block font-bold shadow"> Technology</a>
                                    <a href="#" className="bg-white py-2 px-4 rounded inline-block font-bold shadow"> Music </a>
                                    <a href="#" className="bg-white py-2 px-4 rounded inline-block font-bold shadow"> Architecture</a>
                                </div>
                            </div>
                            <div className="grid lg:grid-cols-4 grid-cols-2 gap-2 hover:text-yellow-700 uk-link-reset">
                                <div>
                                    <div className="bg-red-400 max-w-full lg:h-64 h-4 rounded-md relative overflow-hidden uk-transition-toggle shadow-sm">
                                        <a href="#story-modal" uk-toggle>
                                            <img src={require('../img/avatars/avatar-1.jpg')} className="w-full h-full absolute object-cover inset-0" />
                                        </a>
                                        <a href="#story-modal" uk-toggle className="absolute flex h-full items-center justify-center w-8 w-full uk-transition-scale-up bg-black bg-opacity-10">
                                            <img src={require('../img/icon-play.svg')} alt className="w-16 h-16" />
                                        </a>
                                        <div className="absolut absolute bottom-0 flex items-center justify-between px-4 py-3 space-x-2 text-white w-full custom-overly1">
                                            <a href="#">Johnson </a>
                                            <div className="flex space-x-3">
                                                <a href="#" className="flex items-center"> <ion-icon name="heart" className="mr-1 md hydrated" role="img" aria-label="heart" />  150 </a>
                                                <a href="#" className="flex items-center"> <ion-icon name="chatbubble-ellipses" className="mr-1 md hydrated" role="img" aria-label="chatbubble ellipses" /> 30 </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:col-span-2 lg:row-span-2">
                                    <div className="bg-pink-400 h-full max-w-full overflow-hidden relative rounded-md uk-transition-toggle shadow-sm">
                                        <a href="#story-modal" uk-toggle>
                                            <img src={require('../img/post/img2.jpg')} className="w-full h-full absolute object-cover inset-0 transform scale-125" />
                                        </a>
                                        <div className="absolut absolute bottom-0 p-6 space-y-2 text-white w-full custom-overly1 uk-light lg:block hidden">
                                            <div className="flex flex-1 items-center space-x-2">
                                                <a href="#" className="flex items-center">
                                                    <div className="bg-gradient-to-tr from-yellow-600 to-pink-600 p-1 rounded-full transform -rotate-2 hover:rotate-3 transition hover:scale-105 m-0.5 mr-2">
                                                        <img src={require('../img/avatars/avatar-2.jpg')} className="bg-gray-200 border border-white rounded-full w-8" />
                                                    </div>
                                                    Monroe Parker
                                                </a>
                                                <div className="flex space-x-3">
                                                    <a href="#" className="flex items-center">
                                                        <ion-icon name="heart" className="mr-1 md hydrated" role="img" aria-label="heart" /> 150
                                                    </a>
                                                    <a href="#" className="flex items-center">
                                                        <ion-icon name="chatbubble-ellipses" className="mr-1 md hydrated" role="img" aria-label="chatbubble ellipses">
                                                        </ion-icon> 30
                                                    </a>
                                                </div>
                                            </div>
                                            <h1 className="font-bold text-3xl"> Lorem ipsum dolor sit amet consectetuer adipiscing</h1>
                                            <p> Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet
                                                doming id quod mazim placerat facer possim </p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="bg-green-400 max-w-full lg:h-64 h-40 rounded-md relative overflow-hidden uk-transition-toggle shadow-sm">
                                        <a href="#story-modal" uk-toggle>
                                            <img src={require('../img/post/img6.jpg')} className="w-full h-full absolute object-cover inset-0" />
                                        </a>
                                        <a href="#story-modal" uk-toggle className="absolute flex h-full items-center justify-center w-8 w-full uk-transition-scale-up bg-black bg-opacity-10">
                                            <img src={require('../img/icon-play.svg')} alt className="w-16 h-16" />
                                        </a>
                                        <div className="absolut absolute bottom-0 flex items-center justify-between px-4 py-3 space-x-2 text-white w-full custom-overly1">
                                            <a href="#">James</a>
                                            <div className="flex space-x-3">
                                                <a href="#" className="flex items-center"> <ion-icon name="heart" className="mr-1 md hydrated" role="img" aria-label="heart" />  150 </a>
                                                <a href="#" className="flex items-center"> <ion-icon name="chatbubble-ellipses" className="mr-1 md hydrated" role="img" aria-label="chatbubble ellipses" /> 30 </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="bg-yellow-400 max-w-full lg:h-64 h-40 rounded-md relative overflow-hidden shadow-sm">
                                        <a href="#story-modal" uk-toggle>
                                            <img src={require('../img/post/img4.jpg')} className="w-full h-full absolute object-cover inset-0 object-cover object-left" />
                                        </a>
                                        <div className="absolut absolute bottom-0 flex items-center justify-between px-4 py-3 space-x-2 text-white w-full custom-overly1">
                                            <a href="#">Martin</a>
                                            <div className="flex space-x-3">
                                                <a href="#" className="flex items-center"> <ion-icon name="heart" className="mr-1 md hydrated" role="img" aria-label="heart" />  150 </a>
                                                <a href="#" className="flex items-center"> <ion-icon name="chatbubble-ellipses" className="mr-1 md hydrated" role="img" aria-label="chatbubble ellipses" /> 30 </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="bg-purple-400 max-w-full lg:h-64 h-40 rounded-md relative overflow-hidden shadow-sm">
                                        <a href="#story-modal" uk-toggle>
                                            <img src={require('../img/avatars/avatar-lg-1.jpg')} className="w-full h-full absolute object-cover inset-0" />
                                        </a>
                                        <div className="absolut absolute bottom-0 flex items-center justify-between px-4 py-3 space-x-2 text-white w-full custom-overly1">
                                            <a href="#">Johnson </a>
                                            <div className="flex space-x-3">
                                                <a href="#" className="flex items-center"> <ion-icon name="heart" className="mr-1 md hydrated" role="img" aria-label="heart" />  150 </a>
                                                <a href="#" className="flex items-center"> <ion-icon name="chatbubble-ellipses" className="mr-1 md hydrated" role="img" aria-label="chatbubble ellipses" /> 30 </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="bg-blue-400 max-w-full lg:h-64 h-40 rounded-md relative overflow-hidden shadow-sm">
                                        <a href="#story-modal" uk-toggle>
                                            <img src={require('../img/post/img1.jpg')} className="w-full h-full absolute object-cover inset-0" />
                                        </a>
                                        <div className="absolut absolute bottom-0 flex items-center justify-between px-4 py-3 space-x-2 text-white w-full custom-overly1">
                                            <a href="#">Jesse</a>
                                            <div className="flex space-x-3">
                                                <a href="#" className="flex items-center"> <ion-icon name="heart" className="mr-1 md hydrated" role="img" aria-label="heart" />  150 </a>
                                                <a href="#" className="flex items-center"> <ion-icon name="chatbubble-ellipses" className="mr-1 md hydrated" role="img" aria-label="chatbubble ellipses" /> 30 </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="bg-green-400 max-w-full lg:h-64 h-40 rounded-md relative overflow-hidden shadow-sm">
                                        <a href="#story-modal" uk-toggle>
                                            <img src={require('../img/post/img3.jpg')} className="w-full h-full absolute object-cover inset-0" />
                                        </a>
                                        <div className="absolut absolute bottom-0 flex items-center justify-between px-4 py-3 space-x-2 text-white w-full custom-overly1">
                                            <a href="#">Johnson </a>
                                            <div className="flex space-x-3">
                                                <a href="#" className="flex items-center"> <ion-icon name="heart" className="mr-1 md hydrated" role="img" aria-label="heart" />  150 </a>
                                                <a href="#" className="flex items-center"> <ion-icon name="chatbubble-ellipses" className="mr-1 md hydrated" role="img" aria-label="chatbubble ellipses" /> 30 </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="bg-red-400 max-w-full lg:h-64 h-40 rounded-md relative overflow-hidden shadow-sm">
                                        <a href="#story-modal" uk-toggle>
                                            <img src={require('../img/post/img8.jpg')} className="w-full h-full absolute object-cover inset-0" />
                                        </a>
                                        <div className="absolut absolute bottom-0 flex items-center justify-between px-4 py-3 space-x-2 text-white w-full custom-overly1">
                                            <a href="#">James</a>
                                            <div className="flex space-x-3">
                                                <a href="#" className="flex items-center"> <ion-icon name="heart" className="mr-1 md hydrated" role="img" aria-label="heart" />  150 </a>
                                                <a href="#" className="flex items-center"> <ion-icon name="chatbubble-ellipses" className="mr-1 md hydrated" role="img" aria-label="chatbubble ellipses" /> 30 </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="bg-yellow-400 max-w-full lg:h-64 h-40 rounded-md relative overflow-hidden shadow-sm">
                                        <a href="#story-modal" uk-toggle>
                                            <img src={require('../img/post/img5.jpg')} className="w-full h-full absolute object-cover inset-0" />
                                        </a>
                                        <div className="absolut absolute bottom-0 flex items-center justify-between px-4 py-3 space-x-2 text-white w-full custom-overly1">
                                            <a href="#">Monroe</a>
                                            <div className="flex space-x-3">
                                                <a href="#" className="flex items-center"> <ion-icon name="heart" className="mr-1 md hydrated" role="img" aria-label="heart" />  150 </a>
                                                <a href="#" className="flex items-center"> <ion-icon name="chatbubble-ellipses" className="mr-1 md hydrated" role="img" aria-label="chatbubble ellipses" /> 30 </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Load more*/}
                            <div className="flex justify-center mt-6">
                                <a href="#" className="bg-white font-semibold my-3 px-6 py-2 rounded-full shadow-md dark:bg-gray-800 dark:text-white"> Load more ..</a>
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
export default Explore