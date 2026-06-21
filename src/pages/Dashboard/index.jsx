import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import './index.css'

const initialReferrals = [
  {
    id: 1,
    userEmail: 'demo@gmail.com',
    name: 'Arun',
    service: 'Web Development',
    profit: 5000,
  },
  {
    id: 2,
    userEmail: 'demo@gmail.com',
    name: 'Priya',
    service: 'UI/UX Design',
    profit: 3000,
  },
  {
    id: 3,
    userEmail: 'demo@gmail.com',
    name: 'Karthik',
    service: 'Digital Marketing',
    profit: 4500,
  },
  {
    id: 4,
    userEmail: 'demo@gmail.com',
    name: 'Sanjay',
    service: 'SEO',
    profit: 2500,
  },
]

function Dashboard() {
  const navigate = useNavigate()

  const [referrals, setReferrals] = useState(() => {
    const savedData = localStorage.getItem('referrals')

    return savedData
      ? JSON.parse(savedData)
      : initialReferrals
  })

  const [searchInput, setSearchInput] = useState('')
  const [name, setName] = useState('')
  const [service, setService] = useState('')
  const [profit, setProfit] = useState('')

  const currentUser =
    localStorage.getItem('userEmail')

  useEffect(() => {
    localStorage.setItem(
      'referrals',
      JSON.stringify(referrals),
    )
  }, [referrals])

  const onClickLogout = () => {
    localStorage.removeItem('userEmail')
    navigate('/login')
  }

  const onClickRow = id => {
    navigate(`/referral/${id}`)
  }

  const onAddReferral = () => {
    if (
      name.trim() === '' ||
      service.trim() === '' ||
      profit.trim() === ''
    ) {
      alert('Please fill all fields')
      return
    }

    const newReferral = {
      id: Date.now(),
      userEmail: currentUser,
      name,
      service,
      profit: Number(profit),
    }

    setReferrals([...referrals, newReferral])

    setName('')
    setService('')
    setProfit('')
  }

  const onDeleteReferral = id => {
    const updatedList = referrals.filter(
      eachItem => eachItem.id !== id,
    )

    setReferrals(updatedList)
  }

  const filteredList = referrals
    .filter(
      item => item.userEmail === currentUser,
    )
    .filter(item =>
      item.name
        .toLowerCase()
        .includes(searchInput.toLowerCase()),
    )

  const totalProfit = filteredList.reduce(
    (acc, item) => acc + item.profit,
    0,
  )

  return (
    <div className="dashboard-container">
      <div className="top-section">
        <h1 className="dashboard-heading">
          Referral Dashboard
        </h1>

        <button
          type="button"
          className="logout-btn"
          onClick={onClickLogout}
        >
          Logout
        </button>
      </div>

      <div className="cards-container">
        <div className="card">
          <p className="card-title">
            Total Referrals
          </p>
          <h2 className="card-value">
            {filteredList.length}
          </h2>
        </div>

        <div className="card">
          <p className="card-title">
            Total Profit
          </p>
          <h2 className="card-value">
            ₹{totalProfit}
          </h2>
        </div>

        <div className="card">
          <p className="card-title">User</p>
          <h2 className="card-value">
            {currentUser || 'Guest'}
          </h2>
        </div>
      </div>

      <h3>Add Referral</h3>

      <div
        style={{
          display: 'flex',
          gap: '10px',
          marginBottom: '20px',
          flexWrap: 'wrap',
        }}
      >
        <input
          className="search-input"
          type="text"
          placeholder="Name"
          value={name}
          onChange={event =>
            setName(event.target.value)
          }
        />

        <input
          className="search-input"
          type="text"
          placeholder="Service"
          value={service}
          onChange={event =>
            setService(event.target.value)
          }
        />

        <input
          className="search-input"
          type="number"
          placeholder="Profit"
          value={profit}
          onChange={event =>
            setProfit(event.target.value)
          }
        />

        <button
          type="button"
          className="logout-btn"
          onClick={onAddReferral}
        >
          Add Referral
        </button>
      </div>

      <input
        className="search-input"
        type="search"
        placeholder="Search Name"
        value={searchInput}
        onChange={event =>
          setSearchInput(event.target.value)
        }
      />

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Service</th>
            <th>Profit</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {filteredList.map(eachItem => (
            <tr
              key={eachItem.id}
              onClick={() =>
                onClickRow(eachItem.id)
              }
              style={{cursor: 'pointer'}}
            >
              <td>{eachItem.id}</td>
              <td>{eachItem.name}</td>
              <td>{eachItem.service}</td>
              <td>₹{eachItem.profit}</td>

              <td>
                <button
                  type="button"
                  onClick={event => {
                    event.stopPropagation()
                    onDeleteReferral(
                      eachItem.id,
                    )
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Dashboard