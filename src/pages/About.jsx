import React from "react";
import HeaderLanding from "../components/HeaderLanding";
import Footer from "../components/Footer";
import CursorFollower from "../components/CursorFollower.jsx";
import { Link } from "react-router-dom";
import "../../public/assets/css/teacher.css";

function About() {
  return (
    <div>
      <CursorFollower />
      <HeaderLanding backgroundColor="#fff" />

      <section className="py-44 relative">
        <div className=" hero-with-shapes">
          <div className="container">
            <div className="mb-5">
              <h1 className="md:text-5xl text-3xl text-black font-medium my-5">
                Menciptakan
                tamatan
                yang
                unggul
                dan
                <div className="hidden md:block">
                  <span className="relative after:bg-amber-200 md:after:h-6 after:h-4 after:w-68 after:inset-x-0 after:bottom-0 after:absolute after:-z-10 block whitespace-pre-line mt-3">
                    {" "}
                    berprestasi
                    melalui
                    program
                    pkl
                  </span>
                </div>
                <div className="md:hidden">
                  <span className="relative after:bg-amber-200 md:after:h-6 after:h-4 after:w-43 after:inset-x-0 after:bottom-0 after:absolute after:-z-10 block whitespace-pre-line mt-3">
                    {" "}
                    berprestasi
                  </span>{" "}
                  melalui
                  program{" "}
                  <span className="block whitespace-pre-line"></span>
                  pkl
                </div>
              </h1>
              <p className="w-3/4 text-lg font-medium mt-6 mb-20 text-default-600">
                Kami
                membantu
                berkontribusi
                untuk
                masa
                depan
                bangsa
                melalui
                pendidikan
                dan
                memberikan
                pengalaman
                kerja
                yang
                terbaik.
              </p>
              {/* data-aos="fade-right" data-aos-duration="1000" */}
              <div className="flex space-x-4">
                <a
                  href="#lihat"
                  className="shadow-2xl bg-black opacity-70 text-white px-6 py-3 rounded-md flex items-center space-x-4 hover:shadow-lg hover:shadow-black/50 focus:outline focus:outline-black/50 transition-all duration-500">
                  {/* <i className="fas fa-arrow-down"></i> */}
                  <span>
                    Lihat
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24">
                    <rect
                      width="24"
                      height="24"
                      fill="none"
                    />
                    <path
                      fill="currentColor"
                      d="M11 16.175V5q0-.425.288-.712T12 4t.713.288T13 5v11.175l4.9-4.9q.3-.3.7-.288t.7.313q.275.3.287.7t-.287.7l-6.6 6.6q-.15.15-.325.213t-.375.062t-.375-.062t-.325-.213l-6.6-6.6q-.275-.275-.275-.687T4.7 11.3q.3-.3.713-.3t.712.3z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20" id="lihat">
        <div className="container">
          <div className="text-center">
            {/* <span className="text-sm font-medium py-1 px-3 rounded-full text-primary bg-primary/10">Blog</span> */}
            <h1 className="text-3xl font-medium my-3">
              Tentang
              pkl
            </h1>
          </div>

          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-12 gap-6">
            <div
              className="shadow-md rounded-md"
              data-aos="fade-up"
              data-aos-duration="500">
              <div className="relative">
                {/* <div className="absolute end-4 top-3">
                            <span className="px-3 py-1 text-sm font-medium text-white rounded-md bg-black">Design</span>
                        </div> */}
                <img src="assets/images/hero/coworking1.jpg" />
                <div className="absolute -bottom-5">
                  <svg
                    className="w-full h-14 text-white"
                    viewBox="0 0 528 40"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    xmlns="http://www.w3.org/2000/svg">
                    <g
                      id="shape"
                      transform="matrix(-1.138336E-07 -1 1 -1.138336E-07 0 39.92764)">
                      <path
                        d="M0 0L40.5467 0C40.5467 0 -31.8215 230.87 38.7134 528.217C39.8794 533.133 31.7549 527.502 31.0925 528.75C28.7914 533.084 26.1543 528.191 24.4327 529.178C59.2372 539.206 14.0091 521.981 12.9329 530.001L1.02722 528.284L0 0Z"
                        transform="translate(7.629395E-06 6.103516E-05)"
                        fill="currentColor"
                        stroke="none"></path>
                    </g>
                  </svg>
                </div>
              </div>
              <div className="p-6">
                {/* <p className="text-sm">11 March, 2020</p> */}
                <h4 className="text-lg font-semibold my-2">
                  <p>
                    Pengertian
                    PKL
                  </p>
                </h4>
                <p className="text-default-400 my-2">
                  PKL
                  (Praktek
                  Kerja
                  Lapangan)
                  adalah
                  kegiatan
                  yang
                  dilakukan
                  oleh
                  siswa/siswi
                  untuk
                  mendapatkan
                  pengalaman
                  kerja
                  di
                  dunia
                  nyata,
                  sesuai
                  dengan
                  bidang
                  studi
                  mereka.
                </p>
              </div>
            </div>

            <div
              className="shadow-md rounded-md"
              data-aos="fade-up"
              data-aos-duration="700">
              <div className="relative">
                {/* <div className="absolute end-4 top-3">
                            <span
                                className="px-3 py-1 text-sm font-medium text-white rounded-md bg-primary">Development</span>
                        </div> */}
                <img src="assets/images/hero/coworking2.png" />
                <div className="absolute -bottom-5">
                  <svg
                    className="w-full h-14 text-white"
                    viewBox="0 0 528 40"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    xmlns="http://www.w3.org/2000/svg">
                    <g
                      id="shape"
                      transform="matrix(-1.138336E-07 -1 1 -1.138336E-07 0 39.92764)">
                      <path
                        d="M0 0L40.5467 0C40.5467 0 -31.8215 230.87 38.7134 528.217C39.8794 533.133 31.7549 527.502 31.0925 528.75C28.7914 533.084 26.1543 528.191 24.4327 529.178C59.2372 539.206 14.0091 521.981 12.9329 530.001L1.02722 528.284L0 0Z"
                        transform="translate(7.629395E-06 6.103516E-05)"
                        fill="currentColor"
                        stroke="none"></path>
                    </g>
                  </svg>
                </div>
              </div>
              <div className="p-6">
                {/* <p className="text-sm">12 March, 2020</p> */}
                <h4 className="text-lg font-semibold my-2">
                  <p>
                    Kegiatan
                    selama
                    pkl
                  </p>
                </h4>
                <p className="text-default-400 my-2">
                  PKL
                  akan
                  berlangsung
                  selama
                  6
                  bulan,
                  di
                  mana
                  siswa
                  diharuskan
                  mengikuti
                  pelatihan
                  kerja
                  di
                  tempat
                  yang
                  telah
                  dipilih
                  sesuai
                  dengan
                  jurusan
                  masing-masing.
                </p>
              </div>
            </div>

            <div
              className="shadow-md rounded-md"
              data-aos="fade-up"
              data-aos-duration="900">
              <div className="relative">
                {/* <div className="absolute end-4 top-3">
                            <span className="px-3 py-1 text-sm font-medium text-white rounded-md bg-black">Design</span>
                        </div> */}
                <img src="assets/images/hero/coworking4.jpg" />
                <div className="absolute -bottom-5">
                  <svg
                    className="w-full h-14 text-white"
                    viewBox="0 0 528 40"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    xmlns="http://www.w3.org/2000/svg">
                    <g
                      id="shape"
                      transform="matrix(-1.138336E-07 -1 1 -1.138336E-07 0 39.92764)">
                      <path
                        d="M0 0L40.5467 0C40.5467 0 -31.8215 230.87 38.7134 528.217C39.8794 533.133 31.7549 527.502 31.0925 528.75C28.7914 533.084 26.1543 528.191 24.4327 529.178C59.2372 539.206 14.0091 521.981 12.9329 530.001L1.02722 528.284L0 0Z"
                        transform="translate(7.629395E-06 6.103516E-05)"
                        fill="currentColor"
                        stroke="none"></path>
                    </g>
                  </svg>
                </div>
              </div>
              <div className="p-6">
                {/* <p className="text-sm">13 March, 2020</p> */}
                <h4 className="text-lg font-semibold my-2">
                  <p>
                    Manfaat
                    dan
                    tujan
                    pkl
                  </p>
                </h4>
                <p className="text-default-400 my-2">
                  Membangun
                  jaringan
                  profesional
                  yang
                  bisa
                  berguna
                  di
                  masa
                  depan.
                  Menambah
                  pengalaman
                  kerja
                  yang
                  bermanfaat
                  untuk
                  memasuki
                  dunia
                  profesional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-20 bg-primary/10 relative"
        data-aos="fade-up">
        <div className="absolute top-0 inset-x-0 hidden sm:block">
          <img
            src="assets/images/shapes/white-wave.svg"
            alt="svg"
            className="w-full -scale-x-100"
          />
        </div>
        <div className="container relative">
          <div className="text-center">
            <span className="text-sm font-medium py-1 px-3 rounded-full text-primary bg-primary/10">
              Kinerja
            </span>
            <h2 className="md:text-3xl text-xl font-semibold my-5">
              Tujuan
              Website
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 mt-16">
            <div
              className="p-6 rounded"
              data-aos="fade-right"
              data-aos-duration="800">
              <div className="flex gap-5">
                <div className="">
                  <div className="size-16 bg-primary/10 rounded-md flex items-center justify-center gap-5">
                    {/* <span className="i-solar-home-wifi-angle-bold-duotone size-12 text-primary"></span> */}
                    <img
                      src="/assets/images/icons/compass.png"
                      alt="compas"
                      className="w-8 h-8"
                    />
                  </div>
                </div>

                <div>
                  <h5 className="mb-2">
                    Dukungan
                    Relokasi
                  </h5>
                  <p>
                    Kami
                    membantu
                    anda
                    untuk
                    memudahkan
                    dalam
                    menangani
                    urusan
                    jurnal.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded">
              <div
                className="flex gap-5"
                data-aos="fade-left"
                data-aos-duration="1000">
                <div>
                  <div className="size-16 bg-primary/10 rounded-md flex items-center justify-center gap-5">
                    {/* <i className="i-solar-users-group-two-rounded-bold-duotone size-12 text-primary"></i> */}
                    <img
                      src="/assets/images/icons/layers.png"
                      alt="layers"
                      className="w-8 h-8"
                    />
                  </div>
                </div>
                <div>
                  <h5 className="mb-2">
                    Technology
                  </h5>
                  <p>
                    Menciptakan
                    inovasi
                    baru
                    untuk
                    mengikuti
                    perkembangan
                    dengan
                    menciptakan
                    web
                    ini.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="p-6 rounded"
              data-aos="fade-right"
              data-aos-duration="900">
              <div className="flex gap-5">
                <div>
                  <div className="size-16 bg-primary/10 rounded-md flex items-center justify-center gap-5">
                    {/* <i className="i-solar-armchair-2-bold-duotone size-12 text-primary"></i> */}
                    <img
                      src="/assets/images/icons/location-pin.png"
                      alt="location"
                      className="w-8 h-8"
                    />
                  </div>
                </div>

                <div>
                  <h5 className="mb-2">
                    Beraktivitas
                    dari
                    mana
                    saja
                  </h5>
                  <p>
                    Bekerja
                    kapanpun
                    dan
                    dimanapun,
                    kami
                    menawarkan
                    web
                    jurnal
                    yang
                    dapat
                    kerja
                    jarak
                    jauh.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded">
              <div
                className="flex gap-5"
                data-aos="fade-left"
                data-aos-duration="1200">
                <div>
                  <div className="size-16 bg-primary/10 rounded-md flex items-center justify-center gap-5">
                    {/* <i className="i-solar-sofa-2-bold-duotone size-12 text-primary"></i> */}
                    <img
                      src="/assets/images/icons/team.png"
                      alt="team"
                      className="w-8 h-8"
                    />
                  </div>
                </div>

                <div>
                  <h5 className="mb-2">
                    Kinerja
                    team
                  </h5>
                  <p>
                    Kami
                    berusaha
                    untuk
                    anda
                    mendapatkan
                    pengalaman
                    menyenenangkan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="lg:py-24 py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <div
                className="border rounded-md p-8"
                data-aos="fade-right"
                data-aos-duration="600">
                <h1 className="text-xl mb-3">
                  Hubungi
                </h1>
                <p className="text-default-500">
                  Hubungi
                  kami
                  jika
                  ada
                  yang
                  ingin
                  disampaikan,
                  kami
                  akan
                  mendengarkan
                  pendapat
                  anda
                  dengan
                  senang
                  hati.
                </p>
                <button className="mt-10 flex items-center">
                  <Link
                    to="/contact"
                    className="border border-primary text-primary rounded-md hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/30 transition-all duration-500 focus:shadow-none focus:outline focus:outline-primary/40 py-2 px-4">
                    Contact
                    Us
                  </Link>
                </button>
              </div>
            </div>

            <div>
              <div
                className="border rounded-md p-8"
                data-aos="fade-left"
                data-aos-duration="700">
                <h1 className="text-xl mb-3">
                  Pertanyaan
                </h1>
                <p className="text-default-500">
                  Anda
                  dapat
                  menghubungi
                  tim
                  kami
                  jika
                  memiliki
                  keperluan
                  atau
                  hal
                  yang
                  tidak
                  di
                  mengerti.
                </p>
                <button className="mt-10 flex items-center">
                  <Link
                    to="/contact"
                    className="border border-primary text-primary rounded-md hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/30 transition-all duration-500 focus:shadow-none focus:outline focus:outline-primary/40 py-2 px-4">
                    Contact
                    Us
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default About;
