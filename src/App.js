import logo from './logo.svg';
import worldMap from './worldMap.png';
import './App.css';

function App() {
  return (
    <div>
            <body>
              <div class="floating-map-container">
                <img src={worldMap} alt="World Map" class="floating-map"/>
              </div>
            </body>
    </div>

  );
}

export default App;
