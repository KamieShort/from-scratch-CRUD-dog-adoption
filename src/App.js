import { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './views/Home/Home';
import DogsDetails from './views/dogsDetails/dogsDetails';
import DogForm from './views/newForm/newForm';
import EditPage from './views/EditPage/EditPage';
import Header from './services/components/Header/Header';
import SignInAuth from './views/Auth/SignIn';
import SignUpAuth from './views/Auth/SignUp';
import { getUser } from './services/users';
import './App.css';

function App() {
  const [currentUser, setCurrentUser] = useState(getUser());
  return (
    <BrowserRouter>
      <Header currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/signInAuth">
            <SignInAuth setCurrentUser={setCurrentUser} />
          </Route>
          <Route exact path="/signUpAuth">
            <SignUpAuth setCurrentUser={setCurrentUser} />
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
