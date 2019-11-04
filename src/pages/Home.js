import React from 'react';
import{Carousel, Button, Row, Col} from 'react-bootstrap';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";

export default function Home() {
    return (
      <div>
        <div id="desktop">
        <div style={{width:"100%", height:"100%", marginTop:"50px"}}>
            <header>
           <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="../images/carsbackground2.jpg"
      alt="First slide"
      style={{height:"500px"}}
    />
    <Carousel.Caption>
      <h2 class="animated bounceInUp" style={{color:"#0288d1", fontSize:"50px"}}>100 MILION VEHICLES SOLD</h2>
      <p class="animated bounceInUp delay-1s">MORE THAN 93 MILION CARS SOLD</p>
      <p class="animated bounceInUp delay-1s">THROUGH OUR CRM</p>
      <p class="animated bounceInUp delay-1s">AND 7 MILION THROUGH OUR DMS SOFTWARE</p>
     <div class="animated bounceInUp delays-3s"><Button  variant="info">READ THE PRESS RELEASE <span style={{color:"white"}}><i class="fas fa-arrow-right"></i></span></Button></div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="../images/shuryl.gif"
      alt="Third slide"
      style={{height:"500px"}}
    />

    <Carousel.Caption>
     <div class="animated bounceInUp delay-1s" style={{border:"1px solid", borderColor:"black", backgroundColor:"black", width:"550px", textAlign:"center"}}><h2 style={{color:"#0288d1", fontSize:"40px", fontWeight:"bold"}}>CONNECT AND EMPOWER</h2></div> 
     <div class="animated bounceInUp delay-2s" style={{border:"1px solid", borderColor:"black", backgroundColor:"black", width:"400px", textAlign:"center", marginTop:"10px"}}><h3 style={{color:"#f44336", fontsixe:"40px", fontWeight:"bold"}}>YOUR ENTIRE TEAM</h3></div> 
      <div class="animated bounceInUp delay-3s"><p style={{color:"black", fontSize:"30px"}}>In stead of garbage out, garbage in,</p></div>
     <div class="animated bounceInUp delay-3s" > <p style={{color:"black", marginTop:"-20px", fontSize:"30px"}}> how's abour good data in, easy wins out?</p></div>
      <div class="animated bounceInUp delay-4s"><Button variant="info">Watch Now <span style={{color:"white"}}><i class="fas fa-arrow-right"></i></span></Button></div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="../images/waa2background.jpg"
      alt="Third slide"
      style={{height:"500px"}}
    />

    <Carousel.Caption>
     <div class="animated bounceInUp " style={{borderBottom:"1px solid", borderColor:"#cfd8dc", width:"450px"}}> <h2 style={{fontSize:"40px", fontWeight:"bold"}}>WE ARE <span style={{fontSize:"40px", fontWeight:"bold", color:"#0288d1"}}>AUTOMOTIVE </span></h2></div>
     <div  class="animated bounceInUp delay-1s" style={{marginTop:"20px"}}> <p>Exclusive up-to-date market statitics,</p></div>
     <div  class="animated bounceInUp delay-1s"> <p>you can't get anywhere else</p></div>
     <div class="animated bounceInUp delay-2s"><Button variant="info">Watch Now <span style={{color:"white"}}><i class="fas fa-arrow-right"></i></span></Button></div>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</header>
<section>
    <div style={{paddingLeft:"30px", paddingRight:"50px", textAlign:"center", marginTop:"30px", marginBottom:"50px"}}>
        <h2>MISSION/ VISION STATEMENT</h2>
        <p>To Drive the Future of Automotive by Simplifying the Experience for our Customers and Partners with a Suite of Seamlessly Integrated Products</p>
    </div>
</section>
<section className="boxes" style={{maxWidth:"100%", height:"auto", position:"relative"}}>
<div class="box" style={{backgroundColor:"red !important"}} >
<div className="circle-c" style={{textAlign:"center"}}><i class="far fa-chart-bar"></i></div>
<p style={{marginTop:"20px", fontSize:"40px"}}>MARKETING</p>
<div style={{borderBottom:"1px solid", borderColor:"#eceff1"}}><h6 style={{fontWeight:"bold"}}>GAIN STRATEGIC INSIGHT WORTH PROMOTING</h6></div>
<p style={{marginTop:"20px"}}>With our simple-to-use communication tools, you can establish strong, impactful, and efficient campaigns that are integrated through all your marketing channels.</p>
<Button variant="outline-dark">Learn More <span><i class="fas fa-angle-double-right"></i></span></Button>
</div>
<div class="box">
<i class="fa fa-money" aria-hidden="true"></i>
<p style={{marginTop:"20px", fontSize:"40px"}}>MARKETING</p>
<div style={{borderBottom:"1px solid", borderColor:"#eceff1"}}><h6 style={{fontWeight:"bold"}}>GAIN STRATEGIC INSIGHT WORTH PROMOTING</h6></div>
<p style={{marginTop:"20px"}}>With our simple-to-use communication tools, you can establish strong, impactful, and efficient campaigns that are integrated through all your marketing channels.</p>
<Button variant="outline-dark">Learn More <span><i class="fas fa-angle-double-right"></i></span></Button>
</div>
<div class="box">
<i class="fas fa-tools"></i>
<p style={{marginTop:"20px", fontSize:"40px"}}>MARKETING</p>
<div style={{borderBottom:"1px solid", borderColor:"#eceff1"}}><h6 style={{fontWeight:"bold"}}>GAIN STRATEGIC INSIGHT WORTH PROMOTING</h6></div>
<p style={{marginTop:"20px"}}>With our simple-to-use communication tools, you can establish strong, impactful, and efficient campaigns that are integrated through all your marketing channels.</p>
<Button variant="outline-dark">Learn More <span><i class="fas fa-angle-double-right"></i></span></Button>
</div>
<div class="box">
<i class="far fa-user-circle"></i>
<p style={{marginTop:"20px", fontSize:"40px"}}>MARKETING</p>
<div style={{borderBottom:"1px solid", borderColor:"#eceff1"}}><h6 style={{fontWeight:"bold"}}>GAIN STRATEGIC INSIGHT WORTH PROMOTING</h6></div>
<p style={{marginTop:"20px"}}>With our simple-to-use communication tools, you can establish strong, impactful, and efficient campaigns that are integrated through all your marketing channels.</p>
<Button variant="outline-dark">Learn More <span><i class="fas fa-angle-double-right"></i></span></Button>
</div>
<div class="box">
<i class="fas fa-hand-holding-usd"></i>
<p style={{marginTop:"20px", fontSize:"40px"}}>MARKETING</p>
<div style={{borderBottom:"1px solid", borderColor:"#eceff1"}}><h6 style={{fontWeight:"bold"}}>GAIN STRATEGIC INSIGHT WORTH PROMOTING</h6></div>
<p style={{marginTop:"20px"}}>With our simple-to-use communication tools, you can establish strong, impactful, and efficient campaigns that are integrated through all your marketing channels.</p>
<Button variant="outline-dark">Learn More <span><i class="fas fa-angle-double-right"></i></span></Button>
</div>
<div class="box">
<i class="far fa-gem"></i>
<p style={{marginTop:"20px", fontSize:"40px"}}>MARKETING</p>
<div style={{borderBottom:"1px solid", borderColor:"#eceff1"}}><h6 style={{fontWeight:"bold"}}>GAIN STRATEGIC INSIGHT WORTH PROMOTING</h6></div>
<p style={{marginTop:"20px"}}>With our simple-to-use communication tools, you can establish strong, impactful, and efficient campaigns that are integrated through all your marketing channels.</p>
<Button variant="outline-dark">Learn More <span><i class="fas fa-angle-double-right"></i></span></Button>
</div>

</section>
<section>
    <div style={{width:"100%", height:"400px", backgroundColor:"black", textAlign:"center",justifyContent:"center", display:"flex", flexDirection:"column", alignItems:"center"}}>
        <h2 style={{fontSize:"40px", color:"#0091ea"}}>AMBER RESOURCES</h2>
        <h4 style={{fontSize:"20px", color:"white"}}>Case studies, white papers, infographics, press releases, articles, and more</h4>
        <p style={{fontSize:"16px", color:"#0091ea"}}>Access best practices and expert advice to improve your dealership</p>
        <Button variant="info"><span><i class="far fa-copy"></i></span>Load Resoucres</Button>
    </div>
</section>
<section >
<div id="carouselExampleSlidesOnly" className="carousel slide home-carousel" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" data-interval="1000">
            <div style={{textAlign:"center", display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
            <div style={{borderBottom:"1px solid", borderBottomColor:"#eceff1",paddingTop:"50px", width:"400px"}}> <Progress  type="circle" percent={20}  
   style={{marginBottom:"30px", color:"red"}} /></div>    
            <p style={{marginTop:"20px", fontSize:"30px", color:"white"}}>Increase online sale by more than 20%</p>
            </div>
          </div>
          <div className="carousel-item" data-interval="1000">
              
          <div style={{textAlign:"center", display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
            <div style={{borderBottom:"1px solid", borderBottomColor:"#eceff1",paddingTop:"50px", width:"400px"}}> <Progress  type="circle" percent={15}  
   style={{marginBottom:"30px", color:"red"}} /></div>    
            <p style={{marginTop:"20px", fontSize:"30px", color:"white"}}>Increase web lead volume by 15%</p>
            </div>
          </div>
          <div className="carousel-item" data-interval="1000">
          <div style={{textAlign:"center", display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
            <div style={{borderBottom:"1px solid", borderBottomColor:"#eceff1",paddingTop:"50px", width:"400px"}}> <Progress  type="circle" percent={35}  
   style={{marginBottom:"30px", color:"red"}} /></div>    
            <p style={{marginTop:"20px", fontSize:"30px", color:"white"}}>Turn vehicles 35% faster</p>
            </div>
          </div>
        </div>
      </div>
</section>

        </div>
        </div>
        <div id="mobile">
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="../images/carsbackground2.jpg"
      alt="First slide"
      style={{height:"500px"}}
    />
    <Carousel.Caption>
      <h2 class="animated bounceInUp" style={{color:"#0288d1", fontSize:"30px"}}>100 MILION VEHICLES SOLD</h2>
      <p class="animated bounceInUp delay-1s">MORE THAN 93 MILION CARS SOLD</p>
      <p class="animated bounceInUp delay-1s">THROUGH OUR CRM</p>
      <p class="animated bounceInUp delay-1s">AND 7 MILION THROUGH OUR DMS SOFTWARE</p>
     <div class="animated bounceInUp delays-3s"><Button  variant="info">READ THE PRESS RELEASE <span style={{color:"white"}}><i class="fas fa-arrow-right"></i></span></Button></div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="../images/shuryl.gif"
      alt="Third slide"
      style={{height:"500px"}}
    />

    <Carousel.Caption style={{marginTop:"50px"}}>
     <div class="animated bounceInUp delay-1s" style={{backgroundColor:"transparent", width:"250px", textAlign:"center"}}><h2 style={{color:"#0288d1", fontSize:"20px", fontWeight:"bold"}}>CONNECT AND EMPOWER</h2></div> 
     <div class="animated bounceInUp delay-2s" style={{ backgroundColor:"transparent", width:"250px", textAlign:"center", marginTop:"10px"}}><h3 style={{color:"#f44336", fontsixe:"20px", fontWeight:"bold"}}>YOUR ENTIRE TEAM</h3></div> 
      <div class="animated bounceInUp delay-3s"><p style={{color:"black", fontSize:"20px"}}>In stead of garbage out, garbage in,</p></div>
     <div class="animated bounceInUp delay-3s" > <p style={{color:"black", marginTop:"-20px", fontSize:"20px"}}> how's abour good data in, easy wins out?</p></div>
      <div class="animated bounceInUp delay-4s"><Button variant="info">Watch Now <span style={{color:"white"}}><i class="fas fa-arrow-right"></i></span></Button></div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="../images/waa2background.jpg"
      alt="Third slide"
      style={{height:"500px"}}
    />

    <Carousel.Caption>
     <div class="animated bounceInUp " style={{borderBottom:"1px solid", borderColor:"#cfd8dc", width:"400px"}}> <h2 style={{fontSize:"30px", fontWeight:"bold"}}>WE ARE <span style={{fontSize:"30px", fontWeight:"bold", color:"#0288d1"}}>AUTOMOTIVE </span></h2></div>
     <div  class="animated bounceInUp delay-1s" style={{marginTop:"20px"}}> <p>Exclusive up-to-date market statitics,</p></div>
     <div  class="animated bounceInUp delay-1s"> <p>you can't get anywhere else</p></div>
     <div class="animated bounceInUp delay-2s"><Button variant="info">Watch Now <span style={{color:"white"}}><i class="fas fa-arrow-right"></i></span></Button></div>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
<div>
<div style={{paddingLeft:"30px", paddingRight:"50px", textAlign:"center", marginTop:"30px", marginBottom:"50px"}}>
        <h2>MISSION/ VISION STATEMENT</h2>
        <p>To Drive the Future of Automotive by Simplifying the Experience for our Customers and Partners with a Suite of Seamlessly Integrated Products</p>
    </div>
</div>
<div>
<Row>
    <Col xs={12} md={4} style={{textAlign:"center", padding:"40px"}}>
    <div className="circle-c" style={{textAlign:"center"}}><i class="far fa-chart-bar"></i></div>
<p style={{marginTop:"10px", fontSize:"30px"}}>MARKETING</p>
<div style={{borderBottom:"1px solid", borderColor:"#eceff1"}}><h6 style={{fontWeight:"bold"}}>GAIN STRATEGIC INSIGHT WORTH PROMOTING</h6></div>
<p style={{marginTop:"20px"}}>With our simple-to-use communication tools, you can establish strong, impactful, and efficient campaigns that are integrated through all your marketing channels.</p>
<Button variant="outline-dark">Learn More <span><i class="fas fa-angle-double-right"></i></span></Button>
    </Col>
    <Col xs={12} md={4} style={{textAlign:"center", padding:"40px"}}>
    <i class="fa fa-money" aria-hidden="true"></i>
<p style={{marginTop:"20px", fontSize:"30px"}}>MARKETING</p>
<div style={{borderBottom:"1px solid", borderColor:"#eceff1"}}><h6 style={{fontWeight:"bold"}}>GAIN STRATEGIC INSIGHT WORTH PROMOTING</h6></div>
<p style={{marginTop:"20px"}}>With our simple-to-use communication tools, you can establish strong, impactful, and efficient campaigns that are integrated through all your marketing channels.</p>
<Button variant="outline-dark">Learn More <span><i class="fas fa-angle-double-right"></i></span></Button>
    </Col>
    <Col xs={12} md={4} style={{textAlign:"center", padding:"40px"}}>
    <i class="fas fa-tools"></i>
<p style={{marginTop:"20px", fontSize:"30px"}}>MARKETING</p>
<div style={{borderBottom:"1px solid", borderColor:"#eceff1"}}><h6 style={{fontWeight:"bold"}}>GAIN STRATEGIC INSIGHT WORTH PROMOTING</h6></div>
<p style={{marginTop:"20px"}}>With our simple-to-use communication tools, you can establish strong, impactful, and efficient campaigns that are integrated through all your marketing channels.</p>
<Button variant="outline-dark">Learn More <span><i class="fas fa-angle-double-right"></i></span></Button>
    </Col>
  </Row>

<Row>
    <Col xs={12} md={4} style={{textAlign:"center", padding:"40px"}}>
    <i class="far fa-user-circle"></i>
<p style={{marginTop:"20px", fontSize:"40px"}}>MARKETING</p>
<div style={{borderBottom:"1px solid", borderColor:"#eceff1"}}><h6 style={{fontWeight:"bold"}}>GAIN STRATEGIC INSIGHT WORTH PROMOTING</h6></div>
<p style={{marginTop:"20px"}}>With our simple-to-use communication tools, you can establish strong, impactful, and efficient campaigns that are integrated through all your marketing channels.</p>
<Button variant="outline-dark">Learn More <span><i class="fas fa-angle-double-right"></i></span></Button>
    </Col>
    <Col xs={12} md={4} style={{textAlign:"center", padding:"40px"}}>
    <i class="fas fa-hand-holding-usd"></i>
<p style={{marginTop:"20px", fontSize:"40px"}}>MARKETING</p>
<div style={{borderBottom:"1px solid", borderColor:"#eceff1"}}><h6 style={{fontWeight:"bold"}}>GAIN STRATEGIC INSIGHT WORTH PROMOTING</h6></div>
<p style={{marginTop:"20px"}}>With our simple-to-use communication tools, you can establish strong, impactful, and efficient campaigns that are integrated through all your marketing channels.</p>
<Button variant="outline-dark">Learn More <span><i class="fas fa-angle-double-right"></i></span></Button>
    </Col>
    <Col xs={12} md={4} style={{textAlign:"center", padding:"40px"}}>
    <i class="far fa-gem"></i>
<p style={{marginTop:"20px", fontSize:"40px"}}>MARKETING</p>
<div style={{borderBottom:"1px solid", borderColor:"#eceff1"}}><h6 style={{fontWeight:"bold"}}>GAIN STRATEGIC INSIGHT WORTH PROMOTING</h6></div>
<p style={{marginTop:"20px"}}>With our simple-to-use communication tools, you can establish strong, impactful, and efficient campaigns that are integrated through all your marketing channels.</p>
<Button variant="outline-dark">Learn More <span><i class="fas fa-angle-double-right"></i></span></Button>
    </Col>
  </Row>


</div>


        </div>
        </div>
    )
}
