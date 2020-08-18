import React, { Component } from "react";
import "./App.css";
import Renovation from "./Renovation Hunter Logo.png";
import fam from "./fam.png";
import learn from "./elearn.png";
import plan from "./Planner.PNG";
import quiz from "./quiz.PNG";
import weather from "./weather.PNG";
const slides  = [
  {
    title: 'React Portfolio',
    subtitle: 'By Kendrick Jean'
  },
  {
    header: 'Project 3',
    text: [
      'Famished: App that serves as an intermediary between restaurants and food lovers!',
      'Due to COVID-19 my group and I thought this app was especially vital',
      <img src={fam} alt= "image1" height="120" width="300"></img>,
      <a href={'https://projectt3.herokuapp.com/'}>Click to View</a>
    ]
  },
  {
    header: 'Project 2',
    text: [
      'Renovation Hunter: App that allows the user to connect with contractors to complete any job of their choice.  ',
      'Second time collaborating with others!',
      <img src={Renovation} alt= "image2" height="120" width="300"></img>,
      <a href={'http://kaylieverner.github.io/Renovation-Hunter'}>Click to View</a>
    ]
  },
  {
    header: 'Project 1',
    text: [
      'e-learner: Learning tool that allows users to view lesson plans on various subjects.',
      'First time collaborating with others for one project!',
      <img src={learn} alt= "image3" height="120" width="300"></img>,
      <a href={'http://shivani261979.github.io/Project_1'}>Click to View</a>
    ]
  },
  {
    header: 'Weather Forecast',
    text: [
      'Simple weather dashboard. Still some bugs to work out with the icons.',
      <img src={weather} alt= "image4" height="120" width="300"></img>,
      <a href={'https://kendrick-dot.github.io/Weather2/'}>Click to View</a>
    ]
  },
  {
    header: 'Daily Planner',
    text: [
      'Simple daily planner. Bootcamp activities came in handy while building this.',
      <img src={plan} alt= "image4" height="120" width="300"></img>,
      <a href={'https://kendrick-dot.github.io/Schedule/'}>Click to View</a>
    ]
  },
  {
    header: 'Quiz Time!',
    text: [
      'Small scale timed quiz about coding.',
      'Not very comprehensive as far as the questions/information is concerned but the functionality is great',
      <img src={quiz} alt= "image5" height="120" width="300"></img>,
      <a href={'https://kendrick-dot.github.io/Quiz/'}>Click to View</a>
    ]
  },
  {
    header: 'Contact Links!',
    code: [
      <a href="https://github.com/Kendrick-dot"> My Github</a> ,
      <a href="https://www.linkedin.com/in/kendrick-jean-0a26194b/">LinkedIn</a>,
      <a href="mailto:k3n.jean@gmail.com">email</a>
    ]
  },

];

// slideshow CompositionEvent, render the elements
const Slideshow = (props) => {

  let title = props.slide.title;
  let subtitle = props.slide.subtitle;
  let header = props.slide.header;
  let text = props.slide.text;
  let code = props.slide.code;

  return(
    <div className="Slideshow">
      {
        title &&
        <h1>{ title }</h1>
      }

      {
        subtitle &&
        <h3>{ subtitle }</h3>
      }
      {
        header &&
        <h2>{ header }</h2>
      }
      {
        text &&
        text.map((text, index) => <p key={index}>{text}</p>)
      }
      {
        code &&
        code.map((code, index) => <code key={index}>{code}</code>)
      }
    </div>
  );
  
}



const Controls = (props) => {

  return(
    <div className="Controls">
      <button onClick={props.prevSlide} />
      <button onClick={props.nextSlide} />
    </div>
  );

}


// in a stateful component render the components responsible for the application and manage its state
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      slide: 0
    };
    this.prevSlide = this.prevSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
    this.handleStroke = this.handleStroke.bind(this);
  } 


  componentDidMount() {
    window.addEventListener("keydown", this.handleStroke);
  }

  //function which updates the state if the key pressed matches one of the chosen one
  handleStroke(e) {
    let keyCode = e.keyCode;
    if(keyCode === 37) {
      this.prevSlide();
    }
    else if (keyCode === 39) {
      this.nextSlide();
    }
  }
  prevSlide() {
    let slide = this.state.slide;
    if(slide > 0) {
      this.setState({
        slide: slide - 1
      });
    }
  }
  nextSlide() {
    let slide = this.state.slide;
    if(slide < slides.length - 1) {
      this.setState({
        slide: slide + 1
      });
    }
  }
  render() {
    return (
      <div className="App">
        <Slideshow slide={slides[this.state.slide]}/>
        <Controls prevSlide={this.prevSlide} nextSlide={this.nextSlide}/>
      </div>
    );
  }
}

export default App;