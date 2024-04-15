import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import './App.css';
import Navbar from './Navbar';
import ProductCarousel from './ProductCarousel';
import Testimonials from './Testimonials';
import MainContent from './MainContent';
import Promotions from './Promotions';
import NewsletterSignup from './NewsletterSignup';

function App() {
  const [loading, setLoading] = useState(true);
  const [web3, setWeb3] = useState(null);
  const [accounts, setAccounts] = useState([]);
  const [contract, setContract] = useState(null);
  const [balance, setBalance] = useState(0);
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState(0);

  // Contract ABI
  const SimpleWalletABI = [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "Sent",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "balances",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "deposit",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address payable",
          "name": "_to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "send",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ];


  useEffect(() => {
    async function loadWeb3() {
      if (window.ethereum) {
        try {
          await window.ethereum.request({ method: 'eth_requestAccounts' });
          const web3Instance = new Web3(window.ethereum);
          setWeb3(web3Instance);
          const accs = await web3Instance.eth.getAccounts();
          setAccounts(accs);
          const contractAddress = '0x18DeDb5D21da03637d5876094f27E994337DFA59';
          const deployedContract = new web3Instance.eth.Contract(SimpleWalletABI, contractAddress);
          setContract(deployedContract);
    
          setLoading(false);
        } catch (error) {
          console.error(error);
        }
      } else {
        console.error('MetaMask not detected');
      }
    }
    
    loadWeb3();
  }, []);

  const connectToMetaMask = async () => {
    try {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      console.log('Connected to MetaMask');
    } catch (error) {
      console.error(error);
    }
  };

  const sendFunds = async () => {
    try {
      await contract.methods.send(recipient, amount).send({ from: accounts[0] });
      console.log('Funds sent successfully');

      const updatedBalance = await contract.methods.balances(accounts[0]).call();
      setBalance(updatedBalance);
    } catch (error) {
      console.error('Error sending funds:', error);
    }
  };

  const handleRecipientChange = (event) => {
    setRecipient(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  return (
    <div>
      <Navbar />
      <ProductCarousel />
      <Testimonials />
      <MainContent 
        loading={loading} 
        web3={web3} 
        balance={balance} 
        accounts={accounts} 
        recipient={recipient} 
        amount={amount} 
        handleRecipientChange={handleRecipientChange} 
        handleAmountChange={handleAmountChange} 
        sendFunds={sendFunds} 
        connectToMetaMask={connectToMetaMask} 
      />
      <Promotions />
      <NewsletterSignup />
    </div>
  );
}

export default App;
