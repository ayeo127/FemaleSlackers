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
              <li>Location: {this.props.myAccountData.location_name}</li>
              <li>Occupation: {this.props.myAccountData.headline}</li>
              <li>Specialties: {this.props.myAccountData.specialties}</li>
              <li>Career Goals: {this.props.myAccountData.careergoals}</li>
              <li>Community Joined: {this.props.myAccountData.industry_groups}</li>
            </ul>
        </div>
      </div>
    );
  }

}
