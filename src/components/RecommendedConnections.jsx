import React from 'react';
import myStyle from './styleSheet.css'
import reactable from 'reactable'

const Table = Reactable.Table;
const Tr = Reactable.Tr;

class RecommendedConnections extends React.Component {
    constructor(props) {
        super(props);
    }

    _clickMe() {
        alert('hello');
    }

    componentDidMount() {
    }

    _createTable() {
        let data = this.props.myRecommendationsData;
        let rows = [];
        for (let i = 0; i < data.length; i++) {
            rows.push(<Tr data={data[i]} onClick={this._clickMe} key={i}/>);
        }
        return (<Table className="mdl-data-table mdl-js-data-table">{rows}</Table>);
    }

    render() {
        return (
        <div className="mdl-grid">
            <div className="mdl-cell mdl-cell--12-col">Who can help you?</div>
            {this._createTable()}
        </div>
        );
    }
}

export default RecommendedConnections;
