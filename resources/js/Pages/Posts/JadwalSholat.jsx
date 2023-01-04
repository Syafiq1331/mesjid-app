import React, {useState, useEffect} from 'react'

const JadwalSholat = () => {
  const [date, setDate] = useState([]);

  // Get Sholat API
  useEffect(() => {
    fetch(`https://api.myquran.com/v1/sholat/jadwal/1609/2021/06/23`)
      .then(res => res.json())
      .then(data => data.data.jadwal)
      .then(data => setDate(data))
  }, [])
  return (
    <div className="w-8/12">
    <h5 className="pl-1 text-xl -mb-1 mt-4 text-slate-500">Jadwal waktu sholat : </h5>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full border text-center">
                <thead className="border-b">
                    <tr>
                      <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                        Subuh
                      </th>
                      <td className="px-6 py-4 whitespace-nowrap text-sm bg-gray-50 text-gray-500 border-b border-l">
                        {date.subuh} WIB
                      </td>
                    </tr>
                    <tr>
                      <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                        Dzuhur
                      </th>
                      <td className="px-6 py-4 whitespace-nowrap text-sm bg-gray-50 text-gray-500 border-b border-l">
                        {date.dzuhur} WIB
                      </td>
                    </tr>
                    <tr>
                      <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                        Ashar
                      </th>
                      <td className="px-6 py-4 whitespace-nowrap text-sm bg-gray-50 text-gray-500 border-b border-l">
                        {date.ashar} WIB
                      </td>
                    </tr>
                    <tr>
                      <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                        Maghrib
                      </th>
                      <td className="px-6 py-4 whitespace-nowrap text-sm bg-gray-50 text-gray-500 border-b border-l">
                        {date.maghrib} WIB
                      </td>
                    </tr>
                    <tr>
                      <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                        Isya
                      </th>
                      <td className="px-6 py-4 whitespace-nowrap text-sm bg-gray-50 text-gray-500 border-b border-l">
                        {date.isya} WIB
                      </td>
                    </tr>
                </thead>
                <tbody>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JadwalSholat
