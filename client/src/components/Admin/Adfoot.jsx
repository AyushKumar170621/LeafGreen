import React from 'react'
import "./foot.css"
import { Link } from 'react-router-dom'
const Adfoot = () => {
  return (
    <footer className="foot" >
        <ul className="fot-list" type="none">
            <li><Link to="/contact"><i className='fa fa-address-book'>&nbsp;</i>Contact Us</Link></li>
            <li><Link href="#"><i className='fa fa-thumbs-up'>&nbsp;</i>Follow Us</Link></li>
            <li><Link href="#"><i className='fa fa-question'>&nbsp;</i>Faq's</Link></li>
            <li><Link href="#"><i className='fa fa-list'>&nbsp;</i>Feedback</Link></li>
        </ul>
    </footer>
  )
}

export default Adfoot