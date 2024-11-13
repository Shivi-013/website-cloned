
import './NewsletterSignup.css';



  return (
    <div className="newsletter-container">
      <div className="newsletter-box">
        <h2>STAY INFORMED WITH</h2>
        <h1>TEAM RUDRA’S MARS MISSION</h1>
        <p className="newsletter-text">Sign up to receive mission updates, exclusive insights, and event announcements straight from Team Rudra! Join our journey as we push the boundaries of robotics and exploration.</p>
        
        <form onSubmit={handleSubmit} className="newsletter-form">
          <div className="input-group">
            <label htmlFor="name">Name *</label>
            <input 
              type="text" 
              id="name" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              placeholder="Your Name"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Your Mail *</label>
            <input 
              type="email" 
              id="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="Your Email"
              required
            />
          </div>
          <button type="submit" className="newsletter-button">JOIN THE MISSION</button>
        </form>
      </div>
    </div>
  );


export default page;
