import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export default function NavBar() {
  return (
    <div>
       

  

      
     
      <Navbar bg="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="public\images\Navlogo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
     
    
  



    </div>
  );
}
