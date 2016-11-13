import React from 'react';
import myStyle from './styleSheet.css'
import reactable from 'reactable'

class RecommendedConnections extends React.Component {
    constructor(props) {
      super(props);
    }

    _clickMe() {
      alert('hello');
    }

    componentDidMount(){
    }


    createChart() {
       let myJSON =  this.props.myRecommendationsData
       let columnLength = myJSON.length
      var Table = Reactable.Table;

        return (

          <Table className="table" data={[
              { Name: 'Griffin Smith', Age: 18 },
              { Age: 23,  Name: 'Lee Salminen' },
              { Age: 28, Position: 'Developer' },
            ]} />

              )
          }


    render(){
      var Table = Reactable.Table;
      return (
        <div>
          <p>Recommended users to contact</p>
          {this.createChart()}


          <button onClick={this._clickMe}>Test</button>
        </div>
      );
    }
}

export default RecommendedConnections;
