import React from 'react';
import 'antd/dist/antd.css';
import styles from './App.less';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Components/Home'
import Nav from './Components/Nav';
import SignUp from './Components/Authentication/SignUp/SignUp';

console.log(styles)
function App() {
  console.log(styles)
  return (
    <div className={styles.App}>
      <Router>
        <Nav className={styles.navLayout} />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/signup' component={SignUp} />

        </Switch>

      </Router>
    </div>
  );
}

export default App;
