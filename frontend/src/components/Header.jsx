import React from 'react'
import {Navbar, Nav, Container, Badge, NavDropdown} from 'react-bootstrap' // Subcomponents Navbar.Brand
import {FaShoppingCart, FaUser} from 'react-icons/fa'
import logo from '../assets/logo.png'
import {LinkContainer} from 'react-router-bootstrap'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'

const Header = () => {
  const { cartItems } = useSelector((state) => state.cart)
  const { userInfo } = useSelector((state) => state.auth)

  const logoutHandler = () => {
    console.log('logout')
  }

  return (
    <header>
       <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
                <img src={logo} alt="ProShop" />
                ProShop
                </Navbar.Brand> 
          </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
            <Navbar.Collapse>
                <Nav className="ms-auto">
                  <LinkContainer to="/cart">
                    <Nav.Link><FaShoppingCart /> Cart
                    {
                      cartItems.length > 0 && (
                        <Badge pill bg='success' style={{marginLeft: '5px'}}>
                          {cartItems.reduce((a, c) => a + c.qty, 0 )}
                        </Badge>
                      )
                    }
                    
                    </Nav.Link>  
                  </LinkContainer>
                  {userInfo ? (
                    <NavDropdown title={userInfo.name} id='username'>
                      <LinkContainer to='/profile'>
                      <NavDropdown.Item>Profile</NavDropdown.Item>
                      </LinkContainer>
                      <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                    </NavDropdown>
                  ) : (
                    <LinkContainer to="/login">
                    <Nav.Link href='/login'><FaUser /> Sign In</Nav.Link>
                  </LinkContainer>
                  ) }
                  
                </Nav>
            </Navbar.Collapse>
        </Container>
       </Navbar>
    </header>
  )
}

export default Header
