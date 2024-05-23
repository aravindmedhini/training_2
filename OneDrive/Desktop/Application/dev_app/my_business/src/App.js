import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SingnIn from './sign_up_in/SingnIn';
import Signup from './sign_up_in/Signup';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route path="/signin" Component={SingnIn}/>
            <Route path="/signup" Component={Signup}/>
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;




