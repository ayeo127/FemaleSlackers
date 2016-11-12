import React from 'react';
// import 'react-toolbox/lib/commons.scss';           // Import common styles
import PurpleAppBar from './AppBar/AppBar.jsx';      // AppBar with simple overrides
import SuccessButton from './Button/SuccessButton.jsx';    // A button with complex overrides
import { Button } from 'react-toolbox/lib/button'; // Bundled component import
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

<div className={myStyle.find_container}>
  <div>
    <p>Search your thing.</p>
  </div>

  <form>
    <input type="text" name ="name" />
    <input type ="submit" value="meow"/>
  </form>

  <p> Recommended users to contact</p>

  <p> Recommended Slack Group to join</p>
</div>




  </section>







  <section className="mdl-layout__tab-panel" id="scroll-tab-2">
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




export default App;
