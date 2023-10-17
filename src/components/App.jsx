import Profile from './profile/Profile';
import Statistics from './statistics/Statistics';
import FriendList from './friends/FriendList';
import TransactionHistory from './transactions/TransactionHistory';
import friends from './friends/FriendList';
import data from './statistics/data';
import user from './profile/user';
import transaction from './transactions/transactions';


export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        gap:'20px',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile user={user}/>
      <Statistics stats={data}/>
      <FriendList friends={friends} />
      <TransactionHistory transaction={transaction}/>
    </div>
  );
};