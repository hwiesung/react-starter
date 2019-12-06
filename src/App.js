import React from 'react';
import Routes from './Routes';

import {inject, observer} from "mobx-react";

@inject("appStore") @observer
class App extends React.Component {

  componentDidMount() {
    this.props.appStore.init();

  }

  render() {
    console.log(this.props.appStore.accessToken);
    return (
        <Routes/>
    );
  }
}

export default App;
