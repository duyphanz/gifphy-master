import React, { Component } from 'react';
import SearchForm from './components/search-form/SearchForm.container'
import './App.css';
import SearchResults from './components/search-results/SearchResults.container';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">

        <SearchForm />
        <SearchResults />
      </div>
    );
  }
}

export default App;
