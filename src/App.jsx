import React, { useState } from 'react';
import Account from './assets/components/Account';

const App = () => {
  const [balance, setBalance] = useState(0);

  const handleDeposit = (amount) => {
    setBalance(balance + amount);
  };

  const handleWithdrawal = (amount) => {
    setBalance(balance - amount);
  };

  return (
    <article>
      <div>
        <img src="/bananen.png" alt="Banklogo" className='bananen'/> 
        <p>Banana Bank</p>
        <h1>Dein Girokonto</h1>
        <div className='kontostand'>
        <h2>{balance} €</h2>
        </div>
        <Account
          balance={balance}
          onDeposit={handleDeposit}
          onWithdrawal={handleWithdrawal}
        />
      </div>
    </article>
  );
};

export default App;
