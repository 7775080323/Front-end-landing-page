
import React, { useState } from 'react';
import styles from '../styles/Landing.module.css';
import { FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Landing = ({ onStart }) => {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <section className={styles.page}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>📝 Do List</div>
        <ul>
          <li>About Us</li>
          <li>Features</li>
          <li>Pricing</li>
          <li>Contact</li>
          <li className={styles.login}>Login</li>
          <li className={styles.signup}>Sign Up</li>
        </ul>
      </nav>

      <div className={styles.hero}>
        <div className={styles.text}>
          <h2>
            Simplify Your Life with Our <br />
            <strong>Todo App</strong>
          </h2>
          <p>
            Stay organized and boost your productivity with our intuitive todo website.
            Experience a modern approach to task management that fits your lifestyle.
          </p>

          <div className={styles.buttons}>
            <button onClick={onStart}>Get Started</button>
            <button className={styles.secondary}>Learn More</button>
          </div>

          <div className={styles.boxesWrapper}>
            <div className={styles.imageBox}>
              <p>Your Tasks. Our Tools.</p>
              <img src="/landing start photo.png" alt="Task Demo" />
            </div>

            <div className={styles.sideBox}>
              <h3>Organize Achieve Relax</h3>
              <p>Turn Clutter into clarity,chaos into control.</p>
              <button className={styles.secondary}>Get Started Today</button>
              <button className={styles.secondary}>Discover Feature</button>
            </div>
          </div>

          <div className={styles.brands}>
            {['Google', 'Facebook', 'YouTube', 'Pinterest', 'Twitch'].map((brand) => (
              <span key={brand}>{brand}</span>
            ))}
          </div>
        </div>
      </div>

      <section className={styles.features}>
        <h3>Transform Your Productivity with Our <br />Innovative To-Do List Features</h3>
        <div className={styles.featureGrid}>
          {["User-Friendly Interface", "Collaborate & Share", "Effective Collaboration", "Seamless Access"].map((title, index) => (
            <div className={styles.featureCard} key={index}>
              <h4>{`0${index + 1}`}</h4>
              <h5>{title}</h5>
              <p>{[
                "Our platform offers seamless navigation to boost your efficiency.",
                "Work better together with task sharing and real-time updates.",
                "Assign tasks and work together on achieving your goals faster.",
                "Access and manage your tasks on the go with our mobile support."
              ][index]}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.testimonials}>
        <h3>Customer Testimonials</h3>
        <p>This tool has transformed my productivity and organization!</p>
        <div className={styles.testimonialContent}>
          <div className={styles.quoteBox}>
            <p>"Using this website has made my tasks so much easier! I can't imagine my day without it."</p>
            <div className={styles.author}>– Shreel Gosin, Project Manager, TechCorp</div>
            <div className={styles.socialIcons}></div>
          </div>
          <div className={styles.testimonialImage}>
            <img src="/Testimonial.png" alt="Testimonial" />
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <img src="/Start Organizing Your Life Today.png" alt="App Preview" />
        <div className={styles.ctaText}>
          <h4>Start Organizing Your Life Today</h4>
          <p>Join us now and transform your productivity with our intuitive to-do list platform!</p>
          <div className={styles.ctaButtons}>
            <button onClick={onStart}>Start Organizing</button>
            <button className={styles.secondary}>Learn More</button>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerTop}>
          <div className={styles.newsletter}>
            <h5>ToDo Mail</h5>
            <p>Subscribe to our newsletter to stay updated.</p>
            <div className={styles.subscribeForm}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button onClick={handleSubscribe}>Join</button>
              {subscribed && (
                <div className={styles.thankYouPopup}> Thank you for subscribing!</div>
              )}
            </div>
          </div>

          <div className={styles.links}>
            <div>
              <h6>Useful Links</h6>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Features</li>
                <li>Blog Posts</li>
                <li>FAQs</li>
              </ul>
            </div>
            <div>
              <h6>Resources</h6>
              <ul>
                <li>Help center</li>
                <li>Guide</li>
                <li>Community Forum</li>
                <li>Feedback</li>
                <li>Support</li>
              </ul>
            </div>
            <div>
              <h6>Connect With Us</h6>
              <ul className={styles.socialLinks}>
                <li><FaInstagram className={styles.icon} /> Instagram</li>
                <li><FaTwitter className={styles.icon} /> Twitter</li>
                <li><FaLinkedin className={styles.icon} /> LinkedIn</li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <span>© 2025 ToDoList. All rights reserved.</span>
        </div>
      </footer>
    </section>
  );
};

export default Landing;