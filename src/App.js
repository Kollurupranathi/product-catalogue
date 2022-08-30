import logo from './logo.svg';

import './App.css';
import Data from "./data.json";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function App() {
  return (
    <div className="App">
      <div className="products">
        {Data.map(prod =>{
          return(
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" width = "150" height = "150" src={ prod.Image } />
            <Card.Body>
              <Card.Title><>
                <h4>{ prod.product }</h4>
              
              </></Card.Title>
              <Button variant="primary" >click on</Button>
            </Card.Body>
          </Card>
            
          )
        })}
      </div>
     <p>"HEllo world"</p> 
    </div>
    
    
  );
}

export default App;




// {/* <header className="App-header">
//     //     <img src={logo} className="App-logo" alt="logo" />
//     //     <p>
//     //       Edit <code>src/App.js</code> and save to reload.
//     //     </p>
//     //     <a */}
//     //       className="App-link"
//     //       href="https://reactjs.org"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       Learn React
//     //     </a>
//     //   </header>