import React, { useEffect, useState } from 'react'
import Hadits from './Alamat';
import JadwalSholat from './JadwalSholat';


const Date = () => {
  let getDate = new window.Date();

  let hours = getDate.getHours();
  let minutes = getDate.getMinutes();

  let result = `${hours}:${minutes}`;

  return (
    <div className="drop-shadow-lg w-4/12 shadow-black flex flex-col">
      <h1 className="text-[4rem] font-bold text-white">{result} WIB</h1>
      <Hadits />
      <JadwalSholat/>
    </div>
  )
}

export default Date
