import './App.css';
import { MsgProvider } from './context/Massage-context.component';
import Header from './components/parts/header/Header.component';
import Footer from './components/parts/footer/Footer.component';
import Home from './components/home/Home.component';
function App() {
  return (
    <div className="App">
      <Header/>
      <Footer/>
        <MsgProvider>
            <Home/>       
        </MsgProvider>
    </div>
  );
}

export default App;
