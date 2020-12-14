import logo from './pearlogo3.png';
import './App.css';

function App() {
    
    const list = numOfProxies => {
        const arr = [];

        for (let i = 0; i < numOfProxies; i++) {
            arr.push(<li> proxy${i} </li>);
        }
        
        return arr;
    };
    
    return (
        <div className="App">
            {/* <div className="container">

            </div> */}
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />

                <a
                    className="App-link"
                    href="http://localhost:8080/yourWife"
                    rel="noopener noreferrer"
                >
                    MAKE MY FOOD
                </a>

                <ul>
                    {list(5)}
                </ul>

            </header>
        </div>
    );
}

export default App;
