import transactions from 'components/transactions/transactions.json';
import styles from 'components/transactions/transactions.module.css';

const TransactionHistory = ({ transactions }) => {
  return (
    <>
      {transactions.map(transaction => (
        <tbody>
          <tr>
            <td>{transaction.type}</td>
            <td>{transaction.amount}</td>
            <td>{transaction.currency}</td>
          </tr>
        </tbody>
      ))}
    </>
  );
};

export default function Transaction() {
  return (
    <table className={styles.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <TransactionHistory transactions={transactions} />
    </table>
  );
}