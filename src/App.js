import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './views/Home/Home';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
      ;
    </BrowserRouter>
  );
}

export default App;
