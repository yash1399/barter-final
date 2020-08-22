const HomePage = () => {
    return (
        <>
        <div className="Container" >
          Nava  <Navbar collapseOnSelect sticky='top' expand='lg'className="navbar-top">
                <Navbar.Brand href="/home-page">BARTER</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Form inline className="mr-auto">
                    <FormControl size="sm" type="text" placeholder="Search" className="mr-sm-2" />
                    <Button href="/search" className="nav-button" variant="custom">Search</Button>
                </Form>
                    <Nav className="nav-item ml-auto">
                        <Nav.Link className="nav-link-about-us"  variant="custom" href="/about-us">About Us</Nav.Link>
                        <Nav.Link className="nav-link-connection" variant="custom" href="/connections">Connections</Nav.Link>
                        <Nav.Link className="nav-link-upload" variant='customn' href="/upload">Product Upload</Nav.Link>
                        <Nav.Link className="nav-link-list" variant="custom" href="/product-list">Product List</Nav.Link>
                        <Button className="nav-button mx-2" variant="custom" href="/registration">Register</Button>
                        <Button className="nav-button" variant="custom" href="/login">Login</Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>