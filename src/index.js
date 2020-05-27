import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route} from 'react-router-dom';
import Header from './common/header';
import Home from './pages/home'
import Car from './pages/car';
import Hotpotato from './pages/hotpotato';
import Petcare from './pages/petcare';

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <Header/>
            <div>
              <Route path='/' exact component={Home}></Route>
              <Route path='/car' exact component={Car}></Route>
              <Route path='/hotpotato' exact component={Hotpotato}></Route>
              <Route path='/petcare' exact component={Petcare}></Route>
            </div>
        </BrowserRouter>
      </Fragment>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));