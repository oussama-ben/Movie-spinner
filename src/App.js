// App.js

import React, { Component } from 'react';

import MovieList from './MovieList';


const tab = [
  {
      id: 1,
      title: 'Batman',
      rating: 3,
      year: 2000,

        
  },
  {
    id: 2,
    title: 'Harry Potter',
    rating: 4,
    year: 2005,
  },

  {
    id: 1,
    title: 'Troie',
    rating: 5,
    year: 2010,
  }
];

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
    isloading: true,
    x : tab,
    }
  }
componentDidMount=()=> {
  setTimeout(() =>this.setState({isloading: false}), 3000)
}


  render() {
    return (
      <div>
        <MovieList  x={tab}  loading={this.state.isloading}
/>
      </div>
    )
  }
}

export default App;