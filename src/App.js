import React, { Suspense } from "react";
import "./App.css";
import "./assets/fonts/fonts.css";
import "./assets/colors/colors.css";
import { Route, withRouter } from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import LoginPage from "./components/Login/Login";
import { Component } from "react";
import { connect } from "react-redux";
import { initializeApp } from "./Redux/appReducer";
import { compose } from "redux";
import Preloader from "./components/common/preloader/preloader";
import { withSuspense } from "./hoc/withSuspense";

const DialogsContainer = React.lazy(() =>
  import("./components/Dialogs/DialogsContainer")
);

const UsersContainer = React.lazy(() =>
  import("./components/Users/UsersContainer")
);

const News = React.lazy(() => import("./components/News/News"));

const Music = React.lazy(() => import("./components/Music/Music"));

const Settings = React.lazy(() => import("./components/Settings/Settings"));

class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }

    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path="/dialogs" render={withSuspense(DialogsContainer)} />
          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
          <Route path="/users" render={withSuspense(UsersContainer)} />
          <Route path="/news" render={withSuspense(News)} />
          <Route path="/music" render={withSuspense(Music)} />
          <Route path="/settings" render={withSuspense(Settings)} />
          <Route path="/login" render={() => <LoginPage />} />
        </div>
      </div> 
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);
