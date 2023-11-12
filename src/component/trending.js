import Header from './header'
import Sidebar from './sidebar'

function Trending() {
    return (
        <>
           <div id="wrapper">
            <Sidebar/>
  <div className="main_content">
    <Header/>
    <div className="container m-auto">
      <div className="flex justify-between items-baseline lg:mr-8  uk-visible@s">
        <h1 className="font-extrabold leading-none mb-6 lg:text-2xl text-lg text-gray-900 tracking-tight"> Stories </h1>
        <a href="#" className="text-blue-400 hover:text-blue-500"> See all</a>
      </div>
      {/* users*/}
      <div className="relative uk-visible@s" uk-slider="finite: true">
        <a className="-left-2 absolute bg-white bottom-1/2 flex items-center justify-center p-2 rounded-full shadow text-xl w-9 z-10 dark:bg-gray-800 dark:text-white" href="#" uk-slider-item="previous"> <i className="icon-feather-chevron-left" /> </a>
        <a className="absolute bg-white bottom-1/2 flex items-center justify-center p-2 right-4 rounded-full shadow text-xl w-9 z-10 dark:bg-gray-800 dark:text-white" href="#" uk-slider-item="next"> <i className="icon-feather-chevron-right" /></a>
        <div className="uk-slider-container pb-3 lg:mr-3">
          <ul className="uk-slider-items uk-grid uk-grid-small">
            <li>
              <div className="relative bg-gradient-to-tr from-yellow-600 to-pink-600 p-1 rounded-full transform -rotate-2 hover:rotate-3 transition hover:scale-105 m-1">
                <img src={require('../img/avatars/avatar-2.jpg')} className="w-20 h-20 rounded-full border-2 border-white bg-gray-200" />
                <a href="#" className=" bg-gray-400 p-2 rounded-full w-8 h-8 flex justify-center items-center text-white border-4 border-white absolute right-2 bottom-0 bg-blue-600">
                  + </a>
              </div>
              <a href="profile.html" className="block font-medium text-center text-gray-500 text-x truncate w-24">
                You </a>
            </li>
            <li>
              <a href="#story-view" uk-toggle>
                <div className="bg-gradient-to-tr from-yellow-600 to-pink-600 p-1 rounded-full transform -rotate-2 hover:rotate-3 transition hover:scale-105 m-1">
                  <img src={require('../img/avatars/avatar-1.jpg')} className="w-20 h-20 rounded-full border-2 border-white bg-gray-200" />
                </div>
              </a>
              <a href="profile.html" className="block font-medium text-center text-gray-500 text-x truncate w-24">
                Dennis </a>
            </li>
            <li>
              <a href="#story-view" uk-toggle>
                <div className="bg-gradient-to-tr from-yellow-600 to-pink-600 p-1 rounded-full transform -rotate-2 hover:rotate-3 transition hover:scale-105 m-1">
                  <img src={require('../img/avatars/avatar-3.jpg')} className="w-20 h-20 rounded-full border-2 border-white bg-gray-200" />
                </div>
              </a>
              <a href="profile.html" className="block font-medium text-center text-gray-500 text-x truncate w-24">
                Jonathan </a>
            </li>
            <li>
              <a href="#story-view" uk-toggle>
                <div className="bg-gradient-to-tr from-yellow-600 to-pink-600 p-1 rounded-full transform -rotate-2 hover:rotate-3 transition hover:scale-105 m-1">
                  <img src={require('../img/avatars/avatar-4.jpg')} className="w-20 h-20 rounded-full border-2 border-white bg-gray-200" />
                </div>
              </a>
              <a href="profile.html" className="block font-medium text-center text-gray-500 text-x truncate w-24">
                Stella </a>
            </li>
            <li>
              <a href="#story-view" uk-toggle>
                <div className="bg-gradient-to-tr from-yellow-600 to-pink-600 p-1 rounded-full transform -rotate-2 hover:rotate-3 transition hover:scale-105 m-1">
                  <img src={require('../img/avatars/avatar-5.jpg')} className="w-20 h-20 rounded-full border-2 border-white bg-gray-200" />
                </div>
              </a>
              <a href="profile.html" className="block font-medium text-center text-gray-500 text-x truncate w-24">
                Alex </a>
            </li>
            <li>
              <a href="#story-view" uk-toggle>
                <div className="bg-gradient-to-tr from-yellow-600 to-pink-600 p-1 rounded-full transform -rotate-2 hover:rotate-3 transition hover:scale-105 m-1">
                  <img src={require('../img/avatars/avatar-6.jpg')} className="w-20 h-20 rounded-full border-2 border-white bg-gray-200" />
                </div>
              </a><a href="profile.html" className="block font-medium text-center text-gray-500 text-x truncate w-24"> Adrian
              </a>
            </li>
            <li>
              <a href="#story-view" uk-toggle>
                <div className="bg-gradient-to-tr from-yellow-600 to-pink-600 p-1 rounded-full transform -rotate-2 hover:rotate-3 transition hover:scale-105 m-1">
                  <img src={require('../img/avatars/avatar-1.jpg')} className="w-20 h-20 rounded-full border-2 border-white bg-gray-200" />
                </div>
              </a>
              <a href="profile.html" className="block font-medium text-center text-gray-500 text-x truncate w-24">
                Jonathan </a>
            </li>
            <li>
              <a href="#story-view" uk-toggle>
                <div className="bg-gradient-to-tr from-yellow-600 to-pink-600 p-1 rounded-full transform -rotate-2 hover:rotate-3 transition hover:scale-105 m-1">
                  <img src={require('../img/avatars/avatar-2.jpg')} className="w-20 h-20 rounded-full border-2 border-white bg-gray-200" />
                </div>
              </a>
              <a href="profile.html" className="block font-medium text-center text-gray-500 text-x truncate w-24">
                Dennis </a>
            </li>
            <li>
              <a href="#story-view" uk-toggle>
                <div className="bg-gradient-to-tr from-yellow-600 to-pink-600 p-1 rounded-full transform -rotate-2 hover:rotate-3 transition hover:scale-105 m-1">
                  <img src={require('../img/avatars/avatar-3.jpg')} className="w-20 h-20 rounded-full border-2 border-white bg-gray-200" />
                </div>
              </a>
              <a href="profile.html" className="block font-medium text-center text-gray-500 text-x truncate w-24">
                Stella </a>
            </li>
            <li>
              <a href="#story-view" uk-toggle>
                <div className="bg-gradient-to-tr from-yellow-600 to-pink-600 p-1 rounded-full transform -rotate-2 hover:rotate-3 transition hover:scale-105 m-1">
                  <img src={require('../img/avatars/avatar-4.jpg')} className="w-20 h-20 rounded-full border-2 border-white bg-gray-200" />
                </div>
              </a>
              <a href="profile.html" className="block font-medium text-center text-gray-500 text-x truncate w-24">
                Adrian </a>
            </li>
            <li>
              <a href="#story-view" uk-toggle>
                <div className="bg-gradient-to-tr from-yellow-600 to-pink-600 p-1 rounded-full transform -rotate-2 hover:rotate-3 transition hover:scale-105 m-1">
                  <img src={require('../img/avatars/avatar-5.jpg')} className="w-20 h-20 rounded-full border-2 border-white bg-gray-200" />
                </div>
              </a>
              <a href="profile.html" className="block font-medium text-center text-gray-500 text-x truncate w-24">
                Dennis </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-between items-baseline uk-visible@s">
        <h1 className="font-extrabold leading-none mb-6 mt-8 lg:text-2xl text-lg text-gray-900 tracking-tight"> Suggestion
        </h1>
        <a href="#" className="text-blue-400 hover:text-blue-500"> See all</a>
      </div>
      <div className="relative" uk-slider="finite: true">
        <div className="uk-slider-container pb-3 -ml-3">
          <ul className="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m uk-grid-small">
            <li>
              <div className="bg-gray-200 max-w-full lg:h-64 h-52 rounded-lg relative overflow-hidden">
                <a href="profile.html">
                  <img src={require('../img/post/img7.jpg')} className="w-full h-full absolute object-cover inset-0" />
                </a>
                <a href="#" className="absolute right-3 top-3 bg-black bg-opacity-60 rounded-full" data-tippy-placement="left" title="Hide">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="fill-current h-6 m-1.5 text-white w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </a>
                <div className="absolute bottom-0 p-4 w-full custom-overly1">
                  <div className="flex justify-between align-bottom flex-wrap text-white">
                    <div className="w-full truncate text-lg"> John Michael </div>
                    <div className="leading-5 text-sm">
                      <div> 21, Turkey </div>
                    </div>
                    <a href="#" className="absolute right-3 bottom-3 rounded-full bg-gradient-to-tr from-blue-500 to-purple-700">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="fill-current h-6 m-1.5 text-white w-6">
                        <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="bg-gray-200 max-w-full lg:h-64 h-52 rounded-lg relative overflow-hidden">
                <a href="profile.html">
                  <img src={require('../img/avatars/avatar-6.jpg')} className="w-full h-full absolute object-cover inset-0" />
                </a>
                <a href="#" className="absolute right-3 top-3 bg-black bg-opacity-60 rounded-full" data-tippy-placement="left" title="Hide">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="fill-current h-6 m-1.5 text-white w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </a>
                <div className="absolute bottom-0 p-4 w-full custom-overly1">
                  <div className="flex justify-between align-bottom flex-wrap text-white">
                    <div className="w-full truncate text-lg"> Monroe Parker </div>
                    <div className="leading-5 text-sm">
                      <div> 19, Austria </div>
                    </div>
                    <a href="#" className="absolute right-3 bottom-3 rounded-full bg-gradient-to-tr from-blue-500 to-purple-700">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="fill-current h-6 m-1.5 text-white w-6">
                        <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="bg-gray-200 max-w-full lg:h-64 h-52 rounded-lg relative overflow-hidden">
                <a href="profile.html">
                  <img src={require('../img/avatars/avatar-4.jpg')} className="w-full h-full absolute object-cover inset-0" />
                </a>
                <a href="#" className="absolute right-3 top-3 bg-black bg-opacity-60 rounded-full" data-tippy-placement="left" title="Hide">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="fill-current h-6 m-1.5 text-white w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </a>
                <div className="absolute bottom-0 p-4 w-full custom-overly1">
                  <div className="flex justify-between align-bottom flex-wrap text-white">
                    <div className="w-full truncate text-lg"> Martin Gray </div>
                    <div className="leading-5 text-sm">
                      <div> 19, New York </div>
                    </div>
                    <a href="#" className="absolute right-3 bottom-3 rounded-full bg-gradient-to-tr from-blue-500 to-purple-700">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="fill-current h-6 m-1.5 text-white w-6">
                        <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="bg-gray-200 max-w-full lg:h-64 h-52 rounded-lg relative overflow-hidden">
                <a href="profile.html">
                  <img src={require('../img/avatars/avatar-7.jpg')} className="w-full h-full absolute object-cover inset-0" />
                </a>
                <a href="#" className="absolute right-3 top-3 bg-black bg-opacity-60 rounded-full" data-tippy-placement="left" title="Hide">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="fill-current h-6 m-1.5 text-white w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </a>
                <div className="absolute bottom-0 p-4 w-full custom-overly1">
                  <div className="flex justify-between align-bottom flex-wrap text-white">
                    <div className="w-full truncate text-lg"> Jesse Stevens</div>
                    <div className="leading-5 text-sm">
                      <div> 19, London </div>
                    </div>
                    <a href="#" className="absolute right-3 bottom-3 rounded-full bg-gradient-to-tr from-blue-500 to-purple-700">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="fill-current h-6 m-1.5 text-white w-6">
                        <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="bg-gray-200 max-w-full lg:h-64 h-52 rounded-lg relative overflow-hidden">
                <a href="profile.html">
                  <img src={require('../img/avatars/avatar-1.jpg')} className="w-full h-full absolute object-cover inset-0" />
                </a>
                <a href="#" className="absolute right-3 top-3 bg-black bg-opacity-60 rounded-full" data-tippy-placement="left" title="Hide">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="fill-current h-6 m-1.5 text-white w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </a>
                <div className="absolute bottom-0 p-4 w-full custom-overly1">
                  <div className="flex justify-between align-bottom flex-wrap text-white">
                    <div className="w-full truncate text-lg"> James Lewis </div>
                    <div className="leading-5 text-sm">
                      <div> 19, Austria </div>
                    </div>
                    <a href="#" className="absolute right-3 bottom-3 rounded-full bg-gradient-to-tr from-blue-500 to-purple-700">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="fill-current h-6 m-1.5 text-white w-6">
                        <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <a className="uk-position-center-left uk-position-small p-3.5 bg-white rounded-full w-10 h-10 flex justify-center items-center -mx-4 mb-6 shadow-md dark:bg-gray-800 dark:text-white" href="#" uk-slidenav-previous uk-slider-item="previous" />
          <a className="uk-position-center-right uk-positsion-small p-3.5 bg-white rounded-full w-10 h-10 flex justify-center items-center -mx-4 shadow-md dark:bg-gray-800 dark:text-white" href="#" uk-slidenav-next uk-slider-item="next" />
        </div>
      </div>
      <h1 className="font-extrabold leading-none mb-6 mt-8 lg:text-2xl text-lg text-gray-900 tracking-tight"> Explore </h1>
      <div className="mt-6 grid lg:grid-cols-3 grid-cols-2 gap-3 hover:text-yellow-700 uk-link-reset">
        <div>
          <div className="bg-red-400 max-w-full lg:h-60 h-48 rounded-lg relative overflow-hidden shadow uk-transition-toggle">
            <a href="#story-modal" uk-toggle>
              <img src={require('../img/post/img8.jpg')} className="w-full h-full absolute object-cover inset-0" />
            </a>
            <a href="#story-modal" uk-toggle className="absolute flex h-full items-center justify-center w-8 w-full uk-transition-scale-up bg-black bg-opacity-10">
              <img src={require('../img/icon-play.svg')} alt className="w-16 h-16 -mt-5" />
            </a>
            <div className="flex flex-1 items-center absolute bottom-0 w-full p-3 text-white custom-overly1 uk-transition-slide-bottom-medium">
              <a href="profile.html" className="lg:flex flex-1 items-center hidden">
                <div className="bg-gradient-to-tr from-yellow-600 to-pink-600 p-1 rounded-full transform -rotate-2 hover:rotate-3 transition hover:scale-105 m-0.5 mr-2">
                  <img src={require('../img/avatars/avatar-2.jpg')} className="bg-gray-200 border border-white rounded-full w-8" />
                </div>
                <div> James Lewis </div>
              </a>
              <div className="flex space-x-2 flex-1 lg:flex-initial justify-around">
                <a href="#"> <i className="uil-heart" /> 150 </a>
                <a href="#"> <i className="uil-heart" /> 30 </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-green-400 max-w-full lg:h-72 h-48 rounded-lg relative overflow-hidden shadow uk-transition-toggle">
            <a href="#story-modal" uk-toggle>
              <img src={require('../img/post/img2.jpg')} className="w-full h-full absolute object-cover inset-0" />
            </a>
            <div className="flex flex-1 items-center absolute bottom-0 w-full p-3 text-white custom-overly1 uk-transition-slide-bottom-medium">
              <a href="profile.html" className="lg:flex flex-1 items-center hidden">
                <div className="bg-gradient-to-tr from-yellow-600 to-pink-600 p-1 rounded-full transform -rotate-2 hover:rotate-3 transition hover:scale-105 m-0.5 mr-2">
                  <img src={require('../img/avatars/avatar-2.jpg')} className="bg-gray-200 border border-white rounded-full w-8" />
                </div>
                <div> James Lewis </div>
              </a>
              <div className="flex space-x-2 flex-1 lg:flex-initial justify-around">
                <a href="#"> <i className="uil-heart" /> 150 </a>
                <a href="#"> <i className="uil-heart" /> 30 </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-yellow-400 max-w-full lg:h-60 h-48 rounded-lg relative overflow-hidden shadow uk-transition-toggle">
            <a href="#story-modal" uk-toggle>
              <img src={require('../img/post/img3.jpg')} className="w-full h-full absolute object-cover inset-0" />
            </a>
            <a href="#story-modal" uk-toggle className="absolute flex h-full items-center justify-center w-8 w-full uk-transition-scale-up bg-black bg-opacity-10">
              <img src={require('../img/icon-play.svg')} alt className="w-16 h-16 -mt-5" />
            </a>
            <div className="flex flex-1 items-center absolute bottom-0 w-full p-3 text-white custom-overly1 uk-transition-slide-bottom-medium">
              <a href="profile.html" className="lg:flex flex-1 items-center hidden">
                <div className="bg-gradient-to-tr from-yellow-600 to-pink-600 p-1 rounded-full transform -rotate-2 hover:rotate-3 transition hover:scale-105 m-0.5 mr-2">
                  <img src={require('../img/avatars/avatar-2.jpg')} className="bg-gray-200 border border-white rounded-full w-8" />
                </div>
                <div> John Michael </div>
              </a>
              <div className="flex space-x-2 flex-1 lg:flex-initial justify-around">
                <a href="#"> <i className="uil-heart" /> 150 </a>
                <a href="#"> <i className="uil-heart" /> 30 </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-pink-400 max-w-full lg:h-72 h-48 rounded-lg relative overflow-hidden shadow uk-transition-toggle lg:-mt-12">
            <a href="#story-modal" uk-toggle>
              <img src={require('../img/post/img7.jpg')} className="w-full h-full absolute object-cover inset-0" />
            </a>
            <div className="flex flex-1 items-center absolute bottom-0 w-full p-3 text-white custom-overly1 uk-transition-slide-bottom-medium">
              <a href="profile.html" className="lg:flex flex-1 items-center hidden">
                <div className="bg-gradient-to-tr from-yellow-600 to-pink-600 p-1 rounded-full transform -rotate-2 hover:rotate-3 transition hover:scale-105 m-0.5 mr-2">
                  <img src={require('../img/avatars/avatar-2.jpg')} className="bg-gray-200 border border-white rounded-full w-8" />
                </div>
                <div> Monroe Parker </div>
              </a>
              <div className="flex space-x-2 flex-1 lg:flex-initial justify-around">
                <a href="#"> <i className="uil-heart" /> 150 </a>
                <a href="#"> <i className="uil-heart" /> 30 </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-purple-400 max-w-full lg:h-60 h-48 rounded-lg relative overflow-hidden shadow uk-transition-toggle">
            <a href="#story-modal" uk-toggle>
              <img src={require('../img/post/img5.jpg')} className="w-full h-full absolute object-cover inset-0" />
            </a>
            <div className="flex flex-1 items-center absolute bottom-0 w-full p-3 text-white custom-overly1 uk-transition-slide-bottom-medium">
              <a href="profile.html" className="lg:flex flex-1 items-center hidden">
                <div className="bg-gradient-to-tr from-yellow-600 to-pink-600 p-1 rounded-full transform -rotate-2 hover:rotate-3 transition hover:scale-105 m-0.5 mr-2">
                  <img src={require('../img/avatars/avatar-2.jpg')} className="bg-gray-200 border border-white rounded-full w-8" />
                </div>
                <div> Martin Gray </div>
              </a>
              <div className="flex space-x-2 flex-1 lg:flex-initial justify-around">
                <a href="#"> <i className="uil-heart" /> 150 </a>
                <a href="#"> <i className="uil-heart" /> 30 </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-pink-400 max-w-full lg:h-72 h-48 rounded-lg relative overflow-hidden shadow uk-transition-toggle lg:-mt-12">
            <a href="#story-modal" uk-toggle>
              <img src={require('../img/post/img1.jpg')} className="w-full h-full absolute object-cover inset-0" />
            </a>
            <div className="flex flex-1 items-center absolute bottom-0 w-full p-3 text-white custom-overly1 uk-transition-slide-bottom-medium">
              <a href="profile.html" className="lg:flex flex-1 items-center hidden">
                <div className="bg-gradient-to-tr from-yellow-600 to-pink-600 p-1 rounded-full transform -rotate-2 hover:rotate-3 transition hover:scale-105 m-0.5 mr-2">
                  <img src={require('../img/avatars/avatar-2.jpg')} className="bg-gray-200 border border-white rounded-full w-8" />
                </div>
                <div> Jesse Stevens </div>
              </a>
              <div className="flex space-x-2 flex-1 lg:flex-initial justify-around">
                <a href="#"> <i className="uil-heart" /> 150 </a>
                <a href="#"> <i className="uil-heart" /> 30 </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-3 grid lg:grid-cols-4 grid-cols-2 gap-3 hover:text-yellow-700 uk-link-reset">
        <div>
          <div className="bg-red-400 max-w-full lg:h-56 h-48 rounded-lg relative overflow-hidden shadow uk-transition-toggle">
            <a href="#story-modal" uk-toggle>
              <img src={require('../img/post/img2.jpg')} className="w-full h-full absolute object-cover inset-0 scale-150 transform" />
            </a>
            <div className="flex flex-1 items-center absolute bottom-0 w-full p-3 text-white custom-overly1 uk-transition-slide-bottom-medium">
              <a href="profile.html" className="lg:flex flex-1 items-center hidden">
                <div> James Lewis </div>
              </a>
              <div className="flex space-x-2 flex-1 lg:flex-initial justify-around">
                <a href="#"> <i className="uil-heart" /> 150 </a>
                <a href="#"> <i className="uil-heart" /> 30 </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-yellow-400 max-w-full lg:h-56 h-48 rounded-lg relative overflow-hidden shadow uk-transition-toggle">
            <a href="#story-modal" uk-toggle>
              <img src={require('../img/post/img6.jpg')} className="w-full h-full absolute object-cover inset-0 scale-150 transform" />
            </a>
            <div className="flex flex-1 items-center absolute bottom-0 w-full p-3 text-white custom-overly1 uk-transition-slide-bottom-medium">
              <a href="#" className="lg:flex flex-1 items-center hidden">
                <div> James Lewis </div>
              </a>
              <div className="flex space-x-2 flex-1 lg:flex-initial justify-around">
                <a href="#"> <i className="uil-heart" /> 150 </a>
                <a href="#"> <i className="uil-heart" /> 30 </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-green-400 max-w-full lg:h-56 h-48 rounded-lg relative overflow-hidden shadow uk-transition-toggle">
            <a href="#story-modal" uk-toggle>
              <img src={require('../img/avatars/avatar-1.jpg')} className="w-full h-full absolute object-cover inset-0" />
            </a>
            <div className="flex flex-1 items-center absolute bottom-0 w-full p-3 text-white custom-overly1 uk-transition-slide-bottom-medium">
              <a href="#" className="lg:flex flex-1 items-center hidden">
                <div> James Lewis </div>
              </a>
              <div className="flex space-x-2 flex-1 lg:flex-initial justify-around">
                <a href="#"> <i className="uil-heart" /> 150 </a>
                <a href="#"> <i className="uil-heart" /> 30 </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-blue-400 max-w-full lg:h-56 h-48 rounded-lg relative overflow-hidden shadow uk-transition-toggle">
            <a href="#story-modal" uk-toggle>
              <img src={require('../img/post/img7.jpg')} className="w-full h-full absolute object-cover inset-0" />
            </a>
            <div className="flex flex-1 items-center absolute bottom-0 w-full p-3 text-white custom-overly1 uk-transition-slide-bottom-medium">
              <a href="#" className="lg:flex flex-1 items-center hidden">
                <div> James Lewis </div>
              </a>
              <div className="flex space-x-2 flex-1 lg:flex-initial justify-around">
                <a href="#"> <i className="uil-heart" /> 150 </a>
                <a href="#"> <i className="uil-heart" /> 30 </a>
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
    {/* Story modal */}
    <div id="story-view" className="uk-modal-container" uk-modal>
      <div className="uk-modal-dialog story-modal">
        <button className="uk-modal-close-default lg:-mt-9 lg:-mr-9 -mt-5 -mr-5 shadow-lg bg-white rounded-full p-4 transition dark:bg-gray-600 dark:text-white" type="button" uk-close />
        <div className="story-modal-media">
          <img src={require('../img/post/img4.jpg')} alt className="inset-0 h-full w-full object-cover" />
        </div>
        <div className="flex-1 bg-white dark:bg-gray-900 px-4">
          <div className="flex items-center justify-between mt-4 mb-2">
            <h3 className="font-bold text-lg"> Your Story </h3>
            <a href="#" className="text-blue-600"> Setting </a>
          </div>
          <ul className="space-y-1 -mx-1.5">
            <li>
              <a className="flex items-center space-x-4 hover:bg-gray-100 dark:hover:bg-gray-900 p-2 rounded-md cursor-pointer">
                <div className="bg-gradient-to-tr from-yellow-600 to-pink-600 p-0.5 rounded-full">
                  <img src={require('../img/avatars/avatar-1.jpg')} className="bg-gray-200 border border-white rounded-full w-12 h-12" />
                </div>
                <div className="flex-1">
                  <div className="text-lg font-semibold"> Stella Johnson </div>
                  <div className="text-sm">
                    <span>  Share a photo or video </span>
                  </div>
                </div>
              </a>
            </li>
          </ul>
          <div className="flex items-center justify-between mt-4 mb-2">
            <h3 className="font-bold text-lg"> Friends Story </h3>
            <a href="#" className="text-blue-600"> See all </a>
          </div>
          <ul className="space-y-1 -mx-1.5">
            <li>
              <a className="flex items-center space-x-4 bg-gray-100 dark:bg-gray-800 p-2 rounded-md cursor-pointer">
                <div className="bg-gradient-to-tr from-yellow-600 to-pink-600 p-0.5 rounded-full">
                  <img src={require('../img/avatars/avatar-2.jpg')} className="bg-gray-200 border border-white rounded-full w-12 h-12" />
                </div>
                <div className="flex-1 font-semibold">
                  <div className="text-lg"> Johnson smith </div>
                  <div className="text-sm">
                    <span className="text-blue-600"> 2 New</span>  <span> 3 Hr ago</span>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a className="flex items-center space-x-4 hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-md cursor-pointer">
                <div className="bg-gradient-to-tr from-yellow-600 to-pink-600 p-0.5 rounded-full">
                  <img src={require('../img/avatars/avatar-3.jpg')} className="bg-gray-200 border border-white rounded-full w-12 h-12" />
                </div>
                <div className="flex-1">
                  <div className="text-lg font-semibold"> Adrian Mohani </div>
                  <div className="text-sm">
                    <span className="text-blue-600"> 2 New</span>  <span> 3 Hr ago</span>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a className="flex items-center space-x-4 hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-md cursor-pointer">
                <div className="bg-gradient-to-tr from-yellow-600 to-pink-600 p-0.5 rounded-full">
                  <img src={require('../img/avatars/avatar-4.jpg')} className="bg-gray-200 border border-white rounded-full w-12 h-12" />
                </div>
                <div className="flex-1 font-semibold">
                  <div className="text-lg"> Alex Dolgove </div>
                  <div className="text-sm">
                    <span className="text-blue-600"> 2 New</span>  <span> 3 Hr ago</span>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a className="flex items-center space-x-4 hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-md cursor-pointer">
                <div className="bg-gradient-to-tr from-yellow-600 to-pink-600 p-0.5 rounded-full">
                  <img src={require('../img/avatars/avatar-5.jpg')} className="bg-gray-200 border border-white rounded-full w-12 h-12" />
                </div>
                <div className="flex-1">
                  <div className="text-lg font-semibold"> Johnson smith </div>
                  <div className="text-sm">
                    <span className="text-blue-600"> 2 New</span>  <span> 3 Hr ago</span>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a className="flex items-center space-x-4 hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-md cursor-pointer">
                <div className="bg-gradient-to-tr from-yellow-600 to-pink-600 p-0.5 rounded-full">
                  <img src={require('../img/avatars/avatar-6.jpg')} className="bg-gray-200 border border-white rounded-full w-12 h-12" />
                </div>
                <div className="flex-1 font-semibold">
                  <div className="text-lg"> Stella Johnson </div>
                  <div className="text-sm">
                    <span className="text-blue-600"> 2 New</span>  <span> 3 Hr ago</span>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a className="flex items-center space-x-4 hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-md cursor-pointer">
                <div className="bg-gradient-to-tr from-yellow-600 to-pink-600 p-0.5 rounded-full">
                  <img src={require('../img/avatars/avatar-2.jpg')} className="bg-gray-200 border border-white rounded-full w-12 h-12" />
                </div>
                <div className="flex-1">
                  <div className="text-lg font-semibold"> Alex Dolgove </div>
                  <div className="text-sm">
                    <span className="text-blue-600"> 2 New</span>  <span> 3 Hr ago</span>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>



        </>
    )
}
export default Trending