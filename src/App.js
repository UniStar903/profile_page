import logo from './logo.svg';
import React, {Component} from 'react';
import TopNav from './TopBar/TopNav';
import About from './About/About';
import Bottom from './BtmNav/Bottom';
import ContactUs from './ContactUs/ContactUs';
import classes from './App.module.css';

class App extends Component {
  render(){
  return (
  <div className={classes.app}>
      <TopNav/>        
        <About/>
        <ContactUs/>
    <Bottom/>
  </div>
  );
};
}

export default App;
