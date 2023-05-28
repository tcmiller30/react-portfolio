import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div>
        <Header />
      </div>
        <main className='container'>
          <h2>Test</h2>
        </main>
        <div>
          <Footer />
        </div>
    </div>
  );
}

export default App;
