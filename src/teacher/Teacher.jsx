import React from 'react'
import HeaderTeacher from './components/HeaderTeacher'

function Teacher() {
  return (
    <div>
      <HeaderTeacher />
      {/* desktop and tablet*/}
      {/* <div className="hidden md:block">
        <div className="bg-white flex justify-center items-center h-screen">
          <div className="container mx-auto flex justify-between w-11/12">
          <div className="collaborator bg-white rounded-lg shadow-lg p-6 w-1/3">
            <h2 className="text-lg font-semibold mb-6">
            Collaborator
            </h2>
            <div className="collaborator-item flex items-center mb-4">
            <img alt="Profile picture of Sarah" className="rounded-full w-10 h-10 mr-4" height="40" src="https://storage.googleapis.com/a1aa/image/LWT4uan2loTIlquRVjPMqPL5pQblgZuCVsp0vE-7a5E.jpg" width="40"/>
            <div className="info flex-grow">
              <p className="name font-bold">
              Sarah
              </p>
              <p className="subject text-gray-500">
              Math
              </p>
            </div>
            <div className="arrow text-gray-500">
              <i className="fas fa-chevron-right">
              </i>
            </div>
            </div>
            <div className="collaborator-item flex items-center mb-4">
            <img alt="Profile picture of Sarah" className="rounded-full w-10 h-10 mr-4" height="40" src="https://storage.googleapis.com/a1aa/image/LWT4uan2loTIlquRVjPMqPL5pQblgZuCVsp0vE-7a5E.jpg" width="40"/>
            <div className="info flex-grow">
              <p className="name font-bold">
              Sarah
              </p>
              <p className="subject text-gray-500">
              Math
              </p>
            </div>
            <div className="arrow text-gray-500">
              <i className="fas fa-chevron-right">
              </i>
            </div>
            </div>
            <div className="collaborator-item flex items-center mb-4">
            <img alt="Profile picture of Farel" className="rounded-full w-10 h-10 mr-4" height="40" src="https://storage.googleapis.com/a1aa/image/eylwEHJtY8EtC-bDOwZhPPQ4eaFwEjFTU_0neYfFeN8.jpg" width="40"/>
            <div className="info flex-grow">
              <p className="name font-bold">
              Farel
              </p>
              <p className="subject text-gray-500">
              Science
              </p>
            </div>
            <div className="arrow text-gray-500">
              <i className="fas fa-chevron-right">
              </i>
            </div>
            </div>
          </div>
          <div className="statistik-jurnal bg-blue-500 text-white rounded-lg p-6 w-2/3">
            <h2 className="text-lg font-semibold mb-6">
            Statistik Jurnal
            </h2>
            <div className="bg-white text-blue-500 rounded-lg p-6">
            <div className="section mb-6">
              <p className="text-black">
              Mengisi Jurnal
              </p>
              <div className="count bg-blue-100 text-blue-500 rounded px-3 py-1 inline-block mt-2">
              5X
              </div>
              <button className="detail-btn bg-blue-500 text-white rounded px-3 py-1 ml-4">
              Detail
              <i className="fas fa-chevron-right ml-1">
              </i>
              </button>
            </div>
            <div className="section mb-6">
              <p className="text-black">
              Tidak mengisi Jurnal
              </p>
              <div className="count bg-blue-100 text-blue-500 rounded px-3 py-1 inline-block mt-2">
              10X
              </div>
              <button className="detail-btn bg-blue-500 text-white rounded px-3 py-1 ml-4">
              Detail
              <i className="fas fa-chevron-right ml-1">
              </i>
              </button>
            </div>
            <div className="section students flex flex-wrap">
              <div className="student-item flex items-center mb-4 w-1/2">
              <img alt="Profile picture of Farel" className="rounded-full w-10 h-10 mr-4" height="40" src="https://storage.googleapis.com/a1aa/image/eylwEHJtY8EtC-bDOwZhPPQ4eaFwEjFTU_0neYfFeN8.jpg" width="40"/>
              <div className="info flex-grow">
                <p className="name font-bold text-black">
                Farel
                </p>
                <p className="subject text-gray-500">
                Math
                </p>
              </div>
              <button className="detail-btn bg-blue-500 text-white rounded px-3 py-1">
                Detail
                <i className="fas fa-chevron-right ml-1">
                </i>
              </button>
              </div>
              <div className="student-item flex items-center mb-4 w-1/2">
              <img alt="Profile picture of Sarah" className="rounded-full w-10 h-10 mr-4" height="40" src="https://storage.googleapis.com/a1aa/image/LWT4uan2loTIlquRVjPMqPL5pQblgZuCVsp0vE-7a5E.jpg" width="40"/>
              <div className="info flex-grow">
                <p className="name font-bold text-black">
                Sarah
                </p>
                <p className="subject text-gray-500">
                Math
                </p>
              </div>
              <button className="detail-btn bg-blue-500 text-white rounded px-3 py-1">
                Detail
                <i className="fas fa-chevron-right ml-1">
                </i>
              </button>
              </div>
              <div className="student-item flex items-center mb-4 w-1/2">
              <img alt="Profile picture of Sarah" className="rounded-full w-10 h-10 mr-4" height="40" src="https://storage.googleapis.com/a1aa/image/LWT4uan2loTIlquRVjPMqPL5pQblgZuCVsp0vE-7a5E.jpg" width="40"/>
              <div className="info flex-grow">
                <p className="name font-bold text-black">
                Sarah
                </p>
                <p className="subject text-gray-500">
                Math
                </p>
              </div>
              <button className="detail-btn bg-blue-500 text-white rounded px-3 py-1">
                Detail
                <i className="fas fa-chevron-right ml-1">
                </i>
              </button>
              </div>
              <div className="student-item flex items-center mb-4 w-1/2">
              <img alt="Profile picture of Sarah" className="rounded-full w-10 h-10 mr-4" height="40" src="https://storage.googleapis.com/a1aa/image/LWT4uan2loTIlquRVjPMqPL5pQblgZuCVsp0vE-7a5E.jpg" width="40"/>
              <div className="info flex-grow">
                <p className="name font-bold text-black">
                Sarah
                </p>
                <p className="subject text-gray-500">
                Math
                </p>
              </div>
              <button className="detail-btn bg-blue-500 text-white rounded px-3 py-1">
                Detail
                <i className="fas fa-chevron-right ml-1">
                </i>
              </button>
              </div>
              <div className="student-item flex items-center mb-4 w-1/2">
              <img alt="Profile picture of Sarah" className="rounded-full w-10 h-10 mr-4" height="40" src="https://storage.googleapis.com/a1aa/image/LWT4uan2loTIlquRVjPMqPL5pQblgZuCVsp0vE-7a5E.jpg" width="40"/>
              <div className="info flex-grow">
                <p className="name font-bold text-black">
                Sarah
                </p>
                <p className="subject text-gray-500">
                Math
                </p>
              </div>
              <button className="detail-btn bg-blue-500 text-white rounded px-3 py-1">
                Detail
                <i className="fas fa-chevron-right ml-1">
                </i>
              </button>
              </div>
              <div className="student-item flex items-center mb-4 w-1/2">
              <img alt="Profile picture of Sarah" className="rounded-full w-10 h-10 mr-4" height="40" src="https://storage.googleapis.com/a1aa/image/LWT4uan2loTIlquRVjPMqPL5pQblgZuCVsp0vE-7a5E.jpg" width="40"/>
              <div className="info flex-grow">
                <p className="name font-bold text-black">
                Sarah
                </p>
                <p className="subject text-gray-500">
                Math
                </p>
              </div>
              <button className="detail-btn bg-blue-500 text-white rounded px-3 py-1">
                Detail
                <i className="fas fa-chevron-right ml-1">
                </i>
              </button>
              </div>
            </div>
            </div>
          </div>
          </div>
        </div>
      </div> */}

      <div className="hidden md:block">
        <div className="bg-white flex justify-center items-start min-h-screen py-4">
          <div className="container mx-auto flex justify-between w-11/12">
          <div className="collaborator bg-white rounded-lg shadow-lg p-4 w-1/3">
            <h2 className="text-lg font-semibold mb-4">
            Collaborator
            </h2>
            <div className="collaborator-item flex items-center mb-2">
            <img alt="Profile picture of Sarah" className="rounded-full w-10 h-10 mr-2" height="40" src="https://storage.googleapis.com/a1aa/image/LWT4uan2loTIlquRVjPMqPL5pQblgZuCVsp0vE-7a5E.jpg" width="40"/>
            <div className="info flex-grow">
              <p className="name font-bold">Sarah</p>
              <p className="subject text-gray-500">Math</p>
            </div>
            <div className="arrow text-gray-500">
              <i className="fas fa-chevron-right"></i>
            </div>
            </div>
            <div className="collaborator-item flex items-center mb-2">
            <img alt="Profile picture of Sarah" className="rounded-full w-10 h-10 mr-2" height="40" src="https://storage.googleapis.com/a1aa/image/LWT4uan2loTIlquRVjPMqPL5pQblgZuCVsp0vE-7a5E.jpg" width="40"/>
            <div className="info flex-grow">
              <p className="name font-bold">Sarah</p>
              <p className="subject text-gray-500">Math</p>
            </div>
            <div className="arrow text-gray-500">
              <i className="fas fa-chevron-right"></i>
            </div>
            </div>
            <div className="collaborator-item flex items-center mb-2">
            <img alt="Profile picture of Sarah" className="rounded-full w-10 h-10 mr-2" height="40" src="https://storage.googleapis.com/a1aa/image/LWT4uan2loTIlquRVjPMqPL5pQblgZuCVsp0vE-7a5E.jpg" width="40"/>
            <div className="info flex-grow">
              <p className="name font-bold">Sarah</p>
              <p className="subject text-gray-500">Math</p>
            </div>
            <div className="arrow text-gray-500">
              <i className="fas fa-chevron-right"></i>
            </div>
            </div>
            <div className="collaborator-item flex items-center mb-2">
            <img alt="Profile picture of Sarah" className="rounded-full w-10 h-10 mr-2" height="40" src="https://storage.googleapis.com/a1aa/image/LWT4uan2loTIlquRVjPMqPL5pQblgZuCVsp0vE-7a5E.jpg" width="40"/>
            <div className="info flex-grow">
              <p className="name font-bold">Sarah</p>
              <p className="subject text-gray-500">Math</p>
            </div>
            <div className="arrow text-gray-500">
              <i className="fas fa-chevron-right"></i>
            </div>
            </div>
          </div>
          <div className="statistik-jurnal bg-blue-500 text-white rounded-lg p-4 w-2/3">
            <h2 className="text-lg font-semibold mb-4">Statistik Jurnal</h2>
            <div className="bg-white text-blue-500 rounded-lg p-4">
            <div className="section mb-4">
              <p className="text-black">Mengisi Jurnal</p>
              <div className="count bg-blue-100 text-blue-500 rounded px-2 py-1 inline-block mt-2">5X</div>
              <button className="detail-btn bg-blue-500 text-white rounded px-2 py-1 ml-2">Detail<i className="fas fa-chevron-right ml-1"></i></button>
            </div>
            <div className="section mb-4">
              <p className="text-black">Tidak mengisi Jurnal</p>
              <div className="count bg-blue-100 text-blue-500 rounded px-2 py-1 inline-block mt-2">10X</div>
              <button className="detail-btn bg-blue-500 text-white rounded px-2 py-1 ml-2">Detail<i className="fas fa-chevron-right ml-1"></i></button>
            </div>
            <div className="section students flex flex-wrap">
              <div className="student-item flex items-center mb-4 w-1/2">
              <img alt="Profile picture of Farel" className="rounded-full w-10 h-10 mr-4" height="40" src="https://storage.googleapis.com/a1aa/image/eylwEHJtY8EtC-bDOwZhPPQ4eaFwEjFTU_0neYfFeN8.jpg" width="40"/>
              <div className="info flex-grow">
                <p className="name font-bold text-black">
                Farel
                </p>
                <p className="subject text-gray-500">
                Math
                </p>
              </div>
              <button className="detail-btn bg-blue-500 text-white rounded px-3 py-1">
                Detail
                <i className="fas fa-chevron-right ml-1">
                </i>
              </button>
              </div>
              <div className="student-item flex items-center mb-4 w-1/2">
              <img alt="Profile picture of Sarah" className="rounded-full w-10 h-10 mr-4" height="40" src="https://storage.googleapis.com/a1aa/image/LWT4uan2loTIlquRVjPMqPL5pQblgZuCVsp0vE-7a5E.jpg" width="40"/>
              <div className="info flex-grow">
                <p className="name font-bold text-black">
                Sarah
                </p>
                <p className="subject text-gray-500">
                Math
                </p>
              </div>
              <button className="detail-btn bg-blue-500 text-white rounded px-3 py-1">
                Detail
                <i className="fas fa-chevron-right ml-1">
                </i>
              </button>
              </div>
              <div className="student-item flex items-center mb-4 w-1/2">
              <img alt="Profile picture of Sarah" className="rounded-full w-10 h-10 mr-4" height="40" src="https://storage.googleapis.com/a1aa/image/LWT4uan2loTIlquRVjPMqPL5pQblgZuCVsp0vE-7a5E.jpg" width="40"/>
              <div className="info flex-grow">
                <p className="name font-bold text-black">
                Sarah
                </p>
                <p className="subject text-gray-500">
                Math
                </p>
              </div>
              <button className="detail-btn bg-blue-500 text-white rounded px-3 py-1">
                Detail
                <i className="fas fa-chevron-right ml-1">
                </i>
              </button>
              </div>
              <div className="student-item flex items-center mb-4 w-1/2">
              <img alt="Profile picture of Sarah" className="rounded-full w-10 h-10 mr-4" height="40" src="https://storage.googleapis.com/a1aa/image/LWT4uan2loTIlquRVjPMqPL5pQblgZuCVsp0vE-7a5E.jpg" width="40"/>
              <div className="info flex-grow">
                <p className="name font-bold text-black">
                Sarah
                </p>
                <p className="subject text-gray-500">
                Math
                </p>
              </div>
              <button className="detail-btn bg-blue-500 text-white rounded px-3 py-1">
                Detail
                <i className="fas fa-chevron-right ml-1">
                </i>
              </button>
              </div>
              <div className="student-item flex items-center mb-4 w-1/2">
              <img alt="Profile picture of Sarah" className="rounded-full w-10 h-10 mr-4" height="40" src="https://storage.googleapis.com/a1aa/image/LWT4uan2loTIlquRVjPMqPL5pQblgZuCVsp0vE-7a5E.jpg" width="40"/>
              <div className="info flex-grow">
                <p className="name font-bold text-black">
                Sarah
                </p>
                <p className="subject text-gray-500">
                Math
                </p>
              </div>
              <button className="detail-btn bg-blue-500 text-white rounded px-3 py-1">
                Detail
                <i className="fas fa-chevron-right ml-1">
                </i>
              </button>
              </div>
              <div className="student-item flex items-center mb-4 w-1/2">
              <img alt="Profile picture of Sarah" className="rounded-full w-10 h-10 mr-4" height="40" src="https://storage.googleapis.com/a1aa/image/LWT4uan2loTIlquRVjPMqPL5pQblgZuCVsp0vE-7a5E.jpg" width="40"/>
              <div className="info flex-grow">
                <p className="name font-bold text-black">
                Sarah
                </p>
                <p className="subject text-gray-500">
                Math
                </p>
              </div>
              <button className="detail-btn bg-blue-500 text-white rounded px-3 py-1">
                Detail
                <i className="fas fa-chevron-right ml-1">
                </i>
              </button>
              </div>
            </div>
            </div>
          </div>
          </div>
        </div>
      </div>

      {/* smartphone*/}
      <div className="block md:hidden">
      <body class="bg-white flex justify-center items-center min-h-screen">
        <div class="container mx-auto flex flex-col lg:flex-row justify-between w-11/12">
        <div class="collaborator bg-white rounded-lg shadow-lg p-6 w-full lg:w-1/3 mb-6 lg:mb-0">
          <h2 class="text-lg font-semibold mb-6">
          Collaborator
          </h2>
          <div class="collaborator-item flex items-center mb-4">
          <img alt="Profile picture of Sarah" class="rounded-full w-10 h-10 mr-4" height="40" src="https://storage.googleapis.com/a1aa/image/oWGKq31eUDSL5EDUBA-Khj3p6a6p_Il7fkLPU9YteC0.jpg" width="40"/>
          <div class="info flex-grow">
            <p class="name font-bold">
            Sarah
            </p>
            <p class="subject text-gray-500">
            Math
            </p>
          </div>
          <div class="arrow text-gray-500">
            <i class="fas fa-chevron-right">
            </i>
          </div>
          </div>
          <div class="collaborator-item flex items-center mb-4">
          <img alt="Profile picture of Sarah" class="rounded-full w-10 h-10 mr-4" height="40" src="https://storage.googleapis.com/a1aa/image/oWGKq31eUDSL5EDUBA-Khj3p6a6p_Il7fkLPU9YteC0.jpg" width="40"/>
          <div class="info flex-grow">
            <p class="name font-bold">
            Sarah
            </p>
            <p class="subject text-gray-500">
            Math
            </p>
          </div>
          <div class="arrow text-gray-500">
            <i class="fas fa-chevron-right">
            </i>
          </div>
          </div>
          <div class="collaborator-item flex items-center mb-4">
          <img alt="Profile picture of Farel" class="rounded-full w-10 h-10 mr-4" height="40" src="https://storage.googleapis.com/a1aa/image/xOOiH0Sra1SYGzMOIEJ5mY1-cCIUo_Ws3SFjVhEjlWI.jpg" width="40"/>
          <div class="info flex-grow">
            <p class="name font-bold">
            Farel
            </p>
            <p class="subject text-gray-500">
            Science
            </p>
          </div>
          <div class="arrow text-gray-500">
            <i class="fas fa-chevron-right">
            </i>
          </div>
          </div>
        </div>
        <div class="statistik-jurnal bg-blue-500 text-white rounded-lg p-6 w-full lg:w-2/3">
          <h2 class="text-lg font-semibold mb-6">
          Statistik Jurnal
          </h2>
          <div class="bg-white text-blue-500 rounded-lg p-6">
          <div class="section mb-6">
            <p class="text-black">
            Mengisi Jurnal
            </p>
            <div class="count bg-blue-100 text-blue-500 rounded px-3 py-1 inline-block mt-2">
            5X
            </div>
            <button class="detail-btn bg-blue-500 text-white rounded px-3 py-1 ml-4">
            Detail
            <i class="fas fa-chevron-right ml-1">
            </i>
            </button>
          </div>
          <div class="section mb-6">
            <p class="text-black">
            Tidak mengisi Jurnal
            </p>
            <div class="count bg-blue-100 text-blue-500 rounded px-3 py-1 inline-block mt-2">
            10X
            </div>
            <button class="detail-btn bg-blue-500 text-white rounded px-3 py-1 ml-4">
            Detail
            <i class="fas fa-chevron-right ml-1">
            </i>
            </button>
          </div>
          <div class="section students flex flex-wrap">
            <div class="student-item flex items-center mb-4 w-full md:w-1/2">
            <img alt="Profile picture of Farel" class="rounded-full w-10 h-10 mr-4" height="40" src="https://storage.googleapis.com/a1aa/image/xOOiH0Sra1SYGzMOIEJ5mY1-cCIUo_Ws3SFjVhEjlWI.jpg" width="40"/>
            <div class="info flex-grow">
              <p class="name font-bold text-black">
              Farel
              </p>
              <p class="subject text-gray-500">
              Math
              </p>
            </div>
            <button class="detail-btn bg-blue-500 text-white rounded px-3 py-1">
              Detail
              <i class="fas fa-chevron-right ml-1">
              </i>
            </button>
            </div>
            <div class="student-item flex items-center mb-4 w-full md:w-1/2">
            <img alt="Profile picture of Sarah" class="rounded-full w-10 h-10 mr-4" height="40" src="https://storage.googleapis.com/a1aa/image/oWGKq31eUDSL5EDUBA-Khj3p6a6p_Il7fkLPU9YteC0.jpg" width="40"/>
            <div class="info flex-grow">
              <p class="name font-bold text-black">
              Sarah
              </p>
              <p class="subject text-gray-500">
              Math
              </p>
            </div>
            <button class="detail-btn bg-blue-500 text-white rounded px-3 py-1">
              Detail
              <i class="fas fa-chevron-right ml-1">
              </i>
            </button>
            </div>
            <div class="student-item flex items-center mb-4 w-full md:w-1/2">
            <img alt="Profile picture of Sarah" class="rounded-full w-10 h-10 mr-4" height="40" src="https://storage.googleapis.com/a1aa/image/oWGKq31eUDSL5EDUBA-Khj3p6a6p_Il7fkLPU9YteC0.jpg" width="40"/>
            <div class="info flex-grow">
              <p class="name font-bold text-black">
              Sarah
              </p>
              <p class="subject text-gray-500">
              Math
              </p>
            </div>
            <button class="detail-btn bg-blue-500 text-white rounded px-3 py-1">
              Detail
              <i class="fas fa-chevron-right ml-1">
              </i>
            </button>
            </div>
            <div class="student-item flex items-center mb-4 w-full md:w-1/2">
            <img alt="Profile picture of Sarah" class="rounded-full w-10 h-10 mr-4" height="40" src="https://storage.googleapis.com/a1aa/image/oWGKq31eUDSL5EDUBA-Khj3p6a6p_Il7fkLPU9YteC0.jpg" width="40"/>
            <div class="info flex-grow">
              <p class="name font-bold text-black">
              Sarah
              </p>
              <p class="subject text-gray-500">
              Math
              </p>
            </div>
            <button class="detail-btn bg-blue-500 text-white rounded px-3 py-1">
              Detail
              <i class="fas fa-chevron-right ml-1">
              </i>
            </button>
            </div>
            <div class="student-item flex items-center mb-4 w-full md:w-1/2">
            <img alt="Profile picture of Sarah" class="rounded-full w-10 h-10 mr-4" height="40" src="https://storage.googleapis.com/a1aa/image/oWGKq31eUDSL5EDUBA-Khj3p6a6p_Il7fkLPU9YteC0.jpg" width="40"/>
            <div class="info flex-grow">
              <p class="name font-bold text-black">
              Sarah
              </p>
              <p class="subject text-gray-500">
              Math
              </p>
            </div>
            <button class="detail-btn bg-blue-500 text-white rounded px-3 py-1">
              Detail
              <i class="fas fa-chevron-right ml-1">
              </i>
            </button>
            </div>
            <div class="student-item flex items-center mb-4 w-full md:w-1/2">
            <img alt="Profile picture of Sarah" class="rounded-full w-10 h-10 mr-4" height="40" src="https://storage.googleapis.com/a1aa/image/oWGKq31eUDSL5EDUBA-Khj3p6a6p_Il7fkLPU9YteC0.jpg" width="40"/>
            <div class="info flex-grow">
              <p class="name font-bold text-black">
              Sarah
              </p>
              <p class="subject text-gray-500">
              Math
              </p>
            </div>
            <button class="detail-btn bg-blue-500 text-white rounded px-3 py-1">
              Detail
              <i class="fas fa-chevron-right ml-1">
              </i>
            </button>
            </div>
          </div>
          </div>
        </div>
        </div>
      </body>
      </div>
    </div>
  )
}

export default Teacher