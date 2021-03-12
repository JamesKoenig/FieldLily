import React from 'react';

class Resources extends React.Component {
  componentDidMount() {
    this.props.fetchResources();
  }
  render() {
    //todo: map through this.props.resources & render them
    return (
      <p>hello world!</p>
    )
  }
}

export default Resources;
