import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import InitialPage from './pages/initialPage';
import { Provider } from 'react-redux';
import store from './store/store';


function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<InitialPage/>} />
        </Routes>
      </Router>
    </div>
    </Provider>
  );
}

export default App;
