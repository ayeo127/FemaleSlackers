import React from 'react';
import PurpleAppBar from './AppBar/AppBar.jsx';      // AppBar with simple overrides
import myStyle from './styleSheet.css'
import RecommendedConnections from './RecommendedConnections.jsx';
import RecommendedSlack from './RecommendedSlack.jsx';
import MyAccount from './MyAccount.jsx';

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        myAccount: {
          "firstName": "Frodo",
          "headline": "Tech Lead from Google",
          "id": "1R2RtA",
          "lastName": "Baggins",
          "siteStandardProfileRequest": {
          "url": "https://www.linkedin.com/profile/view?id=…"
          }
        },

        myRecommendations: [{name: 'Julia', occupation:'software engineer', company: 'Amazon'},
      {name: "Mary", occupation:'recruiter', company: 'Apple'},
      {name: "Ellen", occupation: '', company:'IBM'}]
      }
    }

    _clickMe() {
      alert('hello');
    }

    componentDidMount(){
    }

    render(){
      return (
        <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header  mdl-layout--fixed-tabs">
        <header className="mdl-layout__header">
        <div className="mdl-layout__header-row">
          <span className="mdl-layout-title">Female Accelerators </span>
            <div className="mdl-layout-spacer"></div>
            <span className="mdl-textfield--align-right"><i className="material-icons">perm_identity</i></span>
        </div>

        <div className="mdl-layout__tab-bar mdl-js-ripple-effect">
          <a href="#fixed-tab-1" className="mdl-layout__tab is-active">Join a Community</a>
          <a href="#fixed-tab-2" className="mdl-layout__tab">My LinkUp</a>
        </div>
        </header>
        <div className="mdl-layout__drawer">
          <span className="mdl-layout-title">Title</span>
        </div>
          <main className="mdl-layout__content">
          <section className="mdl-layout__tab-panel is-active" id="fixed-tab-1">
          <div className={myStyle.find_container}>

              <div className="mdl-textfield mdl-js-textfield mdl-textfield--expandable
                  mdl-textfield--floating-label mdl-textfield--align-right">
                  <label className="mdl-button mdl-js-button mdl-button--icon"
                         htmlFor="search">
                      <i className="material-icons">search</i>
                  </label>
                  <div className={myStyle.searchInput}>
                      <input className="mdl-textfield__input" type="text" name="sample"
                             id="search" placeholder="Matching based on Computer Science Student, Javascript, Java, .."/>
                  </div>
              </div>

          <RecommendedConnections myRecommendationsData = {this.state.myRecommendations}/>
          <RecommendedSlack />

        </div>

        </section>
        <section className="mdl-layout__tab-panel" id="fixed-tab-2">
          <MyAccount myAccountData={this.state.myAccount}/>
        </section>
        </main>
        </div>
      );
    }

}
export default App;
