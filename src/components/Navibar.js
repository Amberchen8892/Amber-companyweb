import React from 'react';
import { Nav, Navbar ,NavDropdown, Form, FormControl, Row, Col, DropdownButton,Dropdown, Button} from 'react-bootstrap';
import styled from "styled-components";

const Styles = styled.div`
.dropdown-menu{
   
    width: 250px   
}
.dropdown-menu a:hover{
    
    background-color:#e3f2fd;
    color: #0288d1

}
.dropdown-menu-item{
    margin-bottom:0;
    padding-bottom:0
}

`;
const StyleNav = styled.div`
.dropdown-menu{
   background-color:#37474f;
    width: 250px   
}
.dropdown-menu a:hover{
    
    background-color:#37474f;
    color: #0288d1

}
.dropdown-menu-item{
   
}

`;

export default function Navibar() {
    return (
        <div className="wrapper" style={{marginBottom:"50px"}}>
            <div className="top-bar" >
               <Row>
                   <Col xs={12} sm={12}>
                       <div style={{padding:"20px 50px"}}>
                           <ul style={{listStyleType:"none",display:"flex", flexDirection:"row",textAlign:"right",float:"right", justifyContent:"center", alignItems:"center"}}>
                               <li style={{ paddingRight:"20px"}}>
                                   <a style={{color:"white"}}>
                                   <i style={{color:"white", padding:"8px"}}class="fas fa-dollar-sign"></i>
                                   Sale - 88.888
                                   </a>
                               </li>
                               <li style={{ paddingRight:"20px"}}>
                                   <a style={{color:"white"}}> 
                                   <i style={{color:"white", padding:"8px"}} class="fas fa-phone-alt"></i>
                                   Support - 8019189943
                                   </a>
                               </li>
                               <li style={{ paddingRight:"20px"}}>
                                <div className="login-button">
                                    <StyleNav>
                               <DropdownButton id="dropdown-basic-button-1" title={<span><i style={{padding:"8px"}}class="fas fa-lock"></i>Log in</span>}>
  <Dropdown.Item href="http://localhost:3001" style={{display:"flex", height:"30px", alignItems:"center", marginBottom:"20px"}}><Button style={{width:"95%"}}variant="info">CRM <span style={{float:"right"}}><i class="fas fa-arrow-right"></i></span></Button> </Dropdown.Item>
  <Dropdown.Item href="#/action-1" style={{display:"flex", height:"30px", alignItems:"center", marginBottom:"20px"}}><Button style={{width:"95%"}} variant="info">Inventory Plus<span style={{float:"right"}}><i class="fas fa-arrow-right"></i></span></Button></Dropdown.Item>
  <Dropdown.Item href="http://localhost:3000" style={{display:"flex", height:"30px", alignItems:"center"}}><Button style={{width:"95%"}}variant="info">DealerFire <span style={{float:"right"}}><i class="fas fa-arrow-right"></i></span></Button></Dropdown.Item>
  
</DropdownButton>
</StyleNav></div>
                               </li>
                               <li style={{ paddingRight:"20px"}}>
                               <Button variant="info"><span><i style={{padding:"8px"}}class="fas fa-chart-line"></i>Demo Now</span></Button>
                               </li>
                           </ul>
                       </div>
                   </Col>
               </Row>
               <Row >
               <Navbar bg="light" expand="lg" style={{width:"100%",paddingLeft:"30px", paddingRight:"20px"}}>
  <Navbar.Brand href="#home">AMBER CHEN</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav" style={{marginTop:"10px", paddingLeft:"10px"}} >
    <Nav className="mr-auto" >
    <DropdownButton
  id="dropdown-item-button" title="FRANCHISE"
  style={{paddingRight:"10px", marginBottom:"10px"}}
  variant="light"
  
>
     
        <NavDropdown.Item >
        <Row>
    <Col md={12} lg={9} >
      <Row style={{width:"100%", display:"flex", justifyContent:"center"}}>
          <div style={{textAlign:"center"}}>
         <span style={{fontSize:"20px", color:"white"}} > <i class="fas fa-globe fa-2x"></i></span> 
          <p style={{textAlign:"center", marginTop:"20px"}}>SOLUTIONS FOR FRANCHISE DEALERS</p>
          </div>
      </Row>
      <NavDropdown.Divider />
      <Row>
      <Row style={{width:"100%", paddingTop:"10px"}}>
    <Col xs={12} md={4}>
    <div className="boxx" style={{textAlign:"center"}}>
             <div > <span style={{fontSize:"20px", color:"white"}} >  <i  class="fas fa-users   "></i></span></div> 
              <p   style={{ marginTop:"20px"}}>CRM</p>
              </div>
    </Col>
    <Col xs={12} md={4} >
    <div className="boxx">
             <span style={{fontSize:"20px", color:"white"}}  ><i class="fa fa-desktop " aria-hidden="true"></i></span> 
              <p  style={{ marginTop:"20px"}} >Websites</p>
              </div>
    </Col>
    <Col xs={12} md={4}>
    <div className="boxx">
    <span style={{fontSize:"20px", color:"white"}}  ><i class="fa fa-usd " aria-hidden="true"></i></span>
              <p  style={{ marginTop:"20px"}}>Sales/Marketing</p>
              </div>
    </Col>
  </Row>
  <Row style={{width:"100%"}}>
  <Col xs={12} md={4}>
  <div className="boxx">
  <span style={{fontSize:"20px", color:"white"}}  > <i class="fas fa-car "></i></span>
              <p  style={{ marginTop:"20px"}}>Inventory </p>
              </div>
  </Col>
  <Col xs={12} md={4}>
  <div className="boxx">
  <span style={{fontSize:"20px", color:"white"}}  >  <i class="fa fa-wrench" aria-hidden="true"></i></span>
              <p  style={{ marginTop:"20px"}}>Service</p>
              </div>
  </Col>
  <Col xs={12} md={4}>
  <div className="boxx">
  <span style={{fontSize:"20px", color:"white"}}  >  <i class="far fa-gem "></i></span>
              <p  style={{ marginTop:"20px"}}>Equity Mining</p>
              </div>
  </Col>

  </Row>
          
      </Row>
    </Col>
    <Col md={12} lg={3}>
    <Row>
        <h4>Resources</h4>
    </Row>
    <NavDropdown.Divider />
      
      <Row STYLE={{textAlign:"center"}}>
          <div style={{paddingLeft: "20px"}}>
              <p><span style={{paddingRight:"6px"}}><i class="far fa-folder-open"></i></span>CASE STUDY</p>
          </div>
          <div style={{paddingLeft: "20px"}}>
          <p><span style={{paddingRight:"6px"}}><i class="fa fa-file-text-o" aria-hidden="true"></i></span>WHITE PAPER</p>
          </div>
          <div style={{paddingLeft: "20px"}}> 
          <p><span style={{paddingRight:"6px"}}><i class="fa fa-file-video-o" aria-hidden="true"></i></span>VIDEO</p>
          </div>
          <div style={{paddingLeft: "20px"}}>
          <p><span style={{paddingRight:"6px"}}><i class="fa fa-phone-square" aria-hidden="true"></i></span>CONTACT SALES</p>
          </div>
          <div style={{paddingLeft: "20px"}}>
          <p style={{color:"#03a9f4", fontWeight:"bold"}}><span style={{paddingRight:"6px", color:"#03a9f4"}}><i class="fa fa-envelope-o" aria-hidden="true"></i></span>SUPPORT</p>
          </div>
          <div style={{paddingLeft: "20px"}}>
          <p style={{color:"#03a9f4", fontWeight:"bold"}}><span style={{paddingRight:"6px", color:"#03a9f4"}}><i class="fa fa-arrow-right" aria-hidden="true"></i></span>DEMO NOW!</p>
          </div>
      </Row>
     
    </Col>
  </Row>
        </NavDropdown.Item>
        
        
     
      </DropdownButton>
      <DropdownButton
  id="dropdown-item-button" title="INDEPENDENT-BHPH"
  style={{paddingRight:"10px", marginBottom:"10px"}} 
  variant="light"
>
        <NavDropdown.Item >
        <Row>
    <Col md={12} lg={9} >
      <Row style={{width:"100%", display:"flex", justifyContent:"center"}}>
          <div style={{textAlign:"center"}}>
         <span style={{fontSize:"20px", color:"white"}} > <i class="fas fa-globe fa-2x"></i></span> 
          <p style={{textAlign:"center", marginTop:"20px"}}>SOLUTIONS FOR FRANCHISE DEALERS</p>
          </div>
      </Row>
      <NavDropdown.Divider />
      <Row>
      <Row style={{width:"100%", paddingTop:"10px"}}>
    <Col xs={12} md={4}>
    <div className="boxx" style={{textAlign:"center"}}>
             <div > <span style={{fontSize:"20px", color:"white"}} >  <i  class="fas fa-users   "></i></span></div> 
              <p   style={{ marginTop:"20px"}}>CRM</p>
              </div>
    </Col>
    <Col xs={12} md={4} >
    <div className="boxx">
             <span style={{fontSize:"20px", color:"white"}}  ><i class="fa fa-desktop " aria-hidden="true"></i></span> 
              <p  style={{ marginTop:"20px"}} >Websites</p>
              </div>
    </Col>
    <Col xs={12} md={4}>
    <div className="boxx">
    <span style={{fontSize:"20px", color:"white"}}  ><i class="fa fa-usd " aria-hidden="true"></i></span>
              <p  style={{ marginTop:"20px"}}>Sales/Marketing</p>
              </div>
    </Col>
  </Row>
  <Row style={{width:"100%"}}>
  <Col xs={12} md={4}>
  <div className="boxx">
  <span style={{fontSize:"20px", color:"white"}}  > <i class="fas fa-car "></i></span>
              <p  style={{ marginTop:"20px"}}>Inventory </p>
              </div>
  </Col>
  <Col xs={12} md={4}>
  <div className="boxx">
  <span style={{fontSize:"20px", color:"white"}}  >  <i class="fa fa-wrench" aria-hidden="true"></i></span>
              <p  style={{ marginTop:"20px"}}>Service</p>
              </div>
  </Col>
  <Col xs={12} md={4}>
  <div className="boxx">
  <span style={{fontSize:"20px", color:"white"}}  >  <i class="far fa-gem "></i></span>
              <p  style={{ marginTop:"20px"}}>Equity Mining</p>
              </div>
  </Col>

  </Row>
          
      </Row>
    </Col>
    <Col md={12} lg={3}>
    <Row>
        <h4>Resources</h4>
    </Row>
    <NavDropdown.Divider />
      
      <Row STYLE={{textAlign:"center"}}>
          <div style={{paddingLeft: "20px"}}>
              <p><span style={{paddingRight:"6px"}}><i class="far fa-folder-open"></i></span>CASE STUDY</p>
          </div>
          <div style={{paddingLeft: "20px"}}>
          <p><span style={{paddingRight:"6px"}}><i class="fa fa-file-text-o" aria-hidden="true"></i></span>WHITE PAPER</p>
          </div>
          <div style={{paddingLeft: "20px"}}> 
          <p><span style={{paddingRight:"6px"}}><i class="fa fa-file-video-o" aria-hidden="true"></i></span>VIDEO</p>
          </div>
          <div style={{paddingLeft: "20px"}}>
          <p><span style={{paddingRight:"6px"}}><i class="fa fa-phone-square" aria-hidden="true"></i></span>CONTACT SALES</p>
          </div>
          <div style={{paddingLeft: "20px"}}>
          <p style={{color:"#03a9f4", fontWeight:"bold"}}><span style={{paddingRight:"6px", color:"#03a9f4"}}><i class="fa fa-envelope-o" aria-hidden="true"></i></span>SUPPORT</p>
          </div>
          <div style={{paddingLeft: "20px"}}>
          <p style={{color:"#03a9f4", fontWeight:"bold"}}><span style={{paddingRight:"6px", color:"#03a9f4"}}><i class="fa fa-arrow-right" aria-hidden="true"></i></span>DEMO NOW!</p>
          </div>
      </Row>
     
    </Col>
  </Row>
        </NavDropdown.Item>
        
      </DropdownButton>
      <DropdownButton
  alignRight
  title="OREM $ PARTNERS"
  id="dropdown-menu-align-right"
  style={{paddingRight:"10px", marginBottom:"10px"}}
  variant="light"
>
        <NavDropdown.Item>
        <Row>
    <Col md={12} lg={9} >
      <Row style={{width:"100%", display:"flex", justifyContent:"center"}}>
          <div style={{textAlign:"center"}}>
         <span style={{fontSize:"20px", color:"white"}} > <i class="fas fa-globe fa-2x"></i></span> 
          <p style={{textAlign:"center", marginTop:"20px"}}>SOLUTIONS FOR FRANCHISE DEALERS</p>
          </div>
      </Row>
      <NavDropdown.Divider />
      <Row>
      <Row style={{width:"100%", paddingTop:"10px"}}>
    <Col xs={12} md={4}>
    <div className="boxx" style={{textAlign:"center"}}>
             <div > <span style={{fontSize:"20px", color:"white"}} >  <i  class="fas fa-users   "></i></span></div> 
              <p   style={{ marginTop:"20px"}}>CRM</p>
              </div>
    </Col>
    <Col xs={12} md={4} >
    <div className="boxx">
             <span style={{fontSize:"20px", color:"white"}}  ><i class="fa fa-desktop " aria-hidden="true"></i></span> 
              <p  style={{ marginTop:"20px"}} >Websites</p>
              </div>
    </Col>
    <Col xs={12} md={4}>
    <div className="boxx">
    <span style={{fontSize:"20px", color:"white"}}  ><i class="fa fa-usd " aria-hidden="true"></i></span>
              <p  style={{ marginTop:"20px"}}>Sales/Marketing</p>
              </div>
    </Col>
  </Row>
 
          
      </Row>
    </Col>
    <Col md={12} lg={3}>
    <Row>
        <h4>Resources</h4>
    </Row>
    <NavDropdown.Divider />
      
      <Row STYLE={{textAlign:"center"}}>
          <div style={{paddingLeft: "20px"}}>
              <p><span style={{paddingRight:"6px"}}><i class="far fa-folder-open"></i></span>CASE STUDY</p>
          </div>
          <div style={{paddingLeft: "20px"}}>
          <p><span style={{paddingRight:"6px"}}><i class="fa fa-file-text-o" aria-hidden="true"></i></span>WHITE PAPER</p>
          </div>
          <div style={{paddingLeft: "20px"}}> 
          <p><span style={{paddingRight:"6px"}}><i class="fa fa-file-video-o" aria-hidden="true"></i></span>VIDEO</p>
          </div>
          <div style={{paddingLeft: "20px"}}>
          <p><span style={{paddingRight:"6px"}}><i class="fa fa-phone-square" aria-hidden="true"></i></span>CONTACT SALES</p>
          </div>
          <div style={{paddingLeft: "20px"}}>
          <p style={{color:"#03a9f4", fontWeight:"bold"}}><span style={{paddingRight:"6px", color:"#03a9f4"}}><i class="fa fa-envelope-o" aria-hidden="true"></i></span>SUPPORT</p>
          </div>
          <div style={{paddingLeft: "20px"}}>
          <p style={{color:"#03a9f4", fontWeight:"bold"}}><span style={{paddingRight:"6px", color:"#03a9f4"}}><i class="fa fa-arrow-right" aria-hidden="true"></i></span>DEMO NOW!</p>
          </div>
      </Row>
     
    </Col>
  </Row>
        </NavDropdown.Item>
        
      </DropdownButton>
      <Styles>
      <DropdownButton
  alignRight
  title="SOLUTIONS"
  id="dropdown-menu-align-right"
  style={{paddingRight:"10px", marginBottom:"10px"}}
  variant="light"
>
        <NavDropdown.Item href="#action/3.1"style={{display:"flex", height:"30px", alignItems:"center"}}>Action</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.2" style={{display:"flex", height:"30px", alignItems:"center"}}>Another action</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.3" style={{display:"flex", height:"30px", alignItems:"center"}}>Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.3" style={{display:"flex", height:"30px", alignItems:"center"}}>Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.3" style={{display:"flex", height:"30px", alignItems:"center"}}>Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.3" style={{display:"flex", height:"30px", alignItems:"center"}}>Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.3" style={{display:"flex", height:"30px", alignItems:"center"}}>Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.3" style={{display:"flex", height:"30px", alignItems:"center"}}>Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.3" style={{display:"flex", height:"30px", alignItems:"center"}}>Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.3" style={{display:"flex", height:"30px", alignItems:"center"}}>Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.3" style={{display:"flex", height:"30px", alignItems:"center"}}>Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.3" style={{display:"flex", height:"30px", alignItems:"center"}}>Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.3" style={{display:"flex", height:"30px", alignItems:"center"}}>Something</NavDropdown.Item>
        
        
      </DropdownButton>
      </Styles>
      <Styles>
      <DropdownButton
  alignRight
  title="COMPANY"
  id="dropdown-menu-align-right" 
  variant="light"
 
>
        <NavDropdown.Item href="#action/3.1" style={{display:"flex", height:"30px", alignItems:"center"}}><p  ><span style={{paddingRight:"0.5rem"}}><i class="fas fa-rss"></i></span>BLOG</p></NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.2" style={{display:"flex", height:"30px", alignItems:"center"}}><p><span style={{paddingRight:"0.5rem"}}><i class="fa fa-info" aria-hidden="true"></i></span>ABOUT</p></NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.3" style={{display:"flex", height:"30px", alignItems:"center"}}><p><span style={{paddingRight:"0.5rem"}}><i class="fa fa-flag" aria-hidden="true"></i></span>EVENTS</p></NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.3" style={{display:"flex", height:"30px", alignItems:"center"}}><p><span style={{paddingRight:"0.5rem"}}><i class="fa fa-newspaper-o" aria-hidden="true"></i></span>PRESS RELEASE</p></NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.3" style={{display:"flex", height:"30px", alignItems:"center"}}><p><span style={{paddingRight:"0.5rem"}}><i class="fa fa-suitcase" aria-hidden="true"></i></span>CAREERS</p></NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.3" style={{display:"flex", height:"30px", alignItems:"center"}}><p><span style={{paddingRight:"0.5rem"}}><i class="fas fa-user-friends"></i></span>TEAM</p></NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.3" style={{display:"flex", height:"30px", alignItems:"center"}}><p><span style={{paddingRight:"0.5rem"}}><i class="fas fa-phone-volume"></i></span>CONTACT US</p></NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.3" style={{display:"flex", height:"30px", alignItems:"center"}}><p style={{color:"#0288d1", fontWeight:"bold"}}><span style={{paddingRight:"0.5rem", color:"#0288d1"}}><i class="fa fa-envelope-o" aria-hidden="true"></i></span>SUPPORT</p></NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.3" style={{display:"flex", height:"30px", alignItems:"center"}}><p style={{color:"#0288d1", fontWeight:"bold"}}><span style={{paddingRight:"0.5rem",color:"#0288d1"}}><i class="fas fa-comment-dollar"></i></span>PAY MY BILL</p></NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.3" style={{display:"flex", height:"30px", alignItems:"center"}}><p style={{color:"#0288d1", fontWeight:"bold"}}><span style={{paddingRight:"0.5rem",color:"#0288d1"}}><i class="fa fa-arrow-right" aria-hidden="true"></i></span>DEMO NOW!</p></NavDropdown.Item>
        
        
        
      </DropdownButton>
      </Styles>
     
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
               </Row>
               <Row style={{paddingTop:"10px"}}><span style={{paddingLeft:"50px", color:"white"}}><i style={{paddingRight:"8px"}}class="fas fa-home"></i>Home</span></Row>
            </div>
            
            
        </div>
    )
}

