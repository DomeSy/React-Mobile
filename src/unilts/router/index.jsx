import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { HashRouter as Router, Route } from 'react-keeper';


class Index extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount =  async () => {
    const { routes } = this.props;

  }


  render(){
    const { routes } = this.props;

    // console.log(,'11')
    return (
      <>
        <Router>
          <>
            {
              routes.map((item, index) => (
                <Route
                  exact
                  index={item.index ? true: false}
                  path={item.path}
                  component={item.component}
                  key={index}/>
              ))
            }
          </>
        </Router>
      </>
    )
  }
}

export default Index
