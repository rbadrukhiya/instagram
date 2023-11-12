import Header from "./header"
import Sidebar from "./sidebar"

function Market() {
    return (
        <>
            <div>
  <div id="wrapper">
   <Sidebar/>
    <div className="main_content">
      <Header/>
      <div className="container m-auto">
        <h1 className="lg:text-2xl text-lg font-extrabold leading-none text-gray-900 tracking-tight mb-2"> Market </h1>
        <div className="lg:m-0 -mx-5 flex justify-between py-4 relative space-x-3 uk-sticky dark-tabs" uk-sticky="cls-active: bg-gray-100 bg-opacity-95" style={{}}>
          <div className="flex overflow-x-scroll lg:overflow-hidden lg:pl-0 pl-5 space-x-3">
            <a href="#" className="bg-white py-2 px-4 rounded inline-block font-bold shadow"> Shop</a>
            <a href="#" className="bg-white py-2 px-4 rounded inline-block font-bold shadow"> headphones</a>
            <a href="#" className="bg-white py-2 px-4 rounded inline-block font-bold shadow"> Parfums </a>
            <a href="#" className="bg-white py-2 px-4 rounded inline-block font-bold shadow"> Fruits </a>
            <a href="#" className="bg-white py-2 px-4 rounded inline-block font-bold shadow"> Mobiles</a>
            <a href="#" className="bg-white py-2 px-4 rounded inline-block font-bold shadow"> Laptops </a>
          </div>
          <a href="#" uk-toggle="target: #offcanvas-create" className="bg-pink-500 hover:bg-pink-600 hover:text-white flex font-bold inline-block items-center px-4 py-2 rounded shadow text-white lg:block hidden"> <i className="-mb-1 mr-1 uil-plus" /> Create</a>
        </div>
        <div className="relative mt-4" uk-slider="finite: true">
          <div className="uk-slider-container pb-3">
            <ul className="uk-slider-items uk-child-width-1-5@m uk-child-width-1-3@s uk-child-width-1-2 uk-grid-small uk-grid">
              <li>
                <a href="#" uk-toggle="target: #offcanvas-preview">
                  <div className="market-list">
                    <div className="item-media"> <img src={require('../img/product/1.jpg')} alt /></div>
                    <div className="item-inner">
                      <div className="item-price"> 20$ </div>
                      <div className="item-title"> Brown headphones </div>
                      <div className="item-statistic">
                        <span> <span className="count">4</span> likes </span>
                        <span> <span className="count">106</span> views </span>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="#" uk-toggle="target: #offcanvas-preview">
                  <div className="market-list">
                    <div className="item-media"> <img src={require('../img/product/13.jpg')} alt /></div>
                    <div className="item-inner">
                      <div className="item-price"> 12$ </div>
                      <div className="item-title"> Parfum Spray </div>
                      <div className="item-statistic">
                        <span> <span className="count">2</span> likes </span>
                        <span> <span className="count">286</span> views </span>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="#" uk-toggle="target: #offcanvas-preview">
                  <div className="market-list">
                    <div className="item-media"> <img src={require('../img/product/2.jpg')} alt /></div>
                    <div className="item-inner">
                      <div className="item-price"> 23$ </div>
                      <div className="item-title"> Wireless headphones </div>
                      <div className="item-statistic">
                        <span> <span className="count">16</span> likes </span>
                        <span> <span className="count">202</span> views </span>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="#" uk-toggle="target: #offcanvas-preview">
                  <div className="market-list">
                    <div className="item-media"> <img src={require('../img/product/16.jpg')} alt /></div>
                    <div className="item-inner">
                      <div className="item-price"> 60$ </div>
                      <div className="item-title"> Paper Coffee Cup </div>
                      <div className="item-statistic">
                        <span> <span className="count">12</span> likes </span>
                        <span> <span className="count">160</span> views </span>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="#" uk-toggle="target: #offcanvas-preview">
                  <div className="market-list">
                    <div className="item-media"> <img src={require('../img/product/17.jpg')} alt /></div>
                    <div className="item-inner">
                      <div className="item-price"> 30$ </div>
                      <div className="item-title"> Sed diam nonummy</div>
                      <div className="item-statistic">
                        <span> <span className="count">9</span> likes </span>
                        <span> <span className="count">136</span> views </span>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="#" uk-toggle="target: #offcanvas-preview">
                  <div className="market-list">
                    <div className="item-media"> <img src={require('../img/product/15.jpg')} alt /></div>
                    <div className="item-inner">
                      <div className="item-price"> 10$ </div>
                      <div className="item-title"> Herbal Shampoo </div>
                      <div className="item-statistic">
                        <span> <span className="count">2</span> likes </span>
                        <span> <span className="count">286</span> views </span>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
            <a className="-left-5 absolute bg-white bottom-1/2 flex h-11 items-center justify-center mb-8 p-2 rounded-full shadow text-2xl w-11 z-10 dark:bg-gray-800 dark:text-white" href="#" uk-slider-item="previous"> <i className="icon-feather-chevron-left" /> </a>
            <a className="-right-5 absolute bg-white bottom-1/2 flex h-11 items-center justify-center mb-8 p-2 rounded-full shadow text-2xl w-11 z-10 dark:bg-gray-800 dark:text-white" href="#" uk-slider-item="next"> <i className="icon-feather-chevron-right" /></a>
          </div>
        </div>
        <div className="flex justify-between mt-6 mb-4">
          <h1 className="lg:text-2xl text-lg font-extrabold leading-none text-gray-900 tracking-tight"> Categories </h1>
          <a href="#" className="text-blue-400 hover:text-blue-500"> See all</a>
        </div>
        <div className="relative" uk-slider="finite: true">
          <div className="uk-slider-container pb-3">
            <ul className="uk-slider-items uk-child-width-1-6@m uk-child-width-1-3@s uk-child-width-1-2 uk-grid-small uk-grid">
              <li>
                <a href="#">
                  <div className="group-catagroy-card" data-src={require('../img/product/11.jpg')} uk-img>
                    <div className="group-catagroy-card-content">
                      <h4> Shoes </h4>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="group-catagroy-card" data-src={require('../img/product/1.jpg')} uk-img>
                    <div className="group-catagroy-card-content">
                      <h4> headphones </h4>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="group-catagroy-card" data-src={require('../img/product/4.jpg')} uk-img>
                    <div className="group-catagroy-card-content">
                      <h4> Fruits </h4>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="group-catagroy-card" data-src={require('../img/product/4.jpg')} uk-img>
                    <div className="group-catagroy-card-content">
                      <h4> Mobiles </h4>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="group-catagroy-card" data-src={require('../img/product/13.jpg')} uk-img>
                    <div className="group-catagroy-card-content">
                      <h4> Parfums </h4>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="group-catagroy-card" data-src={require('../img/product/15.jpg')} uk-img>
                    <div className="group-catagroy-card-content">
                      <h4> Oils </h4>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="group-catagroy-card" data-src={require('../img/product/15.jpg')} uk-img>
                    <div className="group-catagroy-card-content">
                      <h4> Laptops </h4>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
            <a className="-left-5 absolute bg-white bottom-1/2 flex h-11 items-center justify-center -mb-3 p-2 rounded-full shadow text-2xl w-11 z-10 dark:bg-gray-800 dark:text-white" href="#" uk-slider-item="previous"> <i className="icon-feather-chevron-left" /> </a>
            <a className="-right-5 absolute bg-white bottom-1/2 flex h-11 items-center justify-center -mb-3 p-2 rounded-full shadow text-2xl w-11 z-10 dark:bg-gray-800 dark:text-white" href="#" uk-slider-item="next"> <i className="icon-feather-chevron-right" /></a>
          </div>
        </div>
        <hr className="my-3 my-sm-2" />
        <div className="flex justify-between mt-6 mb-4">
          <h1 className="lg:text-2xl text-lg font-extrabold leading-none text-gray-900 tracking-tight">  Brand Collection </h1>
          <a href="#" className="text-blue-400 hover:text-blue-500"> See all</a>
        </div>
        <div className="relative" uk-slider="finite: true">
          <div className="uk-slider-container pb-3">
            <ul className="uk-slider-items uk-child-width-1-5@m uk-child-width-1-3@s uk-child-width-1-2 uk-grid-small uk-grid">
              <li>
                <a href="#" uk-toggle="target: #offcanvas-preview">
                  <div className="market-list">
                    <div className="item-media">
                      <img src={require('../img/product/12.jpg')} alt />
                    </div>
                    <div className="item-inner">
                      <div className="item-price"> 20$ </div>
                      <div className="item-title"> Hermes Rivera </div>
                      <div className="item-statistic">
                        <span> <span className="count">24</span> likes </span>
                        <span> <span className="count">286</span> views </span>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="#" uk-toggle="target: #offcanvas-preview">
                  <div className="market-list">
                    <div className="item-media">
                      <img src={require('../img/product/15.jpg')} alt />
                    </div>
                    <div className="item-inner">
                      <div className="item-price"> 17$ </div>
                      <div className="item-title"> Herbal Shampoo </div>
                      <div className="item-statistic">
                        <span> <span className="count">7</span> likes </span>
                        <span> <span className="count">286</span> views </span>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="#" uk-toggle="target: #offcanvas-preview">
                  <div className="market-list">
                    <div className="item-media">
                      <img src={require('../img/product/4.jpg')} alt />
                    </div>
                    <div className="item-inner">
                      <div className="item-price"> 22$ </div>
                      <div className="item-title"> iPhone 7 unboxing </div>
                      <div className="item-statistic">
                        <span> <span className="count">12</span> likes </span>
                        <span> <span className="count">386</span> views </span>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="#" uk-toggle="target: #offcanvas-preview">
                  <div className="market-list">
                    <div className="item-media">
                      <img src={require('../img/product/14.jpg')} alt />
                    </div>
                    <div className="item-inner">
                      <div className="item-price"> 20$ </div>
                      <div className="item-title"> Wood Chair </div>
                      <div className="item-statistic">
                        <span> <span className="count">2</span> likes </span>
                        <span> <span className="count">286</span> views </span>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="#" uk-toggle="target: #offcanvas-preview">
                  <div className="market-list">
                    <div className="item-media">
                      <img src={require('../img/product/11.jpg')} alt />
                    </div>
                    <div className="item-inner">
                      <div className="item-price"> 42$ </div>
                      <div className="item-title"> Hermes Rivera</div>
                      <div className="item-statistic">
                        <span> <span className="count">2</span> likes </span>
                        <span> <span className="count">286</span> views </span>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="#" uk-toggle="target: #offcanvas-preview">
                  <div className="market-list">
                    <div className="item-media">
                      <img src={require('../img/product/9.jpg')} alt />
                    </div>
                    <div className="item-inner">
                      <div className="item-price"> 20$ </div>
                      <div className="item-title"> Strawberries FreshRipe </div>
                      <div className="item-statistic">
                        <span> <span className="count">2</span> likes </span>
                        <span> <span className="count">286</span> views </span>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
            <a className="-left-5 absolute bg-white bottom-1/2 flex h-11 items-center justify-center mb-8 p-2 rounded-full shadow text-2xl w-11 z-10 dark:bg-gray-800 dark:text-white" href="#" uk-slider-item="previous"> <i className="icon-feather-chevron-left" /> </a>
            <a className="-right-5 absolute bg-white bottom-1/2 flex h-11 items-center justify-center mb-8 p-2 rounded-full shadow text-2xl w-11 z-10 dark:bg-gray-800 dark:text-white" href="#" uk-slider-item="next"> <i className="icon-feather-chevron-right" /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="offcanvas-create" uk-offcanvas="flip: true; overlay: true">
    <div className="uk-offcanvas-bar lg:w-4/12 w-full dark:bg-gray-700 dark:text-gray-300 p-0">
      <button className="uk-offcanvas-close" type="button" uk-close />
      {/* notivication header */}
      <div className="-mb-1 border-b font-semibold px-5 py-5 text-lg">
        <h4>Sell new product</h4>
      </div>
      <div className=" p-6 space-y-3">
        <div>
          <label className="mb-0"> Name </label>
          <input placeholder="Your Name" className="bg-gray-100 dark:bg-gray-600 shadow-none border focus:border-blue-600 mt-2 outline-none px-3 py-2 rounded-md w-full" />
        </div>
        <div>
          <label className="mb-0"> Description </label>
          <textarea name="description" rows={3} className="bg-gray-100 shadow-none border mt-2 w-full px-3 py-2 rounded-md focus:border-blue-600 outline-none mt-" id="description"  placeholder="Please describe your product." defaultValue={""} />
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2">
            <label className="mb-0"> Category </label>
            <select name="category" id="category" className="bg-gray-100 dark:bg-gray-600 shadow-none border w-full px-3 py-2 rounded-md focus:border-blue-600 outline-none mt-2">
              <option value={2}>Autos &amp; Vehicles</option>
              <option value={3}>Baby &amp; Children's Products</option>
              <option value={4}>Beauty Products &amp; Services</option>
              <option value={5}>Computers &amp; Peripherals</option>
              <option value={6}>Consumer Electronics</option>
              <option value={7}>Dating Services</option>
              <option value={8}>Financial Services</option>
              <option value={9}>Gifts &amp; Occasions</option>
              <option value={10}>Home &amp; Garden</option>
              <option value={1}>Other</option>
            </select>
          </div>
          <div>
            <div>
              <label className="mb-0"> Price </label>
              <input placeholder={0.00} type="number" className="bg-gray-100 dark:bg-gray-600 shadow-none border focus:border-blue-600 mt-2 outline-none pl-3 py-2 rounded-md w-full" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2">
            <label className="mb-0"> Type </label>
            <select name="category" id="category" className="bg-gray-100 dark:bg-gray-600 shadow-none border w-full px-3 py-2 rounded-md focus:border-blue-600 outline-none mt-2">
              <option value={2}> New </option>
              <option value={3}> Stock </option>
            </select>
          </div>
          <div>
            <div>
              <label className="mb-0"> Currency </label>
              <select name="currency" id="currency" className="bg-gray-100 dark:bg-gray-600 shadow-none border w-full px-3 py-2 rounded-md focus:border-blue-600 outline-none mt-2">
                <option value={0}>USD ($)</option>
              </select>
            </div>
          </div>
        </div>
        <div>
          <label className="mb-0"> Photos </label>
        </div>
        <div uk-form-custom className="w-full">
          <div className="bg-gray-100 border-2 border-dashed flex flex-col h-32 items-center justify-center relative w-full rounded-lg dark:bg-gray-800 dark:border-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-12">
              <path d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z" />
              <path d="M9 13h2v5a1 1 0 11-2 0v-5z" />
            </svg>
          </div>
          <input type="file" />
        </div>
        <div className="checkbox">
          <input type="checkbox" id="chekcbox1" defaultChecked />
          <label htmlFor="chekcbox1"><span className="checkbox-icon" /> I agree to the <a href="pages-terms.html" target="_blank" className="uk-text-bold uk-text-small uk-link-reset"> Terms and Conditions </a>
          </label>
        </div>
        <button type="button" className="bg-pink-600 font-semibold p-2 mt-2 rounded-md text-center text-white w-full">
          Download Free Sample </button>
      </div>
    </div>
  </div>
  <div id="offcanvas-preview" uk-offcanvas="flip: true; overlay: true">
    <div className="uk-offcanvas-bar lg:w-5/12 w-full dark:bg-gray-700 dark:text-gray-300 p-0">
      <button className="uk-offcanvas-close bg-white rounded-full p-2" type="button" uk-close />
      <div className="relative uk-visible-toggle uk-light w-full" tabIndex={-1} uk-slideshow>
        <ul className="uk-slideshow-items" uk-lightbox>
          <li>
            <a href="assets/images/product/1.jpg">
              <img src={require('../img/product/1.jpg')} alt className="w-full" />
            </a>
          </li>
          <li>
            <a href="assets/images/product/17.jpg">
              <img src={require('../img/product/17.jpg')} alt className="w-full" />
            </a>
          </li>
          <li>
            <a href="assets/images/product/7.jpg">
              {/* <img src={require('../img/product/7.jpg')} alt className="w-full" /> */}
            </a>
          </li>
        </ul>
        <a className="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slideshow-item="previous" />
        <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next" />
      </div>
      <div className="p-6">
        <div className="text-xl font-semibold mb-2"> The Wire Realm Status Audio CB-1 Closed-Back Studio Headphones Review</div>
        <div className="grid grid-cols-2 gap-3 divide-x">
          <div>
            <h3 className="font-semibold text-gray-400"> Rating </h3>
            <div className="flex items-center mt-1 space-x-2">
              <div className="space-y-1 lgtext-lg text-yellow-400">
                <ion-icon name="star" role="img" className="md hydrated" aria-label="star" /> <ion-icon name="star" role="img" className="md hydrated" aria-label="star" /> <ion-icon name="star" role="img" className="md hydrated" aria-label="star" />
                <ion-icon name="star" role="img" className="md hydrated" aria-label="star" /> <ion-icon name="star" role="img" className="md hydrated" aria-label="star" />
              </div>
              <div className="text-sm font-semibold -mt-0.5">4.3 (340)</div>
            </div>
          </div>
          <div className="pl-5 -ml-3">
            <h3 className="font-semibold text-gray-400"> Price </h3>
            <div>
              <span className="text-2xl font-bold"> $139.99 </span> <s> $149.99</s>
            </div>
          </div>
        </div>
        <div className="text-lg font-semibold mb-1 border-t pt-2 mt-3">  Description </div>
        <div>
          <p className="leading-7"> Lorem ipsum dolor sitlaoreet dolore magna aliquam erat volutpat.
            imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, adipiscing elit <a href="#" className="text-blue-500"> read more</a></p>
        </div>
        <div className="border-t my-8 py-2">
          <div className="flex justify-between items-baseline  mb-4">
            <div className="text-lg font-semibold"> Ratings and Reviews </div>
            <a href="#" className="text-blue-600 text-sm"> See all</a>
          </div>
          <div className="rounded-lg bg-blue-50  border border-blue-200 inline-block text-center" hidden>
            <h1 className="text-xl my-2"> 4.6 </h1>
            <div className="space-y-1 text-base text-yellow-400 bg-blue-100 px-2">
              <ion-icon name="star" role="img" className="md hydrated" aria-label="star" /> <ion-icon name="star" role="img" className="md hydrated" aria-label="star" /> <ion-icon name="star" role="img" className="md hydrated" aria-label="star" />
              <ion-icon name="star" role="img" className="md hydrated" aria-label="star" /> <ion-icon name="star" role="img" className="md hydrated" aria-label="star" />
            </div>
          </div>
          <div className="space-y-5">
            <div className="bg-gray-100 dark:bg-gray-700 p-3 shadow-sm rounded-md text-sm relative">
              <div className="flex justify-between items-baseline">
                <h3 className="text-black mb-2 flex-1 truncate font-semibold"> Good design , but cold be improved </h3>
                <div className="text-xs"> 2d ago</div>
              </div>
              <div className="space-y-1 -mt-2 mb-1 text-sm text-yellow-400">
                <ion-icon name="star" role="img" className="md hydrated" aria-label="star" /> <ion-icon name="star" role="img" className="md hydrated" aria-label="star" /> <ion-icon name="star" role="img" className="md hydrated" aria-label="star" />
                <ion-icon name="star" role="img" className="md hydrated" aria-label="star" /> <ion-icon name="star" role="img" className="md hydrated" aria-label="star" />
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.. <a href="#" className="text-blue-500"> read more </a>
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-700 p-3 shadow-sm rounded-md text-sm relative">
              <div className="flex justify-between items-baseline">
                <h3 className="text-black mb-2 flex-1 truncate font-semibold"> I liked it , would please add extra</h3>
                <div className="text-xs"> 2d ago</div>
              </div>
              <div className="space-y-1 -mt-2 mb-1 text-sm text-yellow-400">
                <ion-icon name="star" role="img" className="md hydrated" aria-label="star" /> <ion-icon name="star" role="img" className="md hydrated" aria-label="star" /> <ion-icon name="star" role="img" className="md hydrated" aria-label="star" />
                <ion-icon name="star" role="img" className="md hydrated" aria-label="star" /> <ion-icon name="star" role="img" className="md hydrated" aria-label="star" />
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.. <a href="#" className="text-blue-500"> read more </a>
              </p>
            </div>
          </div>
          <a href="#" className="bg-red-500 pt-6 pb-2 w-full text-center block from-gray-100 to-white bg-gradient-to-b -mt-4 z-10 relative opacity-95 dark:to-gray-700 dark:from-gray-700"> read all </a>
        </div>
        <div className="flex justify-center items-center space-x-3">
          <a href="#" className="bg-pink-100 flex font-bold hidden  hover:text-white inline-block items-center lg:block max-h-10 px-9 py-2 rounded-full text-pink-500 dark:bg-gray-800">
            <ion-icon name="person" className="-mb-1 mr-1 opacity-90 text-xl" /> Contact seller
          </a>
          <a href="#" className="bg-pink-500 flex font-bold hidden hover:bg-pink-600 hover:text-white inline-block items-center lg:block max-h-10 px-9 py-2 rounded-full text-white">
            <ion-icon name="cart" className="-mb-1 mr-1 opacity-90 text-xl" /> Add to Cart
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

        </>
    )
}
export default Market