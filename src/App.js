import React, { Component } from "react";
import "./scss/base.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

import CMSPage from "./containers/CMSPage";

import PageData from "./mock-data/page";

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="kruu">
          <Header />
          <div className="kruu__content">
            <CMSPage {...PageData} />
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
