import React from 'react';
import { Component } from 'react';


class MainComponent extends Component{
    constructor(){
        super()
        this.state={

        }
    }

    render(){
        return(
            <div className="main">
                <div className="headerandmainsection">
                <Header />
               <div className="bgvideodiv">
                    <video autoPlay loop muted className="bgvideo" src="/images/vid.mp4"></video>
               </div>

                <MainSection />
                </div>
                <Aboutus />
                <Sponsers />
                <Media />
                <Footer />
            </div>
        )
    }
}

function Header(){
    return(
        <div className="header">
        <div className="navbar mynavbar ">
           
            <div className="mynavitems  ">
                <div className="mylinks">
                    Roadmap
                </div>
                <div className="mylinks">
                    partners
                </div>
                <div className="navbarbrand">
                    <img src="/images/l.png" alt="" />
                </div>
                <div className="mylinks">
                    <a href="#sponser"> About us </a>
                </div>
                <div className="mylinks">
                    Contact 
                </div>
            </div>
        </div>
    </div>
    )
}


function MainSection(){
   return(
    <div className="main">
    <div className="welcomepart">
        Himalayan pheasant 2.0

    </div>
    <div className="maintext">
       Lorem ipsum dolor sit amet cons
    </div>
    <br />
    <div className="downarrow">
        <button><a href="#aboutus" className="downarrowbtn"> <i className="fa fa-arrow-down"></i> </a></button>
    </div>
    <br />
    <br />
    <br />
    <br />
    <br />
</div>
   )
}

function Aboutus(){
    return(
        <div id="aboutus">
           <div className="intro">
           Who we are..
           </div>
           <div className="image">
               <img src="/images/q.jpg" alt="" />
               <div className="imgdescp">
                   <h4 className="bold">Title</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, sit. Veritatis reiciendis minus quas nostrum quod, assumenda vitae! Vitae, sequi.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, sit. Veritatis reiciendis minus quas nostrum quod, assumenda vitae! Vitae, sequi.
                    </p>
               </div>
           </div>
        </div>
    )
}

function Sponsers(){
    return(
        <div id="sponser">
            <div className="sponsertitle">
                Our Sponsers
            </div>
            <div className="sponserscards">
               <SponsersCard />
               <SponsersCard />
               <SponsersCard />
               <SponsersCard />
            </div>
        </div>
    )
}
function SponsersCard(){
    return(
        <div className="sponserscard">
            <div className="">
                <img src="/images/q.jpg" alt="" />
            </div>
        </div>
    )
}

function Media(){
    return(
        <div id="sponser">
            <div className="mediatitle">
                Our Media
            </div>
            <div className="sponserscards">
               <MediaCard />
               <MediaCard />
               <MediaCard />
               <MediaCard />
            </div>
        </div>
    )
}
function MediaCard(){
    return(
        <div className="sponserscard">
            <div className="">
                <img src="/images/q.jpg" alt="" />
            </div>
        </div>
    )
}


function Footer(){
    return(
        <div id="footer">
           <div className="footerup">
            <div className="footertext">
                <h5>Something</h5>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam laboriosam perferendis aperiam error quis commodi architecto quibusdam a omnis officiis?
                </div>
                <div className="Socialicons">
                    <div className="socialicon">
                        <a href="/" className="facebook"> <i className="fa fa-facebook"></i> </a>
                    </div>
                    <div className="socialicon">
                        <a href="/" className="youtube"> <i className="fa fa-youtube"></i> </a>
                    </div>
                    <div className="socialicon">
                        <a href="/" className="google"> <i className="fa fa-google"></i> </a>
                    </div>
                    <div className="socialicon">
                        <a href="/" className="twitter"> <i className="fa fa-twitter"></i> </a>
                    </div>
                </div>
                <div className="terms-policy">
                    <a href="/">Terms and conditios</a>
                    <br />
                    <a href="/">Privacy Policy</a>
                </div>
           </div>
            <div className="copyright">
            Copyright @ 2021 . Robotics All rights reserved 
            <br />
            Designed and made by:
            <br />
            -Anjan Poudel
            <br />
            -Roshan K.C
            </div>
        </div>
    )
}

export default MainComponent;