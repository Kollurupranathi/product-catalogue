import './App.css';
import Data from "./data.json";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useState} from 'react';
import {Container, Row, Col, Form} from 'react-bootstrap';
function App() {
  const [state, setState] = useState("");
  return (
    <Container>
      <Row className="pt-5">
      <Col ><em><h2><span style={{color:"#f96d00"}}><strong>G</strong></span><span style={{color:"#155263"}}>roceri</span><span style={{color:"#f96d00"}}><strong>E</strong></span><span style={{color:"#155263"}}>ASE</span></h2><span><h6>shop with ease...</h6></span></em></Col>    

          <Col sm={12} md={6} lg={4} xl={3} className="ms-auto">
            <Form.Control type="search"  onChange={(e)=>{setState(e.target.value)}} placeholder='Search here...'/>
          </Col>    
      </Row>
      <Row>
        {Data.filter(item=> item.product.toLowerCase().includes(state)).map(prod =>{
          return(
          <Col sm={12} md={6} lg={4} xl={3} className="p-2">
            <Card style={{ width: '15rem' }}>
            <Card.Img variant="top"  height = "150" src={ prod.Image } />
            <Card.Body>
              <Card.Title><>
                <h4>{ prod.product }</h4>
                <h6>{ prod.Quantity } </h6>
                <h6>{ prod.Price }</h6>
              </></Card.Title>
              <Button variant="primary" >Add to cart</Button>
            </Card.Body>
          </Card>
          </Col>
          )
        })}
      </Row>
    </Container>
    
    
  );
}

export default App;



//ABCD
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