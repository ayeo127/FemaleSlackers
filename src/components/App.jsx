import React from 'react';
import PurpleAppBar from './AppBar/AppBar.jsx';      // AppBar with simple overrides
import myStyle from './styleSheet.css'
import RecommendedConnections from './RecommendedConnections.jsx';
import RecommendedSlack from './RecommendedSlack.jsx';
import MyAccount from './MyAccount.jsx';

class App extends React.Component {
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
        <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <header className="mdl-layout__header">
        <div className="mdl-layout__header-row">
          <span className="mdl-layout-title">Female Accelerators </span>
        </div>

        <div className="mdl-layout__tab-bar mdl-js-ripple-effect">
          <a href="#scroll-tab-1" className="mdl-layout__tab is-active">Find</a>
          <a href="#scroll-tab-2" className="mdl-layout__tab">Your account</a>
        </div>
        </header>
        <div className="mdl-layout__drawer">
          <span className="mdl-layout-title">Title</span>
        </div>
          <main className="mdl-layout__content">
          <section className="mdl-layout__tab-panel is-active" id="scroll-tab-1">
          <div className={myStyle.find_container}>
          <div>
            <p>Search your thing.</p>
          </div>

          <form>
            <input type="text" name ="name" />
            <input type ="submit" value="meow"/>
          </form>

          <RecommendedConnections />
          <RecommendedSlack/>
        </div>

        </section>
        <section className="mdl-layout__tab-panel" id="scroll-tab-2">
          <MyAccount />
        </section>
        </main>
        </div>
      );
    }

}
export default App;
