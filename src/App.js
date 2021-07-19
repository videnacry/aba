import 'bootstrap/dist/js/bootstrap.bundle'
import './custom_bootstrap.scss'
import './App.css';
import NavX from './components/Nav-x'
import Main from './pages/main'

function App() {
  return (
    <div className="App">
      <div style={{margin: '0 5vw'}}>
        <NavX/>
        <Main/>
      </div>
    </div>
  );
}

export default App;