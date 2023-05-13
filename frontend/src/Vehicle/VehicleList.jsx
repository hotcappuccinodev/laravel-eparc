const VehiculeList = () => {
    return (<div className="container px-8">
        <div className="pt-10 w-full flex flex-col transition duration-700 ease-in-out">
            <div className="w-full overflow-x transition duration-700 ease-in-out">
                <table className="w-full whitespace-no-wrap">
                    <thead>
                    <tr
                        className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800 transition duration-700 ease-in-out"
                    >
                        <th className="px-4 py-3">User</th>
                        <th className="px-4 py-3">Email</th>
                        <th className="px-4 py-3">Status</th>
                        <th className="px-4 py-3">Birthday Date</th>
                        <th className="px-4 py-3">Actions</th>
                    </tr>
                    </thead>
                    <tbody
                        className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800 transition duration-700 ease-in-out"
                    >
                    <tr className="text-gray-700 dark:text-gray-400 transition duration-700 ease-in-out">
                        <td className="px-4 py-3">
                            <div className="flex items-center text-sm">
                                <div
                                    className="relative hidden w-8 h-8 mr-3 rounded-full md:block"
                                >
                                    <img
                                        className="object-cover w-full h-full rounded-full"
                                        alt={"profil image"}
                                        src={"https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}
                                    />
                                    <div
                                        className="absolute inset-0 rounded-full shadow-inner"
                                        aria-hidden="true"
                                    ></div>
                                </div>
                                <div>
                                    <p className="font-semibold">
                                        oumai ou
                                    </p>
                                    <p className="text-xs text-gray-600 dark:text-gray-400 space-x-1">
                                        <span>role</span>
                                    </p>
                                </div>
                            </div>
                        </td>
                        <td className="px-4 py-3 text-sm">
                            ouma@hjhd.cd
                        </td>
                        <td className="px-4 py-3 text-xs">
                        <span
                            className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100 transition duration-700 ease-in-out transition duration-700 ease-in-out"
                        >
                          Approved
                        </span>
                        </td>
                        <td className="px-4 py-3 text-sm">
                            676/_9ç/9
                        </td>
                        <td className="px-4 py-3">
                            <div className="flex items-center space-x-4 text-sm">
                                <button
                                    className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray transition duration-700 ease-in-out">
                                    <svg
                                        className="w-5 h-5"
                                        aria-hidden="true"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
                                        ></path>
                                    </svg>
                                </button>
                                <button
                                    className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray transition duration-700 ease-in-out">
                                    <svg
                                        className="w-5 h-5"
                                        aria-hidden="true"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                        ></path>
                                    </svg>
                                </button>
                            </div>
                        </td>
                    </tr>
                    <tr className="text-gray-700 dark:text-gray-400 transition duration-700 ease-in-out">
                        <td className="px-4 py-3">
                            <div className="flex items-center text-sm">
                                <div
                                    className="relative hidden w-8 h-8 mr-3 rounded-full md:block"
                                >
                                    <img
                                        className="object-cover w-full h-full rounded-full"
                                        alt={"profil image"}
                                        src={"https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}
                                    />
                                    <div
                                        className="absolute inset-0 rounded-full shadow-inner"
                                        aria-hidden="true"
                                    ></div>
                                </div>
                                <div>
                                    <p className="font-semibold">
                                        oumai ou
                                    </p>
                                    <p className="text-xs text-gray-600 dark:text-gray-400 space-x-1">
                                        <span>role</span>
                                    </p>
                                </div>
                            </div>
                        </td>
                        <td className="px-4 py-3 text-sm">
                            ouma@hjhd.cd
                        </td>
                        <td className="px-4 py-3 text-xs">
                        <span
                            className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100 transition duration-700 ease-in-out transition duration-700 ease-in-out"
                        >
                          Approved
                        </span>
                        </td>
                        <td className="px-4 py-3 text-sm">
                            676/_9ç/9
                        </td>
                        <td className="px-4 py-3">
                            <div className="flex items-center space-x-4 text-sm">
                                <button
                                    className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray transition duration-700 ease-in-out">
                                    <svg
                                        className="w-5 h-5"
                                        aria-hidden="true"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
                                        ></path>
                                    </svg>
                                </button>
                                <button
                                    className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray transition duration-700 ease-in-out">
                                    <svg
                                        className="w-5 h-5"
                                        aria-hidden="true"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                        ></path>
                                    </svg>
                                </button>
                            </div>
                        </td>
                    </tr>
                    <tr className="text-gray-700 dark:text-gray-400 transition duration-700 ease-in-out">
                        <td className="px-4 py-3">
                            <div className="flex items-center text-sm">
                                <div
                                    className="relative hidden w-8 h-8 mr-3 rounded-full md:block"
                                >
                                    <img
                                        className="object-cover w-full h-full rounded-full"
                                        alt={"profil image"}
                                        src={"https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}
                                    />
                                    <div
                                        className="absolute inset-0 rounded-full shadow-inner"
                                        aria-hidden="true"
                                    ></div>
                                </div>
                                <div>
                                    <p className="font-semibold">
                                        oumai ou
                                    </p>
                                    <p className="text-xs text-gray-600 dark:text-gray-400 space-x-1">
                                        <span>role</span>
                                    </p>
                                </div>
                            </div>
                        </td>
                        <td className="px-4 py-3 text-sm">
                            ouma@hjhd.cd
                        </td>
                        <td className="px-4 py-3 text-xs">
                        <span
                            className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100 transition duration-700 ease-in-out transition duration-700 ease-in-out"
                        >
                          Approved
                        </span>
                        </td>
                        <td className="px-4 py-3 text-sm">
                            676/_9ç/9
                        </td>
                        <td className="px-4 py-3">
                            <div className="flex items-center space-x-4 text-sm">
                                <button
                                    className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray transition duration-700 ease-in-out">
                                    <svg
                                        className="w-5 h-5"
                                        aria-hidden="true"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
                                        ></path>
                                    </svg>
                                </button>
                                <button
                                    className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray transition duration-700 ease-in-out">
                                    <svg
                                        className="w-5 h-5"
                                        aria-hidden="true"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                        ></path>
                                    </svg>
                                </button>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div
                className="w-full md:grid whitespace-no-wrap px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800 transition duration-700 ease-in-out"
            >
                <span className="flex items-center col-span-3">
                  Showing 21-30 of 100
                </span>
                <span className="col-span-2"></span>
                <span className="flex col-span-4 mt-2 sm:mt-auto sm:justify-end">
                  <nav aria-label="Table navigation">
                    <ul className="inline-flex items-center">
                      <li>
                        <button
                            className="px-3 py-1 rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple"
                            aria-label="Previous"
                        >
                          <svg
                              className="w-4 h-4 fill-current"
                              aria-hidden="true"
                              viewBox="0 0 20 20"
                          >
                            <path
                                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                            ></path>
                          </svg>
                        </button>
                      </li>
                      <li>
                        <button
                            className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple"
                        >
                          1
                        </button>
                      </li>
                      <li>
                        <button
                            className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple"
                        >
                          2
                        </button>
                      </li>
                      <li>
                        <button
                            className="px-3 py-1 text-white transition-colors duration-150 border border-r-0 border-purple-600 rounded-md focus:outline-none focus:shadow-outline-purple">
                          3
                        </button>
                      </li>
                      <li>
                        <button
                            className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple"
                        >
                          4
                        </button>
                      </li>
                      <li>
                        <span className="px-3 py-1">...</span>
                      </li>
                      <li>
                        <button
                            className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple"
                        >
                          8
                        </button>
                      </li>
                      <li>
                        <button
                            className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple"
                        >
                          9
                        </button>
                      </li>
                      <li>
                        <button
                            className="px-3 py-1 rounded-md rounded-r-lg focus:outline-none focus:shadow-outline-purple"
                            aria-label="Next"
                        >
                          <svg
                              className="w-4 h-4 fill-current"
                              aria-hidden="true"
                              viewBox="0 0 20 20"
                          >
                            <path
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            ></path>
                          </svg>
                        </button>
                      </li>
                    </ul>
                  </nav>
                </span>
            </div>
        </div>
    </div>)
}
export default VehiculeList