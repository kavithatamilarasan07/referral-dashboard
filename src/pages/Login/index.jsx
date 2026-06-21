import {useState} from 'react'
import {useNavigate, Link} from 'react-router-dom'
import './index.css'

function Login() {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmitForm = event => {
    event.preventDefault()

    const storedUser = JSON.parse(localStorage.getItem('user'))

    if (
      storedUser &&
      storedUser.email === email &&
      storedUser.password === password
    ) {
      localStorage.setItem('userEmail', email)
      navigate('/')
    } else {
      alert('Invalid credentials or user not registered')
    }
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-heading">Referral Dashboard Login</h1>

        <form onSubmit={onSubmitForm}>
          <div className="input-container">
            <label className="label" htmlFor="email">Email</label>
            <input
              id="email"
              className="input"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Enter Email"
            />
          </div>

          <div className="input-container">
            <label className="label" htmlFor="password">Password</label>
            <input
              id="password"
              className="input"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Enter Password"
            />
          </div>

          <button className="login-btn" type="submit">
            Sign In
          </button>
        </form>

        {/* 👇 Signup link */}
        <p style={{marginTop: '10px'}}>
          New user? <Link to="/signup">Create account</Link>
        </p>
      </div>
    </div>
  )
}

export default Login