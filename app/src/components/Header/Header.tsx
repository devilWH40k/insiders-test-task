import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <h3>Insiders</h3>
        {/* <Link to="/dashboard" className={styles.link}>Dashboard</Link>
        <Link to="/login" className={styles.link}>Login</Link>
        <Link to="/register" className={styles.link}>Register</Link> */}
      </nav>
    </header>
  );
}
