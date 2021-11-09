import React, { useState } from 'react'
import { 
    Navbar,
    Collapse,
    NavbarToggler,
    Nav,
    NavbarBrand,
    NavLink,
    NavItem,
    Container,
    UncontrolledDropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle
 } from 'reactstrap'

function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)
    return (
        <>
           <Navbar expand="md" className="navbar-light mb-3">
            <Container>
            <NavbarBrand href="/">NewsViewer</NavbarBrand>
            <NavbarToggler onClick={toggle}/>
            <Collapse isOpen={isOpen} navbar>
             <Nav className="ms-auto" navbar>
                <NavItem>
                     <NavLink href="/">Home</NavLink>
                 </NavItem>
                 <NavItem>
                     <NavLink href="/headlines">Headlines</NavLink>
                 </NavItem>
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                        Categories
                    </DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem>
                            Technnology
                        </DropdownItem>
                        <DropdownItem>
                            Health
                        </DropdownItem>
                        <DropdownItem>
                            Entertainment
                        </DropdownItem>
                        <DropdownItem>
                            Science
                        </DropdownItem>
                        <DropdownItem>
                            Sport
                        </DropdownItem>
                    </DropdownMenu>
                    </UncontrolledDropdown>
                 <NavItem>
                     <NavLink href="/">About</NavLink>
                 </NavItem>
             </Nav>
            </Collapse>
            </Container>
           </Navbar> 
        </>
    )
}

export default Header
