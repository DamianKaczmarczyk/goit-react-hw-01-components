import clsx from 'clsx';
import styles from 'components/friends/friends.module.css';
 const FriendListItem = ({friend})=>
    <>
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
    </>
    export default FriendListItem