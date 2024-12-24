import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logoContainer}>
        {/* Clickable logo links to Home */}
        <NavLink to="/" style={styles.logoLink}>
          <img
            src="/assets/Logo.png"
            alt="Techwood Capital Logo"
            style={styles.logo}
          />
        </NavLink>
        <span style={styles.brandName}>Techwood Capital</span>
      </div>
      <ul style={styles.navLinks}>
        <li>
          <NavLink
            to="/"
            style={({ isActive }) =>
              isActive
                ? { ...styles.navLink, ...styles.activeNavLink }
                : styles.navLink
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            style={({ isActive }) =>
              isActive
                ? { ...styles.navLink, ...styles.activeNavLink }
                : styles.navLink
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/portfolio"
            style={({ isActive }) =>
              isActive
                ? { ...styles.navLink, ...styles.activeNavLink }
                : styles.navLink
            }
          >
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/team"
            style={({ isActive }) =>
              isActive
                ? { ...styles.navLink, ...styles.activeNavLink }
                : styles.navLink
            }
          >
            Team
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            style={({ isActive }) =>
              isActive
                ? { ...styles.navLink, ...styles.activeNavLink }
                : styles.navLink
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

// Updated styles
const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    background: '#D7D8D5', // Grey background for navbar
    position: 'fixed',
    width: '100%',
    top: 0,
    zIndex: 1000,
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
  logoLink: {
    display: 'inline-block',
  },
  logo: {
    width: '70px',
    height: '70px',
    cursor: 'pointer',
  },
  brandName: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#000', // Black text for "Techwood Capital"
    textTransform: 'uppercase',
  },
  navLinks: {
    listStyle: 'none',
    display: 'flex',
    gap: '2rem',
    margin: 0,
    marginRight: '5rem', // Move all buttons to the left by 3rem
  },
  navLink: {
    textDecoration: 'none',
    fontSize: '1rem',
    color: '#000', // Black text for links
    fontWeight: '500',
    position: 'relative',
    transition: 'color 0.3s ease-in-out',
  },
  activeNavLink: {
    color: '#000', // Same black color for active links
    borderBottom: '2px solid #000', // Underline for active link
  },
};

export default Navbar;
