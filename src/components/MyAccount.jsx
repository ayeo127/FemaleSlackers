import React from 'react';
import myStyle from './styleSheet.css'

export default class MyAccount extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let fullName = this.props.myAccountData.firstName + " "
    + this.props.myAccountData.lastName;
    return (
      <div className="page-content">
        <div className={myStyle.account_container}>
          <h2  className={myStyle.account_info_name}> {fullName} </h2>
            <ul className={myStyle.account_info_list}>

              <li>Occupation: {this.props.myAccountData.headline}</li>
              <li>Skills: </li>
              <li>Slack joined:</li>
              <li>Contact: </li>
            </ul>
        </div>
      </div>
    );
  }

}
