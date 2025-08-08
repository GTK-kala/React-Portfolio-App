import CounterCard from './CounterCard';
import './StatsSection.css';
import { DataContext } from '../../Context/DataContext';
import { useContext } from 'react';
const StatsSection = () => {

  const { stats } = useContext(DataContext);

  return (
    <section className="stats-section">
      <h2 className="stats-title">Our Achievements</h2>
      <div className="stats-grid">
        {stats.map((s, i) => (
          <CounterCard key={i} label={s.label} target={s.target} />
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
