import {useParams, useNavigate} from 'react-router-dom'
import './index.css'

function ReferralDetails() {
  const {id} = useParams()
  const navigate = useNavigate()

  const referrals =
    JSON.parse(localStorage.getItem('referrals')) || []

  const referral = referrals.find(
    item => String(item.id) === id,
  )

  if (!referral) {
    return (
      <div className="details-container">
        <h1>Referral Not Found</h1>
      </div>
    )
  }

  return (
    <div className="details-container">
      <div className="details-card">
        <h1 className="details-heading">
          Referral Details
        </h1>

        <div className="detail-row">
          <span className="detail-label">ID</span>
          <span className="detail-value">
            {referral.id}
          </span>
        </div>

        <div className="detail-row">
          <span className="detail-label">Name</span>
          <span className="detail-value">
            {referral.name}
          </span>
        </div>

        <div className="detail-row">
          <span className="detail-label">
            Service
          </span>
          <span className="detail-value">
            {referral.service}
          </span>
        </div>

        <div className="detail-row">
          <span className="detail-label">
            Profit
          </span>
          <span className="detail-value">
            ₹{referral.profit}
          </span>
        </div>

        <button
          type="button"
          className="back-btn"
          onClick={() => navigate('/')}
        >
          Back to Dashboard
        </button>
      </div>
    </div>
  )
}

export default ReferralDetails