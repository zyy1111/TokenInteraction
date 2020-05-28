import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route} from 'react-router-dom';
import Header from './common/header';
import Home from './pages/home'
import Hello from './pages/hello';
import Hotpotato from './pages/hotpotato';
import Petcare from './pages/petcare';
import store from './store/index';

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Provider store = {store}>
          <BrowserRouter>
            <Header/>
              <div>
                <Route path='/' exact component={Home}></Route>
                <Route path='/hello' exact component={Hello}></Route>
                <Route path='/hotpotato' exact component={Hotpotato}></Route>
                <Route path='/petcare' exact component={Petcare}></Route>
              </div>
          </BrowserRouter>
        </Provider>
      </Fragment>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));