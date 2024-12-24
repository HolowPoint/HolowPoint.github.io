import React from 'react';

function Home() {
  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div style={styles.overlay}></div>
        <div style={styles.heroContent}>
          <h1 style={styles.heroHeading}>
            Turn your investment strategy into a successful fund management business with Techwood Capital.
          </h1>
          <a href="/about" style={styles.heroButton}>Learn More</a>
        </div>
      </section>

      {/* Information Sections */}
      <section style={styles.infoSection}>
        <div style={styles.infoBlock}>
          <div style={styles.iconContainer}>
            <span style={styles.icon}>🌱</span>
          </div>
          <h2 style={styles.infoHeading}>An Investment in Your Future</h2>
          <p style={styles.infoText}>
            Techwood Capital partners with talented fund managers to launch and operate successful boutique funds. We provide a fixed-cost solution, support, and expertise to get you started faster.
          </p>
          <a href="/team" style={styles.infoButton}>Investment Managers</a>
        </div>
        <div style={styles.infoBlock}>
          <div style={styles.iconContainer}>
            <span style={styles.icon}>🤝</span>
          </div>
          <h2 style={styles.infoHeading}>Why Techwood Capital?</h2>
          <p style={styles.infoText}>
            Launching a fund on your own can be costly and time-consuming. Our turnkey solutions help save time and capital so you can focus on raising funds and investing them.
          </p>
          <a href="/portfolio" style={styles.infoButton}>Our Solutions</a>
        </div>
        <div style={styles.infoBlock}>
          <div style={styles.iconContainer}>
            <span style={styles.icon}>📊</span>
          </div>
          <h2 style={styles.infoHeading}>How We Help</h2>
          <p style={styles.infoText}>
            Our platform provides top-tier fund management services, helping you focus on what you do best: creating value for your investors.
          </p>
          <a href="/contact" style={styles.infoButton}>Contact Us</a>
        </div>
      </section>
    </div>
  );
}

// Styles for the Home page
const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    color: '#333',
  },
  heroSection: {
    height: '70vh',
    backgroundImage: 'url("/assets/background1.webp")', // Updated with correct image path
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#FFF',
    textAlign: 'center',
    padding: '2rem',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adds a dark overlay for text readability
    zIndex: 1,
  },
  heroContent: {
    position: 'relative',
    zIndex: 2,
    maxWidth: '800px',
  },
  heroHeading: {
    fontSize: '2.5rem',
    marginBottom: '1.5rem',
    lineHeight: '1.5',
  },
  heroButton: {
    display: 'inline-block',
    backgroundColor: '#28A745', // Green button
    color: '#FFF',
    padding: '0.75rem 1.5rem',
    textDecoration: 'none',
    borderRadius: '5px',
    fontSize: '1rem',
    transition: 'background-color 0.3s',
  },
  heroButtonHover: {
    backgroundColor: '#218838',
  },
  infoSection: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    padding: '3rem',
    backgroundColor: '#F9F9F9',
  },
  infoBlock: {
    maxWidth: '300px',
    textAlign: 'center',
  },
  iconContainer: {
    fontSize: '2rem',
    marginBottom: '1rem',
  },
  icon: {
    fontSize: '3rem',
  },
  infoHeading: {
    fontSize: '1.5rem',
    marginBottom: '1rem',
  },
  infoText: {
    fontSize: '1rem',
    marginBottom: '1.5rem',
    color: '#666',
  },
  infoButton: {
    display: 'inline-block',
    backgroundColor: '#007BFF',
    color: '#FFF',
    padding: '0.5rem 1rem',
    textDecoration: 'none',
    borderRadius: '5px',
    fontSize: '0.9rem',
    transition: 'background-color 0.3s',
  },
  infoButtonHover: {
    backgroundColor: '#0056b3',
  },
};

export default Home;
