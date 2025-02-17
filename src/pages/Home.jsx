import React from "react";
import Footer from "../components/Footer";
import HeaderLanding from "../components/HeaderLanding";
import "../../public/assets/css/teacher.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <HeaderLanding backgroundColor="#FEFAF2" />

      <section className="py-44 relative bg-amber-500/5">
        <div className=" hero-with-shapes">
          <div className="container">
            <div>
              <div
                className="bg-[#0E73A138] py-2 px-4 inline-block rounded-md mb-6"
                data-aos="fade-right"
                data-aos-duration="1000">
                <Link to="#">
                  <div className="flex items-center gap-2">
                    <div className="inline-block px-2 text-sm text-white rounded-full bg-blue-500">
                      New
                    </div>
                    <div className="font-medium">
                      Membangun
                      Inovasi
                      baru
                    </div>
                  </div>
                </Link>
              </div>
              <h1 className="md:text-5xl text-3xl text-default-700 font-medium my-5">
                Maju
                bersama
                kami
                SMKN
                1
                <span className="relative after:bg-amber-200 md:after:h-6 after:h-4 after:w-full after:inset-x-0 after:bottom-0 after:absolute after:-z-10">
                  {" "}
                  KRAKSAAN
                </span>
              </h1>
              {/* <p className="w-3/4 text-lg font-medium mt-6 mb-20 text-default-600">Were a top-notch web design and
                        development team helping business to craft the meaningful and interactive product experiences.
                    </p> */}
              <p className="w-3/4 text-lg font-medium mt-6 mb-20 text-default-600">
                Praktek
                Kerja
                Lapangan
                bukan
                sekadar
                pelatihan,
                tetapi
                langkah
                nyata
                siswa
                SMKN
                1
                Kraksaan
                untuk
                merasakan
                dunia
                industri
                dan
                mengasah
                keterampilan
                digital
                mereka.
              </p>
              <div className="flex flex-wrap items-center gap-5">
                <a
                  href="#"
                  className="py-3 px-6 flex items-center rounded border border-black text-white bg-black hover:shadow-lg hover:shadow-black/50 focus:outline focus:outline-black/50 transition-all duration-500">
                  <i className="i-fa6-solid-arrow-down me-2"></i>{" "}
                  Bergabung
                </a>
                <a
                  href="#"
                  className="py-3 px-6 rounded border border-black hover:border-black hover:bg-black hover:text-white hover:shadow-lg hover:shadow-black/50 focus:outline focus:outline-black/50 transition-all duration-500">
                  About
                  Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="text-center">
            <h1 className="text-3xl font-medium">
              Jurusan
              Kami
            </h1>
            <p className="font-medium text-default-500 mt-5 mb-4">
              Mari
              Maju
              Bersama
              Kami
            </p>
          </div>

          <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 pt-12 gap-4">
            <div
              className="p-6 hover:bg-white rounded-md hover:shadow-xl transition-all duration-500"
              data-aos="fade-up"
              data-aos-duration="500">
              <div className="w-12 h-12 rounded-md bg-primary/20 flex items-center justify-center">
                <i className="i-solar-pallete-2-bold-duotone size-7 text-primary"></i>
              </div>
              <div className="hover-target img-1">
                <h4 className="text-base font-medium my-5">
                    RPL
                </h4>
              </div>
              <p className="text-default-400">
                Mengembangkan
                perangkat
                lunak
                inovatif
                dengan
                proses
                terbaik
                untuk
                menciptakan
                pengalaman
                digital
                yang
                bermakna
                dan
                bermanfaat
                bagi
                pengguna.
              </p>
            </div>

            <div
              className="p-6 hover:bg-white rounded-md hover:shadow-xl transition-all duration-500"
              data-aos="fade-up"
              data-aos-duration="700">
              <div className="w-12 h-12 rounded-md bg-orange-500/10 flex items-center justify-center">
                <i className="i-solar-album-bold-duotone size-7 text-orange-600"></i>
              </div>
              <div className="hover-target img-2">
                <h4 className="text-base font-medium my-5">
                    DKV
                </h4>
              </div>

              <p className="text-default-400">
                Menciptakan
                desain
                visual
                kreatif
                untuk
                berbagai
                kebutuhan
                bisnis,
                mulai
                dari
                branding
                hingga
                media
                digital
                yang
                menarik
                dan
                efektif.
              </p>
            </div>

            <div
              className="p-6 hover:bg-white rounded-md hover:shadow-xl transition-all duration-500"
              data-aos="fade-up"
              data-aos-duration="900">
              <div className="w-12 h-12 rounded-md bg-green-500/10 flex items-center justify-center">
                <span className="i-solar-settings-bold-duotone size-7 text-green-500"></span>
              </div>
              <div className="hover-target img-4">
                <h4 className="text-base font-medium my-5">
                    TKJ
                </h4>
              </div>

              <p className="text-default-400">
                Membangun
                dan
                mengelola
                infrastruktur
                jaringan
                yang
                handal
                serta
                menciptakan
                solusi
                IT
                yang
                efisien
                untuk
                kebutuhan
                bisnis
                dan
                industri.
              </p>
            </div>

            <div
              className="p-6 hover:bg-white rounded-md hover:shadow-xl transition-all duration-500"
              data-aos="fade-up"
              data-aos-duration="500">
              <div className="w-12 h-12 rounded-md bg-primary/20 flex items-center justify-center">
                <i className="i-solar-pallete-2-bold-duotone size-7 text-primary"></i>
              </div>
              <div className="hover-target img-3">
                <h4 className="text-base font-medium my-5">
                    OTKP
                </h4>
              </div>
              <p className="text-default-400">
                Meningkatkan
                efisiensi
                administrasi
                perkantoran
                dengan
                teknologi
                modern
                dan
                sistem
                manajemen
                yang
                profesional.
              </p>
            </div>

            <div
              className="p-6 hover:bg-white rounded-md hover:shadow-xl transition-all duration-500"
              data-aos="fade-up"
              data-aos-duration="700">
              <div className="w-12 h-12 rounded-md bg-orange-500/10 flex items-center justify-center">
                <i className="i-solar-album-bold-duotone size-7 text-orange-600"></i>
              </div>
              <div className="hover-target img-6">
                <h4 className="text-base font-medium my-5">
                    AKL
                </h4>
              </div>

              <p className="text-default-400">
                Menyediakan
                layanan
                akuntansi
                dan
                keuangan
                yang
                akurat
                dan
                profesional
                untuk
                mendukung
                pengelolaan
                bisnis
                yang
                lebih
                baik.
              </p>
            </div>

            <div
              className="p-6 hover:bg-white rounded-md hover:shadow-xl transition-all duration-500"
              data-aos="fade-up"
              data-aos-duration="900">
              <div className="w-12 h-12 rounded-md bg-green-500/10 flex items-center justify-center">
                <span className="i-solar-settings-bold-duotone size-7 text-green-500"></span>
              </div>
              <div className="hover-target img-7">
                <h4 className="text-base font-medium my-5">
                    BDP
                </h4>
              </div>

              <p className="text-default-400">
                Mengembangkan
                keterampilan
                bisnis
                online
                dan
                strategi
                pemasaran
                digital
                yang
                efektif
                untuk
                meningkatkan
                brand
                awareness
                dan
                penjualan.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 relative bg-orange-700/10">
        <div className="absolute top-0 inset-x-0 hidden sm:block">
          <img
            src="assets/images/shapes/white-wave.svg"
            alt="svg"
            className="w-full -scale-x-100"
          />
        </div>
        <div className="container relative">
          <span
            className="text-sm font-medium py-1 px-3 rounded-full text-primary bg-primary/10"
            data-aos="fade-right"
            data-aos-duration="700">
            Campany
          </span>

          <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 mt-5">
            <h1
              className="text-3xl font-semibold"
              data-aos="fade-right"
              data-aos-duration="800">
              500
              Company
              yang
              sudah
              bekerja
              sama
              dengan
              kami
            </h1>
            <p
              className="text-default-600"
              data-aos="fade-left"
              data-aos-duration="900">
              SMKN 1
              Kraksaan
              sudah
              memberangkatkan
              600
              siswa
              dan
              siswi
              di
              beberapa
              perusahaan
              terkenal,
              memberikan
              mereka
              pengalaman
              nyata
              di
              dunia
              industri.
              Melalui
              program
              PKL
              ini,
              siswa
              dapat
              mengembangkan
              keterampilan
              profesional,
              memahami
              lingkungan
              kerja
              sesungguhnya,
              serta
              membangun
              koneksi
              untuk
              masa
              depan
              karier
              mereka.
            </p>
          </div>

          <div
            className="flex flex-wrap items-center justify-around mt-12 gap-5 "
            data-aos="fade-up"
            data-aos-duration="1000">
            <img
              src="assets/images/brands/amazon.svg"
              className="w-28"
            />
            <img
              src="assets/images/brands/google.svg"
              className="w-28"
            />
            <img
              src="assets/images/brands/paypal.svg"
              className="w-28"
            />
            <img
              src="assets/images/brands/spotify.svg"
              className="w-28"
            />
            <img
              src="assets/images/brands/shopify.svg"
              className="w-28"
            />
          </div>
        </div>
        {/* <div className="absolute bottom-0 inset-x-0 hidden sm:block">
            <img src="assets/images/shapes/white-wave.svg" alt="svg" className="w-full scale-x-100 -scale-y-100" />
        </div> */}
      </section>

      <section className="py-20">
        <div className="container">
          <div className="text-center">
            <span className="text-sm font-medium py-1 px-3 rounded-full text-primary bg-primary/10">
              Blog
            </span>
            <h1 className="text-3xl font-medium my-3">
              Interesting
              Articles
            </h1>
          </div>

          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-12 gap-6">
            <div
              className="shadow-md rounded-md"
              data-aos="fade-up"
              data-aos-duration="500">
              <div className="relative">
                <div className="absolute end-4 top-3">
                  <span className="px-3 py-1 text-sm font-medium text-white rounded-md bg-black">
                    Design
                  </span>
                </div>
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
                <p className="text-sm">
                  11
                  March,
                  2020
                </p>
                <h4 className="text-lg hover:text-blue-700 font-semibold my-2">
                  <Link to="#">
                    Top
                    10
                    design
                    inspirations
                    to
                    follow
                  </Link>
                </h4>
                <p className="text-default-400 my-2">
                  Single
                  page
                  websites
                  are
                  taking
                  over
                  the
                  world,
                  and
                  thats
                  why
                  I
                  would
                  like
                  you
                  to
                  present
                  the
                  best
                  ...
                  <Link
                    to="#"
                    className="text-default-800 hover:text-blue-700">
                    Read
                    More
                  </Link>
                </p>
              </div>
            </div>

            <div
              className="shadow-md rounded-md"
              data-aos="fade-up"
              data-aos-duration="700">
              <div className="relative">
                <div className="absolute end-4 top-3">
                  <span className="px-3 py-1 text-sm font-medium text-white rounded-md bg-primary">
                    Development
                  </span>
                </div>
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
                <p className="text-sm">
                  12
                  March,
                  2020
                </p>
                <h4 className="text-lg hover:text-blue-700 font-semibold my-2">
                  <Link to="#">
                    Top
                    10
                    design
                    inspirations
                    to
                    follow
                  </Link>
                </h4>
                <p className="text-default-400 my-2">
                  We
                  have
                  shortlisted
                  the
                  best
                  WordPress
                  themes
                  for
                  alcohol
                  production,
                  distribution,
                  and
                  selling
                  to...
                  <Link
                    to="#"
                    className="text-default-800 hover:text-blue-700">
                    Read
                    More
                  </Link>
                </p>
              </div>
            </div>

            <div
              className="shadow-md rounded-md"
              data-aos="fade-up"
              data-aos-duration="900">
              <div className="relative">
                <div className="absolute end-4 top-3">
                  <span className="px-3 py-1 text-sm font-medium text-white rounded-md bg-black">
                    Design
                  </span>
                </div>
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
                <p className="text-sm">
                  13
                  March,
                  2020
                </p>
                <h4 className="text-lg hover:text-blue-700 font-semibold my-2">
                  <Link to="#">
                    Top
                    10
                    design
                    inspirations
                    to
                    follow
                  </Link>
                </h4>
                <p className="text-default-400 my-2">
                  The
                  following
                  Italian
                  restaurant
                  WordPress
                  themes
                  come
                  with
                  the
                  powerful
                  drag-n-drop...
                  <a
                    href="#"
                    className="text-default-800 hover:text-blue-700">
                    Read
                    More
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
