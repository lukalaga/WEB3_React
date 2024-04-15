import React, { useState } from 'react';

function NewsletterSignup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    interests: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted data:', formData);
    setFormData({
      name: '',
      email: '',
      company: '',
      interests: '',
    });
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Sign Up for Our Newsletter</h2>
      <div className="card p-4">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="company">Company</label>
            <input
              type="text"
              className="form-control"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Enter your company name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="interests">Interests</label>
            <input
              type="text"
              className="form-control"
              id="interests"
              name="interests"
              value={formData.interests}
              onChange={handleChange}
              placeholder="Enter your interests (optional)"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}

export default NewsletterSignup;
