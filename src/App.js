import React from "react";
import "./App.css";
import "./assets/fonts/fonts.css";
import "./assets/colors/colors.css";
import { Route, withRouter, Switch, Redirect } from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import LoginPage from "./components/Login/Login";
import { Component } from "react";
import { connect } from "react-redux";
import { initializeApp, passErrorData } from "./Redux/appReducer";
import { compose } from "redux";
import Preloader from "./components/common/preloader/preloader";
import { withSuspense } from "./hoc/withSuspense";
import AlertWindow from "./components/common/alert/AlertWindow";

const DialogsContainer = React.lazy(() =>
  import("./components/Dialogs/DialogsContainer")
);

const UsersContainer = React.lazy(() =>
  import("./components/Users/UsersContainer")
);

const NewsContainer = React.lazy(() => import("./components/News/News"));

const MusicContainer = React.lazy(() => import("./components/Music/Music"));

const SettingsContainer = React.lazy(() =>
  import("./components/Settings/Settings")
);

class App extends Component {
  catchAllUnhandledErrors = (promiseRejectionEvent) => {
    this.props.passErrorData(promiseRejectionEvent);
  };

  componentDidMount() {
    this.props.initializeApp();
    window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
  }

  componentWillUnmount() {
    window.removeEventListener(
      "unhandledrejection",
      this.catchAllUnhandledErrors
    );
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }

    return (
      <div className="app-wrapper" id="appWrapper">
        <HeaderContainer />
        <Navbar />
        {this.props.errorData ? (
          <AlertWindow
            errormessage={this.props.errorData.reason}
            passErrorData={this.props.passErrorData}
          />
        ) : (
          ""
        )}
        <div className="app-wrapper-content">
          <Switch>
            <Route exact path="/" render={() => <Redirect to={"/profile"} />} />
            <Route path="/dialogs" render={withSuspense(DialogsContainer)} />
            <Route
              path="/profile/:userId?"
              render={() => <ProfileContainer />}
            />
            <Route path="/users" render={withSuspense(UsersContainer)} />
            <Route path="/news" render={withSuspense(NewsContainer)} />
            <Route path="/music" render={withSuspense(MusicContainer)} />
            <Route path="/settings" render={withSuspense(SettingsContainer)} />
            <Route path="/login" render={() => <LoginPage />} />
            <Route path="*" render={() => <div>404 NOT FOUND</div>} />
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
  errorData: state.app.errorData,
});

export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp, passErrorData })
)(App);
