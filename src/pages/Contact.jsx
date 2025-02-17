import React from "react";
import HeaderLanding from "../components/HeaderLanding";
import Footer from "../components/Footer";

function Contact() {
  return (
    <div>
      <HeaderLanding backgroundColor="#F1F5F9" />

      <section className="bg-default-100 lg:pt-28 sm:pb-36 pb-16 pt-36 relative">
        <div className="container">
          <div className="flex justify-center">
            <div className="lg:w-7/12 text-center mt-10">
              <h1 className="text-5xl/relaxed text-default-700">
                Contact Us
              </h1>
              <p className="md:text-lg text-default-500">
                Hubungi kami
              </p>
            </div>
          </div>
        </div>

        <div className="absolute -bottom-1 w-full">
          <svg
            className="w-full h-full"
            viewBox="0 0 1440 40"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink">
            <g
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd">
              <g fill="#fff">
                <path
                  d="M0,30.013 C239.659,10.004 479.143,0 718.453,0 C957.763,0 1198.28,10.004 1440,30.013 L1440,40 L0,40 L0,30.013 Z"
                />
              </g>
            </g>
          </svg>
        </div>
      </section>

      <section className="lg:pb-24 py-6 relative">
        <div className="container">
          <div className="hidden md:block">
            <div className="lg:flex items-center mt-[-160px]">
              <div className="lg:w-1/2">
                <div className="relative bg-clip-border rounded-[0.1875rem]">
                  <div className="py-12">
                    <h2 className="mb-4 text-2xl/6 mt-0 font-medium">
                      Hubungi kami
                    </h2>
                    <p className="mb-12 text-base/6">
                      Silahkan isi formulir berikut, dan kami akan menghubungi anda kembali.
                    </p>
                    <form>
                      <div className="w-full">
                        <div className="mb-5">
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium mb-1 text-default-600">
                            Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            className="py-2 px-4 leading-6 block w-full border-default-300 rounded text-sm focus:border-default-300 focus:ring-0"
                            id="name"
                            placeholder="Your Name"
                          />
                        </div>
                        <div className="mb-5">
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium mb-1 text-default-600">
                            Email <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            className="py-2 px-4 leading-6 block w-full border-default-300 rounded text-sm focus:border-default-300 focus:ring-0"
                            id="email"
                            placeholder="Your Email"
                          />
                        </div>
                        <div className="mb-5">
                          <label
                            htmlFor="message"
                            className="block text-sm font-medium mb-1 text-default-600">
                            Message <span className="text-red-500">*</span>
                          </label>
                          <textarea
                            className="py-2 px-4 leading-6 block w-full border-default-300 rounded text-sm focus:border-default-300 focus:ring-0"
                            id="message"
                            rows="4"
                            placeholder="Type Your Message..."></textarea>
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="inline-flex items-center text-sm bg-primary text-white font-medium leading-6 text-center align-middle select-none py-2 px-4 rounded-md transition-all hover:shadow-lg hover:shadow-primary/80">
                        Send
                        <i className="i-tabler-send-2 size-4 ms-1"></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>

              <div className="lg:w-5/12 ms-auto overflow-x-hidden">
                <div className="h-[520px]">
                  <div className="h-100">
                    <iframe
                      className="w-full h-[300px] mt-45 md:mt-0 lg:mt-75 sm:mt-4"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.2845605400234!2d113.41181737410254!3d-7.7596155769512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7005bd0eb4db9%3A0x2ee02304e974d908!2sSMK%20Negeri%201%20Kraksaan!5e0!3m2!1sid!2sid!4v1739114128845!5m2!1sid!2sid"
                      frameBorder="0"
                      allowFullScreen
                      referrerPolicy="no-referrer-when-downgrade"
                      title="School Location"></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        {/* mobile */}
          <div className="md:hidden">
            <div className="mb-10">
              <h2
                className="text-2xl font-bold mb-6 mt-8 text-center px-4"
                style={{ color: "#64748B" }}>
                Hubungi Kami
              </h2>
              <p className="text-center mb-8 px-6 text-gray-600">
                Silahkan isi formulir berikut, dan kami akan menghubungi anda kembali.
              </p>
              <div className="flex flex-col justify-center items-center gap-6 mt-6 px-4">
                <form className="w-full mb-10">
                  <div className="mb-6">
                    <label
                      className="block text-gray-700 mb-2"
                      htmlFor="name-mobile">
                      Name *
                    </label>
                    <input
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                      id="name-mobile"
                      name="name"
                      placeholder="Your Name"
                      type="text"
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      className="block text-gray-700 mb-2"
                      htmlFor="email-mobile">
                      Email *
                    </label>
                    <input
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                      id="email-mobile"
                      name="email"
                      placeholder="Your Email"
                      type="email"
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      className="block text-gray-700 mb-2"
                      htmlFor="message-mobile">
                      Message *
                    </label>
                    <textarea
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                      id="message-mobile"
                      name="message"
                      placeholder="Type Your Message..."></textarea>
                  </div>
                  <button
                    className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 w-full"
                    type="submit">
                    Send <i className="fas fa-paper-plane"></i>
                  </button>
                </form>
                <div className="w-full flex justify-center items-center">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.2845605400234!2d113.41181737410254!3d-7.7596155769512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7005bd0eb4db9%3A0x2ee02304e974d908!2sSMK%20Negeri%201%20Kraksaan!5e0!3m2!1sid!2sid!4v1739114128845!5m2!1sid!2sid"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="School Location Mobile"></iframe>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-12 sm:gap-60 md:mt-[-150px] lg:mt-[-100px]">
            <div className="flex gap-4 mb-3">
              <span className="flex items-center justify-center size-12 bg-primary/20 rounded-lg relative shrink-0">
                <i className="i-solar-letter-opened-bold-duotone size-7 text-primary"></i>
              </span>
              <div className="grow">
                <h5 className="text-base text-default-700">Email</h5>
                <a href="mailto:admin@smkn1kraksaan.sch.id" className="text-default-500 my-1">
                  admin@smkn1kraksaan.sch.id
                </a>
              </div>
            </div>

            <div className="flex gap-4 mb-3 md:ml-12">
              <span className="flex items-center justify-center size-12 bg-orange-500/20 rounded-lg relative shrink-0">
                <i className="i-solar-incoming-call-rounded-bold-duotone size-7 text-orange-500"></i>
              </span>
              <div className="grow">
                <h5 className="text-base text-default-700">Phone</h5>
                <a href="tel:0335841306" className="text-default-500 my-1">
                  0335841306
                </a>
              </div>
            </div>

            <div className="flex gap-4 mb-3 md:ml-4">
              <span className="flex items-center justify-center size-12 bg-teal-500/20 rounded-lg relative shrink-0">
                <i className="i-solar-map-point-bold-duotone size-7 text-teal-500"></i>
              </span>
              <div className="grow">
                <h5 className="text-base text-default-700">Address</h5>
                <a href="#" className="text-default-500 my-1">
                  Jawa timur 67282
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Contact;