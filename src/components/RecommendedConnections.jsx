import React from 'react';
import myStyle from './styleSheet.css'

class RecommendedConnections extends React.Component {
    constructor(props) {
      super(props);
    }

    _clickMe() {
      alert('hello');
    }

    componentDidMount(){
    }

    render(){
      return (
        <div>
          <p>Recommended users to contact</p>
          <button onClick={this._clickMe}>Test</button>
        </div>
      );
    }
}

export default RecommendedConnections;
