import React from 'react';
import myStyle from './styleSheet.css'

export default class RecommendedSlack extends React.Component {
  constructor(props) {
    super(props);
  }

  _createCards() {
    let data = this.props.slacksData;
    let cards = [];
    for (let i = 0; i < data.length; i++) {
      cards.push(
          <div className="mdl-cell mdl-cell--4-col">

            <div className="demo-card-square mdl-card mdl-shadow--2dp">

              <div className="mdl-card__title mdl-card--expand">
                <h2 className="mdl-card__title-text">{data[i].name}</h2>
              </div>
              <div className="mdl-card__supporting-text">
                <span>Users {data[i].users} |  </span>
                <span>Rating {data[i].ratings}</span>
              </div>

              <div className="mdl-card__supporting-text">
                {data[i].description}
              </div>

              <div className="mdl-card__actions mdl-card--border">
                <a href={data[i].url} target='_blank' className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                  JOIN
                </a>
              </div>
            </div>
        </div>
      )
    }

    return (cards);
  };

  render() {

    return (
      <div className="mdl-grid">
        <div className="mdl-cell mdl-cell--12-col">Slack Communities</div>
        {this._createCards()}
      </div>
    )
  };
}
