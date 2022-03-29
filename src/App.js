import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './views/Home/Home';
import DogsDetails from './views/dogsDetails/dogsDetails';
import NewForm from './views/newForm/newForm';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/dogs/:id">
            <DogsDetails />
          </Route>
          <Route exact path="/dogs/new">
            <NewForm />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
