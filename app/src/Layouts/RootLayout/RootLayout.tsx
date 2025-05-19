import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import styles from './RootLayout.module.scss';

export default function RootLayout() {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
}
