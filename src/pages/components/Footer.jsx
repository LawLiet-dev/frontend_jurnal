import React from 'react';

export default function Footer() {
  return (
    <div className="bg-gray-100">
      <footer className="py-8 text-gray-600">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {/* Kolom 1 */}
          <div className="">
            <div className="flex  md:justify-start mb-4">
              <img
                src="/assets/images/smk.png"
                alt="Logo of SMKN 1 Kraksaan"
                className="w-12 h-12"
              />
              <h1 className="text-xl font-semibold text-black ml-3 mt-2">
                SMKN 1 <span className="text-blue-500">Kraksaan</span>
              </h1>
            </div>
            <p>Menuju Indonesia Emas</p>
            <p>Kota Kraksaan, Kab. Probolinggo Jawa Timur</p>
          </div>

          {/* Kolom 2 */}
          <div className='pl-0md:pl-2'>
            <h3 className="font-semibold text-lg text-gray-800 mb-4">Navigasi</h3>
            <ul>
              <li>
                <a
                  href="/"
                  className="inline-block text-base hover:text-blue-500 mb-2"
                >
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="inline-block text-base hover:text-blue-500 mb-2">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="inline-block text-base hover:text-blue-500 mb-2">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Kolom 3 */}
          <div className="mt-7">
            <p className="mb-2 text-xl font-bold text-slate-500">Get in touch</p>
            <p className="mb-2">
              <a href="mailto:hello@xprompt.com" className="text-gray-600 hover:underline">
                smk@gmail.com
              </a>
            </p>
            <div className="flex justify-center space-x-4 mr-57">
              <a href="#" className="text-gray-600 hover:text-gray-800">
                <img src="/assets/images/icons/facebook.png" alt="facebook" className='w-8 h-8' />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                <img src="/assets/images/icons/tiktok.png" alt="tik tok" className='w-8 -h8' />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                  <img src="/assets/images/icons/instagram.png" alt="instagram" className='w-8 -h8' />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                <img src="/assets/images/icons/linkedin.png" alt="linkedin" className='w-8 -h8' />
              </a>
          </div>
          </div>
        </div>

        {/* Bagian Bawah */}
        <div className='mt-20 text-center'>
          <p className="mt-4 text-sm text-gray-600">
            © 2025 SMKN 1 KRAKSAAN. All rights reserved
          </p>
        </div>
      </footer>
    </div>
  );
}
