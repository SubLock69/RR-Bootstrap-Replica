import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import TopBar from './components/TopBar';
import Mid from './components/Mid';
import Stores from './components/Stores';

function App() {
  return (
    <div className="App">
      <TopBar />
      <Mid />
      <Stores />
    </div>
  );
}

export default App;
