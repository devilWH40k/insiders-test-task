import { useState } from 'react'

import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import type { RootState } from '../../store'
import type { AppDispatch } from '../../store'
import { setCurrentUser } from '../../store/usersSlice'

import { Link, useNavigate } from 'react-router-dom'
import styles from './LoginPage.module.scss'

export default function LoginPage() {
  const navigate = useNavigate()

  const dispatch = useDispatch<AppDispatch>()
  const users = useSelector((state: RootState) => state.users.users)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!email || !password) {
      setError('Please, fill the fields to proceed.')
      return
    }

    const existingUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (!existingUser) {
      setError('Wrong email or password.')
      return
    }
    
    dispatch(setCurrentUser(existingUser))

    setEmail('')
    setPassword('')
    navigate('/dashboard')
  }

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2 className={styles.title}>Login</h2>
        <input
          type="email"
          placeholder="Email"
          className={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className={styles.input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className={styles.error}>{error}</p>}

        <button type="submit" className={styles.button}>
          Sign In
        </button>

        <p className={styles.registerLink}>
          Don't have an account?{' '}
          <Link to="/register">Register</Link>
        </p>
      </form>
    </div>
  );
}
