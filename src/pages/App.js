import React, { PureComponent } from 'react';
import Main from '../components/main/Main';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import logo from '../imges/mango_Logo.jpg';
import logo2 from '../imges/logo2.svg';
import searchIcon from '../imges/search_icon.jpg';


class App extends PureComponent {
  render() {
    return (
      <>
        <Header logo={logo} searchIcon={searchIcon} />
        <Main />
        <Footer logo2={logo2} />
      </>
    );
  }
}

export default App;
