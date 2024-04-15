import React from 'react';

function ProductCarousel() {
  const products = [
    {
      id: 1,
      name: 'NFT Artwork Collection',
      description: 'A collection of digital artworks stored on the blockchain as NFTs.',
      image: 'https://img.icons8.com/external-wanicon-solid-wanicon/64/external-nft-nft-wanicon-solid-wanicon-1.png',
    },
    {
      id: 2,
      name: 'Decentralized Finance Platform',
      description: 'An open finance platform that enables trustless and permissionless financial services.',
      image: 'https://img.icons8.com/ios/100/dapp.png',
    },
    {
      id: 3,
      name: 'Blockchain Gaming Marketplace',
      description: 'A marketplace for buying, selling, and trading in-game items as NFTs.',
      image: 'https://img.icons8.com/wired/64/marketplace-hub.png',
    },
  ];

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Featured Products</h2>
      <div className="row">
        {products.map(product => (
          <div key={product.id} className="col-lg-4 mb-4">
            <div className="card h-100">
              <img src={product.image} className="card-img-top" alt={product.name} />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductCarousel;
