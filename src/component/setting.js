import Header from './header'
import Sidebar from './sidebar'

function Setting() {
    return (
        <>
           <div id="wrapper">
            <Sidebar/>
  <div className="main_content">
    <Header/>
    <div className="container m-auto">
      <h1 className="text-2xl leading-none text-gray-900 tracking-tight mt-3"> Account Setting </h1>
      <ul className="mt-5 -mr-3 flex-nowrap lg:overflow-hidden overflow-x-scroll uk-tab">
        <li className="uk-active"><a href="#">General</a></li>
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
          <div className="grid grid-cols-2 gap-3 lg:p-6 p-4">
            <div>
              <label htmlFor> First name</label>
              <input type="text" placeholder="Your name.." className="shadow-none bg-gray-100" />
            </div>
            <div>
              <label htmlFor> Last name</label>
              <input type="text" placeholder="Your name.." className="shadow-none bg-gray-100" />
            </div>
            <div className="col-span-2">
              <label htmlFor> Email</label>
              <input type="text" placeholder="Your name.." className="shadow-none bg-gray-100" />
            </div>
            <div className="col-span-2">
              <label htmlFor="about">About me</label>
              <textarea id="about" name="about" rows={3} className="shadow-none bg-gray-100" defaultValue={""} />
            </div>
            <div className="col-span-2">
              <label htmlFor> Location</label>
              <input type="text" placeholder className="shadow-none bg-gray-100" />
            </div>
            <div>
              <label htmlFor> Working at</label>
              <input type="text" placeholder className="shadow-none bg-gray-100" />
            </div>
            <div>
              <label htmlFor> Relationship </label>
              <select id="relationship" name="relationship" className="shadow-none bg-gray-100">
                <option value={0}>None</option>
                <option value={1}>Single</option>
                <option value={2}>In a relationship</option>
                <option value={3}>Married</option>
                <option value={4}>Engaged</option>
              </select>
            </div>
          </div>
          <div className="bg-gray-10 p-6 pt-0 flex justify-end space-x-3">
            <button className="p-2 px-4 rounded bg-gray-50 text-red-500"> Cancel </button>
            <button type="button" className="button bg-blue-700"> Save </button>
          </div>
        </div>
        <div>
          <h3 className="text-xl mb-2"> Privacy</h3>
          <p> Lorem ipsum dolor sit amet nibh consectetuer adipiscing elit</p>
        </div>
        <div className="bg-white rounded-md lg:shadow-lg shadow lg:p-6 p-4 col-span-2">
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <div>
                <h4> Who can follow me ?</h4>
                <div> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, </div>
              </div>
              <div className="switches-list -mt-8 is-large">
                <div className="switch-container">
                  <label className="switch"><input type="checkbox" /><span className="switch-button" /> </label>
                </div>
              </div>
            </div>
            <hr />
            <div className="flex justify-between items-center">
              <div>
                <h4> Show my activities ?</h4>
                <div> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, </div>
              </div>
              <div className="switches-list -mt-8 is-large">
                <div className="switch-container">
                  <label className="switch"><input type="checkbox" defaultChecked /><span className="switch-button" /> </label>
                </div>
              </div>
            </div>
            <hr />
            <div className="flex justify-between items-center">
              <div>
                <h4> Search engines?</h4>
                <div> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, </div>
              </div>
              <div className="switches-list -mt-8 is-large">
                <div className="switch-container">
                  <label className="switch"><input type="checkbox" /><span className="switch-button" /> </label>
                </div>
              </div>
            </div>
            <hr />
            <div className="flex justify-between items-center">
              <div>
                <h4> Allow Commenting?</h4>
                <div> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, </div>
              </div>
              <div className="switches-list -mt-8 is-large">
                <div className="switch-container">
                  <label className="switch"><input type="checkbox" /><span className="switch-button" /> </label>
                </div>
              </div>
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
export default Setting