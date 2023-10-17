import data from 'components/statistics/data.json';
import styles from 'components/statistics/statistic.module.css';

const StaticticsList = ({ stats }) => {
  return (
    <ul className={styles.list}>
      {stats.map(stat => (
        <li className={styles.items}>
          <span>{stat.label}</span>
          <span>{stat.percentage}</span>
        </li>
      ))}
    </ul>
  );
};

export default function Statistics() {
  return (
    <section className={styles.statistics}>
      <h2 class={styles.title}>Upload stats</h2>

      <div>
        <StaticticsList stats={data} />
      </div>
    </section>
  );
}