import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import InitialPage from './pages/initialPage';
import PageTwo from './pages/page2';
import { Provider } from 'react-redux';
import store from './store/store';


function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<InitialPage/>} />
          <Route path="/two" element={<PageTwo/>} />
        </Routes>
      </Router>
    </div>
    </Provider>
  );
}

export default App;
