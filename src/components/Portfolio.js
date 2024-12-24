import React from 'react';
import PortfolioTable from './PortfolioTable'

const Portfolio = () => {
  return (
    <div style={styles.container}>
      {/* Focus Section */}
      <section style={styles.section}>
        <h1 style={styles.heading}>Our Focus</h1>
        <div style={styles.focusContainer}>
          <div style={styles.focusItem}>
            <h3 style={styles.focusTitle}>Consumer Spending</h3>
            <p style={styles.focusDescription}>
              We target investments in companies driving innovation and growth in consumer goods and services.
            </p>
          </div>
          <div style={styles.divider}></div>
          <div style={styles.focusItem}>
            <h3 style={styles.focusTitle}>Online Marketplace</h3>
            <p style={styles.focusDescription}>
              Our portfolio emphasizes platforms revolutionizing e-commerce and digital marketplaces globally.
            </p>
          </div>
          <div style={styles.divider}></div>
          <div style={styles.focusItem}>
            <h3 style={styles.focusTitle}>Legacy Stocks</h3>
            <p style={styles.focusDescription}>
              We focus on well-established companies with a proven track record of delivering consistent returns.
            </p>
          </div>
        </div>
      </section>

      {/* Select Investments Section */}
      <section style={styles.section}>
        <h2 style={styles.subHeading}>Select Investments</h2>
        <div style={styles.investmentsContainer}>
          <img src="/assets/companylogos/amazon_processed.png" alt="Amazon" style={styles.investmentImage} />
          <img src="/assets/companylogos/costco_processed.png" alt="Costco" style={styles.investmentImage} />
          <img src="/assets/companylogos/pm_processed.png" alt="Philip Morris" style={styles.investmentImage} />
          <img src="/assets/companylogos/shopify_processed.png" alt="Shopify" style={styles.investmentImage} />
          <img src="/assets/companylogos/tesla_processed.png" alt="Tesla" style={styles.investmentImage} />
          <img src="/assets/companylogos/uber_processed.png" alt="Uber" style={styles.investmentImage} />
        </div>
      </section>

      {/* Portfolio Table */}
      <section style={styles.section}>
        <PortfolioTable />
      </section>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    backgroundColor: '#d7d8d5',
    padding: '12rem',
  },
  section: {
    textAlign: 'center',
    marginBottom: '3rem',
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '1.5rem',
    color: '#000',
  },
  subHeading: {
    fontSize: '2rem',
    marginBottom: '1rem',
    color: '#000',
  },
  focusContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    padding: '3rem 0',
    borderBottom: '2px solid #000',
  },
  focusItem: {
    maxWidth: '300px',
    textAlign: 'center',
    padding: '1rem',
    color: '#000',
  },
  focusTitle: {
    fontSize: '1.8rem',
    marginBottom: '0.5rem',
    fontWeight: 'bold',
  },
  focusDescription: {
    fontSize: '1rem',
    color: '#666',
  },
  divider: {
    width: '2px',
    backgroundColor: '#000',
    margin: '0 2rem',
    height: 'auto',
  },
  investmentsContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '1.5rem',
    borderTop: '2px solid #000',
    paddingTop: '2rem',
  },
  investmentImage: {
    width: '150px',
    height: 'auto',
  },
};

export default Portfolio;
