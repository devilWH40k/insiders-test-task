import { useSelector } from 'react-redux'
import type { RootState } from '../../store'

import styles from './DashboardPage.module.scss'

export default function DashboardPage() {
  const currentUser = useSelector((state: RootState) => state.users.currentUser)

  return (
    <>
      <h1>Dashboard Page</h1>
      <p className={styles.greet}>Welcome, {currentUser?.email}!</p>
    </>
  );
}
