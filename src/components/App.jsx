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

            myRecommendations: [
                {
                    name: 'Julia', occupation: 'Senior Software Engineer', company: 'Amazon',
                    profile: 'I have 5 years of working experience in the cloud industry. Looking to connect people with tech fields.',
                    groups: 'Babel.js'
                },
                {
                    name: "Mary", occupation: 'Product Manager', company: 'Apple',
                    profile: 'Interested in sharing knowledge in product design.',
                    groups: 'AngelHack'
                },
                {
                    name: "Ellen", occupation: 'Tech Lead', company: 'IBM',
                    profile: 'Engaged and connect young entrepreneurs.',
                    groups: 'Startup Chat'
                }],

            RecommendatedSlacks: [
                {
                    name: 'Startup Chat', users: '4000+', ratings: 'hot',
                    description: 'The global startup community, on Slack. Engage with over 3000 founders and investors ' +
                    'from across the globe. #startup facilitates discussions, Q&A’s, AMA’s, feedback and braintrusts.',
                    url: 'http://startupfoundation.co/hashtag_startup/'
                },
                {
                    name: 'AngelHack', users: '2700+', ratings: 'hot',
                    description: 'AngelHack ignites the passion of the world’s most vibrant community of code creators + ' +
                    'change makers to invent the new and make change happen, together. Our hackathons ' +
                    'maximize the fun you can have while changing world.',
                    url: 'https://angelhack.slack.com'
                },
                {
                    name: 'Babel.js', users: '2300+', ratings: 'hot',
                    description: 'A general discussion and support forum for Babel.js users. ' +
                    'Babel.js is a ECMAScript 6-to-ECMAScript 5 compiler that lets you write ES6 features into your JavaScript code, ' +
                    'even if some features aren\'t supported yet by browsers..',
                    url: 'https://slack.babeljs.io/'
                }
            ]
        }
    }

    _clickMe() {
        alert('hello');
    }

    componentDidMount() {
    }

    render() {
        return (
            <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header mdl-layout--fixed-tabs">
                <header className="mdl-layout__header">
                    <div className="mdl-layout__header-row">
                        <span className="mdl-layout-title">LinkUp</span>
                        <div className="mdl-layout-spacer"></div>
            <span className="mdl-textfield--align-right">
                <i className="material-icons">perm_identity</i>
                <span>SIGN IN</span>
            </span>
                    </div>

                    <div className="mdl-layout__tab-bar mdl-js-ripple-effect">
                        <a href="#fixed-tab-1" className="mdl-layout__tab is-active">Join a Community</a>
                        <a href="#fixed-tab-2" className="mdl-layout__tab">My LinkUp</a>
                    </div>
                </header>
                <main className="mdl-layout__content">
                    <section className="mdl-layout__tab-panel is-active" id="fixed-tab-1">
                        <div className={myStyle.searchContainer}>

                            <div className={myStyle.slogan}>LinkUp puts your interest first and connects you to the
                                right communities.
                            </div>

                            <div className="mdl-textfield mdl-js-textfield mdl-textfield--expandable
                          mdl-textfield--floating-label mdl-textfield--align-right">
                                <label className="mdl-button mdl-js-button mdl-button--icon"
                                       htmlFor="search">
                                    <i className="material-icons">search</i>
                                </label>
                                <div className={myStyle.searchInput}>
                                    <input className="mdl-textfield__input" type="text" name="interests"
                                           id="search" placeholder="Interested in programming, startup, etc..."/>
                                </div>
                            </div>
                        </div>
                        <div className={myStyle.recommendations}>
                            <RecommendedConnections myRecommendationsData={this.state.myRecommendations}/>
                            <RecommendedSlack slacksData={this.state.RecommendatedSlacks}/>
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
