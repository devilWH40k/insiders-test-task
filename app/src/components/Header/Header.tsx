import { Link, useNavigate } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { logout } from '../../store/usersSlice'

import styles from './Header.module.scss'

export default function Header() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch(logout())
    navigate('/login') 
  }

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.left}>
          <h3 className={styles.logo}>Insiders</h3>
          <Link to="/dashboard" className={styles.link}>Dashboard</Link>
          <Link to="/dashboard/profile" className={styles.link}>Profile</Link>
          <Link to="/dashboard/settings" className={styles.link}>Settings</Link>
          <Link to="/dashboard/todo" className={styles.link}>Todo</Link>
        </div>
        <button className={styles.logoutButton} onClick={handleLogout}>
          Logout
        </button>
      </nav>
    </header>
  );
}
