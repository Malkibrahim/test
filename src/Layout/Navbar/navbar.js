import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Input,
  Button
} from 'reactstrap';
import Image from 'react-bootstrap/Image';
// import { Form } from 'react-bootstrap';
import navStyles from './nav.module.css';
const WelcomeNavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle =() => setIsOpen(!isOpen);

  return (
    <div className={navStyles.navbarStyle}>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/"><Image style={{width:"141px",height:"84px"}} src="./images/logo.png"/></NavbarBrand>
        <NavbarToggler onClick={toggle}/>
        <Collapse isOpen={isOpen} navbar>
       <Nav className="mR-auto" navbar>
        <NavItem>
        <Input placeholder="search"className={navStyles.searchInput} style={{ height:'56.99px',borderRadius:'58px',width:'417px'}} ></Input>
        </NavItem> 
        <NavItem>
        <Image style={{width:"44px",height:"40px",marginTop:'9px'}}  src="./images/search.png"/>
        </NavItem>
        </Nav>
        {/* <div style={{marginLeft:'80px'}} > */}
        <Nav className="ml-auto" navbar style={{ backgroundColor:"#EBC010",width:'562px',margin:"0px"}}>
            <NavItem>
              <NavLink href="#"  style={{padding:'37px',marginLeft: '79px',fontFamily:'tahoma',fontSize:'20px',color:'#494848'}}>About Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#"  style={{padding:'37px',marginLeft: '79px',fontFamily:'tahoma',fontSize:'20px',color:'#494848'}}>Sign In</NavLink>
            </NavItem>
            </Nav>
         <Nav className="ml-auto" navbar>
            <NavItem>
              <Button style={{marginLeft:"6px", backgroundColor:"#0E0D0D",borderRadius:"58px",height:"48px",width:"138px",fontSize:"20px",fontFamily:"tahoma"}}>Sign Up</Button>
            </NavItem>
            {/* </div> */}
          </Nav>
          {/* <NavbarText>Simple Text</NavbarText> */}
        </Collapse>
      </Navbar>
    </div>
  );
}
// style={{fontFamily:'tahoma',fontSize:'25px',color:'#494848'}}


export default WelcomeNavBar;