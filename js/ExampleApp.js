import React, { Component } from 'react';

import Graph from './graph';

class ExampleApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: optional_data,
      i: 0
    };
  }

  componentDidMount() {
    setTimeout( () => {
      let newData = this.state.data;
      newData.nodes.push({
        id: 3,
        name: 'hola',
        category: 'dog'
      });
      let newI = this.state.i + 1;
      this.setState({ data: newData });
    }, 3000);
  }

  render() {
    return <Graph data={this.state.data} stage={this.state.i} />;
  }
};

export default ExampleApp;

const optional_data = { 
  nodes: [
    { 
      id: 1,
      name: 'hello',
      category: 'dog'
    },
    {
      id: 2,
      name: 'world',
      category: 'cat'
    }
  ],
  edges: [
    {
      source: 1,
      target: 2
    }
  ]
};
