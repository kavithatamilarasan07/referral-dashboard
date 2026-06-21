import {useNavigate, useParams} from 'react-router-dom'
import './index.css'

function ReferralDetails() {
  const {id} = useParams()
  const navigate = useNavigate()
const newReferral = {
  id: Date.now(),
  userEmail: currentUser,
  name,
  service,
  profit: Number(profit),
}
  return (
    <div className="details-container">
      <div className="details-card">
        <h1 className="details-heading">
          Referral Details
        </h1>

        <p className="detail-text">
          Referral ID: {id}
        </p>

        <br />

        <button
          className="logout-btn"
          onClick={() => navigate('/')}
        >
          Back to Dashboard
        </button>
      </div>
    </div>
  )
}

export default ReferralDetails