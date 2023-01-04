import React from 'react'
import JadwalSholat from './JadwalSholat';
import JadwalKajian from './JadwalKajian';
const Jadwal = () => {
  return (
    <div className='flex w-full justify-between'>
      <JadwalSholat />
      <JadwalKajian/>
    </div>
  )
}

export default Jadwal
