import React, { useState, useEffect } from 'react';

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

  return (
    <div className="bg-blue100 p-4 rounded-lg text-white text-6xl font-mono shadow-lg">
      <div className="flex justify-center">
        <span className="mr-2">{hours}</span>
        <span className="text-midGray">:</span>
        <span className="ml-2">{minutes}</span>
        <span className="text-midGray">:</span>
        <span className="mr-2">{seconds}</span>
      </div>
    </div>
  );
};

export default Clock;
