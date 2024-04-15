import React from 'react';

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Alice Johnson',
      message: 'Web3 technology has revolutionized the way we interact with the internet. Its decentralized nature ensures data privacy and security like never before.',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      name: 'Bob Smith',
      message: 'With Web3, we have the power to own our digital assets and identities, leading to greater control and autonomy in the digital world.',
      image: 'https://via.placeholder.com/150',
    },
  ];

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Customer Testimonials</h2>
      <div className="row">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="col-lg-6 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <p className="card-text">{testimonial.message}</p>
              </div>
              <div className="card-footer">
                <img src={testimonial.image} className="rounded-circle mr-2" alt={testimonial.name} style={{ width: '50px', height: '50px' }} />
                <span className="font-weight-bold">{testimonial.name}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
