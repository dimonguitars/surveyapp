import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import * as actions from "../actions";


import SurveyNew from "./surveys/surveyNew";
import Header from "./Header";
import DashBoard from "./Dashboard";
import { connect } from "react-redux";
import Landing from "./Landing";
import Footer from './Footer';


class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      [
        <body>
          <main className='container'>
            <BrowserRouter>
              <div>
                <Header  />
                <Route exact path="/" component={Landing} />
                <Route exact path="/surveys" component={DashBoard} />
                <Route path="/surveys/new" component={SurveyNew} />
              </div>
            </BrowserRouter>
          </main>
          <footer className='container'>
            <Footer />
          </footer>
        </body>
      ]
    );
  }
}


export default connect(null, actions)(App);
