import { useEffect, useState } from 'react';
import './CounterCard.css';

const CounterCard = ({ label, target }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const intervalTime = 20;
    const totalSteps = duration / intervalTime;
    const increment = target / totalSteps;

    const counter = setInterval(() => {
      start += increment;
      if (start >= target) {
        start = target;
        clearInterval(counter);
      }
      setCount(Math.floor(start));
    }, intervalTime);

    return () => clearInterval(counter);
  }, [target]);

  return (
    <div className="counter-card">
      <div className="counter-number">{count}</div>
      <div className="counter-label">{label}</div>
    </div>
  );
};

export default CounterCard;
