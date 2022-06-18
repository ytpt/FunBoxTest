
import './App.css';
import Cards from './components/Cards/Cards';
import Header from "./components/Header/Header";

function App() {
  return (
    <div className='container'>
      <div className='app_wrap'>
        <Header />
        <Cards />
      </div>
    </div>
  );
}

export default App;
