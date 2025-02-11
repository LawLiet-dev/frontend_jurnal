import React from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'

function Home() {
  return (
    <>
    {/* Header */}
      <div className='bg-[#fefaf3] text-gray-800 w-full min-h-screen flex flex-col'>
        <Nav style={{ backgroundColor: "#fefaf3" }}/>
        <div className=" py-20 px-4">
            <div className="inline-block bg-[#0E73A138] text-slate-500 px-4 py-2 rounded-lg mt-20 ml-6 mb-10">
                <span className='bg-sky-600 text-white px-3 py-1 rounded-full mr-3'>New!</span>Membangun inovasi terbaru
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3 ml-6">Maju bersama kami SMKN 1 KRAKSAAN</h1>
            <p className="text-lg text-gray-600 mb-10 ml-6">We're a top-notch web design and development team helping business to craft the meaningful
            <span className='block whitespace-pre-line'>and interactive product experiences.</span></p>
            <div className="flex space-x-4 ml-6">
                <a href="#" className="bg-black text-white px-6 py-3 rounded-md flex items-center space-x-2 hover:bg-gray-800">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                      <rect width="24" height="24" fill="none" />
                      <path fill="currentColor" d="M11 16.175V5q0-.425.288-.712T12 4t.713.288T13 5v11.175l4.9-4.9q.3-.3.7-.288t.7.313q.275.3.287.7t-.287.7l-6.6 6.6q-.15.15-.325.213t-.375.062t-.375-.062t-.325-.213l-6.6-6.6q-.275-.275-.275-.687T4.7 11.3q.3-.3.713-.3t.712.3z" />
                    </svg>
                    <span>Bergabung</span>
                </a>
                <a href="#" className="bg-white text-gray-800 border border-gray-800 px-6 py-3 rounded-md hover:bg-gray-100">About Us</a>
            </div>
        </div>
      </div>

      {/* Jurusan */}
      <div className="flex justify-center">
        <div className='w-full min-h-screen flex flex-col mb-20'>
          <div className='flex flex-col items-center mx-auto mt-20 text-slate-500 mb-20'>
              <h2 className="text-2xl font-bold">Jurusan Kami</h2>
              <p className="text-lg mt-2">Mari Menuju Indonesia Emas</p>
          </div>
          <div className="flex flex-wrap justify-center">
              <div className="w-full sm:w-1/2 md:w-1/3 p-4">
                  <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 ease-out hover:scale-105">
                      <img src="/assets/images/icons/computer.png" alt="Icon representing PPLG" className="w-10 h-10 mb-4" />
                      <h3 className="text-xl font-bold text-gray-800 mb-2">PPLG</h3>
                      <p className="text-gray-600">Following the best process that a great design teams use to create products that provide meaningful and relevant experiences to users</p>
                  </div>
              </div>

              <div className="w-full sm:w-1/2 md:w-1/3 p-4">
                  <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 ease-out hover:scale-105">
                      <img src="/assets/images/icons/art.png" alt="Icon representing DKV" className="w-10 h-10 mb-4" />
                      <h3 className="text-xl font-bold text-gray-800 mb-2">DKV</h3>
                      <p className="text-gray-600">Development of the websites for businesses of all sizes and shapes and covering a small to enterprise organizations</p>
                  </div>
              </div>
              <div className="w-full sm:w-1/2 md:w-1/3 p-4">
                  <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 ease-out hover:scale-105">
                      <img src="/assets/images/icons/menejemen.png" alt="Icon representing OTKP" className="w-10 h-10 mb-4" />
                      <h3 className="text-xl font-bold text-gray-800 mb-2">OTKP</h3>
                      <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem delectus accusamus quibusdam esse voluptates commodi!</p>
                  </div>
              </div>
              <div className="w-full sm:w-1/2 md:w-1/3 p-4">
                  <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 ease-out hover:scale-105">
                      <img src="/assets/images/icons/menejemen.png" alt="Icon representing OTKP" className="w-10 h-10 mb-4" />
                      <h3 className="text-xl font-bold text-gray-800 mb-2">TKJ</h3>
                      <p className="text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam dicta facere quaerat ex, asperiores placeat?</p>
                  </div>
              </div>
              <div className="w-full sm:w-1/2 md:w-1/3 p-4">
                  <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 ease-out hover:scale-105">
                      <img src="/assets/images/icons/menejemen.png" alt="Icon representing OTKP" className="w-10 h-10 mb-4" />
                      <h3 className="text-xl font-bold text-gray-800 mb-2">AK</h3>
                      <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis corrupti nulla repellendus deserunt, quae possimus.</p>
                  </div>
              </div>
              <div className="w-full sm:w-1/2 md:w-1/3 p-4">
                  <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 ease-out hover:scale-105">
                      <img src="/assets/images/icons/menejemen.png" alt="Icon representing OTKP" className="w-10 h-10 mb-4" />
                      <h3 className="text-xl font-bold text-gray-800 mb-2">BDP</h3>
                      <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ratione itaque, quam magni impedit atque!</p>
                  </div>
              </div>
          </div>
        </div>
      </div>

      {/* company */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#fefaf3] text-gray-800 w-full min-h-[60vh] p-6 mb-10">
        <div className="text-center md:text-left flex flex-col justify-center md:pl-20 lg:pl-32">
          <div className="badge inline-block bg-blue-100 text-gray-700 py-1 px-2 font-bold text-slate-500 rounded mb-4 text-sm w-max mx-auto md:mx-0">
            Company
          </div>
          <h1 className="text-3xl font-bold">
            500 Company yang sudah <span className="block whitespace-pre-line">bekerja sama dengan kami</span>
          </h1>
        </div>

        <div className="text-center md:text-left flex flex-col justify-center">
          <p className="hidden md:block text-base leading-relaxed mx-auto md:mx-0 mt-20">
            With our powerful set of elements, you can make beautiful and customized 
            <span className="block whitespace-pre-line"></span>WordPress websites. Incredible amount of design combinations are 
            <span className="block whitespace-pre-line"></span> possible by Drag & Drop, allowing you to be creative without having any 
            <span className="block whitespace-pre-line"></span>design experience.
          </p>

          <p className="block md:hidden text-base leading-relaxed text-center mx-auto max-w-sm">
            With our powerful set of elements, you can make beautiful and
            customized WordPress websites. Incredible amount of design
            combinations are possible by Drag & Drop, allowing you to be creative
            without having any design experience.
          </p>
        </div>

        {/* <div className="col-span-full">
          <div className="flex justify-start items-center gap-6 overflow-x-scroll hide-scrollbar md:overflow-x-auto md:justify-center">
            <img src="/assets/images/icons/amazon2.png" alt="Amazon logo" className="h-10 mx-4 my-3 grayscale opacity-50 transition duration-500 hover:grayscale-0 hover:opacity-100" />
            <img src="/assets/images/icons/google.png" alt="Google logo" className="h-25 mx-4 my-3 grayscale opacity-50 transition duration-500 hover:grayscale-0 hover:opacity-100" />
            <img src="/assets/images/icons/paypal.png" alt="PayPal logo" className="h-10 mx-4 my-3 grayscale opacity-50 transition duration-500 hover:grayscale-0 hover:opacity-100" />
            <img src="/assets/images/icons/spotify.png" alt="Spotify logo" className="h-10 mx-4 my-3 grayscale opacity-50 transition duration-500 hover:grayscale-0 hover:opacity-100" />
            <img src="/assets/images/icons/shopify2.png" alt="Shopify logo" className="h-25 mx-4 my-3 grayscale opacity-50 transition duration-500 hover:grayscale-0 hover:opacity-100" />
          </div>
        </div> */}
        <div className="col-span-full">
          <div className="flex flex-wrap justify-center items-center gap-6">
            <img src="/assets/images/icons/amazon2.png" alt="Amazon logo" className="h-10 mx-4 my-3 grayscale opacity-50 transition duration-500 hover:grayscale-0 hover:opacity-100" />
            <img src="/assets/images/icons/google.png" alt="Google logo" className="h-25 mx-4 my-3 grayscale opacity-50 transition duration-500 hover:grayscale-0 hover:opacity-100" />
            <img src="/assets/images/icons/paypal.png" alt="PayPal logo" className="h-10 mx-4 my-3 grayscale opacity-50 transition duration-500 hover:grayscale-0 hover:opacity-100" />
            <img src="/assets/images/icons/spotify.png" alt="Spotify logo" className="h-10 mx-4 my-3 grayscale opacity-50 transition duration-500 hover:grayscale-0 hover:opacity-100" />
            <img src="/assets/images/icons/shopify2.png" alt="Shopify logo" className="h-25 mx-4 my-3 grayscale opacity-50 transition duration-500 hover:grayscale-0 hover:opacity-100" />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center min-h-screen mb-20">
        <div className="container mx-auto p-4">
            <div className="mb-8 text-center">
                <span className="inline-block bg-blue-100 text-blue-600 py-1 px-3 rounded-full text-sm font-medium">Blog</span>
                <h1 className="text-3xl font-bold text-gray-800 mt-2">Berita Terbaru</h1>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
                <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-xs w-full transform transition-transform duration-300 ease-out hover:scale-105">
                    <img src="/assets/images/city.jpg" alt="People in a meeting discussing design inspirations" className="w-full h-auto" />
                    <div className="p-4">
                        <span className="inline-block bg-blue-500 text-white py-1 px-3 rounded-full text-xs font-medium mb-2">Development</span>
                        <div className="text-gray-500 text-sm mb-2">13 March, 2020</div>
                        <h2 className="text-lg font-bold text-gray-800 mb-2">Top 10 design inspirations to follow</h2>
                        <p className="text-gray-600 text-sm mb-4">The following Italian restaurant WordPress themes come with the powerful drag-n-drop...</p>
                        <a href="#" className="text-blue-600 text-sm font-medium">Read More</a>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-xs w-full transform transition-transform duration-300 ease-out hover:scale-105">
                    <img src="/assets/images/gurun.jpg" alt="People in a meeting discussing design inspirations" className="w-full h-auto" />
                    <div className="p-4">
                        <span className="inline-block bg-green-500 text-white py-1 px-3 rounded-full text-xs font-medium mb-2">Bisnis</span>
                        <div className="text-gray-500 text-sm mb-2">13 March, 2020</div>
                        <h2 className="text-lg font-bold text-gray-800 mb-2">Top 10 design inspirations to follow</h2>
                        <p className="text-gray-600 text-sm mb-4">The following Italian restaurant WordPress themes come with the powerful drag-n-drop...</p>
                        <a href="#" className="text-blue-600 text-sm font-medium">Read More</a>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-xs w-full transform transition-transform duration-300 ease-out hover:scale-105">
                    <img src="/assets/images/perahu.jpg" alt="People in a meeting discussing design inspirations" className="w-full h-auto" />
                    <div className="p-4">
                        <span className="inline-block bg-black text-white py-1 px-3 rounded-full text-xs font-medium mb-2">Design</span>
                        <div className="text-gray-500 text-sm mb-2">13 March, 2020</div>
                        <h2 className="text-lg font-bold text-gray-800 mb-2">Top 10 design inspirations to follow</h2>
                        <p className="text-gray-600 text-sm mb-4">The following Italian restaurant WordPress themes come with the powerful drag-n-drop...</p>
                        <a href="#" className="text-blue-600 text-sm font-medium">Read More</a>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <Footer/>
    </>
  )
};
export default Home