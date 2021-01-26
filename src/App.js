// import logo from './logo.svg';
// import './App.css';
import Articles from './components/Articles';
import User from './components/User';

function App() {
  return (
    <div className="App">
     <header>
       <h1>React Skelton</h1>
     </header>
     <div className="content">
       <Articles />
       <User />
     </div>
    </div>
  );
}

export default App;
