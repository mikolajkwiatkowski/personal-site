import { useEffect } from 'react';

import gitlogo from './assets/gitlogo.png'

export default function Footer() {
  useEffect(() => {
    function updateTime() {
      let now = new Date();
      let hours = now.getHours();
      let minutes = now.getMinutes();
      let seconds = now.getSeconds();
      hours = hours < 10 ? '0'+hours : hours;
      minutes = minutes < 10 ? '0'+minutes : minutes;
      seconds = seconds < 10 ? '0'+seconds : seconds;
      let timeString = `Actual time: ${hours}:${minutes}:${seconds}`;
      document.getElementById('clock').textContent = timeString;
    }

    const intervalId = setInterval(updateTime, 1000);
    updateTime();
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="bg-neutral-900 w-full h-10 items-center text-white flex font-poppins">
      <div className='w-1/3 pl-5'><p>&copy; Mikolaj Kwiatkowski</p></div>
      <div className='w-1/3 flex justify-center items-center'>
        <img src={gitlogo} className='h-7 mr-3'></img>
        <a href='https://github.com/mikolajkwiatkowski'>
          <p>github.com/mikolajkwiatkowski</p>
        </a>
      </div>
      <div id="clock" className='w-1/3 flex justify-end mr-5'></div>
    </div>
  );
}
