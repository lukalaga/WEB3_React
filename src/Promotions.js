import React from 'react';

function Promotions() {
  const promotions = [
    {
      id: 1,
      title: 'Blockchain Conference Discount',
      description: 'Get 20% off on tickets to the largest blockchain conference of the year! Join industry experts and thought leaders to explore the latest trends and innovations in blockchain technology.',
      image: 'https://img.icons8.com/clouds/100/blockchain-technology.png',
    },
    {
      id: 2,
      title: 'Web3 Development Workshop',
      description: 'Sign up now for our Web3 development workshop and learn how to build decentralized applications (dApps) using Ethereum and other blockchain technologies.',
      image: 'https://img.icons8.com/doodle/96/workshop.png',
    },
    {
      id: 3,
      title: 'Ethereum NFT Sale',
      description: 'Discover unique digital collectibles on our Ethereum NFT marketplace. Limited edition artworks, gaming items, and more!',
      image: 'https://img.icons8.com/external-prettycons-lineal-color-prettycons/98/external-ethereum-crypto-and-currency-prettycons-lineal-color-prettycons-7.png',
    },
    {
      id: 4,
      title: 'Blockchain Masterclass Series',
      description: 'Enroll in our Blockchain Masterclass Series and gain in-depth knowledge about blockchain technology, smart contracts, and decentralized finance (DeFi). Limited seats available!',
      image: 'https://img.icons8.com/ios-filled/50/blockchain.png',
    },
  ];

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Special Promotions</h2>
      <div className="row">
        {promotions.map((promotion) => (
          <div key={promotion.id} className="col-lg-3 col-md-6 mb-4">
            <div className="card h-100">
              <img src={promotion.image} className="card-img-top" alt={promotion.title} />
              <div className="card-body">
                <h5 className="card-title">{promotion.title}</h5>
                <p className="card-text">{promotion.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Promotions;
