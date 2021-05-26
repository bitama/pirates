
import './App.css';
import { Router } from '@reach/router'
import Main from './views/Main'
import New from './views/New'
import Detail from './views/Detail'

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/"/>
        <New path="/new"/>
        <Detail path="/pirate/:id"/>
      </Router>
    </div>
  );
}

export default App;
