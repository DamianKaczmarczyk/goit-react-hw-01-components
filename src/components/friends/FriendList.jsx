import styles from 'components/friends/friends.module.css';
import PropTypes from "prop-types";
import FriendListItem from"./FriendsListItem";


export const FriendList = ({ friends }) => {
  return (
<ul className={styles.list}>
{friends.map(friend => (
<li key={friend.id} className={styles.item}>
<FriendListItem friend={friend} />
</li>
))}
</ul>
)}
  

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
};

FriendList.friend.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
}
