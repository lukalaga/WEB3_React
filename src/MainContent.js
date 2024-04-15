import React from 'react';
import Balance from './Balance';
import TransferForm from './TransferForm';
import ConnectButton from './ConnectButton';

function MainContent({ loading, web3, balance, accounts, recipient, amount, handleRecipientChange, handleAmountChange, sendFunds, connectToMetaMask }) {
  return (
    <div className="mt-4">
      <div className="container bg-glassmorphic p-4 rounded shadow">
        <h1 className="text-center text-primary mb-4">Boost Your Marketing with Blockchain</h1>
        <div className="row justify-content-center">
          <div className="col-md-8">
            {loading ? (
              <p className="text-center">Loading Web3...</p>
            ) : web3 ? (
              <>
                <p className="text-center">Connected to Web3</p>
                <Balance balance={balance} />
                <TransferForm recipient={recipient} amount={amount} handleRecipientChange={handleRecipientChange} handleAmountChange={handleAmountChange} sendFunds={sendFunds} />
              </>
            ) : (
              <ConnectButton connectToMetaMask={connectToMetaMask} />
            )}
            {accounts && accounts.length > 0 && <p className="text-center">Connected Account: {accounts[0]}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
