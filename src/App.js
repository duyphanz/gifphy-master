import React, { Component } from 'react';
import SearchForm from './components/search-form/SearchForm'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        Home page
        <SearchForm />
      </div>
    );
  }
}

export default App;
