import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';

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

  const formattedDate: string = format(time, 'MM-dd-yyyy EEE').toLocaleUpperCase();

  return (
    <div className="flex flex-col justify-center bg-blue100 space-y-5 p-10 rounded-lg text-black text-6xl shadow-lg">
      <p className="text-3xl font-medium">
        {formattedDate}
      </p>
      <span className="font-mono font-bold text-9xl">
        {hours}:{minutes}:{seconds}
      </span>
      <h1 className="text-lg font-normal">DIGITAL CLOCK with Typescript</h1>
    </div>
  );
};

export default Clock;
