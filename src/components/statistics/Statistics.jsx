import styles from 'components/statistics/statistic.module.css';

export default function Statistics({stats}) {
  return (
    <section className={styles.statistics}>
      <h2 className={styles.title}>Upload stats</h2>

      <div>
      <ul className={styles.list}>
      {stats.map(stat => (
        <li key={stat.id} className={styles.items}>
          <span>{stat.label}</span>
          <span>{stat.percentage}%</span>
        </li>
      ))}
    </ul>
      </div>
    </section>
  );
}
Statistics.propTypes = {
  stat: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
  })),
};