import 'bootstrap/dist/js/bootstrap.bundle'
import './custom_bootstrap.scss'
import './bootstrap_replacer.css'
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import NavX from './components/Nav-x'
import Main from './pages/main'
import Content from './pages/content'

function App() {
  return (
    <div className="App">
      <div style={{margin: '0 5vw'}}>
        <BrowserRouter>
          <NavX/>
          <Switch>
            <Route path="/contents/:topicId">
              <Content/>
            </Route>
            <Route>
              <Main/>
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;