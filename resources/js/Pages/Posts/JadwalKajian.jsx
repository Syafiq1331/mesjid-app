import React from 'react'

const JadwalKajian = () => {
  return (
    <div className="flex flex-col w-8/12 container mx-auto">
    <h1 className="mt-12 text-xl py-6 text-center bg-white text-gray-600">Jadwal Kajian</h1>
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full border text-center">
              <thead className="border-b bg-white">
                <tr>
                  <th scope="col" className="text-sm font-medium text-gray-500 px-6 py-4 border-r">
                  tempat
                  </th>
                  <th scope="col" className="text-sm font-medium text-gray-500 px-6 py-4 border-r">
                  pemateri
                  </th>
                  <th scope="col" className="text-sm font-medium text-gray-500 px-6 py-4 border-r">
                  tanggal
                  </th>
                  <th scope="col" className="text-sm font-medium text-gray-500 px-6 py-4 border-r">
                  jam
                  </th>
                  <th scope="col" className="text-sm font-medium text-gray-500 px-6 py-4 border-r">
                  keterangan
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-white">
                  <td className="text-sm text-gray-500 font-light px-6 py-4 whitespace-nowrap border-r">
                  Masjid Al-Muhajirin
                  </td>
                  <td className="text-sm text-gray-500 font-light px-6 py-4 whitespace-nowrap border-r">
                  Ustadz Khalid
                  </td>
                  <td className="text-sm text-gray-500 font-light px-6 py-4 whitespace-nowrap border-r">
                  2021-12-31
                  </td>
                  <td className="text-sm text-gray-500 font-light px-6 py-4 whitespace-nowrap border-r">
                  19:00
                  </td>
                  <td className="text-sm text-gray-500 font-light px-6 py-4 whitespace-nowrap border-r">
                  Kajian rutin setiap jumat
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JadwalKajian
