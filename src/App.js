import React, { Component } from 'react';
import './App.css';
import Background from './images/CuriousLandingPage.png';
import newBackground from './images/Bitmoji.png';
// import RadialMenu from 'react-radial-menu';
// window.jQuery = window.$ = require("jquery");
// window.React = React;

class App extends Component {
  constructor() {
    super()
    this.state = {
      backgroundImage: `url(${Background})`,
      backgroundSize: '350px 350px',
      isVisible: false
    }

    this.handleClick = this.handleClick.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
    // this.socialClick = this.socialClick.bind(this);
    // this.animateIcons = this.animateIcons.bind(this);

  }

  handleClick(e){
    e.preventDefault(); 
    if(this.state.backgroundImage === `url(${Background})`)
      this.setState({backgroundImage: `url(${newBackground})`,
                     backgroundSize: '400px 350px'})
  }

  // socialClick(e){
  //   e.preventDefault();
  // }

  toggleMenu(){
    console.log(this.refs);
    // console.log(this.state.backgroundImage);
    // console.log(this.state.isVisible === false);
    if(this.state.backgroundImage === `url(/static/media/Bitmoji.c9a777c5.png)` && this.state.isVisible === false)
      console.log(this.state.backgroundImage);
      this.setState({isVisible: !this.state.isVisible})
  }

  // animateIcons(){
  //   const items = this.refs.social;
  //   console.log('this is refs for social', this.refs.social);
  //   for(var i = 0, l = items.length; i < l; i++) {
  //     console.log('hey you');
  //     items[i].style.left = (50 - 35*Math.cos(-0.5 * Math.PI - 2*(1/l)*i*Math.PI)).toFixed(4) + "%";
      
  //     items[i].style.top = (50 + 35*Math.sin(-0.5 * Math.PI - 2*(1/l)*i*Math.PI)).toFixed(4) + "%";
  //   }
  // }

  render() {
    const divStyle = {
      backgroundImage: this.state.backgroundImage,
      backgroundSize: this.state.backgroundSize
    }

    return (
      <div className="Container">
        <div className="App" id="Main" style={divStyle} onClick={this.handleClick}>
    
          <nav className="circular-menu" ref="circular-menu">
            <div className={!this.state.isVisible
                             ? "circle"
                             : "open"} 
              ref="circle">

              <a target="_blank" rel="noopener noreferrer" href="https://mail.google.com/mail/?view=cm&fs=1&to=candacerogers114@gmail.com"><img id="gmail" alt= 'gmail' width={200} height={150} src={require("./images/Gmail-BW.png")}/></a>
              <a target="_blank" rel="noopener noreferrer" href={`https://www.linkedin.com/in/candacerogue/`} ref="linked"><img alt= 'linked' width={65} height={65} src={require("./images/LinkedIn.png")}/></a>
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/candacerogue" ref="github"><img alt= 'github' width={50} height={50} src={require("./images/GitHub.png")}/></a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/candacerogue/" ref="ig"><img alt= 'ig' width={40} height={40} src={require("./images/Instagram.png")}/></a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/iamcandacerogue" ref="facebook"><img alt= 'facebook' width={30} height={40} src={require("./images/Facebook.png")}/></a>
              <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/candacerogue" ref="twitter"><img alt= 'twitter' width={30} height={30} src={require("./images/Twitter.png")}/></a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/candacerogue" ref="social" onClick={this.handleClick}><img alt= 'youtube' width={30} height={30} src={require("./images/YouTuber.png")}/></a>

            </div>
          </nav>

        </div>
        <button className="menu-button fa fa-bars fa-2x" 
            onClick={()=> {
              // console.log('Im here');
              this.toggleMenu(); 
              // this.animateIcons();
            }}>
        </button>
      </div>
    );
  }

}

export default App;

