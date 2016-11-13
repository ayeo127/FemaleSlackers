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


    _createTable() {
       let myJSON =  this.props.myRecommendationsData
      // let columnLength = myJSON.length
       let Table = Reactable.Table;
       let Tr = Reactable.Tr;

        //   <Table className="table">
         //
        //     myJSON.map(function(row, i) {
        //       return (<Tr data={row} key={i}/>);
        //     })
        //  </Table>

         let rows = [];
         for (let i=0; i < myJSON.length; i++) {
              rows.push(<Tr data={myJSON[i]} onClick={this._clickMe} />);
          }
        return (<Table className="table"> {rows}</Table>);

    }


    render(){
      var Table = Reactable.Table;
      return (
        <div>
          <p>Recommended users to contact</p>
          {this._createTable()}


          <button onClick={this._clickMe}>Test</button>
        </div>
      );
    }
}

export default RecommendedConnections;
