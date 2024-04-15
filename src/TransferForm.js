import React from 'react';

function TransferForm({ recipient, amount, handleRecipientChange, handleAmountChange, sendFunds }) {
  return (
    <>
      <div className="form-group">
        <label>Recipient:</label>
        <input type="text" className="form-control" value={recipient} onChange={handleRecipientChange} />
      </div>
      <div className="form-group">
        <label>Amount:</label>
        <input type="number" className="form-control" value={amount} onChange={handleAmountChange} />
      </div>
      <button className="btn btn-primary btn-block" onClick={sendFunds}>Send Funds</button>
    </>
  );
}

export default TransferForm;
