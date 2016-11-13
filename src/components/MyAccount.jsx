import React from 'react';
import myStyle from './styleSheet.css'

export default class MyAccount extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="page-content">
        <div className={myStyle.account_container}>
          <h2  className={myStyle.account_info_name}> Your name: </h2>
            <ul className={myStyle.account_info_list}>
              <li>Occupation:</li>
              <li>Skills: </li>
              <li>Slack joined:</li>
              <li>Contact: </li>
            </ul>
        </div>
      </div>
    );
  }

}
