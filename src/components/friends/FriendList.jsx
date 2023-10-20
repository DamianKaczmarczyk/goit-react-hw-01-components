import styles from 'components/friends/friends.module.css';
// import PropTypes from "prop-types";
import FriendListItem from"./FriendsListItem";


const FriendList = ({friends}) => {
  return (
<ul className={styles.list}>
{friends.map(friend => (
<li key={friend.id} className={styles.item}>
<FriendListItem friend={friend} />
</li>
))}
</ul>
)}
export default FriendList

// ======ZOSTAWIAM KOMENTARZE, BO JAK ODKOMENTUJE TO CONST FRIENDLIST SIĘ GUBI WRAZ Z PROPTYPSAMI=======

// FriendList.propTypes = {
//   friends: PropTypes.arrayOf(PropTypes.object).isRequired,
// };

// FriendList.friend.propTypes = {
//   avatar: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   isOnline: PropTypes.bool.isRequired,
// }