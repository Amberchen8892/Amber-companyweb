import React from 'react'
import{Row, Col} from 'react-bootstrap';
export default function Footer() {
    return (
        <div className="footer">
            <div id="content-desktop">
            <div>
            <Row>
    <Col xs={12} md={8} style={{padding:"60px 200px"}}>
        <Row  style={{borderBottom:"1px solid", borderBottomColor:"#e3f2fd"}}>
           <div> <h5 >Contact AmberChen</h5></div> 
        </Row>
        <Row  style={{borderBottom:"1px solid", borderBottomColor:"#e3f2fd", paddingTop:"30px", paddingBottom:"30px"}}>
           <div style={{paddingBottom:"20px"}}>
           <h5>Follow us on the web.</h5>
           <div style={{display:"flex", flexDirection:"row"}}>
              
               <div className="circle-a"><span  style={{fontSize:"20px", color:"#cfd8dc"}}><i class="fab fa-youtube"></i></span></div>
               <div className="circle"><a href="#"><span style={{fontSize:"20px", color:"#cfd8dc"}}><i class="fab fa-facebook-f"></i></span></a></div>
               <div className="circle-b"> <a href="#" ><span  style={{fontSize:"20px", color:"#cfd8dc"}}><i class="fab fa-google-plus-g"></i></span></a></div>
           </div>
           </div> 
           <div></div>

        </Row>
        <Row style={{display:"flex", flexDirection:"column", paddingTop:"30px"}}>
            <p><span style={{paddingRight:"10px", color:"#0277bd"}}><i class="fa fa-map-marker" aria-hidden="true"></i></span>14532 S Triathlon Way, Draper, UT-84020</p>
            <p><span  style={{paddingRight:"10px", color:"#0277bd"}}><i class="fa fa-mobile" aria-hidden="true"></i></span>(801)-918-9943</p>
            <p><span  style={{paddingRight:"10px", color:"#0277bd"}}><i class="far fa-envelope"></i></span>myphuong8892@gmail.com</p>
        </Row>
    </Col>
    <Col xs={12} md={4}></Col>
  </Row>
            </div>
            <div style={{width:"100%", backgroundColor:"white", height:"50px"}}>
               <div style={{textAlign:"center", paddingTop:"10px"}}>
               <p style={{color:"black"}}>© 2019 AmberChen. Attn: by using this website you agree to these <span style={{color:"#0288d1"}}>Terms and Conditions</span>. | <span  style={{color:"#0288d1"}}>Sitemap</span> | <span  style={{color:"#0288d1"}}>Privacy Policy</span></p></div> 
            </div>
            </div>
            
           <div id="content-mobile">
           <div>
            <Row>
    <Col  style={{padding:"50px 40px"}}>
        <Row  style={{borderBottom:"1px solid", borderBottomColor:"#e3f2fd"}}>
           <div> <h5 >Contact AmberChen</h5></div> 
        </Row>
        <Row  style={{borderBottom:"1px solid", borderBottomColor:"#e3f2fd", paddingTop:"30px", paddingBottom:"30px"}}>
           <div style={{paddingBottom:"20px"}}>
           <h5>Follow us on the web.</h5>
           <div style={{display:"flex", flexDirection:"row"}}>
              
               <div className="circle-a"><span  style={{fontSize:"20px", color:"#cfd8dc"}}><i class="fab fa-youtube"></i></span></div>
               <div className="circle"><a href="#"><span style={{fontSize:"20px", color:"#cfd8dc"}}><i class="fab fa-facebook-f"></i></span></a></div>
               <div className="circle-b"> <a href="#" ><span  style={{fontSize:"20px", color:"#cfd8dc"}}><i class="fab fa-google-plus-g"></i></span></a></div>
           </div>
           </div> 
           <div></div>

        </Row>
        <Row style={{display:"flex", flexDirection:"column", paddingTop:"30px"}}>
            <p><span style={{paddingRight:"10px", color:"#0277bd"}}><i class="fa fa-map-marker" aria-hidden="true"></i></span>14532 S Triathlon Way, Draper, UT-84020</p>
            <p><span  style={{paddingRight:"10px", color:"#0277bd"}}><i class="fa fa-mobile" aria-hidden="true"></i></span>(801)-918-9943</p>
            <p><span  style={{paddingRight:"10px", color:"#0277bd"}}><i class="far fa-envelope"></i></span>myphuong8892@gmail.com</p>
        </Row>
    </Col>
    
  </Row>
            </div>
            <div style={{width:"100%", backgroundColor:"white", height:"50px"}}>
               <div style={{textAlign:"center", paddingTop:"10px"}}>
               <p style={{color:"black"}}>© 2019 AmberChen. Attn: by using this website you agree to these <span style={{color:"#0288d1"}}>Terms and Conditions</span>. | <span  style={{color:"#0288d1"}}>Sitemap</span> | <span  style={{color:"#0288d1"}}>Privacy Policy</span></p></div> 
            </div>
               
               </div> 
        </div>
    )
}

