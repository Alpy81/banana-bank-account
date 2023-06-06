import React, { useState } from 'react';

const AccountComponent = ({ balance, onDeposit, onWithdrawal }) => {
  const [amount, setAmount] = useState(0);

  const handleDeposit = () => {
    onDeposit(amount);
    setAmount(0);
  };

  const handleWithdrawal = () => {
    onWithdrawal(amount);
    setAmount(0);
  };

  return (
    <div className="account-container">
      <input
        type="number"
        value={amount}
        placeholder="Betrag..."
        onChange={(e) => setAmount(parseFloat(e.target.value))}
      />
      <div className='button-area'>
        <button id="deposit" onClick={handleDeposit}>Einzahlen</button>
        <button id="withdraw" onClick={handleWithdrawal}>Auszahlen</button>
      </div>
    </div>
  );
};

export default AccountComponent;
