import './Global.css';
import {BrowserRouter, Route} from 'react-router-dom'
import { HomePage } from './Pages/Home';
import { Header } from './Components/Header';
import { GamePage } from './Pages/Game';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/">
          <Header />
          <HomePage />
        </Route>
        <Route exact path="/game/:id">
          <Header />
          <GamePage />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
