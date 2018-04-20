import React, { Component } from 'react';

import { TodoList } from './components';
import tasks from './example-payload.json';


const MainHeader = ({children}) => (
  <header>
    <h1 className="avenir f-subheadline i fw3 tc light-pink mh0 mv3">
      {children}
    </h1>
  </header>
);


class App extends Component {
  render() {
    return (
      <div className="vh-100">
        <div className="center pt5 pt6-l mw6">
          <MainHeader>Wonderlist</MainHeader>
          <TodoList tasks={tasks} />
        </div>
      </div>
    );
  }
}


export default App;
