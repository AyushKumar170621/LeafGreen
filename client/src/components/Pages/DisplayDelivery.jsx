import React from 'react'

const DisplayDelivery = () => {
  return (
    <div className='container'>
    <div className="shipping-progress">
      <div className="checkpoint">
        <i className="fas fa-shopping-cart"></i>
        <p>Ordered</p>
        <div className="pulse"></div> {/* Pulsating line */}
      </div>
      <div className="checkpoint">
        <i className="fas fa-shipping-fast"></i>
        <p>Shipped</p>
        <div className="wave-container">
          <div className="sine-wave"></div> {/* Sinusoidal wave */}
        </div>
      </div>
      <div className="checkpoint">
        <i className="fas fa-truck"></i>
        <p>Out for Delivery</p>
        <div className="wave-container">
          <div className="sine-wave"></div> {/* Sinusoidal wave */}
        </div>
      </div>
      <div className="checkpoint">
        <i className="fas fa-check-circle text-success"></i>
        <p>Delivered</p>
        <div className="wave-container">
          <div className="sine-wave"></div> {/* Sinusoidal wave */}
        </div>
      </div>
    </div>
    </div>
  )
}

export default DisplayDelivery