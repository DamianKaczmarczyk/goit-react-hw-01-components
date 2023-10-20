import friends from 'components/friends/friends.json';
import styles from 'components/friends/friends.module.css';
import clsx from 'clsx';

const FriendList = ({ friends }) => {
  return (
    <>
      {friends.map(friend => (
        <li key={friend.id}className={styles.item}>
          <span
            className={clsx(styles.status, {
              [styles.isOnline]: friend.isOnline,
            })}
          ></span>
          <img
            className="avatar"
            src={friend.avatar}
            alt="User avatar"
            width="48"
          />
          <p className="name">{friend.name}</p>
        </li>
      ))}
    </>
  );
};

export default function Friends() {
  return (
    <ul className={styles.list}>
      <FriendList friends={friends} />
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
};

FriendList.friend.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
}