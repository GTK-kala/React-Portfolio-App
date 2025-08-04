import CounterCard from './CounterCard';
import './StatsSection.css';

const stats = [
  { label: 'Clients', target: 120 },
  { label: 'Projects', target: 75 },
  { label: 'Hours Of Support', target: 3000 },
  { label: 'Workers', target: 15 },
];

const StatsSection = () => {
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
