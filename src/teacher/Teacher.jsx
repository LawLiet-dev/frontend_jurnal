import React from 'react'
import HeaderTeacher from './components/HeaderTeacher'

function Teacher() {
  return (
    <div>
      <HeaderTeacher />
      {/* desktop and tablet*/}
      <div className="hidden md:block">
        {/* Card Colaborator*/}
        <div className="bg-white flex justify-center items-start min-h-screen py-4 lg:px-10">
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
          {/* Card Statistik */}
            <div className="bg-white rounded-lg shadow-lg w-4/5 max-w-4xl ">
                <div className="bg-blue-500 text-white p-4 rounded-t-lg text-lg">
                    Statistik Jurnal
                </div>
                <div className="p-6">
                    <div className="flex justify-between items-center mb-6">
                        <div className="text-left">
                            <span className="block text-gray-600">Mengisi</span>
                            <span className="block text-gray-600">Journal</span>
                        </div>
                        <div className="bg-blue-100 text-blue-500 text-center py-2 px-4 rounded-lg w-16">
                            5X
                        </div>
                        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg flex items-center">
                            Detail <i className="fas fa-chevron-right ml-2"></i>
                        </button>
                    </div>
                    <div className="flex justify-between items-center mb-6">
                        <div className="text-left">
                            <span className="block text-gray-600">Tidak mengisi</span>
                            <span className="block text-gray-600">Journal</span>
                        </div>
                        <div className="bg-blue-100 text-blue-500 text-center py-2 px-4 mr-10 rounded-lg w-16">
                            10X
                        </div>
                        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg flex items-center">
                            Detail <i className="fas fa-chevron-right ml-2"></i>
                        </button>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        <div className="flex items-center">
                            <img src="https://storage.googleapis.com/a1aa/image/zMT7OZCZMVAOlvpQxObs8wXN67MlAexQ2NtjLzDE3nc.jpg" alt="Student photo" className="rounded-full w-12 h-12 mr-4" />
                            <div className="flex-grow">
                                <div className="font-bold">Farel</div>
                                <div className="text-gray-600">Math</div>
                            </div>
                            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg flex items-center">
                                Detail <i className="fas fa-chevron-right ml-2"></i>
                            </button>
                        </div>
                        <div className="flex items-center">
                            <img src="https://storage.googleapis.com/a1aa/image/zMT7OZCZMVAOlvpQxObs8wXN67MlAexQ2NtjLzDE3nc.jpg" alt="Student photo" className="rounded-full w-12 h-12 mr-4" />
                            <div className="flex-grow">
                                <div className="font-bold">Sarah</div>
                                <div className="text-gray-600">Math</div>
                            </div>
                            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg flex items-center">
                                Detail <i className="fas fa-chevron-right ml-2"></i>
                            </button>
                        </div>
                        <div className="flex items-center">
                            <img src="https://storage.googleapis.com/a1aa/image/zMT7OZCZMVAOlvpQxObs8wXN67MlAexQ2NtjLzDE3nc.jpg" alt="Student photo" className="rounded-full w-12 h-12 mr-4" />
                            <div className="flex-grow">
                                <div className="font-bold">Sarah</div>
                                <div className="text-gray-600">Math</div>
                            </div>
                            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg flex items-center">
                                Detail <i className="fas fa-chevron-right ml-2"></i>
                            </button>
                        </div>
                        <div className="flex items-center">
                            <img src="https://storage.googleapis.com/a1aa/image/zMT7OZCZMVAOlvpQxObs8wXN67MlAexQ2NtjLzDE3nc.jpg" alt="Student photo" className="rounded-full w-12 h-12 mr-4" />
                            <div className="flex-grow">
                                <div className="font-bold">Sarah</div>
                                <div className="text-gray-600">Math</div>
                            </div>
                            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg flex items-center">
                                Detail <i className="fas fa-chevron-right ml-2"></i>
                            </button>
                        </div>
                        <div className="flex items-center">
                            <img src="https://storage.googleapis.com/a1aa/image/zMT7OZCZMVAOlvpQxObs8wXN67MlAexQ2NtjLzDE3nc.jpg" alt="Student photo" className="rounded-full w-12 h-12 mr-4" />
                            <div className="flex-grow">
                                <div className="font-bold">Sarah</div>
                                <div className="text-gray-600">Math</div>
                            </div>
                            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg flex items-center">
                                Detail <i className="fas fa-chevron-right ml-2"></i>
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
      <div className="bg-white flex justify-center items-center min-h-screen">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between w-11/12">
        <div className="collaborator bg-white rounded-lg shadow-lg p-6 w-full lg:w-1/3 mb-6 lg:mb-0">
          <h2 className="text-lg font-semibold mb-6">
          Collaborator
          </h2>
          <div className="collaborator-item flex items-center mb-4">
          <img alt="Profile picture of Sarah" className="rounded-full w-10 h-10 mr-4" height="40" src="https://storage.googleapis.com/a1aa/image/oWGKq31eUDSL5EDUBA-Khj3p6a6p_Il7fkLPU9YteC0.jpg" width="40"/>
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
          <img alt="Profile picture of Sarah" className="rounded-full w-10 h-10 mr-4" height="40" src="https://storage.googleapis.com/a1aa/image/oWGKq31eUDSL5EDUBA-Khj3p6a6p_Il7fkLPU9YteC0.jpg" width="40"/>
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
          <img alt="Profile picture of Farel" className="rounded-full w-10 h-10 mr-4" height="40" src="https://storage.googleapis.com/a1aa/image/xOOiH0Sra1SYGzMOIEJ5mY1-cCIUo_Ws3SFjVhEjlWI.jpg" width="40"/>
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
        <div className="statistik-jurnal bg-blue-500 text-white rounded-lg p-6 w-full lg:w-2/3">
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
            <div className="student-item flex items-center mb-4 w-full md:w-1/2">
            <img alt="Profile picture of Farel" className="rounded-full w-10 h-10 mr-4" height="40" src="https://storage.googleapis.com/a1aa/image/xOOiH0Sra1SYGzMOIEJ5mY1-cCIUo_Ws3SFjVhEjlWI.jpg" width="40"/>
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
            <div className="student-item flex items-center mb-4 w-full md:w-1/2">
            <img alt="Profile picture of Sarah" className="rounded-full w-10 h-10 mr-4" height="40" src="https://storage.googleapis.com/a1aa/image/oWGKq31eUDSL5EDUBA-Khj3p6a6p_Il7fkLPU9YteC0.jpg" width="40"/>
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
            <div className="student-item flex items-center mb-4 w-full md:w-1/2">
            <img alt="Profile picture of Sarah" className="rounded-full w-10 h-10 mr-4" height="40" src="https://storage.googleapis.com/a1aa/image/oWGKq31eUDSL5EDUBA-Khj3p6a6p_Il7fkLPU9YteC0.jpg" width="40"/>
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
            <div className="student-item flex items-center mb-4 w-full md:w-1/2">
            <img alt="Profile picture of Sarah" className="rounded-full w-10 h-10 mr-4" height="40" src="https://storage.googleapis.com/a1aa/image/oWGKq31eUDSL5EDUBA-Khj3p6a6p_Il7fkLPU9YteC0.jpg" width="40"/>
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
            <div className="student-item flex items-center mb-4 w-full md:w-1/2">
            <img alt="Profile picture of Sarah" className="rounded-full w-10 h-10 mr-4" height="40" src="https://storage.googleapis.com/a1aa/image/oWGKq31eUDSL5EDUBA-Khj3p6a6p_Il7fkLPU9YteC0.jpg" width="40"/>
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
            <div className="student-item flex items-center mb-4 w-full md:w-1/2">
            <img alt="Profile picture of Sarah" className="rounded-full w-10 h-10 mr-4" height="40" src="https://storage.googleapis.com/a1aa/image/oWGKq31eUDSL5EDUBA-Khj3p6a6p_Il7fkLPU9YteC0.jpg" width="40"/>
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
    </div>
  )
}

export default Teacher