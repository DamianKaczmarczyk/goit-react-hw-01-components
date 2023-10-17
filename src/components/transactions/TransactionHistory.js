import styles from 'components/transactions/transactions.module.css';

const TransactionHistory = ({ transactions }) => {
  return (
    <>
      {transactions.map(transaction => (
        <tbody key={transaction.id}>
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

export default function Transaction({transaction}) {
  return (
    <table className={styles.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <TransactionHistory transactions={transaction} />
    </table>
  );
}