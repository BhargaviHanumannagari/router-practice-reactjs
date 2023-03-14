// Write your JS code here
import {Link} from 'react-router-dom'

const Header = () => (
  <ul className="nav-menu">
    <img
      src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
      alt={wave}
    />
    <h1 className="heading">wave</h1>
    <li>
      <Link exact className="nav-link" to="/">
        Home
      </Link>
    </li>
    <li>
      <Link exact className="nav-link" to="/about">
        About
      </Link>
    </li>
    <li>
      <Link exact className="nav-link" to="/contact">
        Contact
      </Link>
    </li>
  </ul>
)
