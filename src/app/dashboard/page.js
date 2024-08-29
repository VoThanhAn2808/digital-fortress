// src/app/dashboard/page.js
import Image from "next/image";

export default function DashBoard() {
  return (
    <div className="flex h-screen bg-neutral-900">
      {/* Sidebar */}
      <div className="w-64 bg-black p-6 text-white flex flex-col justify-between">
        <div>
          <div className="flex items-center mb-6">
            <Image src="/assets/img/logo.png" width={32} height={32} alt="Logo" className="h-10 mr-2" />
            <span className="text-lg font-semibold">Digital Fortress</span>
          </div>
          <ul>
            <li className="mb-4">
              <button className="w-full flex items-center px-4 py-2 rounded-lg bg-green-200 text-black">
                <span className="flex-1">Dashboard</span>
              </button>
            </li>
            <li className="mb-4">
              <button className="w-full flex items-center px-4 py-2 rounded-lg text-gray-400">
                Task
              </button>
            </li>
            <li className="mb-4">
              <button className="w-full flex items-center px-4 py-2 rounded-lg text-gray-400">
                Projects
              </button>
            </li>
            <li>
              <button className="w-full flex items-center px-4 py-2 rounded-lg text-gray-400">
                Schedule
                <span className="ml-auto bg-green-500 text-xs text-white px-2 py-1 rounded-full">2</span>
              </button>
            </li>
          </ul>
        </div>
        <button className="flex items-center justify-center p-2 bg-black rounded-full">
          <span className="text-gray-400">X</span>
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-neutral-800 p-6">
        <div className="mb-6 flex items-center justify-between">
          <input
            type="text"
            placeholder="Search anything"
            className="w-2/5 p-2 rounded-md bg-neutral-700 text-white"
          />
          <div className="flex items-center">
            <Image src="/assets/img/user.png" alt="User" width={32} height={32} className="w-8 h-8 rounded-full mr-4" />
            <button className="bg-red-500 text-white rounded-full p-2">Notifications</button>
          </div>
        </div>

        {/* Dashboard Table */}
        <div className="bg-black p-6 rounded-lg shadow-md">
          <h2 className="text-white text-2xl font-semibold mb-4">Dashboard</h2>
          <table className="w-full text-left">
            <thead>
              <tr>
                <th className="p-2 text-white">Project</th>
                <th className="p-2 text-white">Last accessed</th>
                <th className="p-2 text-white">License use</th>
                <th className="p-2"></th>
              </tr>
            </thead>
            <tbody>
              {/* Repeat for each row */}
              <tr className="border-3 border-neutral-700 ">
                <td className="p-2 text-white flex items-center">
                  <Image src="/assets/img/project.png" width={32} height={32} alt="Project" className="h-8 w-8 mr-2" />
                  Sisyphus
                </td>
                <td className="p-2 text-gray-400">22 Jan 2022</td>
                <td className="p-2">
                  <span className="bg-green-500 text-white px-2 py-1 rounded-md">Active</span>
                  <span className="bg-yellow-500 text-white px-2 py-1 ml-2 rounded-md">Customer data</span>
                  <span className="bg-red-500 text-white px-2 py-1 ml-2 rounded-md">Admin</span>
                </td>
                <td className="p-2 flex items-center space-x-2">
                  <button>Edit</button>
                  <button>Delete</button>
                </td>
              </tr>

              {/* Repeat for each row */}
              <tr className="border-3 border-neutral-700 ">
                <td className="p-2 text-white flex items-center">
                  <Image src="/assets/img/project.png" width={32} height={32} alt="Project" className="h-8 w-8 mr-2" />
                  Sisyphus
                </td>
                <td className="p-2 text-gray-400">22 Jan 2022</td>
                <td className="p-2">
                  <span className="bg-green-500 text-white px-2 py-1 rounded-md">Active</span>
                  <span className="bg-yellow-500 text-white px-2 py-1 ml-2 rounded-md">Customer data</span>
                  <span className="bg-red-500 text-white px-2 py-1 ml-2 rounded-md">Admin</span>
                </td>
                <td className="p-2 flex items-center space-x-2">
                  <button>Edit</button>
                  <button>Delete</button>
                </td>
              </tr>

              {/* Repeat for each row */}
              <tr className="border-3 border-neutral-700 ">
                <td className="p-2 text-white flex items-center">
                  <Image src="/assets/img/project.png" width={32} height={32} alt="Project" className="h-8 w-8 mr-2" />
                  Sisyphus
                </td>
                <td className="p-2 text-gray-400">22 Jan 2022</td>
                <td className="p-2">
                  <span className="bg-green-500 text-white px-2 py-1 rounded-md">Active</span>
                  <span className="bg-yellow-500 text-white px-2 py-1 ml-2 rounded-md">Customer data</span>
                  <span className="bg-red-500 text-white px-2 py-1 ml-2 rounded-md">Admin</span>
                </td>
                <td className="p-2 flex items-center space-x-2">
                  <button>Edit</button>
                  <button>Delete</button>
                </td>
              </tr>

              {/* Repeat for each row */}
              <tr className="border-3 border-neutral-700 ">
                <td className="p-2 text-white flex items-center">
                  <Image src="/assets/img/project.png" width={32} height={32} alt="Project" className="h-8 w-8 mr-2" />
                  Sisyphus
                </td>
                <td className="p-2 text-gray-400">22 Jan 2022</td>
                <td className="p-2">
                  <span className="bg-green-500 text-white px-2 py-1 rounded-md">Active</span>
                  <span className="bg-yellow-500 text-white px-2 py-1 ml-2 rounded-md">Customer data</span>
                  <span className="bg-red-500 text-white px-2 py-1 ml-2 rounded-md">Admin</span>
                </td>
                <td className="p-2 flex items-center space-x-2">
                  <button>Edit</button>
                  <button>Delete</button>
                </td>
              </tr>

              {/* Repeat for each row */}
              <tr className="border-3 border-neutral-700 ">
                <td className="p-2 text-white flex items-center">
                  <Image src="/assets/img/project.png" width={32} height={32} alt="Project" className="h-8 w-8 mr-2" />
                  Sisyphus
                </td>
                <td className="p-2 text-gray-400">22 Jan 2022</td>
                <td className="p-2">
                  <span className="bg-green-500 text-white px-2 py-1 rounded-md">Active</span>
                  <span className="bg-yellow-500 text-white px-2 py-1 ml-2 rounded-md">Customer data</span>
                  <span className="bg-red-500 text-white px-2 py-1 ml-2 rounded-md">Admin</span>
                </td>
                <td className="p-2 flex items-center space-x-2">
                  <button>Edit</button>
                  <button>Delete</button>
                </td>
              </tr>

              {/* Repeat for each row */}
              <tr className="border-3 border-neutral-700 ">
                <td className="p-2 text-white flex items-center">
                  <Image src="/assets/img/project.png" width={32} height={32} alt="Project" className="h-8 w-8 mr-2" />
                  Sisyphus
                </td>
                <td className="p-2 text-gray-400">22 Jan 2022</td>
                <td className="p-2">
                  <span className="bg-green-500 text-white px-2 py-1 rounded-md">Active</span>
                  <span className="bg-yellow-500 text-white px-2 py-1 ml-2 rounded-md">Customer data</span>
                  <span className="bg-red-500 text-white px-2 py-1 ml-2 rounded-md">Admin</span>
                </td>
                <td className="p-2 flex items-center space-x-2">
                  <button>Edit</button>
                  <button>Delete</button>
                </td>
              </tr>

              {/* Repeat for each row */}
              <tr className="border-3 border-neutral-700 ">
                <td className="p-2 text-white flex items-center">
                  <Image src="/assets/img/project.png" width={32} height={32} alt="Project" className="h-8 w-8 mr-2" />
                  Sisyphus
                </td>
                <td className="p-2 text-gray-400">22 Jan 2022</td>
                <td className="p-2">
                  <span className="bg-green-500 text-white px-2 py-1 rounded-md">Active</span>
                  <span className="bg-yellow-500 text-white px-2 py-1 ml-2 rounded-md">Customer data</span>
                  <span className="bg-red-500 text-white px-2 py-1 ml-2 rounded-md">Admin</span>
                </td>
                <td className="p-2 flex items-center space-x-2">
                  <button>Edit</button>
                  <button>Delete</button>
                </td>
              </tr>



              <tr className="border-3 border-neutral-700">
                <td className="p-2 text-white flex items-center">
                  <Image src="/assets/img/project.png" width={32} height={32} alt="Project" className="h-8 w-8 mr-2" />
                  Sisyphus
                </td>
                <td className="p-2 text-gray-400">22 Jan 2022</td>
                <td className="p-2">
                  <span className="bg-green-500 text-white px-2 py-1 rounded-md">Active</span>
                  <span className="bg-yellow-500 text-white px-2 py-1 ml-2 rounded-md">Customer data</span>
                  <span className="bg-red-500 text-white px-2 py-1 ml-2 rounded-md">Admin</span>
                </td>
                <td className="p-2 flex items-center space-x-2">
                  <button>Edit</button>
                  <button>Delete</button>
                </td>
              </tr>


              {/* Repeat until end */}
            </tbody>
          </table>
          <div className="mt-4 flex justify-between items-center text-white">
            <span>Page 1 of 10</span>
            <button className="bg-neutral-700 px-4 py-2 rounded-md">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
