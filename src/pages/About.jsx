import React from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'

function About() {
  return (
    <>
    {/* Header */}
    <div className='bg-[#fff] text-gray-800 w-full min-h-screen flex flex-col'>
      <Nav style={{ backgroundColor: "#fff" }}/>
      <div className=" py-20 px-4 mt-15">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-5 mt-15 ml-6">Menciptakan tamatan yang unggul dan <span className='block whitespace-pre-line'>berprestasi melalui program pkl</span></h1>
            <p className="text-lg text-gray-600 mb-15 ml-6">Were a top-notch web design and development team helping business to craft the meaningful
            <span className='block whitespace-pre-line'>and interactive product experiences.</span></p>
            <div className="flex space-x-4 ml-6">
                <a href="register" className="shadow-2xl bg-black opacity-70 text-white px-6 py-3 rounded-md flex items-center space-x-2 hover:bg-amber-700">
                    {/* <i className="fas fa-arrow-down"></i> */}
                    <span>Bergabung</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                      <rect width="24" height="24" fill="none" />
                      <path fill="currentColor" d="M11 16.175V5q0-.425.288-.712T12 4t.713.288T13 5v11.175l4.9-4.9q.3-.3.7-.288t.7.313q.275.3.287.7t-.287.7l-6.6 6.6q-.15.15-.325.213t-.375.062t-.375-.062t-.325-.213l-6.6-6.6q-.275-.275-.275-.687T4.7 11.3q.3-.3.713-.3t.712.3z" />
                    </svg>
                </a>
            </div>
        </div>
      </div>
      {/* About */}
      <div className="flex items-center justify-center min-h-screen mb-20">
        <div className="container mx-auto p-4">
            <div className="mb-8 text-center">
                {/* <span className="inline-block bg-blue-100 text-blue-600 py-1 px-3 rounded-full text-sm font-medium">Blog</span> */}
                <h1 className="text-3xl font-bold text-slate-600 mt-2">Tentang Pkl</h1>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
                <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-xs w-full transform transition-transform duration-300 ease-out hover:scale-105">
                    <img src="/assets/images/city.jpg" alt="People in a meeting discussing design inspirations" className="w-full h-auto" />
                    <div className="p-4">
                        <h2 className="text-lg font-bold text-gray-800 mb-2">Pengertian Pkl</h2>
                        <p className="text-gray-600 text-sm mb-4">PKL (Praktek Kerja Lapangan) adalah kegiatan yang dilakukan oleh siswa/siswi untuk mendapatkan pengalaman kerja di dunia nyata, sesuai dengan bidang studi mereka.</p>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-xs w-full transform transition-transform duration-300 ease-out hover:scale-105">
                    <img src="/assets/images/gurun.jpg" alt="People in a meeting discussing design inspirations" className="w-full h-auto" />
                    <div className="p-4">
                        <h2 className="text-lg font-bold text-gray-800 mb-2">Kegiatan Selama Pkl</h2>
                        <p className="text-gray-600 text-sm mb-4">PKL akan berlangsung selama 6 bulan, di mana siswa diharuskan mengikuti pelatihan kerja di tempat yang telah dipilih sesuai dengan jurusan masing-masing.</p>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-xs w-full transform transition-transform duration-300 ease-out hover:scale-105">
                    <img src="/assets/images/perahu.jpg" alt="People in a meeting discussing design inspirations" className="w-full h-auto" />
                    <div className="p-4">
                        <h2 className="text-lg font-bold text-gray-800 mb-2">Manfaat dan tujuan Pkl</h2>
                        <p className="text-gray-600 text-sm mb-4">Membangun jaringan profesional yang bisa berguna di masa depan.
                        Menambah pengalaman kerja yang bermanfaat untuk memasuki dunia profesional.
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <section className="py-20 bg-primary/10 relative">
        <div className="container relative">
            <div className="text-center">
              <div className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm mb-4">
                Kinerja
              </div>
              <h1 className="text-2xl font-bold text-gray-800 mb-10">
                Tujuan Website
              </h1>
            </div>

            <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 mt-16 ml-0 md:ml-16">
                <div className="bg-white p-6 rounded">
                    <div className="flex gap-5">
                        <div className="">
                            <div className="size-16 bg-primary/10 rounded-md flex items-center justify-center gap-5 w-[64px] h-[64px] bg-blue-100 rounded-lg">
                                {/* <span className="i-solar-home-wifi-angle-bold-duotone size-12 text-primary"></span> */}
                                <img src="/assets/images/icons/compass.png" alt="compass" className='w-[35px] h-[35px] mx-auto my-2'/>
                            </div>
                        </div>

                        <div>
                            <h5 className="mb-2 font-bold">Dukungan Relokasi</h5>
                            <p>Kami membantu anda untuk memudahkan dalam <span className='block whitespace-pre-line'>menangani urusan jurnal.</span></p>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 rounded">
                    <div className="flex gap-5">
                        <div>
                            <div className="size-16 bg-primary/10 rounded-md flex items-center justify-center gap-5 w-[64px] h-[64px] bg-blue-100 rounded-lg">
                                {/* <i className="i-solar-users-group-two-rounded-bold-duotone size-12 text-primary"></i> */}
                                <img src="/assets/images/icons/layers.png" alt="location-pin" className='w-[35px] h-[35px] mx-auto my-2'/>
                            </div>
                        </div>
                        <div>
                            <h5 className="mb-2 font-bold">Technology</h5>
                            <p>Menciptakan inovasi baru untuk mengikuti perkembangan <span className='block whitespace-pre-line'>dengan menciptakan web ini.</span></p>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 rounded">
                    <div className="flex gap-5">
                        <div>
                            <div className="size-16 bg-primary/10 rounded-md flex items-center justify-center gap-5 w-[64px] h-[64px] bg-blue-100 rounded-lg">
                                {/* <i className="i-solar-armchair-2-bold-duotone size-12 text-primary"></i> */}
                                <img src="/assets/images/icons/location-pin.png" alt="layers" className='w-[35px] h-[35px] mx-auto my-2'/>
                            </div>
                        </div>

                        <div>
                            <h5 className="mb-2 font-bold">Beraktivitas dari mana saja</h5>
                            <p>Bekerja kapanpun dan dimanapun, kami menawarkan web <span className='block whitespace-pre-line'>jurnal yang dapat kerja jarak jauh.</span></p>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 rounded">
                    <div className="flex gap-5">
                        <div>
                            <div className="size-16 bg-primary/10 rounded-md flex items-center justify-center gap-5 w-[64px] h-[64px] bg-blue-100 rounded-lg">
                                {/* <i className="i-solar-sofa-2-bold-duotone size-12 text-primary"></i> */}
                                <img src="/assets/images/icons/team.png" alt="team work" className='w-[35px] h-[35px] mx-auto my-2' />
                            </div>
                        </div>

                        <div>
                            <h5 className="mb-2 font-bold">Kinerja Tim</h5>
                            <p>Kami berusaha untuk anda mendapatkan pengalaman menyenenangkan.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div className="flex items-center justify-center mb-30 mt-10 px-4 sm:px-6">
        {/* <!-- Wrapper Layout --> */}
        <div className="flex flex-col gap-6 lg:flex-row lg:gap-12">
          {/* <!-- Card 1 --> */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 h-60 shadow-md w-full lg:w-1/2 xl:w-150 transform transition-transform duration-300 ease-out hover:scale-105">
            <h3 className="text-lg font-semibold mb-4">Hubungi</h3>
            <p className="text-gray-600 mb-6">
              Hubungi kami jika ada yang ingin disampaikan, kami akan mendengarkan pendapat anda dengan senang hati.
            </p>
            <a href="contact">
            <button className="bg-white border border-blue-500 text-blue-500 py-2 px-4 rounded hover:bg-blue-500 hover:text-white">
              Contact Us
            </button>
            </a>
          </div>
          {/* <!-- Card 2 --> */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 h-60 shadow-md w-full lg:w-1/2 xl:w-150 transform transition-transform duration-300 ease-out hover:scale-105">
            <h3 className="text-lg font-semibold mb-4">Pertanyaan</h3>
            <p className="text-gray-600 mb-6">
              Anda dapat menghubungi tim kami jika memiliki keperluan atau hal yang tidak dimengerti.
            </p>
            <a href="contact">
            <button className="bg-white border border-blue-500 text-blue-500 py-2 px-4 rounded hover:bg-blue-500 hover:text-white">
              Contact Us
            </button>
            </a>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default About