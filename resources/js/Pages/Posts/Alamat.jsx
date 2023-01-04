import React, {useState} from 'react'

const Hadits = () => {
  const getDate = new window.Date();
  const currentYear = getDate.getFullYear();

  const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const currentMonth = month[getDate.getMonth()];
  const currentDay = getDate.getDate();

  const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let currentDayName = weekday[getDate.getDay()];
  const today = `${currentDayName}, ${currentDay} ${currentMonth} ${currentYear}`;

  const dateToday = `${today}`;
  let time = getDate.toLocaleTimeString();
  const [currentTime, setCurrentTime] = useState(time);

  function updateTime(){
    let getDate = new window.Date();
    let time = getDate.toLocaleTimeString();
    setCurrentTime(time);
  }

  setInterval(updateTime, 1000);

  let result = `${dateToday} ${currentTime}`

  return (
    <div>
      <h1 className='text-center'>
        <p className='flex items-center gap-x-1 text-slate-500 text-lg'><box-icon type='solid' color='gray' name='calendar'></box-icon><span>{result}</span></p>
        <p className='my-2 flex items-center gap-x-1 text-slate-500 text-lg '><box-icon name='map' color='gray'></box-icon>Jonggol, Bogor</p>
      </h1>
    </div>
  )
}

export default Hadits
