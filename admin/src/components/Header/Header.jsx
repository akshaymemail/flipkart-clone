import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link} from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux'
import {adminLogoutAction} from '../../redux/admin/authentication/actions'

function Header() {
  // admin signin state 
  const {isLoggedIn, user} = useSelector(state => state.adminSignin)

  const dispatch = useDispatch()
  const handleLogout = e => {
    dispatch(adminLogoutAction())
  }
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container fluid >
          <Link className='navbar-brand' to="/">Admin Dashboard</Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto" >
              {
                isLoggedIn 
                ? (
                  <>
                    <li className="navbar-item"><Link className='nav-link' to='#' >{user.fullName}</Link></li>
                    <li className="navbar-item"><Link className='nav-link' to='#' onClick={handleLogout} > Logout </Link></li>
                  </>
                )
                : (<><li className="navbar-item"><Link className='nav-link' to='/login'> Login </Link></li>
                <li className="nav-item"><Link className='nav-link' to='/signup'> Signup </Link></li></>)
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
