import React, {useState} from "react";

import {useHistory} from 'react-router-dom';
import { Link } from 'react-router-dom';
import './landingPage.css'
import emailjs from 'emailjs-com'
import noble from '../../assets/elbon.png'
import prices from '../../assets/weddingPrices.png'
import image1 from '../../assets/weddings/photo1.png'
import image2 from '../../assets/weddings/photo2.png'
import image3 from '../../assets/weddings/photo3.png'
import image4 from '../../assets/weddings/photo7.png'
import image5 from '../../assets/weddings/photo8.png'
import image6 from '../../assets/weddings/photo11.png'
import image7 from '../../assets/weddings/photo9.png'
import im1 from '../../assets/events/photo1.png'
import im2 from '../../assets/events/photo2.png'
import im3 from '../../assets/events/photo3.png'
import im4 from '../../assets/events/photo4.png'
import im5 from '../../assets/events/photo5.png'
import im6 from '../../assets/events/photo6.png'
import im7 from '../../assets/events/photo7.png'




const LandingPage = () => {
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('gmail', 'tempplate_xvrrwgo', e.target, 'user_eewBVUxJGRF8Mz17zhGFN')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      }

  return (
    <div className="container">
        <div className="title" >   
            <img src={noble} height="100px" margin="10px" width="300px" alt="Logo" />
            <h1>Weddings</h1>
        </div>
       
        <div className="col landingPage  align-self-center">
            <div className="video-responsive">
                <iframe
                width="100%"
                height="500"
                src={`https://www.youtube.com/embed/xomfMX402cs`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
                />
            </div>
            <div className="wedding container">
                
                <div className="weddingCollect row">
                    <div className="image col-4"
                    style={{backgroundImage:'url('+image1+')'
                        }}
                    />
                    <div className="image col-4"
                    style={{backgroundImage:'url('+image7+')'
                        }}
                    />
                    <div className="image col-4"
                    style={{backgroundImage:'url('+image3+')'
                        }}
                    />
                    <div className="image col-4"
                    style={{backgroundImage:'url('+image4+')'
                        }}
                    />
                    <div className="image col-4"
                    style={{backgroundImage:'url('+image5+')'
                        }}
                    />
                    <div className="image col-4"
                    style={{backgroundImage:'url('+image6+')'
                        }}
                    />
                </div>
                    
                    
            </div>
            <div className="row">
                    <div className="col-12 pt-5 info-title">
                    <h1>Wedding Consultation Request Form</h1>
                    </div>
                </div>
            <div className="login">
                
                <form className="contact-form" onSubmit={sendEmail}>
                    <div className="row pt-5 mx-auto">
                        <div className="col-6 info">
                            <img src={prices} height="600px" margin="5px" width="500px" alt="Logo" />
                        </div>
                        <div className="form-form col-6 ">
                            <div className="col-12 form-group mx-auto">
                                <input type="text" className="form-control" placeholder="Name" name="name"/>
                            </div>
                            <div className="col-12 form-group pt-2 mx-auto">
                                <input type="email" className="form-control" placeholder="Email Address" name="email"/>
                            </div>
                            <div className="col-12 form-group pt-2 mx-auto">
                                <input type="text" className="form-control" placeholder="Subject" name="subject"/>
                            </div>
                            <div className="col-12 form-group pt-2 mx-auto">
                                <textarea className="form-control" id="" cols="30" rows="8" placeholder="Tell me about your wedding" name="message"></textarea>
                            </div>
                            <div className="col-12 pt-3 mx-auto">
                                <input type="submit" className="btn btn-info" value="Send Message"></input>
                            </div>
                        </div>
                </div>
                </form>
            </div>
        
        </div>
        <div className="title" >   
            <img src={noble} height="100px" margin="5px" width="300px" alt="Logo" />
            <h1>Events</h1>
        </div>
       
        <div className="col landingPage  align-self-center">
            <div className="video-responsive">
                <iframe
                width="100%"
                height="500"
                src={`https://www.youtube.com/embed/SMTmEOmJC_M`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
                />
            </div>
            <div className="wedding container">
                
                <div className="weddingCollect row">
                    <div className="image col-4"
                    style={{backgroundImage:'url('+im1+')'
                        }}
                    />
                    <div className="image col-4"
                    style={{backgroundImage:'url('+im2+')'
                        }}
                    />
                    <div className="image col-4"
                    style={{backgroundImage:'url('+im3+')'
                        }}
                    />
                    <div className="image col-4"
                    style={{backgroundImage:'url('+im4+')'
                        }}
                    />
                    <div className="image col-4"
                    style={{backgroundImage:'url('+im7+')'
                        }}
                    />
                    <div className="image col-4"
                    style={{backgroundImage:'url('+im6+')'
                        }}
                    />
                </div>
                    
                    
            </div>
            <div className="row">
                    <div className="col-12 pt-5 info-title">
                    <h1>Events Consultation Request Form </h1>
                    </div>
                </div>
            <div className="login">
                
                <form className="contact-form" onSubmit={sendEmail}>
                    <div className="row pt-5 mx-auto">
                        <div className="col-6 info">
                            <h1>information here</h1> 
                        </div>
                        <div className="form-form col-6">
                            <div className="col-12 form-group mx-auto">
                                <input type="text" className="form-control" placeholder="Name" name="name"/>
                            </div>
                            <div className="col-12 form-group pt-2 mx-auto">
                                <input type="email" className="form-control" placeholder="Email Address" name="email"/>
                            </div>
                            <div className="col-12 form-group pt-2 mx-auto">
                                <input type="text" className="form-control" placeholder="Subject" name="subject"/>
                            </div>
                            <div className="col-12 form-group pt-2 mx-auto">
                                <textarea className="form-control" id="" cols="30" rows="8" placeholder="Details about your event" name="message"></textarea>
                            </div>
                            <div className="col-12 pt-3 mx-auto">
                                <input type="submit" className="btn btn-info" value="Send Message"></input>
                            </div>
                        </div>
                </div>
                </form>
            </div>
        
        </div>
    </div>
  )
}

export default LandingPage


