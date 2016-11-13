import React from 'react';
import PurpleAppBar from './AppBar/AppBar.jsx';      // AppBar with simple overrides
import myStyle from './styleSheet.css'


const App = () => (


  <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
<header className="mdl-layout__header">
  <div className="mdl-layout__header-row">

    <span className="mdl-layout-title">Female Accelerators </span>
  </div>

  <div className="mdl-layout__tab-bar mdl-js-ripple-effect">
    <a href="#scroll-tab-1" className="mdl-layout__tab is-active">Find</a>
    <a href="#scroll-tab-2" className="mdl-layout__tab">Your account</a>
    {/* <a href="#scroll-tab-3" className="mdl-layout__tab">Tab 3</a>
    <a href="#scroll-tab-4" className="mdl-layout__tab">Tab 4</a>
    <a href="#scroll-tab-5" className="mdl-layout__tab">Tab 5</a>
    <a href="#scroll-tab-6" className="mdl-layout__tab">Tab 6</a> */}
  </div>
</header>
<div className="mdl-layout__drawer">
  <span className="mdl-layout-title">Title</span>
</div>
<main className="mdl-layout__content">



  <section className="mdl-layout__tab-panel is-active" id="scroll-tab-1">

{/*recommended user   */}
    <div className="mdl-tabs__panel">
      <h2 className="mdl-layout-title" style={divStyle}> Name of what</h2>
        <ul className={myStyle.monkey}>
          <li>Occupation:</li>
          <li>Skills: </li>
          <li>Slack joined:</li>
          <li>Contact: </li>
        </ul>

    </div>

  </section>







  <section className="mdl-layout__tab-panel" id="scroll-tab-2">
    <div className="page-content">Your account info</div>
  </section>
  {/* <section className="mdl-layout__tab-panel" id="scroll-tab-3">
    <div className="page-content"></div>
  </section>
  <section className="mdl-layout__tab-panel" id="scroll-tab-4">
    <div className="page-content"></div>
  </section>
  <section className="mdl-layout__tab-panel" id="scroll-tab-5">
    <div className="page-content"></div>
  </section> */}

</main>
</div>
);

const divStyle = {
  color: 'blue'

}


export default App;
