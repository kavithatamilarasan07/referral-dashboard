import {useState} from 'react'
import {useNavigate, Link} from 'react-router-dom'
import './index.css'

function Signup() {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmitSignup = event => {
    event.preventDefault()

    if (email.trim() === '' || password.trim() === '') {
      alert('Fill all fields')
      return
    }

    const user = {
      email,
      password,
    }

    localStorage.setItem('user', JSON.stringify(user))

    alert('Signup successful!')
    navigate('/login')
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-heading">Signup</h1>

        <form onSubmit={onSubmitSignup}>
          <div className="input-container">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Enter Email"
            />
          </div>

          <div className="input-container">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Enter Password"
            />
          </div>

          <button className="login-btn" type="submit">
            Sign Up
          </button>
        </form>

        <p style={{marginTop: '10px'}}>
          Already have account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  )
}

export default Signup