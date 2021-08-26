import './App.css';
import Name from './components/Name';
import About from './components/About';

function App() {
  return (
    <div className="App">    
      <section></section>
        <div className="hero-background spacer">
            <Name />
        </div>  
        <div className="peaks-background spacer-2"></div>
      <section></section> 
      <div className="content">
        <div className="about-section">  
          <About />
        </div>
        <div className="divider"></div>
        <div className="project-section">

        </div>
      </div>
    </div>
  );
}

export default App;
