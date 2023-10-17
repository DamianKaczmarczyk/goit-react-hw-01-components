import user from 'components/profile/user.json';
import styles from 'components/profile/profile.module.css';

export default function Profile() {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img src={user.avatar} alt="User avatar" className={styles.avatar} />
        <p className={styles.name}>{user.username}</p>
        <p className={styles.tag}>{user.tag}</p>
        <p className={styles.location}>{user.location}</p>
      </div>

      <ul className={styles.stats}>
        <li className={styles.statsItems}>
          <span className="label">Followers</span>
          <span className="quantity">{user.stats.followers}</span>
        </li>
        <li className={styles.statsItems}>
          <span className="label">Views</span>
          <span className="quantity">{user.stats.views}</span>
        </li>
        <li className={styles.statsItems}>
          <span className="label">Likes</span>
          <span className="quantity">{user.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}