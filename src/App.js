import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './views/Home/Home';
import DogsDetails from './views/dogsDetails/dogsDetails';
import DogForm from './views/newForm/newForm';
import EditPage from './views/EditPage/EditPage';
import Header from './services/components/Header/Header';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/dogs/new">
            <DogForm />
          </Route>
          <Route exact path="/dogs/:id/edit">
            <EditPage />
          </Route>
          <Route exact path="/dogs/:id">
            <DogsDetails />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
