import React from 'react'

export default function Card() {
  return (
    <div>
      <div className="card" style={{ width: '15rem' , height: '10rem', borderBlockColor: 'blackSolid', backgroundColor: 'silver'}}>
      <div className="card-body">
      <h6 className="card-title">Rent per month</h6>
      <h3 className="card-title">Rs.5000</h3>
      <h6 className="card-subtitle mb-2 text-muted">Total due</h6>
      <h3 className="card-title">Rs.3000</h3>
      </div>
      </div>
    </div>
  )
}




