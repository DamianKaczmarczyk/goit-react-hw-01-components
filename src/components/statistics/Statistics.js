import styles from 'components/statistics/statistic.module.css';

// const StaticticsList = ({ stats }) => {
//   return (
//     <ul className={styles.list}>
//       {stats.map(stat => (
//         <li className={styles.items}>
//           <span>{stat.label}</span>
//           <span>{stat.percentage}</span>
//         </li>
//       ))}
//     </ul>
//   );
// };

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