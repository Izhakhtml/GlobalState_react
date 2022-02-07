import logo from './logo.svg';
import './App.css';
import Massages from './components/massage/Massage.component';
function App() {
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <Massages/>
    </div>
  );
}

export default App;
