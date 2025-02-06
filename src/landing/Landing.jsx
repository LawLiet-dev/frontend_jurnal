import React from 'react'
import HeaderLanding from '../components/HeaderLanding'

function Landing() {
  return (
    <div>

    <HeaderLanding />

    <section className="relative pt-44 pb-40" id="home">
            <div className="container">

                <div className="grid lg:grid-cols-7 grid-cols-1 gap-16 items-center">
                    <div className="lg:col-span-3 order-2 lg:order-1 text-center sm:text-start">
                        <h1 className="text-3xl/tight sm:text-4xl/tight lg:text-5xl/tight font-semibold mb-7"> Halaman PKL SMK Negeri 1 Kraksaan
                        </h1>
                        <p className="text-default-500">Halaman ini mendeskripsikan gambaran umum mengenai Praktek Kerja Lapangan (PKL)</p>
                        <div className="flex gap-4 mt-16">
                            <button className="flex items-center">
                                <a href="#tentang"
                                    className="border border-primary text-primary rounded-md hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/30 focus:shadow-none focus:outline focus:outline-primary/40 transition-all duration-500 py-2 px-4">Lihat</a>
                            </button>
                        </div>
                    </div>

                    <div className="lg:col-span-4 order-1 lg:order-2" data-aos="fade-left" data-aos-duration="1000">
                        <div>
                            <img src="assets/images/pkl.jpg" alt="startup1-img" data-aos="fade-left"
                                data-aos-duration="1000" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

    <section className="xl:py-24 py-16 overflow-x-hidden" id="tentang">
    <div className="container">
        <div className="text-center" data-aos="fade-up">
            <h1 className="text-4xl my-4">Tentang PKL</h1>
            <p className="text-default-500 mb-14">Pelajari lebih lanjut tentang PKL (Praktek Kerja Lapangan)</p>
        </div>

        <div>
            <div className="grid lg:grid-cols-2 grid-cols-1 2xl:gap-24 gap-10 items-center">
                <div className="order-1 lg:order-1" data-aos="fade-right" data-aos-duration="1000">
                    <img src="assets/images/pkl.jpg" className="rounded-lg shadow-xl transition-transform transform hover:scale-105 duration-500" alt="PKL Image" />
                </div>
                <div className="order-2 lg:order-2">
                    <h1 className="text-3xl font-medium mt-3 mb-4">Pengertian</h1>
                    <p className="text-default-500">PKL (Praktek Kerja Lapangan) adalah kegiatan yang dilakukan oleh siswa/siswi untuk mendapatkan pengalaman kerja di dunia nyata, sesuai dengan bidang studi mereka. PKL biasanya berlangsung di perusahaan, instansi, atau organisasi yang relevan dengan jurusan yang diambil.</p>
                </div>
            </div>
        </div>

        <div>
            <div className="grid lg:grid-cols-2 grid-cols-1 2xl:gap-24 gap-10 items-center">
                <div className="order-2 lg:order-1">
                    <h1 className="text-3xl font-medium mt-3 mb-4">Kegiatan</h1>
                    <p className="text-default-500">PKL akan berlangsung selama 6 bulan, di mana siswa diharuskan mengikuti pelatihan kerja di tempat yang telah dipilih sesuai dengan jurusan masing-masing. Selama program ini, siswa akan membuat laporan dalam bentuk jurnal yang nantinya menjadi salah satu syarat untuk kelulusan.</p>
                </div>

                <div className="order-1 lg:order-2" data-aos="fade-left" data-aos-duration="1000">
                    <img src="assets/images/pkl.jpg" className="rounded-lg shadow-xl transition-transform transform hover:scale-105 duration-500" alt="PKL Image" />
                </div>
            </div>
        </div>

        <div>
            <div className="grid lg:grid-cols-2 grid-cols-1 2xl:gap-24 gap-10 items-center">
                <div className="order-1 lg:order-1" data-aos="fade-right" data-aos-duration="1000">
                    <img src="assets/images/pkl.jpg" className="rounded-lg shadow-xl transition-transform transform hover:scale-105 duration-500" alt="PKL Image" />
                </div>
                <div className="order-2 lg:order-2">
                    <h1 className="text-3xl font-medium mt-3 mb-4">Tujuan</h1>
                    <p className="text-default-500">Menerapkan teori yang dipelajari di sekolah dalam situasi kerja nyata.</p>
                    <p className="text-default-500">Mengembangkan keterampilan praktis yang tidak didapatkan di ruang kelas.</p>
                    <p className="text-default-500">Menambah pengalaman kerja yang bermanfaat untuk memasuki dunia profesional.</p>
                    <p className="text-default-500">Membangun jaringan profesional yang bisa berguna di masa depan.</p>
                </div>
            </div>
        </div>

    </div>
    </section>

    <section className="py-20" id="company">
        <div className="container">
            <div className="text-center" data-aos="fade-up">
                <h2 className="md:text-3xl text-xl font-semibold my-5">Company</h2>
                <p className="text-default-500">Telah berkolaborasi dengan beberapa perusahaan berikut</p>
            </div>

            <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-6 mt-16">
                <div className="shadow-lg rounded" data-aos="fade-up" data-aos-duration="600">
                    <img src="assets/images/photos/8.jpg" className="rounded-t" />
                    <div className="p-5">
                        <h4 className="text-lg font-medium text-primary mb-2">Hummatech</h4>
                        <p className="text-sm text-default-500">Access to shared workspace and conference rooms. Most
                            suitable to individual looking for peoples company.</p>
                    </div>
                    <div className="p-5 pt-0">
                        <p className="flex items-center gap-3">
                            <i className="i-tabler-user size-5"></i>
                            <a href="#" className="text-sm font-medium text-default-500">1-5 Shared Spaces</a>
                        </p>
                    </div>
                </div>

                <div className="shadow-lg rounded" data-aos="fade-up" data-aos-duration="1000">
                    <img src="assets/images/photos/5.jpg" className="rounded-t" />
                    <div className="p-5">
                        <h4 className="text-lg font-medium text-primary mb-2">Estoh</h4>
                        <p className="text-sm text-default-500">A dedicated desk space for you, with 24/7 access to premium
                            amenities and conference rooms.</p>
                    </div>
                    <div className="p-5 pt-0">
                        <p className="flex items-center gap-3">
                            <i className="i-tabler-user size-5"></i>
                            <a href="#" className="text-sm font-medium text-default-500">1-5 Dedicated Spaces</a>
                        </p>
                    </div>
                </div>

                <div className="shadow-lg rounded" data-aos="fade-up" data-aos-duration="1400">
                    <img src="assets/images/photos/4.jpg" className="rounded-t" />
                    <div className="p-5">
                        <h4 className="text-lg font-medium text-primary mb-2">PT Catur</h4>
                        <p className="text-sm text-default-500"> An excluisive venue designed specifically for events of all
                            kinds, from conferences to celebrations.</p>
                    </div>
                    <div className="p-5 pt-0">
                        <p className="flex items-center gap-3">
                            <i className="i-tabler-users size-5"></i>
                            <a href="#" className="text-sm font-medium text-default-500">Upto 200 People</a>
                        </p>
                    </div>
                </div>

                <div className="shadow-lg rounded" data-aos="fade-up" data-aos-duration="600">
                    <img src="assets/images/photos/8.jpg" className="rounded-t" />
                    <div className="p-5">
                        <h4 className="text-lg font-medium text-primary mb-2">Onlinekan</h4>
                        <p className="text-sm text-default-500">Access to shared workspace and conference rooms. Most
                            suitable to individual looking for peoples company.</p>
                    </div>
                    <div className="p-5 pt-0">
                        <p className="flex items-center gap-3">
                            <i className="i-tabler-user size-5"></i>
                            <a href="#" className="text-sm font-medium text-default-500">1-5 Shared Spaces</a>
                        </p>
                    </div>
                </div>

                <div className="shadow-lg rounded" data-aos="fade-up" data-aos-duration="1000">
                    <img src="assets/images/photos/5.jpg" className="rounded-t" />
                    <div className="p-5">
                        <h4 className="text-lg font-medium text-primary mb-2">Diskominfo</h4>
                        <p className="text-sm text-default-500">A dedicated desk space for you, with 24/7 access to premium
                            amenities and conference rooms.</p>
                    </div>
                    <div className="p-5 pt-0">
                        <p className="flex items-center gap-3">
                            <i className="i-tabler-user size-5"></i>
                            <a href="#" className="text-sm font-medium text-default-500">1-5 Dedicated Spaces</a>
                        </p>
                    </div>
                </div>

                <div className="shadow-lg rounded" data-aos="fade-up" data-aos-duration="1400">
                    <img src="assets/images/photos/4.jpg" className="rounded-t" />
                    <div className="p-5">
                        <h4 className="text-lg font-medium text-primary mb-2">PT Gama</h4>
                        <p className="text-sm text-default-500"> An excluisive venue designed specifically for events of all
                            kinds, from conferences to celebrations.</p>
                    </div>
                    <div className="p-5 pt-0">
                        <p className="flex items-center gap-3">
                            <i className="i-tabler-users size-5"></i>
                            <a href="#" className="text-sm font-medium text-default-500">Upto 200 People</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="py-20" id="jurnal">
        <div className="container">
            <div className="text-center" data-aos="fade-up">
                <h2 className="md:text-3xl text-xl font-semibold my-5">Jurnal</h2>
                <p className="text-default-500">Tempat pengisian jurnal PKL</p>
            </div>
            <div className="grid lg:grid-cols-7 grid-cols-1 gap-16 items-center mt-20">
                    <div className="lg:col-span-3 order-2 lg:order-1 text-center sm:text-start">
                        <h1 className="text-3xl/tight sm:text-4xl/tight lg:text-5xl/tight font-semibold mb-7">Masuk masuk ke halaman
                            <span
                                className="relative z-0 after:bg-yellow-200 after:-z-10 after:absolute after:h-6 after:w-full after:bottom-0 after:end-0"> jurnal</span>
                        </h1>
                        <p className="text-default-500">Memudahkan siswa dalam mengisi jurnal saat PKL, dan guru dalam memonitoring siswaL</p>
                        <div className="flex gap-4 mt-16">
                            <button className="flex items-center">
                                <a href="login"
                                    className="border border-primary text-primary rounded-md hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/30 focus:shadow-none focus:outline focus:outline-primary/40 transition-all duration-500 py-2 px-4">Login untuk masuk</a>
                            </button>
                        </div>
                    </div>

                    <div className="lg:col-span-4 order-1 lg:order-2" data-aos="fade-left" data-aos-duration="1000">
                        <div>
                            <img src="assets/images/marketing.png" alt="startup1-img" data-aos="fade-left"
                                data-aos-duration="1000" />
                        </div>
                    </div>
                </div>
        </div>
    </section>

    <section className="lg:py-20 py-10" id="contact">
        <div className="container">
        <div className="text-center" data-aos="fade-up">
                <h2 className="md:text-3xl text-xl font-semibold my-5">Contact</h2>
                <p className="text-default-500">Info kontak dan lokasi</p>
            </div>
            <div className="lg:flex align-items-center">
                <div className="lg:w-1/2">
                    <div className="mb-6 relative bg-clip-border rounded-[0.1875rem]">
                        <div className="py-12">

                            <form>
                                <div className="w-full mt-5">
                                    <div className="mb-5">
                                        <span className="flex items-center justify-center size-12 bg-primary/20 rounded-lg relative shrink-0">
                                            <i className="i-solar-letter-opened-bold-duotone size-7 text-primary"></i>
                                        </span>
                                        <div className="grow">
                                            <h5 className="text-base text-default-700">Email</h5>
                                            <a href="#" className="text-default-500 my-1">admin@smkn1kraksan.sch.id</a>
                                        </div>
                                    </div>
                                    <div className="mb-5 mt-20">
                                        <span className="flex items-center justify-center size-12 bg-orange-500/20 rounded-lg relative shrink-0">
                                            <i className="i-solar-incoming-call-rounded-bold-duotone size-7 text-orange-500"></i>
                                        </span>
                                        <div className="grow">
                                            <h5 className="text-base text-default-700">Phone</h5>
                                            <a href="#" className="text-default-500 my-1">0335841306</a>
                                        </div>
                                    </div>
                                    <div className="mb-5 mt-20">
                                        <span className="flex items-center justify-center size-12 bg-teal-500/20 rounded-lg relative shrink-0">
                                            <i className="i-solar-map-point-bold-duotone size-7 text-teal-500"></i>
                                        </span>
                                        <div className="grow">
                                            <h5 className="text-base text-default-700">Address</h5>
                                            <a href="#" className="text-default-500 my-1">Jl. Tenis No.10, Patokan, Kec. Kraksaan, Kabupaten Probolinggo, Jawa Timur 67282</a>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="lg:w-5/12 ms-auto overflow-x-hidden">
                    <div className="h-[520px]">
                        <div id="marker-map5" className="h-100 mt-20" data-toggle="map"
                            data-map='{"mapCenter": [40.749179, -73.989276], "zoom": 12, "useTextIcon": false, "interactive": true, "geojson": "/assets/sample-listing-geojson.json" }'>
                            <iframe className="w-full h-[500px]"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4154.037239541232!2d113.41439229999999!3d-7.759620899999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7005bd0eb4db9%3A0x2ee02304e974d908!2sSMK%20Negeri%201%20Kraksaan!5e1!3m2!1sid!2sid!4v1738485533594!5m2!1sid!2sid"
                                frameBorder="0"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    </div>
  )
}

export default Landing