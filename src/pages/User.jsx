import React from 'react';
import users from '../Dummy.json';
import { useNavigate } from 'react-router-dom';
import './User.css';

const User = () => {
    const navigate = useNavigate()
  return (
    <div className="container">
    <h2 className="title">User Transaction History</h2>
    
    {/* Wrap table in a responsive wrapper */}
    <div className="table-wrapper">
      <table className="transaction-table">
        <thead>
          <tr>
            <th>User ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Transaction Date</th>
            <th>Description</th>
            <th>Amount (USD)</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) =>
            user.transactions.length > 0 ? (
              user.transactions.map((transaction, index) => (
                <tr key={transaction.transactionId} className={index % 2 === 0 ? 'row-light' : 'row-dark'}>
                  <td>{user.userId}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{transaction.date}</td>
                  <td>{transaction.description}</td>
                  <td className={transaction.amount < 0 ? 'amount-negative' : 'amount-positive'}>
                    {transaction.amount.toFixed(2)}
                  </td>
                </tr>
              ))
            ) : (
              <tr key={user.userId}>
                <td>{user.userId}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td colSpan="3" className="no-transactions">
                  No transactions available
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
    <button className="logoutbtn" onClick={() => navigate('/')}>Logout</button>
  </div>
  );
};

export default User;
