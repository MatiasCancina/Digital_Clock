import { useState, useEffect } from 'react';
import { format, isToday } from 'date-fns';
import '../index.css'

const Clock: React.FC = () => {
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hours: string = time.getHours().toString().padStart(2, '0');
  const minutes: string = time.getMinutes().toString().padStart(2, '0');
  const seconds: string = time.getSeconds().toString().padStart(2, '0');

  const formattedDate: string = format(time, 'MM-dd-yyyy').toUpperCase();

  const daysOfWeek: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const today: string = daysOfWeek[time.getDay()];

  return (
    <div className="flex flex-col justify-center bg-blue1000 space-y-5 px-16 py-12 rounded-full text-blue100 text-6xl shadow-2xl shadow-blue800">
      <div>
        <p className="text-2xl font-medium space-x-5">
          {daysOfWeek.map((day, index) => (
            <span key={index} className={isToday(new Date()) && today === day ? 'text-blue300' : 'text-blue800'}>
              {day}{' '}
            </span>
          ))}
        </p>
        <span className="font-clock font-mono font-bold text-9xl">
          {hours}:{minutes}:{seconds}
        </span>
        <p className='text-2xl'>
          {formattedDate}
        </p>
      </div>
      <h6 className="text-base font-normal underline underline-offset-4">DIGITAL CLOCK with Typescript</h6>
    </div>
  );
};

export default Clock;
