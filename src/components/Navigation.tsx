import { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { NavLink, Link } from 'react-router-dom'
import Logo from '../assets/img/gunmanLogo.png'

const Navigation = () => {

	const [expanded, setExpanded] = useState(false);

	const handleNavItemClick = () => {
		setExpanded(false);
	};

	return (
		<Navbar id='Navbar' variant="light" expand="md" expanded={expanded} onToggle={() => setExpanded(!expanded)}>
			<Container>
				<Navbar.Brand as={Link} to="/">
					<img src={Logo} alt="Man pointing a gun, being logo for the webpage" />
					<span className='logo-text'>Code Hunt</span>
				</Navbar.Brand>

				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav" >
					<Nav className="px-3 ms-auto collapsing-items" onClick={handleNavItemClick} >
						<Nav.Link className='collapsing-item' as={NavLink} end to="/movies">Movies</Nav.Link>
						<Nav.Link className='collapsing-item' as={NavLink} end to="/genres">Genres</Nav.Link>
						<Nav.Link className='collapsing-item' as={NavLink} end to="/api">API</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default Navigation
