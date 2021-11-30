import { Button } from 'reactstrap';
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
                <Header />
                <MainSection />
                <Aboutus />
                <Sponsers />
                <Footer />
            </div>
        )
    }
}

function Header(){
    return(
        <div className="header">
        <div className="navbar mynavbar">
            <div className="navbarbrand">
                HIMALAYAN
            </div>
            <div className="mynavitems  ">
                <div className="mylinks">
                    Home
                </div>
                <div className="mylinks">
                    About us
                </div>
                
                <div className="mylinks">
                    <a href="#sponser"> Sponsers </a>
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
        Welcome to our Robosite !

    </div>
    <div className="maintext">
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur itaque facere doloribus, facilis veniam iste beatae, autem accusantium repellat asperiores, harum voluptates ducimus velit illum totam alias officia.

    </div>
    <Button className="mainbtn btn btn-success">click here</Button>
    <br />
    <div className="downarrow">
        <a href="#aboutus" className="downarrowbtn"> <i className="fa fa-arrow-down"></i> </a>
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
            <div className="simage">
                <img src="/images/q.jpg" alt="" />
            </div>
            <div className="stext">
            <div className="">
                <span className="s-sname">
                        Full Name
                    </span>
                    <br />
                    <span className="sdescp">
                        Description and position
                    </span>
            </div>
                <div className="goicon">
                <a href="/sponsers">
                <i className="fa fa-arrow-circle-right"></i>
                </a>
                </div>
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
            </div>
        </div>
    )
}

export default MainComponent;