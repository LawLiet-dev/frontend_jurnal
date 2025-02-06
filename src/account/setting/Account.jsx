import React from 'react'

function Account() {
  return (
    <div>

        <section className="relative overflow-hidden py-6">
    <div className="container">
        {/* Wrapper htmlFor all notifications with shadow and border */}
        <div className="bg-white shadow-xl rounded-lg border-2 border-gray-300 p-6">
            {/* Header Section */}
            <div className="bg-blue-500 text-white py-3 px-4 rounded-t-lg shadow-md">
                <h3 className="text-lg font-semibold">Informasi akun</h3>
            </div>
            
            {/* Notifications */}
            <div className="flex flex-col gap-y-6 mt-4">
                {/* Notification 1 */}

                {/* Notification 2 */}
                <div className="bg-white shadow-sm rounded-lg p-6">
                    <div className="flex flex-col gap-y-4">
                        <div className="bg-gray-100 p-4 rounded-lg shadow-sm border border-gray-300">
                        <form action="#" className="mt-6">

                                                <div className="mb-4">
                                                    <label htmlFor="name"
                                                        className="block text-sm font-semibold mb-1 text-default-600">Nama<small>*</small></label>
                                                    <input type="string"
                                                        className="py-2 px-4 leading-6 block w-full text-default-700 border-default-300 rounded text-sm focus:border-default-300 focus:ring-0"
                                                        id="new_password" 
                                                        name="new_password" />
                                                </div>

                                                <div className="mb-4">
                                                    <label htmlFor="name"
                                                        className="block text-sm font-semibold mb-1 text-default-600">Email<small>*</small></label>
                                                    <input type="string"
                                                        className="py-2 px-4 leading-6 block w-full text-default-700 border-default-300 rounded text-sm focus:border-default-300 focus:ring-0"
                                                        id="new_password" aria-describedby="current_password"
                                                        name="new_password" />
                                                </div>

                                                <div className="mb-4">
                                                    <label htmlFor="name"
                                                        className="block text-sm font-semibold mb-1 text-default-600">Password<small>*</small></label>
                                                    <input type="string"
                                                        className="py-2 px-4 leading-6 block w-full text-default-700 border-default-300 rounded text-sm focus:border-default-300 focus:ring-0"
                                                        id="confirm_password" aria-describedby="current_password"
                                                        name="confirm_password" />
                                                </div>

                                                <hr className="my-6" />

                                                <div className="row mt-3">
                                                    <div className="col-lg-12">
                                                        <button type="submit"
                                                            className="inline-flex items-center justify-center py-3 px-4 rounded-lg text-sm font-semibold transition-all hover:shadow-lg bg-primary text-white hover:shadow-primary/30 focus:shadow-none focus:outline focus:outline-primary/40">Update
                                                            Profile</button>
                                                    </div>
                                                </div>
                                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </section>


    </div>
  )
}

export default Account