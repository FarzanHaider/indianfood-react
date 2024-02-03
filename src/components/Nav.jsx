
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <>
      <nav>
        <img src="public\images\1.jpeg" alt="" />
        <ul>
          <Link to={"/"}>
            <li>Home</li>
          </Link>
          <Link to={"/Menu"}>
            <li>Menu</li>
          </Link>
          <Link to={"/About"}>
            <li>About</li>
          </Link>
          <Link to={"/Contact"}>
            <li>Contact</li>
          </Link>
        </ul>
      </nav>
    </>
  )
}

export default Nav
