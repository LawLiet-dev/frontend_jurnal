import React from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'

export default function Contact() {
  return (
    <>
    <div style={{ backgroundColor: "#fff" }}>
      <Nav style={{ backgroundColor: "#fff" }}/>
      <div className="text-center py-20 relative mx-auto mt-20">
        <h1 className="text-4xl font-bold text-gray-800">
          Contact Us
        </h1>
        <p className="text-lg text-gray-600 mt-2">
          Hubungi kami
        </p>
      </div>
    </div>
    <div className="container mx-auto p-6 mt-20">
      {/* <!-- Desktop & Tablet --> */}
      <div className="hidden md:block">
        <h2 class="text-2xl font-bold mb-4 ml-0 lg:ml-45" style={{ color:"#64748B" }}>
          Hubungi Kami
        </h2>
        <p class="ml-0 lg:ml-45">
          Silahkan isi formulir berikut, dan kami akan menghubungi 
          <span className='block whitespace-pre-line'>anda kembali.</span>
        </p>
        <div className="flex flex-col md:flex-row justify-center items-start gap-6 mt-6">
          <form className="w-full md:w-1/2 lg:w-1/3 mb-8 md:mb-0 md:mr-8">
            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="name"> Name * </label>
              <input className="w-full px-3 py-2 border border-gray-300 rounded-md" id="name" name="name" placeholder="Your Name" type="text"/>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="email"> Email * </label>
              <input className="w-full px-3 py-2 border border-gray-300 rounded-md" id="email" name="email" placeholder="Your Email" type="email"/>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="message"> Message * </label>
              <textarea className="w-full px-3 py-2 border border-gray-300 rounded-md" id="message" name="message" placeholder="Type Your Message..."></textarea>
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600" type="submit">
              Send <i className="fas fa-paper-plane"></i>
            </button>
          </form>
          <div className="w-full md:w-1/2 lg:w-1/3 self-start flex justify-center mt-6">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.2845605400234!2d113.41181737410254!3d-7.7596155769512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7005bd0eb4db9%3A0x2ee02304e974d908!2sSMK%20Negeri%201%20Kraksaan!5e0!3m2!1sid!2sid!4v1739114128845!5m2!1sid!2sid" width="100%" height="250" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div> 
      </div>

      {/* <!-- Mobile --> */}
      <div className="block md:hidden">
        <h2 className="text-2xl font-bold mb-6 mt-8 text-center px-4" style={{ color: "#64748B" }}>
          Hubungi Kami
        </h2>
        <p className="text-center mb-8 px-6 text-gray-600">
          Silahkan isi formulir berikut, dan kami akan menghubungi anda kembali.
        </p>
        <div className="flex flex-col justify-center items-center gap-6 mt-6 px-4">
          <form className="w-full mb-10">
            <div className="mb-6">
              <label className="block text-gray-700 mb-2" htmlFor="name"> Name * </label>
              <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" 
                id="name" name="name" placeholder="Your Name" type="text"/>
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 mb-2" htmlFor="email"> Email * </label>
              <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" 
                id="email" name="email" placeholder="Your Email" type="email"/>
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 mb-2" htmlFor="message"> Message * </label>
              <textarea className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" 
                id="message" name="message" placeholder="Type Your Message..."></textarea>
            </div>
            <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 w-full" type="submit">
              Send <i className="fas fa-paper-plane"></i>
            </button>
          </form>
          <div className="w-full flex justify-center items-center">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.2845605400234!2d113.41181737410254!3d-7.7596155769512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7005bd0eb4db9%3A0x2ee02304e974d908!2sSMK%20Negeri%201%20Kraksaan!5e0!3m2!1sid!2sid!4v1739114128845!5m2!1sid!2sid" width="100%" height="250" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
      <div class="flex flex-col md:flex-row space-y-6 md:space-x-12 mt-20 justify-center gap-10">
          <div class="flex items-center">
            <div class="w-[48px] h-[48px] bg-blue-100 rounded-lg">
              <img src="/assets/images/icons/inbox.png" alt="inbox" class='w-[35px] h-[35px] mx-auto my-2'/>
            </div>
            <div class='ml-2'>
                <div class="font-semibold">Email</div>
                <div>admin@smkn1kraksaan.sch.id</div>
            </div>
          </div>
          <div class="flex items-center">
            <div class="w-[48px] h-[48px] bg-orange-100 rounded-lg">
                <img src="/assets/images/icons/call.png" alt="call" class='w-[35px] h-[35px] mx-auto my-2'/>
              </div>
              <div class='ml-2'>
                  <div class="font-semibold">Phone</div>
                  <div>0335841306</div>
              </div>
          </div>
          <div class="flex items-center">
          <div class="w-[48px] h-[48px] bg-teal-100 rounded-lg">
                <img src="/assets/images/icons/locations.png" alt="locations" class='w-[35px] h-[35px] mx-auto my-2'/>
              </div>
              <div class='ml-2'>
                  <div class="font-semibold">Addres</div>
                  <div>Jawa timur 67282</div>
              </div>
          </div>
      </div>
    </div>
        {/* <div class="w-full overflow-hidden leading-none">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#F1F5F9" fill-opacity="1" d="M0,192L120,176C240,160,480,128,720,128C960,128,1200,160,1320,176L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
        </div> */}
      <Footer />
    </>
  )
}
