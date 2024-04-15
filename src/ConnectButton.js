import React from 'react';

function ConnectButton({ connectToMetaMask }) {
  return (
    <button className="btn btn-primary btn-block" onClick={connectToMetaMask}>Connect to MetaMask</button>
  );
}

export default ConnectButton;
